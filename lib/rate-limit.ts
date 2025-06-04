// Client-side rate limiting using localStorage
export function checkRateLimit(maxAttempts = 3, windowMs = 300000): { allowed: boolean; remainingTime?: number } {
  if (typeof window === "undefined") return { allowed: true }

  const now = Date.now()
  const key = "contact_form_attempts"
  const stored = localStorage.getItem(key)

  let attempts: { count: number; resetTime: number }

  if (stored) {
    attempts = JSON.parse(stored)

    // Reset if window has passed
    if (now > attempts.resetTime) {
      attempts = { count: 1, resetTime: now + windowMs }
      localStorage.setItem(key, JSON.stringify(attempts))
      return { allowed: true }
    }

    // Check if limit exceeded
    if (attempts.count >= maxAttempts) {
      const remainingTime = Math.ceil((attempts.resetTime - now) / 1000 / 60) // minutes
      return { allowed: false, remainingTime }
    }

    // Increment count
    attempts.count++
    localStorage.setItem(key, JSON.stringify(attempts))
    return { allowed: true }
  } else {
    // First attempt
    attempts = { count: 1, resetTime: now + windowMs }
    localStorage.setItem(key, JSON.stringify(attempts))
    return { allowed: true }
  }
}
