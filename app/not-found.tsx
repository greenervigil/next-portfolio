"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search, AlertTriangle, Zap, Terminal, ArrowLeft, WifiOff } from "lucide-react"

export default function NotFound() {
  const [mounted, setMounted] = useState(false)
  const [glitchText, setGlitchText] = useState("404")
  const [terminalText, setTerminalText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [scanlinePosition, setScanlinePosition] = useState(0)

  const fullTerminalText = "ERROR: PAGE_NOT_FOUND.EXE"

  useEffect(() => {
    setMounted(true)

    // Glitch effect for 404
    const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?"
    const originalText = "404"

    const glitchInterval = setInterval(() => {
      let glitched = originalText
      for (let i = 0; i < 2; i++) {
        const randomIndex = Math.floor(Math.random() * originalText.length)
        const randomChar = glitchChars[Math.floor(Math.random() * glitchChars.length)]
        glitched = glitched.substring(0, randomIndex) + randomChar + glitched.substring(randomIndex + 1)
      }
      setGlitchText(glitched)

      setTimeout(() => setGlitchText(originalText), 150)
    }, 2000)

    // Terminal typing effect
    let currentIndex = 0
    const typingSpeed = 100

    const typeNextCharacter = () => {
      if (currentIndex < fullTerminalText.length) {
        setTerminalText(fullTerminalText.substring(0, currentIndex + 1))
        currentIndex++
        setTimeout(typeNextCharacter, typingSpeed)
      }
    }

    setTimeout(typeNextCharacter, 1000)

    // Cursor blinking
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    // Scanning line animation
    const scanInterval = setInterval(() => {
      setScanlinePosition((prev) => (prev + 1) % 100)
    }, 50)

    return () => {
      clearInterval(glitchInterval)
      clearInterval(cursorInterval)
      clearInterval(scanInterval)
    }
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Main grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Animated scanning lines */}
        <div className="absolute inset-0">
          <div
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"
            style={{
              top: `${scanlinePosition}%`,
              transition: "top 0.05s linear",
            }}
          />
          <div
            className="absolute h-full w-px bg-gradient-to-b from-transparent via-orange-400 to-transparent opacity-60"
            style={{
              left: `${(scanlinePosition * 1.3) % 100}%`,
              transition: "left 0.05s linear",
            }}
          />
        </div>

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
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

        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-cyan-400 opacity-60" />
        <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-orange-400 opacity-60" />
        <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-orange-400 opacity-60" />
        <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-cyan-400 opacity-60" />
      </div>

      {/* Main Content */}
      <div className="container mt-20 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* System Status */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 border border-red-400/30 rounded-full bg-red-400/5 backdrop-blur-sm">
            <WifiOff className="w-3 h-3 text-red-400 animate-pulse" />
            <span className="text-red-400 font-orbitron text-sm tracking-wider">CONNECTION_LOST</span>
          </div>

          {/* Giant 404 with Glitch Effect */}
          <div className="relative">
            <h1 className="text-8xl sm:text-9xl lg:text-[12rem] font-orbitron font-bold tracking-tight">
              <span className="block text-cyan-400 glitch-text relative" data-text={glitchText}>
                {glitchText}
                {/* Multiple glitch layers */}
                <span
                  className="absolute inset-0 text-orange-400 opacity-70 animate-pulse"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)" }}
                >
                  {glitchText}
                </span>
                <span
                  className="absolute inset-0 text-red-400 opacity-50 animate-pulse"
                  style={{ clipPath: "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)", animationDelay: "0.5s" }}
                >
                  {glitchText}
                </span>
              </span>
            </h1>
            <div className="absolute inset-0 bg-cyan-400 blur-3xl opacity-20 animate-pulse" />
          </div>

          {/* Terminal Window */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-black/80 border-2 border-cyan-400/60 rounded-lg shadow-2xl shadow-cyan-400/30 backdrop-blur-xl relative overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center justify-between p-4 border-b border-cyan-400/40 bg-gradient-to-r from-cyan-400/10 to-orange-400/5">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                    <div
                      className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    />
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Terminal className="h-4 w-4 text-cyan-400" />
                    <span className="text-cyan-400 font-orbitron text-sm tracking-wider">SYSTEM_TERMINAL.EXE</span>
                  </div>
                </div>
                <AlertTriangle className="h-5 w-5 text-orange-400 animate-pulse" />
              </div>

              {/* Terminal Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="text-green-400 font-orbitron">user@portfolio:~$</span>
                  <span className="text-cyan-100 font-mono">
                    {terminalText}
                    {showCursor && <span className="animate-pulse">█</span>}
                  </span>
                </div>

                <div className="space-y-2 text-left">
                  <div className="text-red-400 font-mono text-sm">
                    <span className="text-orange-400">[ERROR]</span> The requested page could not be located in the
                    system matrix.
                  </div>
                  <div className="text-cyan-400 font-mono text-sm">
                    <span className="text-green-400">[INFO]</span> Possible causes: URL corruption, temporal
                    displacement, or reality glitch.
                  </div>
                  <div className="text-orange-400 font-mono text-sm">
                    <span className="text-cyan-400">[SUGGESTION]</span> Initiating navigation protocols...
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-orbitron font-bold text-orange-400 tracking-wider">
              PAGE_NOT_FOUND.EXE
            </h2>
            <p className="text-lg text-cyan-100 font-inter max-w-2xl mx-auto">
              The page you're looking for has been lost in the digital void. Perhaps it was consumed by a rogue
              algorithm or displaced by a temporal anomaly.
            </p>
          </div>

          {/* Navigation Options */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link href="/">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-black font-orbitron tracking-wider border border-cyan-400 shadow-lg shadow-cyan-400/25 hover:shadow-cyan-400/50 transition-all duration-300 group"
              >
                <Home className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                RETURN_HOME
              </Button>
            </Link>

            <Link href="/#projects">
              <Button
                variant="outline"
                size="lg"
                className="border-orange-400 text-orange-400 hover:bg-orange-400/10 font-orbitron tracking-wider shadow-lg shadow-orange-400/25 hover:shadow-orange-400/50 transition-all duration-300 group"
              >
                <Search className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                EXPLORE_PROJECTS
              </Button>
            </Link>

            <Link href="/#contact">
              <Button
                variant="outline"
                size="lg"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-orbitron tracking-wider shadow-lg shadow-cyan-400/25 hover:shadow-cyan-400/50 transition-all duration-300 group"
              >
                <Zap className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                CONTACT_ADMIN
              </Button>
            </Link>
          </div>

          {/* Back Navigation */}
          <div className="pt-8">
            <Button
              variant="ghost"
              onClick={() => window.history.back()}
              className="text-cyan-400 hover:text-orange-400 hover:bg-cyan-400/10 font-orbitron tracking-wider transition-all duration-300 group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:animate-pulse" />
              GO_BACK
            </Button>
          </div>

          {/* System Info */}
          <div className="py-8 border-t border-cyan-400/20">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-cyan-100/70 font-mono">
              <span>ERROR_CODE: 404_PAGE_NOT_FOUND</span>
              <span className="hidden sm:block">|</span>
              <span>TIMESTAMP: {new Date().toISOString()}</span>
              <span className="hidden sm:block">|</span>
              <span>STATUS: SYSTEM_OPERATIONAL</span>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Visual Effects */}
      <div className="fixed inset-0 pointer-events-none z-5">
        {/* Holographic interference */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent"
          style={{
            animation: "holographicSweep 8s ease-in-out infinite",
            transform: "skewX(-20deg)",
          }}
        />

        {/* Static noise overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            animation: "staticNoise 0.1s infinite",
          }}
        />
      </div>

      <style jsx>{`
        @keyframes holographicSweep {
          0% { transform: translateX(-100vw) skewX(-20deg); }
          100% { transform: translateX(200vw) skewX(-20deg); }
        }

        @keyframes staticNoise {
          0% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -5%); }
          20% { transform: translate(-10%, 5%); }
          30% { transform: translate(5%, -10%); }
          40% { transform: translate(-5%, 15%); }
          50% { transform: translate(-10%, 5%); }
          60% { transform: translate(15%, 0); }
          70% { transform: translate(0, 10%); }
          80% { transform: translate(-15%, 0); }
          90% { transform: translate(10%, 5%); }
          100% { transform: translate(5%, 0); }
        }

        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .glitch-text::before {
          animation: glitch-1 0.5s infinite;
          color: #ff6b35;
          z-index: -1;
        }

        .glitch-text::after {
          animation: glitch-2 0.5s infinite;
          color: #00ffff;
          z-index: -2;
        }

        @keyframes glitch-1 {
          0%, 14%, 15%, 49%, 50%, 99%, 100% {
            transform: translate(0);
          }
          15%, 49% {
            transform: translate(-2px, 2px);
          }
        }

        @keyframes glitch-2 {
          0%, 20%, 21%, 62%, 63%, 99%, 100% {
            transform: translate(0);
          }
          21%, 62% {
            transform: translate(2px, -2px);
          }
        }
      `}</style>
    </div>
  )
}
