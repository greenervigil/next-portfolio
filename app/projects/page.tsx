import type { Metadata } from "next"
import { Projects } from "@/components/projects"
import { state } from "@/context/state"

export const metadata: Metadata = {
  title: "Portfolio Projects | Daniel Greener-Vigil - Software Engineer",
  description:
    "Explore Daniel Greener-Vigil's portfolio of innovative software projects including web applications, mobile apps, and full-stack solutions built with React, Node.js, and modern technologies.",
  alternates: {
    canonical: "/projects",
  },
  authors: [{ name: "Daniel Greener-Vigil" }],
  creator: "Daniel Greener-Vigil",
  publisher: "Daniel Greener-Vigil",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://greenervigil.dev/projects",
    title: "Portfolio Projects | Daniel Greener-Vigil - Software Engineer",
    description:
      "Explore Daniel's portfolio of innovative software projects including web applications and full-stack solutions.",
    siteName: "Daniel Greener-Vigil Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 547,
        alt: "Daniel Greener-Vigil Portfolio Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Projects | Daniel Greener-Vigil - Software Engineer",
    description: "Explore Daniel's portfolio of innovative software projects and full-stack solutions.",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://greenervigil.dev/#person",
        name: "Daniel Greener-Vigil",
        jobTitle: "Software Engineer",
        url: "https://greenervigil.dev",
        sameAs: ["https://github.com/greenervigil", "https://www.linkedin.com/in/danieljvigil/"],
        knowsAbout: ["JavaScript", "TypeScript", "React", "Node.js", "Full-Stack Development", "Web Development"],
      },
      ...state.projects.map((project) => ({
        "@type": "CreativeWork",
        "@id": `https://greenervigil.dev/projects#${slugify(project.shortTitle)}`,
        name: project.title,
        description: project.detailedDescription,
        creator: {
          "@id": "https://greenervigil.dev/#person",
        },
        programmingLanguage: ["TypeScript"],
        keywords: project.technologies,
        ...(project.links.live ? { url: project.links.live } : {}),
      })),
      {
        "@type": "WebPage",
        "@id": "https://greenervigil.dev/projects",
        name: "Portfolio Projects | Daniel Greener-Vigil",
        description: "Explore Daniel Greener-Vigil's portfolio of innovative software projects",
        mainEntity: {
          "@id": "https://greenervigil.dev/#person",
        },
      },
    ],
  }

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <main className="min-h-screen bg-black">
        <Projects />
      </main>
    </>
  )
}
