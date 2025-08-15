"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, ExternalLink, Github, Calendar, Users, Code, Target, Zap, Terminal, ChevronRight } from "lucide-react"

interface Project {
  id: number
  title: string
  shortTitle: string
  description: string
  detailedDescription: string
  technologies: string[]
  type: string
  status: string
  icon: any
  color: "cyan" | "orange"
  year: string
  duration: string
  team: string
  role: string
  challenges: string[]
  achievements: string[]
  links: {
    demo?: string
    github?: string
    live?: string
  }
}

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isProjecting, setIsProjecting] = useState(false)
  const [typedCommand, setTypedCommand] = useState("")
  const [showInitializing, setShowInitializing] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  // Accessibility refs
  const modalRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const firstFocusableRef = useRef<HTMLButtonElement>(null)

  // Check for reduced motion preference
  const prefersReducedMotion =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches

  const fullCommand = `project --load --id=${project.id} --mode=holographic`

  useEffect(() => {
    // Focus management
    if (closeButtonRef.current) {
      closeButtonRef.current.focus()
    }

    // Start projection effects (skip animations if reduced motion)
    if (prefersReducedMotion) {
      setIsProjecting(true)
      setIsVisible(true)
      setShowContent(true)
      setShowCursor(false)
    } else {
      setTimeout(() => setIsProjecting(true), 50)
      setTimeout(() => setIsVisible(true), 100)
      setTimeout(() => {
        startTypingAnimation()
      }, 800)
    }

    // Keyboard event handlers
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose()
      }
    }

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        )
        const firstElement = focusableElements[0] as HTMLElement
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault()
            lastElement.focus()
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault()
            firstElement.focus()
          }
        }
      }
    }

    document.addEventListener("keydown", handleEscape)
    document.addEventListener("keydown", handleTabKey)

    // Prevent body scroll
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.removeEventListener("keydown", handleTabKey)
      document.body.style.overflow = "unset"
    }
  }, [prefersReducedMotion])

  const startTypingAnimation = () => {
    let currentIndex = 0
    const typingSpeed = 80 // milliseconds per character

    const typeNextCharacter = () => {
      if (currentIndex < fullCommand.length) {
        setTypedCommand(fullCommand.substring(0, currentIndex + 1))
        currentIndex++
        setTimeout(typeNextCharacter, typingSpeed)
      } else {
        // Command typing complete, show initializing message
        setTimeout(() => {
          setShowInitializing(true)
          // Show content after initialization
          setTimeout(() => {
            setShowContent(true)
            setShowCursor(false)
          }, 2000)
        }, 500)
      }
    }

    typeNextCharacter()
  }

  const handleClose = () => {
    setIsVisible(false)
    setIsProjecting(false)
    setTimeout(() => onClose(), 300)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      aria-describedby="project-modal-description"
    >
      {/* Backdrop with projection effect */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          isVisible ? "bg-black/90 backdrop-blur-md" : "bg-transparent"
        }`}
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Projection Beam Effect - Hidden from screen readers */}
      {!prefersReducedMotion && (
        <div
          className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${isProjecting ? "opacity-100" : "opacity-0"}`}
          aria-hidden="true"
        >
          <div className="absolute inset-0 overflow-hidden">
            {/* Central projection source */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div
                className={`w-2 h-2 rounded-full ${
                  project.color === "cyan" ? "bg-cyan-400" : "bg-orange-400"
                } animate-pulse`}
                style={{
                  boxShadow: `0 0 20px ${project.color === "cyan" ? "#00ffff" : "#ff6b35"}, 0 0 40px ${project.color === "cyan" ? "#00ffff" : "#ff6b35"}, 0 0 60px ${project.color === "cyan" ? "#00ffff" : "#ff6b35"}`,
                }}
              />
            </div>

            {/* Projection beams */}
            <div className="absolute inset-0">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute top-1/2 left-1/2 origin-left h-px ${
                    project.color === "cyan"
                      ? "bg-gradient-to-r from-cyan-400/60 to-transparent"
                      : "bg-gradient-to-r from-orange-400/60 to-transparent"
                  }`}
                  style={{
                    width: "50vw",
                    transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                    animation: `projectBeam 2s ease-out ${i * 0.1}s`,
                  }}
                />
              ))}
            </div>

            {/* Scanning lines */}
            <div className="absolute inset-0">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-full h-px ${
                    project.color === "cyan"
                      ? "bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
                      : "bg-gradient-to-r from-transparent via-orange-400/40 to-transparent"
                  }`}
                  style={{
                    top: `${20 + i * 15}%`,
                    animation: `scanLine 3s ease-in-out infinite ${i * 0.5}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Modal with holographic projection effect */}
      <div
        ref={modalRef}
        className={`relative w-full transition-all duration-700 transform ${
          isVisible ? "scale-100 opacity-100 translate-y-0 rotate-0" : "scale-75 opacity-0 translate-y-8 rotate-x-12"
        } ${
          // Mobile responsive sizing
          "max-w-[95vw] sm:max-w-4xl max-h-[85vh] sm:max-h-[90vh] overflow-hidden"
        }`}
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Holographic shimmer overlay - Hidden from screen readers */}
        {!prefersReducedMotion && (
          <div
            className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
            aria-hidden="true"
          >
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
              style={{
                animation: "holographicShimmer 4s ease-in-out infinite",
                transform: "skewX(-20deg)",
              }}
            />
          </div>
        )}

        {/* Terminal Window with enhanced glassmorphism */}
        <div
          className={`relative bg-black/80 border-2 rounded-lg shadow-2xl backdrop-blur-xl transition-all duration-700 ${
            project.color === "cyan"
              ? "border-cyan-400/60 shadow-cyan-400/30"
              : "border-orange-400/60 shadow-orange-400/30"
          }`}
          style={{
            background: `linear-gradient(135deg, 
              rgba(0, 0, 0, 0.9) 0%, 
              rgba(${project.color === "cyan" ? "0, 255, 255" : "255, 107, 53"}, 0.1) 50%, 
              rgba(0, 0, 0, 0.9) 100%)`,
            boxShadow: `
              0 0 50px rgba(${project.color === "cyan" ? "0, 255, 255" : "255, 107, 53"}, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.1),
              inset 0 -1px 0 rgba(0, 0, 0, 0.5)
            `,
          }}
        >
          {/* Projection grid overlay - Hidden from screen readers */}
          <div className="absolute inset-0 pointer-events-none opacity-20" aria-hidden="true">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(${project.color === "cyan" ? "0, 255, 255" : "255, 107, 53"}, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(${project.color === "cyan" ? "0, 255, 255" : "255, 107, 53"}, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: "20px 20px",
              }}
            />
          </div>

          {/* Terminal Header with enhanced glow */}
          <header
            className={`flex items-center justify-between p-3 sm:p-4 border-b bg-gradient-to-r backdrop-blur-sm ${
              project.color === "cyan"
                ? "border-cyan-400/40 from-cyan-400/10 to-orange-400/5"
                : "border-orange-400/40 from-orange-400/10 to-cyan-400/5"
            }`}
          >
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="flex space-x-1 sm:space-x-2" aria-hidden="true">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full animate-pulse" />
                <div
                  className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                />
                <div
                  className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                />
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Terminal
                  className={`h-3 w-3 sm:h-4 sm:w-4 ${project.color === "cyan" ? "text-cyan-400" : "text-orange-400"}`}
                  aria-hidden="true"
                />
                <span
                  className={`font-orbitron text-xs sm:text-sm tracking-wider ${project.color === "cyan" ? "text-cyan-400" : "text-orange-400"}`}
                >
                  HOLOGRAPHIC_TERMINAL.EXE
                </span>
              </div>
            </div>
            <Button
              ref={closeButtonRef}
              variant="ghost"
              size="icon"
              onClick={handleClose}
              className={`${project.color === "cyan" ? "text-cyan-400 hover:text-orange-400 hover:bg-cyan-400/10" : "text-orange-400 hover:text-cyan-400 hover:bg-orange-400/10"} transition-all duration-300 h-8 w-8 sm:h-auto sm:w-auto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black ${project.color === "cyan" ? "focus:ring-cyan-400" : "focus:ring-orange-400"}`}
              aria-label={`Close ${project.title} project details`}
            >
              <X className="h-4 w-4" />
            </Button>
          </header>

          {/* Terminal Content with enhanced styling */}
          <main className="p-4 sm:p-6 max-h-[70vh] sm:max-h-[70vh] overflow-y-auto custom-scrollbar">
            {/* Command Prompt with typing effect */}
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-green-400 font-orbitron" aria-hidden="true">
                  user@hologram:~$
                </span>
                <span className="text-cyan-100 font-mono" aria-live="polite" aria-label="Terminal command">
                  {typedCommand}
                  {showCursor && (
                    <span className="animate-pulse" aria-hidden="true">
                      █
                    </span>
                  )}
                </span>
              </div>

              {/* Initializing message */}
              {showInitializing && (
                <div
                  className={`font-mono text-sm ${project.color === "cyan" ? "text-cyan-400" : "text-orange-400"}`}
                  aria-live="polite"
                >
                  <div className="flex items-center space-x-2">
                    <span>Initializing holographic projection</span>
                    {!prefersReducedMotion && (
                      <div className="flex space-x-1" aria-hidden="true">
                        <span className="animate-bounce">.</span>
                        <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>
                          .
                        </span>
                        <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>
                          .
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="mt-1">
                    <span>Loading project data...</span>
                    {!showContent && (
                      <span className="animate-pulse ml-1" aria-hidden="true">
                        █
                      </span>
                    )}
                  </div>
                  {showContent && (
                    <div className="mt-1 text-green-400">✓ Projection stabilized. Data stream active.</div>
                  )}
                </div>
              )}
            </div>

            {/* Project Content - Only show after typing sequence or immediately if reduced motion */}
            {(showContent || prefersReducedMotion) && (
              <div className={prefersReducedMotion ? "" : "animate-in fade-in duration-1000"}>
                {/* Project Header with enhanced glow */}
                <section
                  className={`mb-6 sm:mb-8 p-3 sm:p-4 border rounded backdrop-blur-sm ${
                    project.color === "cyan"
                      ? "border-cyan-400/40 bg-gradient-to-r from-cyan-400/10 to-orange-400/5"
                      : "border-orange-400/40 bg-gradient-to-r from-orange-400/10 to-cyan-400/5"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 space-y-3 sm:space-y-0">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <project.icon
                          className={`h-6 w-6 sm:h-8 sm:w-8 ${project.color === "cyan" ? "text-cyan-400" : "text-orange-400"}`}
                          aria-hidden="true"
                        />
                        {!prefersReducedMotion && (
                          <div
                            className={`absolute inset-0 ${
                              project.color === "cyan" ? "bg-cyan-400" : "bg-orange-400"
                            } blur-md opacity-40 animate-pulse`}
                            aria-hidden="true"
                          />
                        )}
                      </div>
                      <div>
                        <h1
                          id="project-modal-title"
                          className={`text-lg sm:text-2xl font-orbitron font-bold tracking-wider ${project.color === "cyan" ? "text-cyan-400" : "text-orange-400"}`}
                        >
                          {project.title}
                        </h1>
                        <p id="project-modal-description" className="text-cyan-100 font-inter text-sm sm:text-base">
                          {project.description}
                        </p>
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className={`font-orbitron text-xs tracking-wider self-start ${
                        project.status === "ACTIVE"
                          ? "border-green-400/50 text-green-400 bg-green-400/10"
                          : project.status === "PRODUCTION"
                            ? "border-orange-400/50 text-orange-400 bg-orange-400/10"
                            : "border-cyan-400/50 text-cyan-400 bg-cyan-400/10"
                      }`}
                    >
                      {project.status}
                    </Badge>
                  </div>

                  {/* Project Meta with enhanced styling */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar
                        className={`h-3 w-3 sm:h-4 sm:w-4 ${project.color === "cyan" ? "text-orange-400" : "text-cyan-400"}`}
                        aria-hidden="true"
                      />
                      <span className="text-cyan-100 font-inter text-xs sm:text-sm">{project.year}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Zap
                        className={`h-3 w-3 sm:h-4 sm:w-4 ${project.color === "cyan" ? "text-orange-400" : "text-cyan-400"}`}
                        aria-hidden="true"
                      />
                      <span className="text-cyan-100 font-inter text-xs sm:text-sm">{project.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users
                        className={`h-3 w-3 sm:h-4 sm:w-4 ${project.color === "cyan" ? "text-orange-400" : "text-cyan-400"}`}
                        aria-hidden="true"
                      />
                      <span className="text-cyan-100 font-inter text-xs sm:text-sm">{project.team}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Target
                        className={`h-3 w-3 sm:h-4 sm:w-4 ${project.color === "cyan" ? "text-orange-400" : "text-cyan-400"}`}
                        aria-hidden="true"
                      />
                      <span className="text-cyan-100 font-inter text-xs sm:text-sm">{project.role}</span>
                    </div>
                  </div>
                </section>

                {/* Detailed Description */}
                <section className="mb-6">
                  <h2
                    className={`text-lg font-orbitron font-bold tracking-wider mb-3 flex items-center ${project.color === "cyan" ? "text-orange-400" : "text-cyan-400"}`}
                  >
                    <Code className="h-5 w-5 mr-2" aria-hidden="true" />
                    PROJECT_OVERVIEW.DAT
                  </h2>
                  <p
                    className={`text-cyan-100 font-inter leading-relaxed border-l-2 pl-4 ${project.color === "cyan" ? "border-cyan-400/50" : "border-orange-400/50"}`}
                  >
                    {project.detailedDescription}
                  </p>
                </section>

                {/* Technologies */}
                <section className="mb-6">
                  <h2
                    className={`text-lg font-orbitron font-bold tracking-wider mb-3 ${project.color === "cyan" ? "text-orange-400" : "text-cyan-400"}`}
                  >
                    TECH_STACK.ARRAY
                  </h2>
                  <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
                    {project.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className={`text-xs font-inter transition-all duration-200 ${
                          project.color === "cyan"
                            ? "border-cyan-400/30 text-cyan-100 hover:border-cyan-400/60 hover:bg-cyan-400/10"
                            : "border-orange-400/30 text-cyan-100 hover:border-orange-400/60 hover:bg-orange-400/10"
                        }`}
                        role="listitem"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </section>

                {/* Challenges & Achievements */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Challenges */}
                  <section>
                    <h2
                      className={`text-lg font-orbitron font-bold tracking-wider mb-3 ${project.color === "cyan" ? "text-orange-400" : "text-cyan-400"}`}
                    >
                      CHALLENGES.LOG
                    </h2>
                    <ul className="space-y-2" role="list" aria-label="Project challenges">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <ChevronRight className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                          <span className="text-cyan-100 font-inter text-sm">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  {/* Achievements */}
                  <section>
                    <h2
                      className={`text-lg font-orbitron font-bold tracking-wider mb-3 ${project.color === "cyan" ? "text-orange-400" : "text-cyan-400"}`}
                    >
                      ACHIEVEMENTS.SUCCESS
                    </h2>
                    <ul className="space-y-2" role="list" aria-label="Project achievements">
                      {project.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <ChevronRight className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                          <span className="text-cyan-100 font-inter text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>

                {/* Action Buttons */}
                <nav
                  className={`flex flex-wrap gap-2 sm:gap-3 pt-4 border-t ${project.color === "cyan" ? "border-cyan-400/30" : "border-orange-400/30"}`}
                  aria-label="Project links"
                >
                  {project.links.demo && (
                    <Button
                      className={`font-orbitron text-xs tracking-wider transition-all duration-300 flex-1 sm:flex-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black ${
                        project.color === "cyan"
                          ? "bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-black focus:ring-cyan-400"
                          : "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-black focus:ring-orange-400"
                      }`}
                      onClick={() => window.open(project.links.demo, "_blank")}
                      aria-label={`View demo for ${project.title} (opens in new tab)`}
                    >
                      <ExternalLink className="h-3 w-3 mr-1 sm:mr-2" aria-hidden="true" />
                      DEMO
                    </Button>
                  )}
                  {project.links.github && (
                    <Button
                      variant="outline"
                      className={`font-orbitron text-xs tracking-wider transition-all duration-300 flex-1 sm:flex-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black ${
                        project.color === "cyan"
                          ? "border-orange-400/50 text-orange-400 hover:bg-orange-400/10 focus:ring-orange-400"
                          : "border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 focus:ring-cyan-400"
                      }`}
                      onClick={() => window.open(project.links.github, "_blank")}
                      aria-label={`View source code for ${project.title} on GitHub (opens in new tab)`}
                    >
                      <Github className="h-3 w-3 mr-1 sm:mr-2" aria-hidden="true" />
                      SOURCE
                    </Button>
                  )}
                  {project.links.live && (
                    <Button
                      variant="outline"
                      className={`font-orbitron text-xs tracking-wider transition-all duration-300 flex-1 sm:flex-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black ${
                        project.color === "cyan"
                          ? "border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 focus:ring-cyan-400"
                          : "border-orange-400/50 text-orange-400 hover:bg-orange-400/10 focus:ring-orange-400"
                      }`}
                      onClick={() => window.open(project.links.live, "_blank")}
                      aria-label={`Visit live site for ${project.title} (opens in new tab)`}
                    >
                      <ExternalLink className="h-3 w-3 mr-1 sm:mr-2" aria-hidden="true" />
                      LIVE_SITE
                    </Button>
                  )}
                </nav>

                {/* Terminal Footer */}
                <footer
                  className={`mt-6 pt-4 border-t ${project.color === "cyan" ? "border-cyan-400/30" : "border-orange-400/30"}`}
                >
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="text-green-400 font-orbitron" aria-hidden="true">
                      user@hologram:~$
                    </span>
                    <span
                      className={`font-mono ${project.color === "cyan" ? "text-cyan-400" : "text-orange-400"}`}
                      aria-hidden="true"
                    >
                      projection --terminate
                    </span>
                  </div>
                </footer>
              </div>
            )}
          </main>
        </div>
      </div>

      <style jsx>{`
        @keyframes projectBeam {
          0% { width: 0; opacity: 0; }
          50% { opacity: 1; }
          100% { width: 50vw; opacity: 0; }
        }

        @keyframes scanLine {
          0%, 100% { transform: translateX(-100%); opacity: 0; }
          50% { transform: translateX(100vw); opacity: 1; }
        }

        @keyframes holographicShimmer {
          0% { transform: translateX(-100%) skewX(-20deg); }
          100% { transform: translateX(200vw) skewX(-20deg); }
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #00ffff, #ff6b35);
          border-radius: 3px;
        }
      `}</style>
    </div>
  )
}
