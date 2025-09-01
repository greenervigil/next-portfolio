import type { Metadata } from "next"
import { Projects } from "@/components/projects"

export const metadata: Metadata = {
  title: "Portfolio Projects | Daniel Greener-Vigil - Software Engineer",
  description:
    "Explore Daniel Greener-Vigil's portfolio of innovative software projects including web applications, mobile apps, and full-stack solutions built with React, Node.js, and modern technologies.",
  keywords: [
    "Portfolio Projects",
    "Software Projects",
    "Web Applications",
    "React Projects",
    "Node.js Applications",
    "Full-Stack Projects",
    "JavaScript Projects",
    "TypeScript Projects",
    "Daniel Greener-Vigil Portfolio",
    "Daniel Vigil Portfolio",
    "Daniel J Vigil Portfolio",
    "Daniel Julian Vigil Portfolio",
    "Developer Portfolio",
  ],
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
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Daniel Greener-Vigil Portfolio Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Projects | Daniel Greener-Vigil - Software Engineer",
    description: "Explore Daniel's portfolio of innovative software projects and full-stack solutions.",
    images: ["/twitter-image.jpg"],
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
        sameAs: ["https://github.com/danielgreener", "https://linkedin.com/in/danielgreener"],
        knowsAbout: ["JavaScript", "TypeScript", "React", "Node.js", "Full-Stack Development", "Web Development"],
      },
      {
        "@type": "CreativeWork",
        "@id": "https://greenervigil.dev/projects#healthcare-platform",
        name: "Healthcare Management Platform",
        description: "Comprehensive healthcare platform built with React and Node.js",
        creator: {
          "@id": "https://greenervigil.dev/#person",
        },
        programmingLanguage: ["JavaScript", "TypeScript"],
        keywords: ["Healthcare", "React", "Node.js", "Web Application"],
      },
      {
        "@type": "CreativeWork",
        "@id": "https://greenervigil.dev/projects#ecommerce-solution",
        name: "E-commerce Solution",
        description: "Full-stack e-commerce platform with payment integration",
        creator: {
          "@id": "https://greenervigil.dev/#person",
        },
        programmingLanguage: ["JavaScript", "TypeScript"],
        keywords: ["E-commerce", "React", "Node.js", "MongoDB", "Stripe"],
      },
      {
        "@type": "CreativeWork",
        "@id": "https://greenervigil.dev/projects#task-management",
        name: "Task Management System",
        description: "Collaborative task management application with real-time updates",
        creator: {
          "@id": "https://greenervigil.dev/#person",
        },
        programmingLanguage: ["JavaScript", "TypeScript"],
        keywords: ["Task Management", "React", "Socket.io", "PostgreSQL"],
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
