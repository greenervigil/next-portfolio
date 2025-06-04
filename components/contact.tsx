"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Linkedin, Github, Send, Zap } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
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
                      <span className="text-cyan-100 font-inter">daniel_greenervigil@icloud.com</span>
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
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-black/50 border-cyan-400/30 text-cyan-100 placeholder:text-cyan-100/50 focus:border-cyan-400 font-inter"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-black/50 border-cyan-400/30 text-cyan-100 placeholder:text-cyan-100/50 focus:border-cyan-400 font-inter"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Tell me about your project or how I can help..."
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-black/50 border-cyan-400/30 text-cyan-100 placeholder:text-cyan-100/50 focus:border-cyan-400 font-inter resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-black font-orbitron tracking-wider shadow-lg shadow-orange-400/25 hover:shadow-orange-400/50 transition-all duration-300"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    TRANSMIT_MESSAGE
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
