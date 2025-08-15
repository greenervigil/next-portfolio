"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleKeyDown)
      // Prevent body scroll when mobile menu is open
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/experience", label: "EXPERIENCE" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/contact", label: "CONTACT" },
  ]

  const isActivePage = (href: string) => {
    if (href === "/" && pathname === "/") return true
    if (href !== "/" && pathname.startsWith(href)) return true
    return false
  }

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-cyan-400 focus:text-black focus:rounded focus:font-orbitron focus:font-bold focus:no-underline"
      >
        Skip to main content
      </a>

      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-md border-b border-cyan-400/30 shadow-lg shadow-cyan-400/20"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              className="flex items-center space-x-2 group focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black rounded-md p-1"
              aria-label="Daniel Greener-Vigil - Home"
            >
              <div className="relative">
                <Zap
                  className="h-8 w-8 text-cyan-400 group-hover:text-orange-400 transition-colors"
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 bg-cyan-400 blur-md opacity-30 group-hover:opacity-50 transition-opacity"
                  aria-hidden="true"
                />
              </div>
              <span className="text-xl font-orbitron font-bold text-cyan-400 group-hover:text-orange-400 transition-colors">
                DJGV
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8" role="menubar">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  role="menuitem"
                  className={`relative transition-colors font-orbitron text-sm tracking-wider group focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black rounded-md px-2 py-1 ${
                    isActivePage(item.href) ? "text-cyan-400" : "text-cyan-100 hover:text-cyan-400"
                  }`}
                  aria-current={isActivePage(item.href) ? "page" : undefined}
                >
                  {item.label}
                  <div
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-orange-400 transition-all duration-300 ${
                      isActivePage(item.href) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-cyan-400 hover:text-orange-400 hover:bg-cyan-400/10 focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div
              id="mobile-menu"
              className="md:hidden bg-black/95 border-t border-cyan-400/30 backdrop-blur-md"
              role="menu"
              aria-label="Mobile navigation menu"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    role="menuitem"
                    className={`block px-3 py-2 transition-colors font-orbitron text-sm tracking-wider focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black rounded-md ${
                      isActivePage(item.href) ? "text-cyan-400 bg-cyan-400/10" : "text-cyan-100 hover:text-cyan-400"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-current={isActivePage(item.href) ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
