import fs from "fs"
import path from "path"
import matter from "gray-matter"
import readingTime from "reading-time"
import type { BlogFrontmatter, BlogPillar, BlogPost, BlogPostSummary } from "@/types/blog-type"

const BLOG_DIR = path.join(process.cwd(), "content/blog")

function isProduction() {
  return process.env.NODE_ENV === "production"
}

function readSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""))
}

export function getAllPosts(): BlogPostSummary[] {
  const posts = readSlugs()
    .map((slug) => {
      const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
      const raw = fs.readFileSync(filePath, "utf8")
      const { data, content } = matter(raw)
      const frontmatter = data as BlogFrontmatter

      return {
        ...frontmatter,
        slug,
        readingTime: readingTime(content).text,
      }
    })
    .filter((post) => !post.draft || !isProduction())
    .sort((a, b) => (a.date < b.date ? 1 : -1))

  return posts
}

export function getPostsByPillar(pillar: BlogPillar): BlogPostSummary[] {
  return getAllPosts().filter((post) => post.pillar === pillar)
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(raw)
  const frontmatter = data as BlogFrontmatter

  if (frontmatter.draft && isProduction()) return null

  return {
    ...frontmatter,
    slug,
    content,
    readingTime: readingTime(content).text,
  }
}

export function getAdjacentPosts(slug: string, pillar: BlogPillar) {
  const pillarPosts = getPostsByPillar(pillar)
  const index = pillarPosts.findIndex((post) => post.slug === slug)

  return {
    previous: index > 0 ? pillarPosts[index - 1] : null,
    next: index >= 0 && index < pillarPosts.length - 1 ? pillarPosts[index + 1] : null,
  }
}
