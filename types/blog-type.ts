export const BLOG_PILLARS = ["cs-terms", "interview-prep", "architecture"] as const

export type BlogPillar = (typeof BLOG_PILLARS)[number]

export const PILLAR_LABELS: Record<BlogPillar, string> = {
  "cs-terms": "CS Terms & Concepts",
  "interview-prep": "Interview Problem Walkthroughs",
  architecture: "Architecture & System Design",
}

export const PILLAR_DESCRIPTIONS: Record<BlogPillar, string> = {
  "cs-terms": "Short, practical explainers on the computer science concepts that come up in interviews and code review.",
  "interview-prep": "Classic coding interview questions solved multiple ways, with real complexity analysis and production-quality code.",
  architecture: "System design and software architecture, written from real experience leading engineering teams.",
}

export type BlogFrontmatter = {
  title: string
  description: string
  date: string
  updated?: string
  pillar: BlogPillar
  tags: string[]
  draft?: boolean
}

export type BlogPost = BlogFrontmatter & {
  slug: string
  content: string
  readingTime: string
}

export type BlogPostSummary = BlogFrontmatter & {
  slug: string
  readingTime: string
}
