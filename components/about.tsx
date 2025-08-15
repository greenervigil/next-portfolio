import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Code, Lightbulb, Target, Cpu } from "lucide-react"

export function About() {
  const highlights = [
    { icon: Code, label: "11+ YEARS", description: "Software Engineering", color: "cyan" },
    { icon: Users, label: "TEAM LEAD", description: "High-Performance Teams", color: "orange" },
    { icon: Lightbulb, label: "INNOVATION", description: "Continuous Learning", color: "cyan" },
    { icon: Target, label: "MENTORSHIP", description: "Next Generation Dev", color: "orange" },
  ]

  return (
    <section id="about" className="py-20 relative" aria-labelledby="about-heading" role="main">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4" aria-hidden="true">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-cyan-400" />
              <Cpu className="h-6 w-6 text-cyan-400" aria-hidden="true" />
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-cyan-400" />
            </div>
            <h1
              id="about-heading"
              className="text-3xl sm:text-4xl font-orbitron font-bold mb-4 text-cyan-400 tracking-wider focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black rounded-sm"
              tabIndex={-1}
            >
              <span className="sr-only">About Me</span>
              <span aria-hidden="true">ABOUT_ME.EXE</span>
            </h1>
            <p className="text-lg text-cyan-100 max-w-2xl mx-auto font-inter">
              Passionate about technology, leadership, and continuous growth in the digital realm
            </p>
          </header>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Content */}
            <article className="space-y-6">
              <div className="border-l-2 border-cyan-400/50 pl-6 space-y-4">
                <p className="text-cyan-100 leading-relaxed font-inter">
                  With over 11 years of experience as a Software Engineer, I am driven by a deep passion for learning
                  and a commitment to continuous improvement. This passion fuels everything I do—whether it's tackling
                  new technologies, leading teams through complex challenges, or mentoring the next generation of
                  developers.
                </p>
                <p className="text-cyan-100 leading-relaxed font-inter">
                  I thrive in environments where innovation meets collaboration, and I am always eager to take on new
                  challenges that push both my skills and my team's abilities to new heights.
                </p>
                <p className="text-cyan-100 leading-relaxed font-inter">
                  As a Tech Lead, I take pride in not only solving complex technical problems but also in building
                  high-performing, cohesive teams. I believe in creating environments where people feel empowered to
                  share ideas, learn from each other, and push the boundaries of what's possible.
                </p>
              </div>
            </article>

            {/* Stats Grid */}
            <section aria-labelledby="highlights-heading">
              <h2 id="highlights-heading" className="sr-only">
                Professional Highlights
              </h2>
              <div className="grid grid-cols-2 gap-4" role="list">
                {highlights.map((highlight, index) => {
                  const IconComponent = highlight.icon
                  return (
                    <div key={index} role="listitem">
                      <Card
                        className="bg-black/50 border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 group backdrop-blur-sm focus-within:ring-2 focus-within:ring-cyan-400 focus-within:ring-offset-2 focus-within:ring-offset-black motion-reduce:transition-none motion-reduce:hover:transform-none"
                        tabIndex={0}
                        role="article"
                        aria-label={`${highlight.label}: ${highlight.description}`}
                      >
                        <CardContent className="p-4 text-center space-y-3">
                          <div className="relative">
                            <IconComponent
                              className={`h-8 w-8 mx-auto ${highlight.color === "cyan" ? "text-cyan-400" : "text-orange-400"} group-hover:scale-110 transition-transform motion-reduce:transition-none motion-reduce:group-hover:transform-none`}
                              aria-hidden="true"
                            />
                            <div
                              className={`absolute inset-0 ${highlight.color === "cyan" ? "bg-cyan-400" : "bg-orange-400"} blur-md opacity-20 group-hover:opacity-40 transition-opacity motion-reduce:transition-none`}
                              aria-hidden="true"
                            />
                          </div>
                          <div>
                            <h3
                              className={`font-orbitron font-bold text-sm tracking-wider ${highlight.color === "cyan" ? "text-cyan-400" : "text-orange-400"}`}
                            >
                              {highlight.label}
                            </h3>
                            <p className="text-xs text-cyan-100 font-inter">{highlight.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )
                })}
              </div>
            </section>
          </div>

          {/* GreenField Section */}
          <section aria-labelledby="greenfield-heading">
            <Card className="bg-gradient-to-r from-black/80 to-black/60 border border-orange-400/30 backdrop-blur-sm relative overflow-hidden focus-within:ring-2 focus-within:ring-orange-400 focus-within:ring-offset-2 focus-within:ring-offset-black">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/5 to-cyan-400/5" aria-hidden="true" />
              <CardContent className="p-4 sm:p-8 relative z-10">
                <article className="text-center space-y-6">
                  <header className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0">
                    <div
                      className="hidden sm:block w-12 h-px bg-gradient-to-r from-transparent to-orange-400"
                      aria-hidden="true"
                    />
                    <h2
                      id="greenfield-heading"
                      className="text-lg sm:text-xl font-orbitron font-bold text-orange-400 tracking-wide sm:tracking-wider px-2 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-black rounded-sm"
                      tabIndex={-1}
                    >
                      <span className="sr-only">GreenField Development</span>
                      <span className="block sm:hidden" aria-hidden="true">
                        GREENFIELD.SYS
                      </span>
                      <span className="hidden sm:block" aria-hidden="true">
                        GREENFIELD_DEVELOPMENT.SYS
                      </span>
                    </h2>
                    <div
                      className="hidden sm:block w-12 h-px bg-gradient-to-l from-transparent to-orange-400"
                      aria-hidden="true"
                    />
                  </header>
                  <p className="text-cyan-100 font-inter max-w-3xl mx-auto text-sm sm:text-base">
                    In addition to my engineering work, I lead GreenField Development, a freelance partnership I founded
                    to help self-taught developers accelerate their careers. Through this mentorship program, I focus on
                    developing practical, project-based skills with a strong emphasis on Agile methodologies, version
                    control practices, and project management.
                  </p>
                  <Badge
                    variant="outline"
                    className="border-orange-400/50 text-orange-400 bg-orange-400/10 font-orbitron text-xs tracking-wider focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-black"
                    role="status"
                    aria-label="Focus area: Mentorship and Development"
                  >
                    <span aria-hidden="true">MENTORSHIP & DEVELOPMENT</span>
                  </Badge>
                </article>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </section>
  )
}
