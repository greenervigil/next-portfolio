"use client"

import { useEffect, useState } from "react"

export function GridBackground() {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setShouldReduceMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setShouldReduceMotion(e.matches)
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Animated grid lines - disabled for reduced motion */}
      {!shouldReduceMotion && (
        <>
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: `
                linear-gradient(90deg, transparent 0%, rgba(34, 211, 238, 0.2) 50%, transparent 100%)
              `,
              animation: "grid-scan-horizontal 8s ease-in-out infinite alternate",
            }}
          />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: `
                linear-gradient(0deg, transparent 0%, rgba(251, 146, 60, 0.2) 50%, transparent 100%)
              `,
              animation: "grid-scan-vertical 6s ease-in-out infinite alternate-reverse",
            }}
          />
        </>
      )}

      <style jsx>{`
        @keyframes grid-scan-horizontal {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes grid-scan-vertical {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </div>
  )
}
