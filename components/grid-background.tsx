"use client"

import { useEffect, useRef } from "react"

// Matches the "Holographic Glass" design direction: a grid pattern masked so
// it fades out toward the edges, plus two soft ambient glows (cyan / amber)
// standing in for light the glass panels catch. The grid itself stays put;
// the glow layer drifts a little on scroll for a subtle sense of depth —
// gated behind prefers-reduced-motion since it's the only moving part here.
export function GridBackground() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (mediaQuery.matches) return

    let ticking = false
    const handleScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        if (glowRef.current) {
          glowRef.current.style.transform = `translateY(${window.scrollY * 0.06}px)`
        }
        ticking = false
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(148, 226, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 226, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "42px 42px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 20%, black 0%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 20%, black 0%, transparent 75%)",
        }}
      />
      <div
        ref={glowRef}
        className="absolute"
        style={{
          inset: "-20% -10%",
          background: `
            radial-gradient(circle at 18% 12%, rgba(0, 240, 255, 0.10), transparent 42%),
            radial-gradient(circle at 84% 78%, rgba(255, 122, 61, 0.08), transparent 46%)
          `,
        }}
      />
    </div>
  )
}
