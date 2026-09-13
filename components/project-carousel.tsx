"use client"

import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ProjectCard } from "./project-card"
import type { ProjectType } from "@/types/project-type"
import { GLASS_CYAN, GLASS_DIM_2, GLASS_EDGE, GLASS_PANEL } from "@/lib/glass-tokens"

interface ProjectCarouselProps {
  projects: ProjectType[]
  onOpen: (project: ProjectType) => void
}

// Exact port of the approved prototype's stage/track/arrow/dots recipe
// (project-carousel.html) — values copied 1:1 from that file's CSS, not
// re-derived. The prototype has no drag/swipe physics either (click, arrow
// buttons, and arrow keys only), so this mirrors it exactly rather than
// layering the same look on top of a scroll-snap carousel.
const EDGE = GLASS_EDGE
const PANEL = GLASS_PANEL
const CYAN = GLASS_CYAN
const DIM_2 = GLASS_DIM_2

export function ProjectCarousel({ projects, onOpen }: ProjectCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)
  const announceRef = useRef<HTMLDivElement>(null)
  const count = projects.length

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(mediaQuery.matches)

    const handleChange = (event: MediaQueryListEvent) => setReducedMotion(event.matches)
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  const goTo = useCallback(
    (index: number) => {
      if (count === 0) return
      const next = ((index % count) + count) % count
      setActiveIndex(next)
      if (announceRef.current && projects[next]) {
        announceRef.current.textContent = `Now focused: ${projects[next].title}, project ${next + 1} of ${count}`
      }
    },
    [count, projects],
  )

  const scrollPrev = useCallback(() => goTo(activeIndex - 1), [goTo, activeIndex])
  const scrollNext = useCallback(() => goTo(activeIndex + 1), [goTo, activeIndex])

  const handleStageKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault()
      scrollPrev()
    } else if (event.key === "ArrowRight") {
      event.preventDefault()
      scrollNext()
    }
  }

  const wrapDelta = useCallback(
    (index: number) => {
      if (count === 0) return 0
      let d = index - activeIndex
      const half = count / 2
      if (d > half) d -= count
      if (d < -half) d += count
      return d
    },
    [count, activeIndex],
  )

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <div className="sr-only" role="status" aria-live="polite" ref={announceRef} />

      <div className="flex items-center gap-[18px]">
        <button
          type="button"
          onClick={scrollPrev}
          aria-label="Previous project"
          className="flex h-[46px] w-[46px] flex-none items-center justify-center rounded-full transition-[border-color,box-shadow,transform] duration-150 hover:!border-[rgba(150,245,255,0.8)] active:scale-[0.94] focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
          style={{
            border: `1px solid ${EDGE}`,
            background: PANEL,
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            color: CYAN,
            boxShadow: "0 0 0 1px rgba(0,0,0,0.4), 0 0 18px -6px rgba(0,240,255,0.5)",
          }}
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="min-w-0 flex-1">
          <div
            role="listbox"
            aria-label="Projects"
            tabIndex={0}
            onKeyDown={handleStageKeyDown}
            className="relative h-[320px] overflow-hidden focus:outline-none min-[560px]:h-[380px]"
            style={{ perspective: reducedMotion ? undefined : "1400px" }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 z-[5] w-[14%]"
              style={{ background: "linear-gradient(90deg, black, transparent)" }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 z-[5] w-[14%]"
              style={{ background: "linear-gradient(270deg, black, transparent)" }}
            />

            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ transformStyle: reducedMotion ? undefined : "preserve-3d" }}
            >
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  delta={wrapDelta(index)}
                  reducedMotion={reducedMotion}
                  onSelect={() => goTo(index)}
                  onOpen={() => onOpen(project)}
                />
              ))}
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={scrollNext}
          aria-label="Next project"
          className="flex h-[46px] w-[46px] flex-none items-center justify-center rounded-full transition-[border-color,box-shadow,transform] duration-150 hover:!border-[rgba(150,245,255,0.8)] active:scale-[0.94] focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
          style={{
            border: `1px solid ${EDGE}`,
            background: PANEL,
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            color: CYAN,
            boxShadow: "0 0 0 1px rgba(0,0,0,0.4), 0 0 18px -6px rgba(0,240,255,0.5)",
          }}
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <div className="flex items-center justify-center gap-[14px] font-mono text-[11px]" style={{ color: DIM_2 }}>
        <span aria-hidden="true">
          {String(activeIndex + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
        </span>
        <div className="flex flex-wrap justify-center gap-[7px]">
          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to project ${index + 1}: ${project.title}`}
              aria-current={index === activeIndex}
              className="h-[6px] w-[6px] rounded-full transition-[background,box-shadow] duration-200 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
              style={{
                background: index === activeIndex ? CYAN : "rgba(148,226,255,0.25)",
                boxShadow: index === activeIndex ? "0 0 8px 1px rgba(0,240,255,0.6)" : undefined,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
