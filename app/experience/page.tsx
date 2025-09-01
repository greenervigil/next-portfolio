import type { Metadata } from "next"
import { Experience } from "@/components/experience"

export const metadata: Metadata = {
  title: "Work Experience | Daniel Greener-Vigil - Software Engineer",
  description:
    "Explore Daniel Greener-Vigil's professional journey as a software engineer, from CTS to Fusion Medical Staffing and Greenfield Development. 8+ years of full-stack development experience.",
  keywords: [
    "Work Experience",
    "Software Engineer Career",
    "Full-Stack Developer Experience",
    "React Developer",
    "Node.js Developer",
    "Professional History",
    "Daniel Greener-Vigil Experience",
    "CTS",
    "Fusion Medical Staffing",
    "Greenfield Development",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://greenervigil.dev/experience",
    title: "Work Experience | Daniel Greener-Vigil - Software Engineer",
    description:
      "Explore Daniel's professional journey as a software engineer with 8+ years of experience in full-stack development.",
    siteName: "Daniel Greener-Vigil Portfolio",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Daniel Greener-Vigil Work Experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work Experience | Daniel Greener-Vigil - Software Engineer",
    description: "Explore Daniel's professional journey with 8+ years of full-stack development experience.",
    images: ["/twitter-image.jpg"],
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
    hasOccupation: [
      {
        "@type": "Occupation",
        name: "Senior Software Engineer",
        workLocation: {
          "@type": "Organization",
          name: "Fusion Medical Staffing",
        },
        estimatedSalary: {
          "@type": "MonetaryAmountDistribution",
          name: "Senior Software Engineer Salary",
          currency: "USD",
        },
        description: "Leading full-stack development initiatives and mentoring junior developers",
        skills: ["React", "Node.js", "TypeScript", "Python", "AWS", "Docker"],
      },
      {
        "@type": "Occupation",
        name: "Founder & Lead Developer",
        workLocation: {
          "@type": "Organization",
          name: "Greenfield Development",
        },
        description: "Providing mentorship and development services to aspiring developers",
        skills: ["Mentorship", "Full-Stack Development", "Technical Leadership"],
      },
    ],
  }

export default function ExperiencePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <main className="min-h-screen bg-black">
        <Experience />
      </main>
    </>
  )
}
