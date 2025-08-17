import type React from "react"
import type { Metadata } from "next"
import { Orbitron, Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GridBackground } from "@/components/grid-background"

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "700", "900"],
})
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  metadataBase: new URL("https://danielgreener.dev"),
  title: {
    default: "Daniel Greener-Vigil - Software Engineer & Tech Lead",
    template: "%s | Daniel Greener-Vigil",
  },
  description:
    "Portfolio of Daniel Greener-Vigil, an experienced Software Engineer, Tech Lead, and Mentor with 8+ years of experience in full-stack development, React, Node.js, and modern web technologies.",
  keywords: [
    "Daniel Greener-Vigil",
    "Software Engineer",
    "Tech Lead",
    "Full-Stack Developer",
    "React Developer",
    "Node.js Developer",
    "JavaScript",
    "TypeScript",
    "Web Development",
    "Frontend Development",
    "Backend Development",
    "Fusion Medical Staffing",
    "Greenfield Development",
  ],
  authors: [{ name: "Daniel Greener-Vigil", url: "https://danielgreener.dev" }],
  creator: "Daniel Greener-Vigil",
  publisher: "Daniel Greener-Vigil",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://danielgreener.dev",
    title: "Daniel Greener-Vigil - Software Engineer & Tech Lead",
    description:
      "Portfolio of Daniel Greener-Vigil, an experienced Software Engineer, Tech Lead, and Mentor with 8+ years of experience in full-stack development.",
    siteName: "Daniel Greener-Vigil Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Daniel Greener-Vigil - Software Engineer & Tech Lead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Greener-Vigil - Software Engineer & Tech Lead",
    description:
      "Portfolio of Daniel Greener-Vigil, an experienced Software Engineer, Tech Lead, and Mentor with 8+ years of experience in full-stack development.",
    images: ["/og-image.jpg"],
    creator: "@daniel_greener",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark" />
        <link rel="canonical" href="https://danielgreener.dev" />
      </head>
      <body className={`${orbitron.variable} ${inter.variable} bg-black text-cyan-100`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <GridBackground />
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
