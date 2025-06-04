"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { state } from "@/context/state"

interface Testimonial {
  name: string
  designation: string
  company: string
  src: string
  quote: string
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay) {
      interval = setInterval(() => {
        goToNext()
      }, 10000) // Change testimonial every 10 seconds
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [currentIndex, autoplay])

  const goToPrevious = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? state.testimonials.length - 1 : prevIndex - 1))
    setTimeout(() => setIsAnimating(false), 500)
    setAutoplay(false)
  }

  const goToNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === state.testimonials.length - 1 ? 0 : prevIndex + 1))
    setTimeout(() => setIsAnimating(false), 500)
    setAutoplay(false)
  }

  const goToTestimonial = (index: number) => {
    if (isAnimating || index === currentIndex) return
    setIsAnimating(true)
    setCurrentIndex(index)
    setTimeout(() => setIsAnimating(false), 500)
    setAutoplay(false)
  }

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-cyan-400" />
              <Quote className="h-6 w-6 text-cyan-400" />
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-cyan-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-orbitron font-bold mb-4 text-cyan-400 tracking-wider">
              TESTIMONIALS.LOG
            </h2>
            <p className="text-lg text-cyan-100 font-inter">Testimonials from colleagues, mentees, and collaborators</p>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative">
            {/* Testimonial Card */}
            <div className="relative overflow-hidden">
              <div
                className={`transition-opacity duration-500 ${isAnimating ? "opacity-0" : "opacity-100"}`}
                style={{ minHeight: "400px" }}
              >
                <Card className="bg-black/50 border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 backdrop-blur-sm relative overflow-hidden">
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/5 to-orange-400/5 opacity-60 transition-opacity duration-300" />

                  {/* Circuit lines */}
                  <div className="absolute inset-0 pointer-events-none">
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
                              alt={state.testimonials[currentIndex].name}
                              width={96}
                              height={96}
                              className="object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                          <div className="absolute -inset-1 bg-cyan-400 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300 -z-10" />
                        </div>

                        <div className="text-center md:text-left">
                          <h3 className="font-orbitron font-bold text-cyan-400 tracking-wider">
                            {state.testimonials[currentIndex].name}
                          </h3>
                          <p className="text-sm text-cyan-100 font-inter">{state.testimonials[currentIndex].designation}</p>
                          <p className="text-sm text-orange-400 font-inter">{state.testimonials[currentIndex].company}</p>
                        </div>

                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-orange-400 fill-current" />
                          ))}
                        </div>
                      </div>

                      {/* Quote */}
                      <div className="md:w-3/4 space-y-4">
                        <div className="relative">
                          <Quote className="h-8 w-8 text-cyan-400 mb-2" />
                          <div className="absolute inset-0 bg-cyan-400 blur-md opacity-20 transition-opacity duration-300" />
                        </div>

                        <div className="relative">
                          <div className="max-h-[300px] overflow-y-auto pr-4 custom-scrollbar">
                            <p className="text-cyan-100 font-inter leading-relaxed border-l-2 border-cyan-400/50 pl-4">
                              "{state.testimonials[currentIndex].quote}"
                            </p>
                          </div>
                          {/* Fade out effect at the bottom if content is scrollable */}
                          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-6">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrevious}
                className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <div className="flex space-x-2">
                {state.testimonials.map((_: Testimonial, index: number) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentIndex === index ? "w-6 bg-cyan-400" : "bg-cyan-400/30 hover:bg-cyan-400/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
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
