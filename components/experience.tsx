import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, Zap, ChevronRight } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Senior Software Engineer & Tech Lead",
      company: "Fusion Medical Staffing",
      period: "2023 - Present",
      status: "ACTIVE",
      description:
        "Leading cross-functional teams and architecting scalable solutions for complex business challenges.",
      achievements: [
        "Led development of Next.js applications with TypeScript and Tailwind CSS",
        "Mentored 6+ junior developers through structured programs",
        "Implemented CI/CD pipelines reducing deployment time by 70%",
        "Implemented a profile feature for 2000+ users",
        "Enhanced application performance by optimizing server-side rendering",
        "Improved advanced search functionality using Algolia",
        "Integrated Builder.io CMS for dynamic content management",
        "Developed custom components and utilities for reusable UI patterns",
        "Established coding standards and best practices across teams",
      ],
    },
    {
      title: "Lead Software Engineer",
      company: "Learning Portrait",
      period: "2024 - 2025",
      status: "COMPLETED",
      description: "Developed full-stack Gradebook application with a focus on user experience and performance.",
      achievements: [
        "Achitected and developed a full-stack Gradebook application using Next.js, TypeScript, and Tailwind CSS",
        "Implemented API layers with Next.js API routes and PostgreSQL for seamless data handling",
        "Implemented a user-friendly interface with Material UI components",
        "Optimized application performance through server-side rendering and static site generation",
        "Integrated third-party services for authentication",
        "Implemented and maintained production deployments on a CI/CD pipeline using Vercel and Heroku"
      ],
    },
    {
      title: "Founder & Tech Lead",
      company: "Greenfield Development",
      period: "2022 - Present",
      status: "ACTIVE",
      description:
        "Founded a SaaS cooperative company specializing in building scalable web applications and mentoring self-taught developers.",
      achievements: [
        "Founded Greenfield Development, a software development company",
        "Mentored self-taught developers through structured programs",
        "Developed scalable web applications using Next.js, TypeScript, and Tailwind CSS",
        "Implemented CI/CD pipelines for efficient deployment processes",
        "Established coding standards and best practices for development teams",
        "Created reusable UI components and utilities for consistent design patterns"
      ],
    },
    {
      title: "Frontend Technical Lead",
      company: "Cengage Group",
      period: "2021 - 2023",
      status: "COMPLETED",
      description: "Led frontend development for a SaaS B2B textbook education web app, focusing on React and component libraries.",
      achievements: [
        'SME for React portion of a SaaS B2B textbook education web app',
        'Managed a team of five full time engineers',
        'Estimated sprint velocity based on prototypes, Agile methods, and available engineering resources',
        'Interfaced with stakeholders on future timelines and demoed completed deliverables',
        'Lead product creation of a compound component library in NPM',
        'Lead product shift left initiative with Jest and Cypress'
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Cengage Group",
      period: "2018 - 2021",
      status: "COMPLETED",
      description: "Fullstack development for educational applications, focusing on React, Java, and cloud technologies.",
      achievements: [
        'Speech Recognition grammar automation using Java Speech Grammar(JSGF) Format in React',
        'Development and Enhancements to the MyELT application for National Geographic Learning / Cengage Learning using Java, Struts, JavaScript, Handlebars.js, D3, and AngularJS, Ant, Maven, Gradle, Groovy, and React',
        'Built RESTful API calls in Java to query and save documents',
        'Automation of XML and JSON metadata for application use in React'
      ],
    },
    {
      title: "Software Engineer",
      company: "Cengage Group",
      period: "2017 - 2018",
      status: "COMPLETED",
      description: "Fullstack development for educational applications, focusing on React, Java, and cloud technologies.",
      achievements: [
        'Fullstack development for educational applications using Angular, React, Java, and cloud technologies',
        'Developed RESTful APIs in Java to handle data interactions',
        'Implemented responsive UI components with Angular, React and Redux',
        'Collaborated with cross-functional teams to deliver high-quality software solutions',
        'Participated in code reviews and provided mentorship to junior developers'
      ],
    },
    {
      title: "Software Engineer",
      company: "Computer Technology Services (CTS)",
      period: "2016 - 2017",
      status: "COMPLETED",
      description: "Fullstack development for educational applications, focusing on React, Java, and cloud technologies.",
      achievements: [
        'Fullstack development and enhancements to the MyELT application using Angular, React, Java, and cloud technologies',
        'Developed RESTful APIs in Java to handle data interactions',
        'Implemented responsive UI components with Angular, React and Redux',
        'Collaborated with cross-functional teams to deliver high-quality software solutions',
        'XML and JSON metadata creation for application deployment'
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-orange-400" />
              <Briefcase className="h-6 w-6 text-orange-400" />
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-orange-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-orbitron font-bold mb-4 text-orange-400 tracking-wide sm:tracking-wider">
              <span className="block sm:hidden">EXPERIENCE.DAT</span>
              <span className="hidden sm:block">EXPERIENCE_LOG.DAT</span>
            </h2>
            <p className="text-base sm:text-lg text-cyan-100 font-inter">
              A journey of growth, leadership, and technical excellence
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="bg-black/50 border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 group backdrop-blur-sm relative overflow-hidden"
              >
                {/* Animated border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-transparent to-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between">
                    <div className="space-y-3">
                      <CardTitle className="text-xl flex items-center gap-3 font-orbitron">
                        <Zap className="h-5 w-5 text-cyan-400 group-hover:text-orange-400 transition-colors" />
                        <span className="text-cyan-400 group-hover:text-orange-400 transition-colors tracking-wider">
                          {exp.title}
                        </span>
                      </CardTitle>
                      <div className="flex items-center gap-4 text-cyan-100">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-orange-400" />
                          <span className="font-inter">{exp.period}</span>
                        </div>
                        <Badge
                          variant="outline"
                          className={`font-orbitron text-xs tracking-wider ${
                            exp.status === "ACTIVE"
                              ? "border-green-400/50 text-green-400 bg-green-400/10"
                              : "border-orange-400/50 text-orange-400 bg-orange-400/10"
                          }`}
                        >
                          {exp.status}
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-cyan-400/50 text-cyan-400 bg-cyan-400/10 font-orbitron text-xs tracking-wider"
                        >
                          {exp.company}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <p className="text-cyan-100 font-inter border-l-2 border-cyan-400/50 pl-4">{exp.description}</p>
                </CardHeader>
                <CardContent className="relative z-10">
                  <h4 className="font-orbitron font-bold mb-4 text-orange-400 tracking-wider">KEY_ACHIEVEMENTS:</h4>
                  <div className="space-y-3">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-start gap-3 group/item">
                        <ChevronRight className="h-4 w-4 text-cyan-400 mt-0.5 group-hover/item:text-orange-400 transition-colors" />
                        <span className="text-cyan-100 font-inter text-sm group-hover/item:text-cyan-50 transition-colors">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
