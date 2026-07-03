import type { Metadata } from "next"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { state } from "@/context/state"

export const metadata: Metadata = {
  title: "Contact | Daniel Greener-Vigil - Software Engineer",
  description:
    "Get in touch with Daniel Greener-Vigil for software development projects, consulting, or mentorship opportunities. Read client testimonials and start your next project today.",
  alternates: {
    canonical: "/contact",
  },
  authors: [{ name: "Daniel Greener-Vigil" }],
  creator: "Daniel Greener-Vigil",
  publisher: "Daniel Greener-Vigil",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://greenervigil.dev/contact",
    title: "Contact | Daniel Greener-Vigil - Software Engineer",
    description: "Get in touch with Daniel for software development projects, consulting, or mentorship opportunities.",
    siteName: "Daniel Greener-Vigil Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 547,
        alt: "Contact Daniel Greener-Vigil - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Daniel Greener-Vigil - Software Engineer",
    description: "Get in touch with Daniel for software development projects and consulting.",
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
        email: "daniel@greenervigil.dev",
        url: "https://greenervigil.dev",
        sameAs: ["https://github.com/greenervigil", "https://www.linkedin.com/in/danieljvigil/"],
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://greenervigil.dev/#service",
        name: "Software Development Services",
        description: "Full-stack web development, consulting, and mentorship services",
        serviceType: "Software Development",
        provider: {
          "@id": "https://greenervigil.dev/#person",
        },
        areaServed: "Worldwide",
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: "https://greenervigil.dev/contact",
        },
      },
      ...state.testimonials.map((testimonial, index) => ({
        "@type": "Review",
        "@id": `https://greenervigil.dev/#review${index + 1}`,
        itemReviewed: {
          "@id": "https://greenervigil.dev/#service",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: testimonial.name,
        },
        reviewBody: testimonial.quote,
      })),
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
