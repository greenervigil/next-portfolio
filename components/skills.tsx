import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Globe, Settings, TestTube, Cpu, Database } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "FRONTEND",
      icon: Globe,
      skills: [
        "HTML",
        "CSS",
        "CSS in JS",
        "Styled Components",
        "JavaScript",
        "TypeScript",
        "Angular",
        "React",
        "React Native",
        "Next.JS",
        "Svelte",
        "SolidJS",
        "Tailwind",
        "Bootstrap",
        "Material UI",
        "NPM",
        "Yarn",
        "PNPM",
        "Turborepo",
        "Storybook",
      ],
      color: "cyan",
    },
    {
      title: "BACKEND",
      icon: Code,
      skills: [
        "Node.js",
        "Express",
        "Java",
        "Spring Boot",
        "GraphQL",
        "RESTful APIs",
        "Prisma",
        "PostgreSQL",
        "MySQL",
        "Redux",
        "React Query",
        "Apollo Client",
      ],
      color: "orange",
    },
    {
      title: "TESTING",
      icon: TestTube,
      skills: ["Jest", "React Testing Library", "Enzyme", "JUnit", "Mockito", "Playwright"],
      color: "cyan",
    },
    {
      title: "DEVOPS",
      icon: Settings,
      skills: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Azure", "Heroku", "Netlify", "Vercel"],
      color: "orange",
    },
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-cyan-400" />
              <Database className="h-6 w-6 text-cyan-400" />
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-cyan-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-orbitron font-bold mb-4 text-cyan-400 tracking-wider">
              TECH_STACK.JSON
            </h2>
            <p className="text-lg text-cyan-100 font-inter">Technologies and tools I use to bring ideas to life</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-black/50 border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 group backdrop-blur-sm relative overflow-hidden"
              >
                {/* Animated background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${category.color === "cyan" ? "from-cyan-400/5" : "from-orange-400/5"} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <CardHeader className="text-center pb-4 relative z-10">
                  <div className="relative mb-2">
                    <category.icon
                      className={`h-8 w-8 mx-auto ${category.color === "cyan" ? "text-cyan-400" : "text-orange-400"} group-hover:scale-110 transition-transform`}
                    />
                    <div
                      className={`absolute inset-0 ${category.color === "cyan" ? "bg-cyan-400" : "bg-orange-400"} blur-md opacity-20 group-hover:opacity-40 transition-opacity`}
                    />
                  </div>
                  <CardTitle
                    className={`text-lg font-orbitron tracking-wider ${category.color === "cyan" ? "text-cyan-400" : "text-orange-400"}`}
                  >
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="outline"
                        className="text-xs font-inter border-cyan-400/30 text-cyan-100 hover:border-cyan-400/60 hover:bg-cyan-400/10 transition-all duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Continuous Learning Section */}
          <Card className="bg-gradient-to-r from-black/80 to-black/60 border border-cyan-400/30 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-orange-400/5" />
            <CardContent className="p-8 relative z-10">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center space-x-2">
                  <Cpu className="h-6 w-6 text-cyan-400" />
                  <h3 className="text-xl font-orbitron font-bold text-cyan-400 tracking-wider">
                    CONTINUOUS_LEARNING.INIT
                  </h3>
                  <Cpu className="h-6 w-6 text-cyan-400" />
                </div>
                <p className="text-cyan-100 font-inter max-w-3xl mx-auto">
                  Throughout my career, I've had the opportunity to work on a broad range of projects, leveraging a
                  diverse set of technologies. I'm always eager to take on new challenges that push both my skills and
                  my team's abilities to new heights, constantly exploring emerging technologies and best practices.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
