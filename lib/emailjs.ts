import type { ContactFormData } from "./validations"

/**
 * Send email via EmailJS REST API (works server-side)
 */
export async function sendContactEmail(data: ContactFormData) {
  try {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!

    const templateParams = {
      from_name: data.name,
      user_email: data.email,
      phone: data.phone || "Not provided",
      business: data.business || "Not provided",
      website_type: data.website_type || "Not provided",
      pages: data.pages || "Not provided",
      message: data.message,
    }

    // Use EmailJS REST API
    const response = await fetch(`https://api.emailjs.com/api/v1.0/email/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: templateParams,
      }),
    })

    if (response.ok) {
      return { success: true, message: "Message sent successfully!" }
    } else {
      const errorText = await response.text()
      console.error("EmailJS API error:", response.status, errorText)
      return { success: false, error: "Failed to send message" }
    }
  } catch (error) {
    console.error("EmailJS error:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Email service unavailable",
    }
  }
}
