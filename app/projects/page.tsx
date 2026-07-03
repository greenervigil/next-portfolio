import type { Metadata } from "next"
import { Projects } from "@/components/projects"

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
      {
        "@type": "CreativeWork",
        "@id": "https://greenervigil.dev/projects#greenfield-development",
        name: "GreenField Development Web Platform",
        description:
          "A SaaS cooperative company specializing in building scalable web applications and mentoring self-taught developers.",
        creator: {
          "@id": "https://greenervigil.dev/#person",
        },
        programmingLanguage: ["TypeScript"],
        keywords: ["Next.js", "Tailwind CSS", "shadcn/ui", "Vercel"],
        url: "https://greenervigil.dev",
      },
      {
        "@type": "CreativeWork",
        "@id": "https://greenervigil.dev/projects#learning-portrait-api",
        name: "Learning Portrait API & Database Redesign",
        description:
          "Redesigned a complex microservices architecture for an enterprise education platform, focusing on scalability, performance, and maintainability, with a zero-downtime migration strategy.",
        creator: {
          "@id": "https://greenervigil.dev/#person",
        },
        programmingLanguage: ["TypeScript"],
        keywords: ["Next.js", "PostgreSQL", "Apollo Client", "Docker", "Microservices"],
      },
      {
        "@type": "CreativeWork",
        "@id": "https://greenervigil.dev/projects#ultra-crew-mobile",
        name: "Ultra Crew Mobile Application",
        description:
          "A mobile application for long-distance runners providing real-time performance tracking, personalized training plans, and community features.",
        creator: {
          "@id": "https://greenervigil.dev/#person",
        },
        programmingLanguage: ["TypeScript"],
        keywords: ["React Native", "Supabase", "Expo", "Stripe"],
        url: "https://ultracrew.app",
      },
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
