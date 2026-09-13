"use client"

import { Quote } from "lucide-react"
import { useAppState } from "@/context/state-context"
import { ProjectedTitle, getTitleRevealDuration } from "@/components/projected-title"
import { Testimonials as AnimatedTestimonials } from "@/components/testimonials/testimonials"

const PAGE_TITLE = "TESTIMONIALS.LOG"
const contentRevealStyle = { animationDelay: `${getTitleRevealDuration(PAGE_TITLE)}ms` }

export function Testimonials() {
  const { testimonials } = useAppState()

  return (
    <section className="relative" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <header className="text-center pt-12">
            <div className="inline-flex items-center space-x-2 mb-4" aria-hidden="true">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-cyan-400" />
              <Quote className="h-6 w-6 text-cyan-400" />
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-cyan-400" />
            </div>
            <ProjectedTitle
              text={PAGE_TITLE}
              srLabel="Testimonials"
              id="testimonials-heading"
              as="h2"
              className="text-2xl sm:text-3xl lg:text-4xl font-orbitron font-bold mb-4 text-cyan-400 tracking-wide sm:tracking-wider"
            />
            <p className="text-base sm:text-lg text-cyan-100 font-inter fade-in-content" style={contentRevealStyle}>
              Testimonials from colleagues, mentees, and collaborators
            </p>
          </header>

          <AnimatedTestimonials testimonials={testimonials} autoplay />
        </div>
      </div>
    </section>
  )
}
