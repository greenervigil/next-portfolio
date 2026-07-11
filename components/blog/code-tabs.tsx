"use client"

import { Children, isValidElement, useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react"

type CodeTabsProps = {
  labels: string[]
  children: ReactNode
}

export function CodeTabs({ labels, children }: CodeTabsProps) {
  const [active, setActive] = useState(0)
  const items = Children.toArray(children).filter(isValidElement)
  const groupId = useId()
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const focusTab = (index: number) => {
    const next = (index + labels.length) % labels.length
    setActive(next)
    tabRefs.current[next]?.focus()
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === "ArrowRight") {
      event.preventDefault()
      focusTab(index + 1)
    } else if (event.key === "ArrowLeft") {
      event.preventDefault()
      focusTab(index - 1)
    } else if (event.key === "Home") {
      event.preventDefault()
      focusTab(0)
    } else if (event.key === "End") {
      event.preventDefault()
      focusTab(labels.length - 1)
    }
  }

  return (
    <div className="mb-6 border border-cyan-400/20 rounded-lg overflow-hidden">
      <div
        role="tablist"
        aria-label="Code language"
        className="flex flex-wrap gap-1 bg-black/80 border-b border-cyan-400/20 p-1.5"
      >
        {labels.map((label, i) => (
          <button
            key={label}
            ref={(el) => {
              tabRefs.current[i] = el
            }}
            id={`${groupId}-tab-${i}`}
            role="tab"
            type="button"
            aria-selected={active === i}
            aria-controls={`${groupId}-panel-${i}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            className={`px-3 py-1 rounded text-xs font-orbitron tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black ${
              active === i
                ? "bg-cyan-400/20 text-cyan-400"
                : "text-cyan-100/60 hover:text-cyan-100 hover:bg-cyan-400/5"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      {items.map((child, i) => (
        <div
          key={i}
          id={`${groupId}-panel-${i}`}
          role="tabpanel"
          aria-labelledby={`${groupId}-tab-${i}`}
          hidden={active !== i}
          className="[&>pre]:mb-0 [&>pre]:rounded-none [&>pre]:border-none"
        >
          {child}
        </div>
      ))}
    </div>
  )
}
