import type { ReactNode } from "react"
import { ArrowUpRight } from "lucide-react"

/** A link to GreenField Dev's site: marked as off-site visually (arrow) and for screen readers. */
export function GreenfieldLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-baseline gap-0.5 text-cyan-400 underline underline-offset-4 transition-colors hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black rounded-sm"
    >
      {children}
      <ArrowUpRight className="h-3.5 w-3.5 self-center" aria-hidden="true" />
      <span className="sr-only"> (on the GreenField Dev website)</span>
    </a>
  )
}
