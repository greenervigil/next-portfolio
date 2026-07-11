import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { PILLAR_LABELS } from "@/types/blog-type"
import type { BlogPostSummary } from "@/types/blog-type"

function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function PostCard({ post }: { post: BlogPostSummary }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black rounded-lg"
    >
      <article className="bg-black/50 border border-cyan-400/30 hover:border-cyan-400/60 rounded-lg p-5 sm:p-6 backdrop-blur-sm transition-all duration-300 h-full flex flex-col">
        <div className="flex items-center gap-3 mb-3 flex-wrap">
          <Badge
            variant="outline"
            className="border-orange-400/50 text-orange-400 bg-orange-400/10 font-orbitron text-[10px] tracking-wider"
          >
            {PILLAR_LABELS[post.pillar]}
          </Badge>
          <span className="text-xs text-cyan-100/60 font-inter">{formatDate(post.date)}</span>
          <span className="text-xs text-cyan-100/60 font-inter">· {post.readingTime}</span>
        </div>

        <h3 className="font-orbitron text-lg font-bold text-cyan-400 tracking-wide mb-2 group-hover:text-orange-400 transition-colors">
          {post.title}
        </h3>

        <p className="text-cyan-100/80 font-inter text-sm leading-relaxed mb-4 flex-1">{post.description}</p>

        <span className="inline-flex items-center gap-1 text-sm text-cyan-400 font-orbitron tracking-wide group-hover:text-orange-400 transition-colors">
          READ_POST
          <ArrowUpRight
            className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            aria-hidden="true"
          />
        </span>
      </article>
    </Link>
  )
}
