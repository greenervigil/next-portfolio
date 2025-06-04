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
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-cyan-400" />
              <Cpu className="h-6 w-6 text-cyan-400" />
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-cyan-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-orbitron font-bold mb-4 text-cyan-400 tracking-wider">
              ABOUT_ME.EXE
            </h2>
            <p className="text-lg text-cyan-100 max-w-2xl mx-auto font-inter">
              Passionate about technology, leadership, and continuous growth in the digital realm
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Content */}
            <div className="space-y-6">
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
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <Card
                  key={index}
                  className="bg-black/50 border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 group backdrop-blur-sm"
                >
                  <CardContent className="p-4 text-center space-y-3">
                    <div className="relative">
                      <highlight.icon
                        className={`h-8 w-8 mx-auto ${highlight.color === "cyan" ? "text-cyan-400" : "text-orange-400"} group-hover:scale-110 transition-transform`}
                      />
                      <div
                        className={`absolute inset-0 ${highlight.color === "cyan" ? "bg-cyan-400" : "bg-orange-400"} blur-md opacity-20 group-hover:opacity-40 transition-opacity`}
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
              ))}
            </div>
          </div>

          {/* GreenField Section */}
          <Card className="bg-gradient-to-r from-black/80 to-black/60 border border-orange-400/30 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/5 to-cyan-400/5" />
            <CardContent className="p-8 relative z-10">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center space-x-2">
                  <div className="w-12 h-px bg-gradient-to-r from-transparent to-orange-400" />
                  <h3 className="text-xl font-orbitron font-bold text-orange-400 tracking-wider">
                    GREENFIELD_DEVELOPMENT.SYS
                  </h3>
                  <div className="w-12 h-px bg-gradient-to-l from-transparent to-orange-400" />
                </div>
                <p className="text-cyan-100 font-inter max-w-3xl mx-auto">
                  In addition to my engineering work, I lead GreenField Development, a freelance partnership I founded
                  to help self-taught developers accelerate their careers. Through this mentorship program, I focus on
                  developing practical, project-based skills with a strong emphasis on Agile methodologies, version
                  control practices, and project management.
                </p>
                <Badge
                  variant="outline"
                  className="border-orange-400/50 text-orange-400 bg-orange-400/10 font-orbitron tracking-wider"
                >
                  MENTORSHIP & DEVELOPMENT
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
