"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const [glitchText, setGlitchText] = useState("Daniel Greener-Vigil")

  useEffect(() => {
    setMounted(true)

    // Glitch effect for name
    const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?"
    const originalText = "Daniel Greener-Vigil"

    const glitchInterval = setInterval(() => {
      let glitched = originalText
      for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * originalText.length)
        const randomChar = glitchChars[Math.floor(Math.random() * glitchChars.length)]
        glitched = glitched.substring(0, randomIndex) + randomChar + glitched.substring(randomIndex + 1)
      }
      setGlitchText(glitched)

      setTimeout(() => setGlitchText(originalText), 100)
    }, 3000)

    return () => clearInterval(glitchInterval)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}

        {/* Hexagonal patterns */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 transform rotate-45 animate-pulse" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-orange-400/20 transform rotate-12 animate-pulse delay-1000" />

        {/* Circuit lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-pulse" />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          {/* System Status */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 border border-cyan-400/30 rounded-full bg-cyan-400/5 backdrop-blur-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-cyan-400 font-orbitron text-sm tracking-wider">SYSTEM ONLINE</span>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <div className="relative">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-orbitron font-bold tracking-tight">
                <span className="block text-cyan-400 glitch-text" data-text={glitchText}>
                  {glitchText}
                </span>
              </h1>
              <div className="absolute inset-0 bg-cyan-400 blur-2xl opacity-20 animate-pulse" />
            </div>

            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="px-6 py-2 border border-orange-400/50 bg-orange-400/10 backdrop-blur-sm">
                  <p className="text-orange-400 font-orbitron text-lg tracking-wider">
                    SOFTWARE ENGINEER | TECH LEAD | MENTOR
                  </p>
                </div>
              </div>
              <p className="text-cyan-100 text-lg max-w-2xl mx-auto font-inter">
                11+ years of experience building scalable solutions and leading high-performing teams in the digital
                frontier
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link href="https://www.linkedin.com/in/danieljvigil/" target="_blank" rel="noopener noreferrer"> 
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-black font-orbitron tracking-wider border border-cyan-400 shadow-lg shadow-cyan-400/25 hover:shadow-cyan-400/50 transition-all duration-300 group"
              >
                <Linkedin className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                LINKEDIN
              </Button>
            </Link>
            <Link href='https://github.com/greenervigil' target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="border-orange-400 text-orange-400 hover:bg-orange-400/10 font-orbitron tracking-wider shadow-lg shadow-orange-400/25 hover:shadow-orange-400/50 transition-all duration-300 group"
              >
                <Github className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                GITHUB
              </Button>
            </Link>
            <Link href="#contact" scroll={true}>
              <Button
                variant="outline"
                size="lg"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-orbitron tracking-wider shadow-lg shadow-cyan-400/25 hover:shadow-cyan-400/50 transition-all duration-300 group"
              >
                <Mail className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                CONTACT ME
              </Button>
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="pt-16">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-cyan-400 font-orbitron text-sm tracking-wider">SCROLL TO EXPLORE</span>
              <div className="relative">
                <ArrowDown className="h-6 w-6 text-cyan-400 animate-bounce" />
                <div className="absolute inset-0 bg-cyan-400 blur-md opacity-50 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
