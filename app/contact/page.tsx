import type { Metadata } from "next"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"

export const metadata: Metadata = {
  title: "Contact | Daniel Greener-Vigil - Software Engineer",
  description:
    "Get in touch with Daniel Greener-Vigil for software development projects, consulting, or mentorship opportunities. Read client testimonials and start your next project today.",
  keywords: [
    "Contact Daniel Greener-Vigil",
    "Software Development Services",
    "Freelance Developer",
    "React Developer for Hire",
    "Full-Stack Developer Contact",
    "Software Consulting",
    "Developer Mentorship",
    "Web Development Services",
    "Client Testimonials",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://danielgreener.dev/contact",
    title: "Contact | Daniel Greener-Vigil - Software Engineer",
    description: "Get in touch with Daniel for software development projects, consulting, or mentorship opportunities.",
    siteName: "Daniel Greener-Vigil Portfolio",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Daniel Greener-Vigil - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Daniel Greener-Vigil - Software Engineer",
    description: "Get in touch with Daniel for software development projects and consulting.",
    images: ["/og-contact.jpg"],
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
        "@id": "https://danielgreener.dev/#person",
        name: "Daniel Greener-Vigil",
        jobTitle: "Software Engineer",
        email: "daniel@greenfielddev.com",
        url: "https://danielgreener.dev",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-555-0123",
          contactType: "professional",
          availableLanguage: "English",
        },
        sameAs: [
          "https://linkedin.com/in/daniel-greener-vigil",
          "https://github.com/daniel-greener-vigil",
          "https://twitter.com/daniel_greener",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://danielgreener.dev/#service",
        name: "Software Development Services",
        description: "Full-stack web development, consulting, and mentorship services",
        serviceType: "Software Development",
        provider: {
          "@id": "https://danielgreener.dev/#person",
        },
        areaServed: "Worldwide",
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: "https://danielgreener.dev/contact",
          servicePhone: "+1-555-0123",
        },
      },
      {
        "@type": "Review",
        "@id": "https://danielgreener.dev/#review1",
        itemReviewed: {
          "@id": "https://danielgreener.dev/#service",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Sarah Johnson",
        },
        reviewBody: "Daniel's expertise in React and Node.js helped us deliver our project ahead of schedule.",
      },
      {
        "@type": "Review",
        "@id": "https://danielgreener.dev/#review2",
        itemReviewed: {
          "@id": "https://danielgreener.dev/#service",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Michael Chen",
        },
        reviewBody: "Outstanding technical skills and great communication throughout the project.",
      },
    ],
  }

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <main className="min-h-screen bg-black">
        <Testimonials />
        <Contact />
      </main>
    </>
  )
}
