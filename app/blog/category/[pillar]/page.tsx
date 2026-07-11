import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronRight, Terminal } from "lucide-react"
import { getPostsByPillar } from "@/lib/blog"
import { PostCard } from "@/components/blog/post-card"
import { PillarNav } from "@/components/blog/pillar-nav"
import { ProjectedTitle, getTitleRevealDuration } from "@/components/blog/projected-title"
import { BLOG_PILLARS, PILLAR_DESCRIPTIONS, PILLAR_LABELS, type BlogPillar } from "@/types/blog-type"

export function generateStaticParams() {
  return BLOG_PILLARS.map((pillar) => ({ pillar }))
}

function isValidPillar(pillar: string): pillar is BlogPillar {
  return (BLOG_PILLARS as readonly string[]).includes(pillar)
}

type Props = {
  params: Promise<{ pillar: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pillar } = await params
  if (!isValidPillar(pillar)) return {}

  const label = PILLAR_LABELS[pillar]
  const description = PILLAR_DESCRIPTIONS[pillar]

  return {
    title: label,
    description,
    alternates: {
      canonical: `/blog/category/${pillar}`,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `https://greenervigil.dev/blog/category/${pillar}`,
      title: `${label} | Daniel Greener-Vigil Blog`,
      description,
      siteName: "Daniel Greener-Vigil Portfolio",
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 547,
          alt: `${label} | Daniel Greener-Vigil Blog`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${label} | Daniel Greener-Vigil Blog`,
      description,
      images: ["/twitter-image.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function CategoryPage({ params }: Props) {
  const { pillar } = await params
  if (!isValidPillar(pillar)) notFound()

  const posts = getPostsByPillar(pillar)
  const label = PILLAR_LABELS[pillar]
  const contentRevealStyle = { animationDelay: `${getTitleRevealDuration(label)}ms` }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `https://greenervigil.dev/blog/category/${pillar}`,
    name: `${label} | Daniel Greener-Vigil Blog`,
    description: PILLAR_DESCRIPTIONS[pillar],
    url: `https://greenervigil.dev/blog/category/${pillar}`,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://greenervigil.dev" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://greenervigil.dev/blog" },
        { "@type": "ListItem", position: 3, name: label, item: `https://greenervigil.dev/blog/category/${pillar}` },
      ],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <main className="min-h-screen bg-black pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-xs text-cyan-100/60 font-inter">
                <li>
                  <Link href="/blog" className="hover:text-cyan-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="h-3 w-3" />
                </li>
                <li className="text-cyan-400" aria-current="page">
                  {label}
                </li>
              </ol>
            </nav>

            <header className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 mb-4" aria-hidden="true">
                <div className="w-8 h-px bg-gradient-to-r from-transparent to-cyan-400" />
                <Terminal className="h-6 w-6 text-cyan-400" />
                <div className="w-8 h-px bg-gradient-to-l from-transparent to-cyan-400" />
              </div>
              <ProjectedTitle
                text={label}
                as="h1"
                className="text-3xl sm:text-4xl font-orbitron font-bold mb-4 text-cyan-400 tracking-wider"
              />
              <p className="text-lg text-cyan-100 max-w-2xl mx-auto font-inter fade-in-content" style={contentRevealStyle}>
                {PILLAR_DESCRIPTIONS[pillar]}
              </p>
            </header>

            <div className="fade-in-content" style={contentRevealStyle}>
              <PillarNav active={pillar} />

              {posts.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
                  {posts.map((post) => (
                    <div key={post.slug} role="listitem">
                      <PostCard post={post} />
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-cyan-100/60 font-inter py-16">
                  No posts in this category yet — check back shortly.
                </p>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
