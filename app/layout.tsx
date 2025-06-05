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
  title: "Daniel Greener-Vigil - Software Engineer & Tech Lead",
  description:
    "Portfolio of Daniel Greener-Vigil, an experienced Software Engineer, Tech Lead, and Mentor with 11+ years of experience in full-stack development.",
  openGraph: {
    title: "Daniel Greener-Vigil - Software Engineer & Tech Lead",
    description:
      "Portfolio of Daniel Greener-Vigil, an experienced Software Engineer, Tech Lead, and Mentor with 11+ years of experience in full-stack development.",
    url: "https://greenervigil.dev",
    siteName: "Daniel Greener-Vigil",
    images: [
      {
        url: "/og-image.png",
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
      "Portfolio of Daniel Greener-Vigil, an experienced Software Engineer, Tech Lead, and Mentor with 11+ years of experience in full-stack development.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-16x16.png",
  },
  themeColor: "#000000",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
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
