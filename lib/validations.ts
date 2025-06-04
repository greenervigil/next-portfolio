import { z } from "zod"

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s\-'.]+$/, "Name contains invalid characters"),
  email: z.string().email("Please enter a valid email address").max(100, "Email must be less than 100 characters"),
  phone: z.string().optional(),
  business: z.string().optional(),
  website_type: z.string().optional(),
  pages: z.string().optional(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters"),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
