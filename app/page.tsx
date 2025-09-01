import type { Metadata } from "next"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"

export const metadata: Metadata = {
  title: "Daniel Greener-Vigil | Software Engineer & Full-Stack Developer",
  description:
    "Experienced software engineer specializing in React, Node.js, and modern web technologies. Building innovative solutions with 8+ years of experience in full-stack development.",
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    "React Developer",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "Web Development",
    "Frontend Development",
    "Backend Development",
    "Daniel Greener-Vigil",
    "Daniel Vigil",
    "Daniel J Vigil",
    "Daniel Julian Vigil",
  ],
  authors: [{ name: "Daniel Greener-Vigil" }],
  creator: "Daniel Greener-Vigil",
  publisher: "Daniel Greener-Vigil",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://greenervigil.dev",
    title: "Daniel Greener-Vigil | Software Engineer & Full-Stack Developer",
    description:
      "Experienced software engineer specializing in React, Node.js, and modern web technologies. Building innovative solutions with 8+ years of experience.",
    siteName: "Daniel Greener-Vigil Portfolio",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Daniel Greener-Vigil - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Greener-Vigil | Software Engineer & Full-Stack Developer",
    description: "Experienced software engineer specializing in React, Node.js, and modern web technologies.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Daniel Greener-Vigil",
  jobTitle: "Software Engineer",
  description: "Experienced software engineer specializing in React, Node.js, and modern web technologies",
  url: "https://greenervigil.dev",
  sameAs: [
    "https://www.linkedin.com/in/danieljvigil/",
    "https://github.com/greenervigil",
  ],
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "Full-Stack Development",
    "Web Development",
    "Software Engineering",
  ],
  alumniOf: {
    "@type": "Organization",
    name: "University Name",
  },
  worksFor: {
    "@type": "Organization",
    name: "Fusion Medical Staffing",
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <main className="min-h-screen bg-black">
        <Hero />
        <About />
        <Skills />
      </main>
    </>
  )
}
