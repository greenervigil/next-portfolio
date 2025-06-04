"use client"

import type React from "react"

import { useState, useTransition } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  Send,
  Zap,
  CheckCircle,
  AlertCircle,
  Loader2,
  Phone,
  Briefcase,
  LayoutGrid,
  FileText,
} from "lucide-react"
import { sendContactEmail } from "@/lib/emailjs"
import { contactFormSchema } from "@/lib/validations"
import { checkRateLimit } from "@/lib/rate-limit"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

interface FormState {
  success: boolean | null
  message: string
  errors: Record<string, string>
}

export function Contact() {
  const [isPending, startTransition] = useTransition()
  const [formState, setFormState] = useState<FormState>({
    success: null,
    message: "",
    errors: {},
  })
  const [websiteType, setWebsiteType] = useState<string>("")
  const [pages, setPages] = useState<string>("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    startTransition(async () => {
      setFormState({ success: null, message: "", errors: {} })

      // Check rate limiting
      const rateLimitCheck = checkRateLimit(3, 300000) // 3 attempts per 5 minutes
      if (!rateLimitCheck.allowed) {
        setFormState({
          success: false,
          message: `Too many attempts. Please wait ${rateLimitCheck.remainingTime} minutes before trying again.`,
          errors: {},
        })
        return
      }

      // Get form data
      const formData = new FormData(e.currentTarget)
      const rawData = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        business: formData.get("business") as string,
        website_type: websiteType,
        pages: pages,
        message: formData.get("message") as string,
      }

      // Validate data
      try {
        const validatedData = contactFormSchema.parse(rawData)

        // Basic spam detection
        const spamKeywords = ["crypto", "bitcoin", "investment", "loan", "casino", "viagra", "pharmacy"]
        const messageText = validatedData.message.toLowerCase()
        const hasSpam = spamKeywords.some((keyword) => messageText.includes(keyword))

        if (hasSpam) {
          setFormState({
            success: false,
            message: "Message flagged as potential spam. Please revise your message.",
            errors: {},
          })
          return
        }

        // Send email
        const result = await sendContactEmail(validatedData)

        if (result.success) {
          setFormState({
            success: true,
            message: "Message transmitted successfully! I'll respond within 24 hours.",
            errors: {},
          })
          // Reset form
          e.currentTarget.reset()
          setWebsiteType("")
          setPages("")
        } else {
          setFormState({
            success: false,
            message: result.error || "Failed to send message. Please try again later.",
            errors: {},
          })
        }
      } catch (error) {
        if (error instanceof Error && error.name === "ZodError") {
          setFormState({
            success: false,
            message: "Please check your input and try again.",
            errors: {},
          })
        } else {
          setFormState({
            success: false,
            message: "System error detected. Please try again later.",
            errors: {},
          })
        }
      }
    })
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-orange-400" />
              <Send className="h-6 w-6 text-orange-400" />
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-orange-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-orbitron font-bold mb-4 text-orange-400 tracking-wider">
              CONTACT_INTERFACE.EXE
            </h2>
            <p className="text-lg text-cyan-100 font-inter">
              Ready to collaborate or discuss opportunities? I'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="bg-black/50 border-cyan-400/30 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-orbitron font-bold mb-4 text-cyan-400 tracking-wider">
                    CONNECTION_PROTOCOLS
                  </h3>
                  <p className="text-cyan-100 font-inter mb-6 border-l-2 border-cyan-400/50 pl-4">
                    Whether you're looking for technical leadership, mentorship, or collaboration opportunities, I'm
                    always open to meaningful conversations.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 group">
                      <div className="relative">
                        <Mail className="h-5 w-5 text-cyan-400 group-hover:text-orange-400 transition-colors" />
                        <div className="absolute inset-0 bg-cyan-400 blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
                      </div>
                      <span className="text-cyan-100 font-inter">daniel@greenervigildev.com</span>
                    </div>
                    <div className="flex items-center space-x-3 group">
                      <div className="relative">
                        <MapPin className="h-5 w-5 text-cyan-400 group-hover:text-orange-400 transition-colors" />
                        <div className="absolute inset-0 bg-cyan-400 blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
                      </div>
                      <span className="text-cyan-100 font-inter">Available for Remote Work</span>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-cyan-400/20 mt-6">
                    <h4 className="font-orbitron font-bold mb-4 text-orange-400 tracking-wider">SOCIAL_NETWORKS</h4>
                    <div className="flex space-x-4">
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 group"
                      >
                        <Linkedin className="h-4 w-4 group-hover:scale-110 transition-transform" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-orange-400/50 text-orange-400 hover:bg-orange-400/10 hover:border-orange-400 transition-all duration-300 group"
                      >
                        <Github className="h-4 w-4 group-hover:scale-110 transition-transform" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 group"
                      >
                        <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="bg-black/50 border-orange-400/30 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-orange-400/5 to-cyan-400/5" />
              <CardHeader className="relative z-10">
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-orange-400" />
                  <CardTitle className="font-orbitron text-orange-400 tracking-wider">SEND_MESSAGE</CardTitle>
                </div>
                <CardDescription className="text-cyan-100 font-inter">
                  Let's discuss your project or opportunity
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                {/* Status Messages */}
                {formState.success !== null && (
                  <div
                    className={`mb-4 p-4 rounded-lg border flex items-center space-x-2 ${
                      formState.success
                        ? "bg-green-400/10 border-green-400/30 text-green-400"
                        : "bg-red-400/10 border-red-400/30 text-red-400"
                    }`}
                  >
                    {formState.success ? (
                      <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    )}
                    <span className="font-inter text-sm">{formState.message}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <div className="flex items-center mb-1.5">
                      <Label htmlFor="name" className="text-cyan-400 font-orbitron text-xs tracking-wider">
                        NAME
                      </Label>
                    </div>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      required
                      disabled={isPending}
                      className="bg-black/50 border-cyan-400/30 text-cyan-100 placeholder:text-cyan-100/50 focus:border-cyan-400 font-inter disabled:opacity-50"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <div className="flex items-center mb-1.5">
                      <Label htmlFor="email" className="text-cyan-400 font-orbitron text-xs tracking-wider">
                        EMAIL
                      </Label>
                    </div>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      required
                      disabled={isPending}
                      className="bg-black/50 border-cyan-400/30 text-cyan-100 placeholder:text-cyan-100/50 focus:border-cyan-400 font-inter disabled:opacity-50"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <div className="flex items-center mb-1.5">
                      <Phone className="h-3.5 w-3.5 text-cyan-400 mr-1.5" />
                      <Label htmlFor="phone" className="text-cyan-400 font-orbitron text-xs tracking-wider">
                        PHONE
                      </Label>
                    </div>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Your Phone Number (Optional)"
                      disabled={isPending}
                      className="bg-black/50 border-cyan-400/30 text-cyan-100 placeholder:text-cyan-100/50 focus:border-cyan-400 font-inter disabled:opacity-50"
                    />
                  </div>

                  {/* Business */}
                  <div>
                    <div className="flex items-center mb-1.5">
                      <Briefcase className="h-3.5 w-3.5 text-cyan-400 mr-1.5" />
                      <Label htmlFor="business" className="text-cyan-400 font-orbitron text-xs tracking-wider">
                        BUSINESS
                      </Label>
                    </div>
                    <Input
                      id="business"
                      name="business"
                      placeholder="Your Business Name (Optional)"
                      disabled={isPending}
                      className="bg-black/50 border-cyan-400/30 text-cyan-100 placeholder:text-cyan-100/50 focus:border-cyan-400 font-inter disabled:opacity-50"
                    />
                  </div>

                  {/* Website Type */}
                  <div>
                    <div className="flex items-center mb-1.5">
                      <LayoutGrid className="h-3.5 w-3.5 text-cyan-400 mr-1.5" />
                      <Label htmlFor="website_type" className="text-cyan-400 font-orbitron text-xs tracking-wider">
                        WEBSITE TYPE
                      </Label>
                    </div>
                    <Select value={websiteType} onValueChange={setWebsiteType} disabled={isPending}>
                      <SelectTrigger className="bg-black/50 border-cyan-400/30 text-cyan-100 focus:border-cyan-400 font-inter disabled:opacity-50">
                        <SelectValue placeholder="Select Website Type (Optional)" />
                      </SelectTrigger>
                      <SelectContent className="bg-black/90 border-cyan-400/30 text-cyan-100">
                        <SelectItem value="portfolio">Portfolio</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="ecommerce">E-Commerce</SelectItem>
                        <SelectItem value="blog">Blog</SelectItem>
                        <SelectItem value="landing">Landing Page</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Pages */}
                  <div>
                    <div className="flex items-center mb-1.5">
                      <FileText className="h-3.5 w-3.5 text-cyan-400 mr-1.5" />
                      <Label htmlFor="pages" className="text-cyan-400 font-orbitron text-xs tracking-wider">
                        PAGES
                      </Label>
                    </div>
                    <Select value={pages} onValueChange={setPages} disabled={isPending}>
                      <SelectTrigger className="bg-black/50 border-cyan-400/30 text-cyan-100 focus:border-cyan-400 font-inter disabled:opacity-50">
                        <SelectValue placeholder="Number of Pages (Optional)" />
                      </SelectTrigger>
                      <SelectContent className="bg-black/90 border-cyan-400/30 text-cyan-100">
                        <SelectItem value="1">1 Page</SelectItem>
                        <SelectItem value="2-5">2-5 Pages</SelectItem>
                        <SelectItem value="6-10">6-10 Pages</SelectItem>
                        <SelectItem value="11+">11+ Pages</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div>
                    <div className="flex items-center mb-1.5">
                      <Label htmlFor="message" className="text-cyan-400 font-orbitron text-xs tracking-wider">
                        MESSAGE
                      </Label>
                    </div>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or how I can help..."
                      rows={4}
                      required
                      disabled={isPending}
                      className="bg-black/50 border-cyan-400/30 text-cyan-100 placeholder:text-cyan-100/50 focus:border-cyan-400 font-inter resize-none disabled:opacity-50"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-black font-orbitron tracking-wider shadow-lg shadow-orange-400/25 hover:shadow-orange-400/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        TRANSMITTING...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        TRANSMIT_MESSAGE
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
