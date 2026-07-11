import { Fragment } from "react"

const LETTER_DURATION_MS = 260
const LETTER_BASE_STEP_MS = 14
const LETTER_STAGGER_CAP_MS = 480

function getStaggerStep(text: string): number {
  const charCount = text.replace(/\s/g, "").length || 1
  const rawTotal = charCount * LETTER_BASE_STEP_MS
  return rawTotal > LETTER_STAGGER_CAP_MS ? LETTER_STAGGER_CAP_MS / charCount : LETTER_BASE_STEP_MS
}

/** Total time (ms) for a title of this length to finish landing — use to delay whatever fades in after it. */
export function getTitleRevealDuration(text: string): number {
  const charCount = text.replace(/\s/g, "").length || 1
  const step = getStaggerStep(text)
  const total = Math.min(charCount * step, LETTER_STAGGER_CAP_MS)
  return total + LETTER_DURATION_MS
}

type HeadingTag = "h1" | "h2"

type ProjectedTitleProps = {
  text: string
  /** Screen-reader label, if it should differ from the stylized visual text (e.g. "Blog" vs. "BLOG.LOG"). */
  srLabel?: string
  as?: HeadingTag
  className?: string
}

/**
 * Renders a heading that materializes as if projected onto the page — each
 * letter resolves from an overexposed flash into focus (no fall/drop motion,
 * since projected light doesn't have momentum), swept by a light beam once
 * across the title. Pure CSS, so the real text is present in the server HTML
 * immediately — nothing is gated behind JS/hydration.
 */
export function ProjectedTitle({ text, srLabel, as = "h1", className }: ProjectedTitleProps) {
  const Tag = as
  const words = text.split(" ")
  const step = getStaggerStep(text)
  const revealDuration = getTitleRevealDuration(text)
  let charIndex = 0

  return (
    <Tag aria-label={srLabel ?? text} className={className}>
      <span aria-hidden="true" className="relative inline-block">
        <span className="title-scan-beam" style={{ animationDuration: `${revealDuration}ms` }} />
        {words.map((word, wordIndex) => (
          <Fragment key={wordIndex}>
            <span className="inline-block whitespace-nowrap">
              {word.split("").map((char, i) => {
                const delay = charIndex * step
                charIndex++
                return (
                  <span key={i} className="letter-project-in" style={{ animationDelay: `${delay}ms` }}>
                    {char}
                  </span>
                )
              })}
            </span>
            {wordIndex < words.length - 1 ? " " : ""}
          </Fragment>
        ))}
      </span>
    </Tag>
  )
}
