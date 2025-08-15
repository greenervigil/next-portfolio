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
    "Developer Portfolio",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://danielgreener.dev/projects",
    title: "Portfolio Projects | Daniel Greener-Vigil - Software Engineer",
    description:
      "Explore Daniel's portfolio of innovative software projects including web applications and full-stack solutions.",
    siteName: "Daniel Greener-Vigil Portfolio",
    images: [
      {
        url: "/og-projects.jpg",
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
    images: ["/og-projects.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Daniel Greener-Vigil",
  hasCreatedWork: [
    {
      "@type": "SoftwareApplication",
      name: "Healthcare Management Platform",
      description: "Comprehensive healthcare platform built with React and Node.js",
      applicationCategory: "WebApplication",
      operatingSystem: "Web Browser",
      programmingLanguage: ["JavaScript", "TypeScript", "React", "Node.js"],
      creator: {
        "@type": "Person",
        name: "Daniel Greener-Vigil",
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "E-commerce Solution",
      description: "Full-stack e-commerce platform with payment integration",
      applicationCategory: "WebApplication",
      operatingSystem: "Web Browser",
      programmingLanguage: ["React", "Node.js", "MongoDB", "Stripe API"],
      creator: {
        "@type": "Person",
        name: "Daniel Greener-Vigil",
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Task Management System",
      description: "Collaborative task management application with real-time updates",
      applicationCategory: "WebApplication",
      operatingSystem: "Web Browser",
      programmingLanguage: ["React", "Socket.io", "Express", "PostgreSQL"],
      creator: {
        "@type": "Person",
        name: "Daniel Greener-Vigil",
      },
    },
  ],
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://danielgreener.dev/projects",
  },
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
