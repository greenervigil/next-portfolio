"use client"

import type React from "react"
import { useState, useTransition, useEffect } from "react"
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
import { checkForSpam } from "@/lib/spam-detection"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import Link from "next/link"

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
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

      // Initialize in a microtask to avoid synchronous setState in render phase
      Promise.resolve().then(() => {
        setPrefersReducedMotion(mediaQuery.matches)
      })

      const handleChange = (e: MediaQueryListEvent) => {
        setPrefersReducedMotion(e.matches)
      }

      mediaQuery.addEventListener("change", handleChange)
      return () => mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    startTransition(async () => {
      setFormState({ success: null, message: "", errors: {} })

      const rateLimitCheck = checkRateLimit(3, 300000) // 3 attempts per 5 minutes
      if (!rateLimitCheck.allowed) {
        setFormState({
          success: false,
          message: `Too many attempts. Please wait ${rateLimitCheck.remainingTime} minutes before trying again.`,
          errors: {},
        })
        return
      }

      const formData = new FormData(e.currentTarget)
      
      // Honeypot check - if this field is filled, it's a bot
      const honeypot = formData.get("website_url") as string
      if (honeypot && honeypot.trim().length > 0) {
        // Silently reject - don't give feedback to bots
        return
      }

      const rawData = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        business: formData.get("business") as string,
        website_type: websiteType,
        pages: pages,
        message: formData.get("message") as string,
      }

      try {
        const validatedData = contactFormSchema.parse(rawData)

        // Comprehensive spam check
        const spamCheck = checkForSpam({
          message: validatedData.message,
          business: validatedData.business,
          email: validatedData.email,
        })

        if (spamCheck.isSpam) {
          setFormState({
            success: false,
            message: spamCheck.reason || "Message flagged as potential spam. Please revise your message.",
            errors: {},
          })
          return
        }

        const result = await sendContactEmail(validatedData)

        if (result.success) {
          setFormState({
            success: true,
            message: "Message transmitted successfully! I'll respond within 24 hours.",
            errors: {},
          })
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
    <section id="contact" className="py-20 relative" aria-labelledby="contact-heading">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-orange-400 text-black px-4 py-2 rounded z-50 font-orbitron tracking-wider"
      >
        Skip to main content
      </a>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 mb-4" aria-hidden="true">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-orange-400" />
              <Send className="h-6 w-6 text-orange-400" />
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-orange-400" />
            </div>
            <h2
              id="contact-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-orbitron font-bold mb-4 text-orange-400 tracking-wide sm:tracking-wider"
            >
              <span className="block sm:hidden">CONTACT.EXE</span>
              <span className="hidden sm:block">CONTACT_INTERFACE.EXE</span>
            </h2>
            <p className="text-base sm:text-lg text-cyan-100 font-inter px-4 sm:px-0">
              {`Ready to collaborate or discuss opportunities? I'd love to hear from you.`}
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <aside className="space-y-6 order-2 md:order-1" aria-labelledby="contact-info-heading">
              <Card className="bg-black/50 border-cyan-400/30 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-6">
                  <h3
                    id="contact-info-heading"
                    className="text-lg sm:text-xl font-orbitron font-bold mb-3 sm:mb-4 text-cyan-400 tracking-wide sm:tracking-wider"
                  >
                    <span className="block sm:hidden">CONNECT</span>
                    <span className="hidden sm:block">CONNECTION_PROTOCOLS</span>
                  </h3>
                  <p className="text-cyan-100 font-inter mb-4 sm:mb-6 border-l-2 border-cyan-400/50 pl-3 sm:pl-4 text-sm sm:text-base">
                    {`Whether you're looking for technical leadership, mentorship, or collaboration opportunities, I'm
                    always open to meaningful conversations.`}
                  </p>

                  <div className="space-y-3 sm:space-y-4" role="list">
                    <div className="flex items-start space-x-3 group" role="listitem">
                      <div className="relative mt-0.5">
                        <Mail
                          className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 group-hover:text-orange-400 transition-colors"
                          aria-hidden="true"
                        />
                        <div
                          className="absolute inset-0 bg-cyan-400 blur-md opacity-20 group-hover:opacity-40 transition-opacity"
                          style={{
                            display: prefersReducedMotion ? "none" : "block",
                          }}
                          aria-hidden="true"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-cyan-100 font-inter text-sm sm:text-base break-all">
                          daniel_greenervigil@icloud.com
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 group" role="listitem">
                      <div className="relative">
                        <MapPin
                          className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 group-hover:text-orange-400 transition-colors"
                          aria-hidden="true"
                        />
                        <div
                          className="absolute inset-0 bg-cyan-400 blur-md opacity-20 group-hover:opacity-40 transition-opacity"
                          style={{
                            display: prefersReducedMotion ? "none" : "block",
                          }}
                          aria-hidden="true"
                        />
                      </div>
                      <span className="text-cyan-100 font-inter text-sm sm:text-base">Available for Remote Work</span>
                    </div>
                  </div>

                  <div className="pt-4 sm:pt-6 border-t border-cyan-400/20 mt-4 sm:mt-6">
                    <h4
                      className="font-orbitron font-bold mb-3 sm:mb-4 text-orange-400 tracking-wide sm:tracking-wider text-sm sm:text-base"
                      id="social-networks-heading"
                    >
                      SOCIAL_NETWORKS
                    </h4>
                    <nav aria-labelledby="social-networks-heading">
                      <div className="flex flex-wrap gap-3 sm:gap-4">
                        <Link
                          href="https://www.linkedin.com/in/danieljvigil"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Connect with Daniel on LinkedIn (opens in new tab)"
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 group flex-1 sm:flex-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black bg-transparent"
                          >
                            <Linkedin
                              className="h-3 w-3 sm:h-4 sm:w-4 group-hover:scale-110 transition-transform mr-2"
                              aria-hidden="true"
                            />
                            <span className="text-xs sm:text-sm font-orbitron">LINKEDIN</span>
                          </Button>
                        </Link>
                        <Link
                          href="https://github.com/greenervigil"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View Daniel's GitHub profile (opens in new tab)"
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-orange-400/50 text-orange-400 hover:bg-orange-400/10 hover:border-orange-400 transition-all duration-300 group flex-1 sm:flex-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-black bg-transparent"
                          >
                            <Github
                              className="h-3 w-3 sm:h-4 sm:w-4 group-hover:scale-110 transition-transform mr-2"
                              aria-hidden="true"
                            />
                            <span className="text-xs sm:text-sm font-orbitron">GITHUB</span>
                          </Button>
                        </Link>
                      </div>
                    </nav>
                  </div>
                </CardContent>
              </Card>
            </aside>

            <Card className="bg-black/50 border-orange-400/30 backdrop-blur-sm relative overflow-hidden order-1 md:order-2">
              <div className="absolute inset-0 bg-gradient-to-b from-orange-400/5 to-cyan-400/5" aria-hidden="true" />
              <CardHeader className="relative z-10 p-4 sm:p-6 pb-3 sm:pb-4">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-orange-400" aria-hidden="true" />
                  <CardTitle
                    className="font-orbitron text-orange-400 tracking-wide sm:tracking-wider text-lg sm:text-xl"
                    id="contact-form-heading"
                  >
                    SEND_MESSAGE
                  </CardTitle>
                </div>
                <CardDescription className="text-cyan-100 font-inter text-sm sm:text-base">
                  {`Let's discuss your project or opportunity`}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 p-4 sm:p-6 pt-0">
                {formState.success !== null && (
                  <div
                    className={`mb-4 p-3 sm:p-4 rounded-lg border flex items-start space-x-2 ${
                      formState.success
                        ? "bg-green-400/10 border-green-400/30 text-green-400"
                        : "bg-red-400/10 border-red-400/30 text-red-400"
                    }`}
                    role="alert"
                    aria-live="polite"
                    aria-atomic="true"
                  >
                    {formState.success ? (
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    ) : (
                      <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    )}
                    <span className="font-inter text-xs sm:text-sm">{formState.message}</span>
                  </div>
                )}

                <form
                  onSubmit={handleSubmit}
                  className="space-y-3 sm:space-y-4"
                  aria-labelledby="contact-form-heading"
                  noValidate
                >
                  <fieldset className="space-y-3 sm:space-y-4">
                    <legend className="sr-only">Personal Information</legend>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <Label
                          htmlFor="name"
                          className="text-cyan-400 font-orbitron text-xs tracking-wider mb-1.5 block"
                        >
                          NAME{" "}
                          <span className="text-red-400" aria-label="required">
                            *
                          </span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your Name"
                          required
                          disabled={isPending}
                          aria-describedby={formState.errors.name ? "name-error" : undefined}
                          aria-invalid={!!formState.errors.name}
                          className="bg-black/50 border-cyan-400/30 text-cyan-100 placeholder:text-cyan-100/50 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black font-inter disabled:opacity-50 h-9 sm:h-10 text-sm sm:text-base"
                        />
                        {formState.errors.name && (
                          <p id="name-error" className="text-red-400 text-xs mt-1" role="alert">
                            {formState.errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label
                          htmlFor="email"
                          className="text-cyan-400 font-orbitron text-xs tracking-wider mb-1.5 block"
                        >
                          EMAIL{" "}
                          <span className="text-red-400" aria-label="required">
                            *
                          </span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Your Email"
                          required
                          disabled={isPending}
                          aria-describedby={formState.errors.email ? "email-error" : undefined}
                          aria-invalid={!!formState.errors.email}
                          className="bg-black/50 border-cyan-400/30 text-cyan-100 placeholder:text-cyan-100/50 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black font-inter disabled:opacity-50 h-9 sm:h-10 text-sm sm:text-base"
                        />
                        {formState.errors.email && (
                          <p id="email-error" className="text-red-400 text-xs mt-1" role="alert">
                            {formState.errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <div className="flex items-center mb-1.5">
                          <Phone className="h-3 w-3 text-cyan-400 mr-1.5" aria-hidden="true" />
                          <Label htmlFor="phone" className="text-cyan-400 font-orbitron text-xs tracking-wider">
                            PHONE
                          </Label>
                        </div>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="Phone (Optional)"
                          disabled={isPending}
                          aria-describedby="phone-description"
                          className="bg-black/50 border-cyan-400/30 text-cyan-100 placeholder:text-cyan-100/50 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black font-inter disabled:opacity-50 h-9 sm:h-10 text-sm sm:text-base"
                        />
                        <p id="phone-description" className="sr-only">
                          Optional phone number for contact
                        </p>
                      </div>
                      <div>
                        <div className="flex items-center mb-1.5">
                          <Briefcase className="h-3 w-3 text-cyan-400 mr-1.5" aria-hidden="true" />
                          <Label htmlFor="business" className="text-cyan-400 font-orbitron text-xs tracking-wider">
                            BUSINESS
                          </Label>
                        </div>
                        <Input
                          id="business"
                          name="business"
                          placeholder="Business (Optional)"
                          disabled={isPending}
                          aria-describedby="business-description"
                          className="bg-black/50 border-cyan-400/30 text-cyan-100 placeholder:text-cyan-100/50 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black font-inter disabled:opacity-50 h-9 sm:h-10 text-sm sm:text-base"
                        />
                        <p id="business-description" className="sr-only">
                          Optional business or company name
                        </p>
                      </div>
                    </div>
                  </fieldset>

                  <fieldset className="space-y-3 sm:space-y-4">
                    <legend className="sr-only">Project Information</legend>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <div className="flex items-center mb-1.5">
                          <LayoutGrid className="h-3 w-3 text-cyan-400 mr-1.5" aria-hidden="true" />
                          <Label htmlFor="website_type" className="text-cyan-400 font-orbitron text-xs tracking-wider">
                            TYPE
                          </Label>
                        </div>
                        <Select
                          value={websiteType}
                          onValueChange={setWebsiteType}
                          disabled={isPending}
                          aria-describedby="website-type-description"
                        >
                          <SelectTrigger
                            className="bg-black/50 border-cyan-400/30 text-cyan-100 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black font-inter disabled:opacity-50 h-9 sm:h-10 text-sm sm:text-base"
                            aria-label="Select website type"
                          >
                            <SelectValue placeholder="Website Type" />
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
                        <p id="website-type-description" className="sr-only">
                          Select the type of website you need
                        </p>
                      </div>
                      <div>
                        <div className="flex items-center mb-1.5">
                          <FileText className="h-3 w-3 text-cyan-400 mr-1.5" aria-hidden="true" />
                          <Label htmlFor="pages" className="text-cyan-400 font-orbitron text-xs tracking-wider">
                            PAGES
                          </Label>
                        </div>
                        <Select
                          value={pages}
                          onValueChange={setPages}
                          disabled={isPending}
                          aria-describedby="pages-description"
                        >
                          <SelectTrigger
                            className="bg-black/50 border-cyan-400/30 text-cyan-100 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black font-inter disabled:opacity-50 h-9 sm:h-10 text-sm sm:text-base"
                            aria-label="Select number of pages"
                          >
                            <SelectValue placeholder="# of Pages" />
                          </SelectTrigger>
                          <SelectContent className="bg-black/90 border-cyan-400/30 text-cyan-100">
                            <SelectItem value="1">1 Page</SelectItem>
                            <SelectItem value="2-5">2-5 Pages</SelectItem>
                            <SelectItem value="6-10">6-10 Pages</SelectItem>
                            <SelectItem value="11+">11+ Pages</SelectItem>
                          </SelectContent>
                        </Select>
                        <p id="pages-description" className="sr-only">
                          Select the approximate number of pages needed
                        </p>
                      </div>
                    </div>
                  </fieldset>

                  <div>
                    <Label
                      htmlFor="message"
                      className="text-cyan-400 font-orbitron text-xs tracking-wider mb-1.5 block"
                    >
                      MESSAGE{" "}
                      <span className="text-red-400" aria-label="required">
                        *
                      </span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or how I can help..."
                      rows={3}
                      required
                      disabled={isPending}
                      aria-describedby={formState.errors.message ? "message-error" : "message-description"}
                      aria-invalid={!!formState.errors.message}
                      className="bg-black/50 border-cyan-400/30 text-cyan-100 placeholder:text-cyan-100/50 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black font-inter resize-none disabled:opacity-50 text-sm sm:text-base"
                    />
                    <p id="message-description" className="sr-only">
                      Describe your project requirements or how Daniel can help you
                    </p>
                    {formState.errors.message && (
                      <p id="message-error" className="text-red-400 text-xs mt-1" role="alert">
                        {formState.errors.message}
                      </p>
                    )}
                  </div>

                  {/* Honeypot field - hidden from users but visible to bots */}
                  <div className="sr-only" aria-hidden="true">
                    <Label htmlFor="website_url" className="sr-only">
                      Website URL (leave blank)
                    </Label>
                    <Input
                      id="website_url"
                      name="website_url"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      className="sr-only"
                      aria-hidden="true"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-black font-orbitron tracking-wider shadow-lg shadow-orange-400/25 hover:shadow-orange-400/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-black h-10 sm:h-11 text-sm sm:text-base"
                    aria-describedby="submit-description"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="mr-2 h-3 w-3 sm:h-4 sm:w-4 animate-spin" aria-hidden="true" />
                        <span>TRANSMITTING...</span>
                        <span className="sr-only">Sending your message, please wait</span>
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-3 w-3 sm:h-4 sm:w-4" aria-hidden="true" />
                        <span>TRANSMIT_MESSAGE</span>
                      </>
                    )}
                  </Button>
                  <p id="submit-description" className="sr-only">
                    Submit the contact form to send your message to Daniel
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
