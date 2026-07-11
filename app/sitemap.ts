import type { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/blog"
import { BLOG_PILLARS } from "@/types/blog-type"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://greenervigil.dev"
  const lastModified = new Date()
  const posts = getAllPosts()

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/experience`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...BLOG_PILLARS.map((pillar) => ({
      url: `${baseUrl}/blog/category/${pillar}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
    ...posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updated ?? post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ]
}
