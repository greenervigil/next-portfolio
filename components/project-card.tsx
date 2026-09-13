"use client"

import type { CSSProperties, KeyboardEvent } from "react"
import type { ProjectType } from "@/types/project-type"
import {
  GLASS_ACTIVE,
  GLASS_ACTIVE_BORDER,
  GLASS_AMBER,
  GLASS_AMBER_BORDER,
  GLASS_CORNER_TICK,
  GLASS_CYAN,
  GLASS_DIM,
  GLASS_EDGE,
  GLASS_EDGE_BRIGHT,
  GLASS_INK,
  GLASS_VOID,
  glassBackground,
} from "@/lib/glass-tokens"

interface ProjectCardProps {
  project: ProjectType
  delta: number
  reducedMotion: boolean
  onSelect: () => void
  onOpen: () => void
}

// Exact port of the approved prototype's card recipe and transform math
// (project-carousel.html) — every value below is copied 1:1 from that file's
// `.card` rules and `render()` function, not re-derived.
const EDGE = GLASS_EDGE
const EDGE_BRIGHT = GLASS_EDGE_BRIGHT
const CYAN = GLASS_CYAN
const INK = GLASS_INK
const DIM = GLASS_DIM
const VOID = GLASS_VOID

export function ProjectCard({ project, delta, reducedMotion, onSelect, onOpen }: ProjectCardProps) {
  const Icon = project.icon
  const isCenter = delta === 0
  const abs = Math.min(Math.abs(delta), 3)
  const offscreen = Math.abs(delta) > 3

  const scale = reducedMotion ? (isCenter ? 1 : 0.92) : 1 - abs * 0.16
  const opacity = reducedMotion ? (isCenter ? 1 : 0.65) : Math.max(1 - abs * 0.3, 0.12)
  const blur = reducedMotion ? 0 : abs * 1.6
  const xOffset = reducedMotion ? 0 : delta * 168
  const rotateY = reducedMotion || delta === 0 ? 0 : delta > 0 ? -14 : 14
  const z = reducedMotion ? 0 : -abs * 90

  const badgeColor =
    project.status === "ACTIVE"
      ? { color: GLASS_ACTIVE, border: GLASS_ACTIVE_BORDER }
      : project.status === "PRODUCTION"
        ? { color: GLASS_AMBER, border: GLASS_AMBER_BORDER }
        : { color: DIM, border: EDGE }

  const containerStyle: CSSProperties = {
    border: `1px solid ${EDGE}`,
    background: glassBackground,
    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)",
    transform: offscreen
      ? `translateX(${delta > 0 ? 900 : -900}px)`
      : `translateX(${xOffset}px) translateZ(${z}px) rotateY(${rotateY}deg) scale(${scale})`,
    opacity: offscreen ? 0 : opacity,
    filter: blur ? `blur(${blur}px)` : undefined,
    zIndex: 100 - abs,
    pointerEvents: offscreen ? "none" : "auto",
    transition: reducedMotion
      ? "none"
      : "transform 520ms cubic-bezier(.22,1,.36,1), opacity 520ms ease, filter 520ms ease",
    willChange: "transform, opacity, filter",
    boxShadow: isCenter ? "0 26px 50px -20px rgba(0,240,255,0.35)" : undefined,
  }

  const handleActivate = () => {
    if (isCenter) {
      onOpen()
    } else {
      onSelect()
    }
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      handleActivate()
    }
  }

  return (
    <div
      role="option"
      aria-selected={isCenter}
      tabIndex={offscreen ? -1 : 0}
      onClick={handleActivate}
      onKeyDown={handleKeyDown}
      aria-label={`${project.title}. Status: ${project.status}. ${
        isCenter ? "Press Enter to open project details." : "Press Enter to bring this project into focus."
      }`}
      aria-hidden={offscreen}
      className="absolute flex h-[260px] w-[190px] cursor-pointer flex-col overflow-hidden rounded-[4px] p-[18px_18px_20px] focus:outline-none min-[560px]:h-[300px] min-[560px]:w-[232px] min-[560px]:p-5"
      style={containerStyle}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-[10%] right-[10%] top-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${EDGE_BRIGHT}, transparent)` }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-[6px]"
        style={{ border: `1px solid ${GLASS_CORNER_TICK}` }}
      />

      <span
        className="self-start rounded-[2px] px-2 py-[3px] font-mono text-[9.5px] tracking-[0.1em]"
        style={{ border: `1px solid ${badgeColor.border}`, color: badgeColor.color }}
      >
        {project.status}
      </span>

      <div
        className="mt-[18px] flex h-10 w-10 items-center justify-center rounded-[3px]"
        style={{ border: `1px solid ${EDGE}`, background: "rgba(0,240,255,0.06)", color: CYAN }}
      >
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>

      <h3 className="mt-4 mb-2 font-orbitron text-[15px] font-bold leading-[1.3]" style={{ color: INK }}>
        {project.shortTitle}
      </h3>

      <div className="mt-auto font-mono text-[10px] tracking-[0.02em]" style={{ color: DIM }}>
        {project.technologies.slice(0, 3).join(" · ")}
      </div>

      <div
        className="mt-3 rounded-[2px] py-[9px] text-center font-orbitron text-[10.5px] uppercase tracking-[0.12em] transition-[opacity,transform] duration-200"
        style={{
          background: `linear-gradient(120deg, ${CYAN}, #6fe8ff)`,
          color: VOID,
          boxShadow: "0 0 20px -4px rgba(0,240,255,0.7)",
          opacity: isCenter ? 1 : 0,
          transform: isCenter ? "translateY(0)" : "translateY(4px)",
          pointerEvents: isCenter ? "auto" : "none",
        }}
      >
        Open File
      </div>
    </div>
  )
}
