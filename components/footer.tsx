import Link from "next/link"
import { Github, Linkedin, Mail, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-black border-t border-cyan-400/30 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-orange-400/5" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Zap className="h-6 w-6 text-cyan-400" />
              <h3 className="text-lg font-orbitron font-bold text-cyan-400 tracking-wider">DANIEL GREENER-VIGIL</h3>
            </div>
            <p className="text-cyan-100 font-inter border-l-2 border-cyan-400/50 pl-4">
              Software Engineer, Tech Lead, and Mentor passionate about building great teams and scalable solutions in
              the digital frontier.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-orbitron font-bold text-orange-400 tracking-wider">QUICK_ACCESS</h4>
            <div className="flex flex-col space-y-2">
              <Link href="#about" className="text-cyan-100 hover:text-cyan-400 transition-colors font-inter">
                About
              </Link>
              <Link href="#experience" className="text-cyan-100 hover:text-cyan-400 transition-colors font-inter">
                Experience
              </Link>
              <Link href="#projects" className="text-cyan-100 hover:text-cyan-400 transition-colors font-inter">
                Projects
              </Link>
              <Link href="#contact" className="text-cyan-100 hover:text-cyan-400 transition-colors font-inter">
                Contact
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-orbitron font-bold text-orange-400 tracking-wider">CONNECT</h4>
            <div className="flex space-x-2">
              <Link href="https://github.com/greenervigil" target="_blank" rel="noopener noreferrer">
                <Button
                variant="ghost"
                size="icon"
                className="text-cyan-400 hover:text-orange-400 hover:bg-cyan-400/10 transition-all duration-300"
              >
                <Github className="h-4 w-4" />
              </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/danieljvigil/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-cyan-400 hover:text-orange-400 hover:bg-cyan-400/10 transition-all duration-300"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="text-cyan-400 hover:text-orange-400 hover:bg-cyan-400/10 transition-all duration-300"
              >
                <Mail className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-cyan-100 font-inter border-l-2 border-orange-400/50 pl-4">
              GreenField Development - Mentoring the next generation of developers
            </p>
          </div>
        </div>

        <div className="border-t border-cyan-400/20 mt-8 pt-8 text-center">
          <p className="text-cyan-100 font-inter">
            &copy; {new Date().getFullYear()} Daniel Greener-Vigil. All rights reserved.
          </p>
          <p className="text-cyan-400 font-orbitron text-xs tracking-wider mt-2">SYSTEM_STATUS: ONLINE</p>
        </div>
      </div>
    </footer>
  )
}
