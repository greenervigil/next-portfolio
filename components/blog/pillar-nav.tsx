import Link from "next/link"
import { BLOG_PILLARS, PILLAR_LABELS, PILLAR_DESCRIPTIONS } from "@/types/blog-type"

export function PillarNav({ active }: { active?: string }) {
  return (
    <nav aria-label="Blog categories" className="grid sm:grid-cols-3 gap-4 mb-16">
      {BLOG_PILLARS.map((pillar) => (
        <Link
          key={pillar}
          href={`/blog/category/${pillar}`}
          className={`block rounded-lg border p-4 backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black ${
            active === pillar
              ? "border-cyan-400 bg-cyan-400/10"
              : "border-cyan-400/30 bg-black/50 hover:border-cyan-400/60"
          }`}
        >
          <h2 className="font-orbitron text-sm font-bold text-cyan-400 tracking-wider mb-1">
            {PILLAR_LABELS[pillar]}
          </h2>
          <p className="text-xs text-cyan-100/70 font-inter leading-relaxed">{PILLAR_DESCRIPTIONS[pillar]}</p>
        </Link>
      ))}
    </nav>
  )
}
