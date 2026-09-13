"use client"

import { useCallback, type ElementType, type HTMLAttributes, type MouseEvent, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { GLASS_CORNER_TICK, GLASS_EDGE, GLASS_EDGE_BRIGHT, glassBackground } from "@/lib/glass-tokens"

interface GlassPanelProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  as?: ElementType
  /** Brightens the border and adds the focused glow, matching the carousel's centered card. */
  active?: boolean
  /** Set false to skip the specular seam, corner-tick, and cursor glint — for contexts (like a full-width nav bar) where they'd look out of place. */
  showDetails?: boolean
  className?: string
}

/**
 * The shared "holographic glass" surface: translucent panel fill with a
 * diagonal specular sheen, a top light seam, an inset corner-tick border,
 * a cursor-tracked glint, and a one-time materialize-in on mount. This is
 * the same recipe already shipped on the project cards, generalized so
 * other sections can adopt it without re-deriving the values.
 */
export function GlassPanel({
  children,
  as: Tag = "div",
  active = false,
  showDetails = true,
  className,
  style,
  onMouseMove,
  ...rest
}: GlassPanelProps) {
  const handleMouseMove = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      const rect = event.currentTarget.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / rect.width) * 100
      const y = ((event.clientY - rect.top) / rect.height) * 100
      event.currentTarget.style.setProperty("--glint-x", `${x}%`)
      event.currentTarget.style.setProperty("--glint-y", `${y}%`)
      onMouseMove?.(event)
    },
    [onMouseMove],
  )

  return (
    <Tag
      className={cn("group relative overflow-hidden rounded-[4px] animate-materialize", className)}
      onMouseMove={handleMouseMove}
      style={{
        border: `1px solid ${GLASS_EDGE}`,
        background: glassBackground,
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        boxShadow: active ? "0 26px 50px -20px rgba(0,240,255,0.35)" : undefined,
        ...style,
      }}
      {...rest}
    >
      {showDetails && (
        <>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-[10%] right-[10%] top-0 h-px"
            style={{ background: `linear-gradient(90deg, transparent, ${GLASS_EDGE_BRIGHT}, transparent)` }}
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-[6px]"
            style={{ border: `1px solid ${GLASS_CORNER_TICK}` }}
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(220px circle at var(--glint-x, 50%) var(--glint-y, 0%), rgba(255,255,255,0.10), transparent 60%)",
            }}
          />
        </>
      )}
      {children}
    </Tag>
  )
}
