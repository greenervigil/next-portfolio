import type { Metadata } from "next"
import { Terminal } from "lucide-react"
import { getAllPosts } from "@/lib/blog"
import { PostCard } from "@/components/blog/post-card"
import { PillarNav } from "@/components/blog/pillar-nav"
import { ProjectedTitle, getTitleRevealDuration } from "@/components/blog/projected-title"

const PAGE_TITLE = "BLOG.LOG"
const contentRevealStyle = { animationDelay: `${getTitleRevealDuration(PAGE_TITLE)}ms` }

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Computer science concepts, interview problem walkthroughs, and software architecture, written by Daniel Greener-Vigil.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://greenervigil.dev/blog",
    title: "Blog | Daniel Greener-Vigil",
    description:
      "Computer science concepts, interview problem walkthroughs, and software architecture, written by Daniel Greener-Vigil.",
    siteName: "Daniel Greener-Vigil Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 547,
        alt: "Daniel Greener-Vigil Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Daniel Greener-Vigil",
    description: "Computer science concepts, interview problem walkthroughs, and software architecture.",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://greenervigil.dev/blog",
  name: "Daniel Greener-Vigil Blog",
  description:
    "Computer science concepts, interview problem walkthroughs, and software architecture, written by Daniel Greener-Vigil.",
  url: "https://greenervigil.dev/blog",
  author: {
    "@type": "Person",
    "@id": "https://greenervigil.dev/#person",
    name: "Daniel Greener-Vigil",
  },
}

export default function BlogIndexPage() {
  const posts = getAllPosts()

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
            <header className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 mb-4" aria-hidden="true">
                <div className="w-8 h-px bg-gradient-to-r from-transparent to-cyan-400" />
                <Terminal className="h-6 w-6 text-cyan-400" />
                <div className="w-8 h-px bg-gradient-to-l from-transparent to-cyan-400" />
              </div>
              <ProjectedTitle
                text={PAGE_TITLE}
                srLabel="Blog"
                as="h1"
                className="text-3xl sm:text-4xl font-orbitron font-bold mb-4 text-cyan-400 tracking-wider"
              />
              <p className="text-lg text-cyan-100 max-w-2xl mx-auto font-inter fade-in-content" style={contentRevealStyle}>
                CS terms, interview problem walkthroughs, and architecture notes from the field.
              </p>
            </header>

            <div className="fade-in-content" style={contentRevealStyle}>
              <PillarNav />

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
                  First post is coming soon — check back shortly.
                </p>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
