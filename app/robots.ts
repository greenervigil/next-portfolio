import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://greenervigil.dev"

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/contact", "/experience", "/projects"],
        disallow: ["/api/", "/_next/", "/static/", "/favicon.ico"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}