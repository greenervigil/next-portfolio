import emailjs from "@emailjs/browser"
import type { ContactFormData } from "./validations"

export async function sendContactEmail(data: ContactFormData) {
  try {
    // Initialize EmailJS with your public key
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!)

    const templateParams = {
      from_name: data.name,
      user_email: data.email,
      phone: data.phone || "Not provided",
      business: data.business || "Not provided",
      website_type: data.website_type || "Not provided",
      pages: data.pages || "Not provided",
      message: data.message,
    }

    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      templateParams,
    )

    if (response.status === 200) {
      return { success: true, message: "Message sent successfully!" }
    } else {
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
