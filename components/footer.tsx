"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-black border-t border-cyan-400/30 relative" role="contentinfo" aria-label="Site footer">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-orange-400/5" aria-hidden="true" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <section aria-labelledby="brand-heading">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Zap className="h-6 w-6 text-cyan-400" aria-hidden="true" />
                <h2 id="brand-heading" className="text-lg font-orbitron font-bold text-cyan-400 tracking-wider">
                  DANIEL GREENER-VIGIL
                </h2>
              </div>
              <p className="text-cyan-100 font-inter border-l-2 border-cyan-400/50 pl-4">
                Software Engineer, Tech Lead, and Mentor passionate about building great teams and scalable solutions in
                the digital frontier.
              </p>
            </div>
          </section>

          {/* Quick Links */}
          <section aria-labelledby="quick-links-heading">
            <div className="space-y-4">
              <h3 id="quick-links-heading" className="font-orbitron font-bold text-orange-400 tracking-wider">
                QUICK_ACCESS
              </h3>
              <nav aria-label="Footer navigation">
                <ul className="flex flex-col space-y-2">
                  <li>
                    <Link
                      href="/"
                      className="text-cyan-100 hover:text-cyan-400 transition-colors font-inter focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black rounded-md px-1 py-0.5"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/experience"
                      className="text-cyan-100 hover:text-cyan-400 transition-colors font-inter focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black rounded-md px-1 py-0.5"
                    >
                      Experience
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projects"
                      className="text-cyan-100 hover:text-cyan-400 transition-colors font-inter focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black rounded-md px-1 py-0.5"
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-cyan-100 hover:text-cyan-400 transition-colors font-inter focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black rounded-md px-1 py-0.5"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </section>

          {/* Connect */}
          <section aria-labelledby="connect-heading">
            <div className="space-y-4">
              <h3 id="connect-heading" className="font-orbitron font-bold text-orange-400 tracking-wider">
                CONNECT
              </h3>
              <div className="flex space-x-2" role="group" aria-label="Social media links">
                <Link
                  href="https://github.com/greenervigil"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Daniel's GitHub profile (opens in new tab)"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-cyan-400 hover:text-orange-400 hover:bg-cyan-400/10 transition-all duration-300 focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/danieljvigil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Daniel's LinkedIn profile (opens in new tab)"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-cyan-400 hover:text-orange-400 hover:bg-cyan-400/10 transition-all duration-300 focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-cyan-400 hover:text-orange-400 hover:bg-cyan-400/10 transition-all duration-300 focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
                  aria-label="Send email to Daniel"
                  onClick={() => (window.location.href = "mailto:daniel@greenervigil.dev")}
                >
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-cyan-100 font-inter border-l-2 border-orange-400/50 pl-4">
                GreenField Development - Mentoring the next generation of developers
              </p>
            </div>
          </section>
        </div>

        <div className="border-t border-cyan-400/20 mt-8 pt-8 text-center">
          <p className="text-cyan-100 font-inter">
            &copy; {new Date().getFullYear()} Daniel Greener-Vigil. All rights reserved.
          </p>
          <p className="text-cyan-400 font-orbitron text-xs tracking-wider mt-2" aria-label="System status indicator">
            SYSTEM_STATUS: ONLINE
          </p>
        </div>
      </div>
    </footer>
  )
}
