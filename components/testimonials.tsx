"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { state } from "@/context/state"
import { Testimonial } from "@/types/testimonial-type"

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [autoplay, setAutoplay] = useState(true)
  const [reducedMotion, setReducedMotion] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const announceRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches)
      if (e.matches) {
        setAutoplay(false)
      }
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay && !reducedMotion) {
      interval = setInterval(() => {
        goToNext()
      }, 10000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [currentIndex, autoplay, reducedMotion])

  const announceChange = (index: number) => {
    if (announceRef.current) {
      const testimonial = state.testimonials[index]
      announceRef.current.textContent = `Now showing testimonial ${index + 1} of ${state.testimonials.length} from ${testimonial.name}, ${testimonial.designation} at ${testimonial.company}`
    }
  }

  const goToPrevious = () => {
    if (isAnimating) return
    setIsAnimating(true)
    const newIndex = currentIndex === 0 ? state.testimonials.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    announceChange(newIndex)
    setTimeout(() => setIsAnimating(false), reducedMotion ? 0 : 500)
  }

  const goToNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    const newIndex = currentIndex === state.testimonials.length - 1 ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    announceChange(newIndex)
    setTimeout(() => setIsAnimating(false), reducedMotion ? 0 : 500)
  }

  const goToTestimonial = (index: number) => {
    if (isAnimating || index === currentIndex) return
    setIsAnimating(true)
    setCurrentIndex(index)
    announceChange(index)
    setTimeout(() => setIsAnimating(false), reducedMotion ? 0 : 500)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case "ArrowLeft":
        event.preventDefault()
        goToPrevious()
        break
      case "ArrowRight":
        event.preventDefault()
        goToNext()
        break
      case "Home":
        event.preventDefault()
        goToTestimonial(0)
        break
      case "End":
        event.preventDefault()
        goToTestimonial(state.testimonials.length - 1)
        break
    }
  }

  const toggleAutoplay = () => {
    setAutoplay(!autoplay)
  }

  return (
    <section className="py-20 relative" aria-labelledby="testimonials-heading">
      <a
        href="#testimonials-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-400 text-black px-4 py-2 rounded z-50"
      >
        Skip to testimonials content
      </a>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4" aria-hidden="true">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-cyan-400" />
              <Quote className="h-6 w-6 text-cyan-400" />
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-cyan-400" />
            </div>
            <h2
              id="testimonials-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-orbitron font-bold mb-4 text-cyan-400 tracking-wide sm:tracking-wider"
            >
              <span className="block sm:hidden">TESTIMONIALS</span>
              <span className="hidden sm:block">TESTIMONIALS.LOG</span>
            </h2>
            <p className="text-base sm:text-lg text-cyan-100 font-inter">
              Testimonials from colleagues, mentees, and collaborators
            </p>
          </header>

          <div ref={announceRef} className="sr-only" aria-live="polite" aria-atomic="true" />

          {/* Testimonial Carousel */}
          <div
            id="testimonials-content"
            className="relative"
            role="region"
            aria-label="Testimonials carousel"
            aria-describedby="carousel-instructions"
            onKeyDown={handleKeyDown}
            tabIndex={0}
            ref={carouselRef}
          >
            <div id="carousel-instructions" className="sr-only">
              Use arrow keys to navigate between testimonials, Home and End keys to go to first and last testimonial
            </div>

            {/* Testimonial Card */}
            <div className="relative overflow-hidden">
              <div
                className={`transition-opacity ${reducedMotion ? "" : "duration-500"} ${isAnimating && !reducedMotion ? "opacity-0" : "opacity-100"}`}
                style={{ minHeight: "400px" }}
                role="tabpanel"
                aria-labelledby={`testimonial-${currentIndex}`}
                aria-describedby={`testimonial-content-${currentIndex}`}
              >
                <Card className="bg-black/50 border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 backdrop-blur-sm relative overflow-hidden focus-within:ring-2 focus-within:ring-cyan-400 focus-within:ring-offset-2 focus-within:ring-offset-black">
                  {/* Animated background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-b from-cyan-400/5 to-orange-400/5 opacity-60 ${reducedMotion ? "" : "transition-opacity duration-300"}`}
                    aria-hidden="true"
                  />

                  {/* Circuit lines */}
                  <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                    <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
                    <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400/20 to-transparent" />
                    <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent" />
                    <div className="absolute right-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-orange-400/20 to-transparent" />
                  </div>

                  <CardContent className="p-6 md:p-8 relative z-10">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      {/* Avatar and Info */}
                      <div className="flex flex-col items-center md:items-start space-y-4 md:w-1/4">
                        <div className="relative group">
                          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-cyan-400/50 relative">
                            <Image
                              src={state.testimonials[currentIndex].src || "/placeholder.svg"}
                              alt={`${state.testimonials[currentIndex].name}, ${state.testimonials[currentIndex].designation} at ${state.testimonials[currentIndex].company}`}
                              width={96}
                              height={96}
                              className="object-cover w-full h-full"
                            />
                            <div
                              className={`absolute inset-0 bg-gradient-to-tr from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 ${reducedMotion ? "" : "transition-opacity duration-300"}`}
                              aria-hidden="true"
                            />
                          </div>
                          <div
                            className={`absolute -inset-1 bg-cyan-400 rounded-full blur-md opacity-30 group-hover:opacity-50 ${reducedMotion ? "" : "transition-opacity duration-300"} -z-10`}
                            aria-hidden="true"
                          />
                        </div>

                        <div className="text-center md:text-left">
                          <h3
                            id={`testimonial-${currentIndex}`}
                            className="font-orbitron font-bold text-cyan-400 tracking-wider"
                          >
                            {state.testimonials[currentIndex].name}
                          </h3>
                          <p className="text-sm text-cyan-100 font-inter">{state.testimonials[currentIndex].designation}</p>
                          <p className="text-sm text-orange-400 font-inter">{state.testimonials[currentIndex].company}</p>
                        </div>

                        <div className="flex space-x-1" role="img" aria-label="5 star rating">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-orange-400 fill-current" aria-hidden="true" />
                          ))}
                        </div>
                      </div>

                      {/* Quote */}
                      <div className="md:w-3/4 space-y-4">
                        <div className="relative">
                          <Quote className="h-8 w-8 text-cyan-400 mb-2" aria-hidden="true" />
                          <div
                            className={`absolute inset-0 bg-cyan-400 blur-md opacity-20 ${reducedMotion ? "" : "transition-opacity duration-300"}`}
                            aria-hidden="true"
                          />
                        </div>

                        <div className="relative">
                          <div className="max-h-[300px] overflow-y-auto pr-4 custom-scrollbar">
                            <blockquote
                              id={`testimonial-content-${currentIndex}`}
                              className="text-cyan-100 font-inter leading-relaxed border-l-2 border-cyan-400/50 pl-4"
                            >
                              "{state.testimonials[currentIndex].quote}"
                            </blockquote>
                          </div>
                          {/* Fade out effect at the bottom if content is scrollable */}
                          <div
                            className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-between items-center mt-6">
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={goToPrevious}
                  className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black bg-transparent"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={toggleAutoplay}
                  className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black bg-transparent"
                  aria-label={autoplay ? "Pause automatic rotation" : "Start automatic rotation"}
                  disabled={reducedMotion}
                >
                  {autoplay ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>
              </div>

              <div className="flex space-x-2" role="tablist" aria-label="Testimonial navigation">
                {state.testimonials.map((testimonial: Testimonial, index: number) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`rounded-full transition-all duration-300 focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black ${
                      currentIndex === index ? "w-6 h-2 bg-cyan-400" : "w-2 h-2 bg-cyan-400/30 hover:bg-cyan-400/50"
                    }`}
                    role="tab"
                    aria-selected={currentIndex === index}
                    aria-controls={`testimonial-content-${index}`}
                    aria-label={`Show testimonial from ${testimonial.name}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black bg-transparent"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            <div className="text-center mt-4">
              <span className="text-sm text-cyan-100/70 font-inter">
                Testimonial {currentIndex + 1} of {state.testimonials.length}
                {autoplay && !reducedMotion && <span className="ml-2">(Auto-rotating)</span>}
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #00ffff, #ff6b35);
          border-radius: 2px;
        }
      `}</style>
    </section>
  )
}
