import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import { ChevronRight, Terminal } from "lucide-react"
import { getAllPosts, getAdjacentPosts, getPostBySlug } from "@/lib/blog"
import { mdxComponents } from "@/components/blog/mdx-components"
import { ProjectedTitle, getTitleRevealDuration } from "@/components/blog/projected-title"
import { PILLAR_LABELS } from "@/types/blog-type"

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    authors: [{ name: "Daniel Greener-Vigil" }],
    keywords: post.tags,
    openGraph: {
      type: "article",
      locale: "en_US",
      url: `https://greenervigil.dev/blog/${post.slug}`,
      title: post.title,
      description: post.description,
      siteName: "Daniel Greener-Vigil Portfolio",
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      tags: post.tags,
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 547,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/twitter-image.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

const rehypePrettyCodeOptions = {
  theme: "github-dark",
  keepBackground: false,
}

function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const { previous, next } = getAdjacentPosts(post.slug, post.pillar)
  const pillarLabel = PILLAR_LABELS[post.pillar]
  const contentRevealStyle = { animationDelay: `${getTitleRevealDuration(post.title)}ms` }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://greenervigil.dev/blog/${post.slug}`,
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    url: `https://greenervigil.dev/blog/${post.slug}`,
    keywords: post.tags.join(", "),
    author: {
      "@type": "Person",
      "@id": "https://greenervigil.dev/#person",
      name: "Daniel Greener-Vigil",
      url: "https://greenervigil.dev",
    },
    publisher: {
      "@type": "Person",
      "@id": "https://greenervigil.dev/#person",
      name: "Daniel Greener-Vigil",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://greenervigil.dev/blog/${post.slug}`,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://greenervigil.dev" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://greenervigil.dev/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: pillarLabel,
          item: `https://greenervigil.dev/blog/category/${post.pillar}`,
        },
        { "@type": "ListItem", position: 4, name: post.title, item: `https://greenervigil.dev/blog/${post.slug}` },
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
          <article className="max-w-3xl mx-auto">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-xs text-cyan-100/60 font-inter flex-wrap">
                <li>
                  <Link href="/blog" className="hover:text-cyan-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="h-3 w-3" />
                </li>
                <li>
                  <Link href={`/blog/category/${post.pillar}`} className="hover:text-cyan-400 transition-colors">
                    {pillarLabel}
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="h-3 w-3" />
                </li>
                <li className="text-cyan-400 truncate" aria-current="page">
                  {post.title}
                </li>
              </ol>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-2 mb-4" aria-hidden="true">
                <Terminal className="h-5 w-5 text-cyan-400" />
                <div className="w-8 h-px bg-gradient-to-r from-cyan-400 to-transparent" />
              </div>
              <ProjectedTitle
                text={post.title}
                as="h1"
                className="text-3xl sm:text-4xl font-orbitron font-bold text-cyan-400 tracking-wide mb-4 text-wrap-balance"
              />
              <div className="fade-in-content" style={contentRevealStyle}>
                <p className="text-lg text-cyan-100/80 font-inter leading-relaxed mb-4">{post.description}</p>
                <div className="flex items-center gap-3 text-xs text-cyan-100/60 font-inter flex-wrap">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span aria-hidden="true">·</span>
                  <span>{post.readingTime}</span>
                  {post.tags.length > 0 && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span>{post.tags.join(", ")}</span>
                    </>
                  )}
                </div>
              </div>
            </header>

            <div className="fade-in-content border-t border-cyan-400/20 pt-10" style={contentRevealStyle}>
              <MDXRemote
                source={post.content}
                components={mdxComponents}
                options={{
                  // Our MDX is repo-authored content, not untrusted user input, so it's safe to
                  // allow JS expressions (needed for JSX props like <CodeTabs labels={[...]}>).
                  blockJS: false,
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [
                      rehypeSlug,
                      [rehypeAutolinkHeadings, { behavior: "wrap" }],
                      [rehypePrettyCode, rehypePrettyCodeOptions],
                    ],
                  },
                }}
              />
            </div>

            <footer className="fade-in-content mt-16 pt-8 border-t border-cyan-400/20" style={contentRevealStyle}>
              <div className="bg-black/50 border border-orange-400/30 rounded-lg p-6 mb-10">
                <p className="text-cyan-100 font-inter text-sm leading-relaxed">
                  {`Want to talk through a design decision or need help leveling up your team? I take on mentorship and consulting work through GreenField Development.`}
                </p>
                <Link
                  href="/contact"
                  className="inline-block mt-3 text-orange-400 font-orbitron text-sm tracking-wider hover:text-orange-300 transition-colors"
                >
                  GET_IN_TOUCH →
                </Link>
              </div>

              {(previous || next) && (
                <nav aria-label="More posts in this category" className="grid sm:grid-cols-2 gap-4">
                  {previous && (
                    <Link
                      href={`/blog/${previous.slug}`}
                      className="block border border-cyan-400/30 hover:border-cyan-400/60 rounded-lg p-4 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
                    >
                      <span className="text-xs text-cyan-100/60 font-orbitron tracking-wider">← PREVIOUS</span>
                      <p className="text-cyan-400 font-inter mt-1">{previous.title}</p>
                    </Link>
                  )}
                  {next && (
                    <Link
                      href={`/blog/${next.slug}`}
                      className="block border border-cyan-400/30 hover:border-cyan-400/60 rounded-lg p-4 transition-colors text-right sm:col-start-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
                    >
                      <span className="text-xs text-cyan-100/60 font-orbitron tracking-wider">NEXT →</span>
                      <p className="text-cyan-400 font-inter mt-1">{next.title}</p>
                    </Link>
                  )}
                </nav>
              )}
            </footer>
          </article>
        </div>
      </main>
    </>
  )
}
