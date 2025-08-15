"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const [glitchText, setGlitchText] = useState("Daniel Greener-Vigil")
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener("change", handleChange)

    // Glitch effect for name (only if motion is not reduced)
    let glitchInterval: NodeJS.Timeout | null = null

    if (!mediaQuery.matches) {
      const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?"
      const originalText = "Daniel Greener-Vigil"

      glitchInterval = setInterval(() => {
        let glitched = originalText
        for (let i = 0; i < 3; i++) {
          const randomIndex = Math.floor(Math.random() * originalText.length)
          const randomChar = glitchChars[Math.floor(Math.random() * glitchChars.length)]
          glitched = glitched.substring(0, randomIndex) + randomChar + glitched.substring(randomIndex + 1)
        }
        setGlitchText(glitched)

        setTimeout(() => setGlitchText(originalText), 100)
      }, 3000)
    }

    return () => {
      mediaQuery.removeEventListener("change", handleChange)
      if (glitchInterval) clearInterval(glitchInterval)
    }
  }, [])

  if (!mounted) return null

  return (
    <>
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-400 text-black px-4 py-2 rounded z-50 font-orbitron"
      >
        Skip to main content
      </a>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        aria-label="Hero section"
      >
        {/* Animated background elements - hidden from screen readers */}
        <div className="absolute inset-0" aria-hidden="true">
          {/* Floating particles - only animate if motion is not reduced */}
          {!prefersReducedMotion &&
            [...Array(20)].map((_, i) => (
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
          <div
            className={`absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 transform rotate-45 ${!prefersReducedMotion ? "animate-pulse" : ""}`}
          />
          <div
            className={`absolute bottom-20 right-20 w-24 h-24 border border-orange-400/20 transform rotate-12 ${!prefersReducedMotion ? "animate-pulse delay-1000" : ""}`}
          />

          {/* Circuit lines */}
          <div
            className={`absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent ${!prefersReducedMotion ? "animate-pulse" : ""}`}
          />
          <div
            className={`absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent ${!prefersReducedMotion ? "animate-pulse delay-500" : ""}`}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            {/* System Status */}
            <div
              className="inline-flex items-center space-x-2 px-4 py-2 border border-cyan-400/30 rounded-full bg-cyan-400/5 backdrop-blur-sm"
              role="status"
              aria-label="System status indicator"
            >
              <div
                className={`w-2 h-2 bg-green-400 rounded-full ${!prefersReducedMotion ? "animate-pulse" : ""}`}
                aria-hidden="true"
              />
              <span className="text-cyan-400 font-orbitron text-sm tracking-wider">SYSTEM ONLINE</span>
            </div>

            {/* Main Content */}
            <header className="space-y-6" id="main-content">
              <div className="relative">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-orbitron font-bold tracking-tight">
                  <span
                    className="block text-cyan-400 glitch-text"
                    data-text={glitchText}
                    aria-label="Daniel Greener-Vigil"
                  >
                    {glitchText}
                  </span>
                </h1>
                <div
                  className={`absolute inset-0 bg-cyan-400 blur-2xl opacity-20 ${!prefersReducedMotion ? "animate-pulse" : ""}`}
                  aria-hidden="true"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-center">
                  <div className="px-6 py-2 border border-orange-400/50 bg-orange-400/10 backdrop-blur-sm">
                    <p className="text-orange-400 font-orbitron text-lg tracking-wider">
                      <span className="sr-only">Professional roles: </span>
                      SOFTWARE ENGINEER | TECH LEAD | MENTOR
                    </p>
                  </div>
                </div>
                <p className="text-cyan-100 text-lg max-w-2xl mx-auto font-inter">
                  11+ years of experience building scalable solutions and leading high-performing teams in the digital
                  frontier
                </p>
              </div>
            </header>

            {/* CTA Buttons */}
            <nav
              aria-label="Social links and contact"
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            >
              <Link
                href="https://www.linkedin.com/in/danieljvigil/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Daniel's LinkedIn profile (opens in new tab)"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-black font-orbitron tracking-wider border border-cyan-400 shadow-lg shadow-cyan-400/25 hover:shadow-cyan-400/50 transition-all duration-300 group focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
                >
                  <Linkedin
                    className={`mr-2 h-4 w-4 ${!prefersReducedMotion ? "group-hover:animate-pulse" : ""}`}
                    aria-hidden="true"
                  />
                  LINKEDIN
                </Button>
              </Link>
              <Link
                href="https://github.com/greenervigil"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Daniel's GitHub profile (opens in new tab)"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-orange-400 text-orange-400 hover:bg-orange-400/10 font-orbitron tracking-wider shadow-lg shadow-orange-400/25 hover:shadow-orange-400/50 transition-all duration-300 group focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-black bg-transparent"
                >
                  <Github
                    className={`mr-2 h-4 w-4 ${!prefersReducedMotion ? "group-hover:animate-pulse" : ""}`}
                    aria-hidden="true"
                  />
                  GITHUB
                </Button>
              </Link>
              <Link href="#contact" scroll={true} aria-label="Go to contact section">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-orbitron tracking-wider shadow-lg shadow-cyan-400/25 hover:shadow-cyan-400/50 transition-all duration-300 group focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black bg-transparent"
                >
                  <Mail
                    className={`mr-2 h-4 w-4 ${!prefersReducedMotion ? "group-hover:animate-pulse" : ""}`}
                    aria-hidden="true"
                  />
                  CONTACT ME
                </Button>
              </Link>
            </nav>

            {/* Scroll indicator */}
            <div className="pt-16" role="region" aria-label="Scroll indicator">
              <div className="flex flex-col items-center space-y-2">
                <span className="text-cyan-400 font-orbitron text-sm tracking-wider">SCROLL TO EXPLORE</span>
                <div className="relative">
                  <ArrowDown
                    className={`h-6 w-6 text-cyan-400 ${!prefersReducedMotion ? "animate-bounce" : ""}`}
                    aria-hidden="true"
                  />
                  <div
                    className={`absolute inset-0 bg-cyan-400 blur-md opacity-50 ${!prefersReducedMotion ? "animate-pulse" : ""}`}
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
