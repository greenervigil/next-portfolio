import { NextRequest, NextResponse } from "next/server"
import { ZodError } from "zod"
import { contactFormSchema } from "@/lib/validations"
import { checkForSpam } from "@/lib/spam-detection"
import { sendContactEmail } from "@/lib/emailjs"

// In-memory rate limiting store (for production, use Redis or similar)
interface RateLimitEntry {
  count: number
  resetTime: number
}

const rateLimitStore = new Map<string, RateLimitEntry>()

// Clean up old entries every 10 minutes
setInterval(() => {
  const now = Date.now()
  for (const [key, entry] of rateLimitStore.entries()) {
    if (now > entry.resetTime) {
      rateLimitStore.delete(key)
    }
  }
}, 600000) // 10 minutes

function getClientIP(request: NextRequest): string {
  // Try various headers for IP address
  const forwarded = request.headers.get("x-forwarded-for")
  if (forwarded) {
    return forwarded.split(",")[0].trim()
  }
  const realIP = request.headers.get("x-real-ip")
  if (realIP) {
    return realIP
  }
  // Fallback to a default if we can't determine IP
  return request.ip || "unknown"
}

function checkRateLimit(ip: string, maxAttempts = 3, windowMs = 300000): {
  allowed: boolean
  remainingTime?: number
} {
  const now = Date.now()
  const entry = rateLimitStore.get(ip)

  if (!entry) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs })
    return { allowed: true }
  }

  // Reset if window has passed
  if (now > entry.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs })
    return { allowed: true }
  }

  // Check if limit exceeded
  if (entry.count >= maxAttempts) {
    const remainingTime = Math.ceil((entry.resetTime - now) / 1000 / 60) // minutes
    return { allowed: false, remainingTime }
  }

  // Increment count
  entry.count++
  return { allowed: true }
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIP = getClientIP(request)

    // Check rate limit
    const rateLimitCheck = checkRateLimit(clientIP, 3, 300000) // 3 attempts per 5 minutes
    if (!rateLimitCheck.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: `Too many attempts. Please wait ${rateLimitCheck.remainingTime} minutes before trying again.`,
        },
        { status: 429 }
      )
    }

    // Parse request body
    const body = await request.json()

    // Honeypot check - if this field is filled, it's a bot
    if (body.website_url && body.website_url.trim().length > 0) {
      // Silently reject - don't give feedback to bots
      return NextResponse.json({ success: true }, { status: 200 })
    }

    // Validate with Zod schema
    const validatedData = contactFormSchema.parse({
      name: body.name,
      email: body.email,
      phone: body.phone || "",
      business: body.business || "",
      website_type: body.website_type || "",
      pages: body.pages || "",
      message: body.message,
    })

    // Comprehensive spam check (server-side)
    const spamCheck = checkForSpam({
      message: validatedData.message,
      business: validatedData.business,
      email: validatedData.email,
      name: validatedData.name, // Include name in spam check
    })

    if (spamCheck.isSpam) {
      // Log spam attempts for monitoring
      console.warn(`Spam attempt blocked from IP ${clientIP}:`, {
        email: validatedData.email,
        reason: spamCheck.reason,
      })

      return NextResponse.json(
        {
          success: false,
          error: spamCheck.reason || "Message flagged as potential spam. Please revise your message.",
        },
        { status: 400 }
      )
    }

    // Send email via EmailJS
    const result = await sendContactEmail(validatedData)

    if (result.success) {
      return NextResponse.json(
        {
          success: true,
          message: "Message transmitted successfully! I'll respond within 24 hours.",
        },
        { status: 200 }
      )
    } else {
      return NextResponse.json(
        {
          success: false,
          error: result.error || "Failed to send message. Please try again later.",
        },
        { status: 500 }
      )
    }
  } catch (error) {
    // Handle validation errors
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: "Please check your input and try again.",
        },
        { status: 400 }
      )
    }

    // Log unexpected errors
    console.error("Contact form error:", error)

    return NextResponse.json(
      {
        success: false,
        error: "System error detected. Please try again later.",
      },
      { status: 500 }
    )
  }
}

