"use client"

import { useState, useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Code,
  Database,
  Globe,
  Shield,
  Rocket,
  Zap,
  Terminal,
  Cpu,
  Settings,
  TestTube,
  Smartphone,
  Cloud,
  Lock,
} from "lucide-react"
import { ProjectModal } from "./project-modal"

interface Project {
  id: number
  title: string
  shortTitle: string
  description: string
  detailedDescription: string
  technologies: string[]
  type: string
  status: string
  icon: any
  color: "cyan" | "orange"
  year: string
  duration: string
  team: string
  role: string
  challenges: string[]
  achievements: string[]
  links: {
    demo?: string
    github?: string
    live?: string
  }
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [containerWidth, setContainerWidth] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
      }
    }

    checkMobile()
    updateWidth()

    window.addEventListener("resize", checkMobile)
    window.addEventListener("resize", updateWidth)

    return () => {
      window.removeEventListener("resize", checkMobile)
      window.removeEventListener("resize", updateWidth)
    }
  }, [])

  const projects: Project[] = [
    {
      id: 1,
      title: "GreenField Development Web Platform",
      shortTitle: "GreenField",
      description: "A SaaS web appication",
      detailedDescription:
        "A SaaS cooperative company specializing in building scalable web applications and mentoring self-taught developers.",
      technologies: ["NextJS", "Tailwind CSS", "shadcn/ui", "Vercel"],
      type: "SAAS_PLATFORM",
      status: "ACTIVE",
      icon: Users,
      color: "cyan",
      year: "2022",
      duration: "ongoing",
      team: "2 developers",
      role: "Founder, Tech Lead & Architect",
      challenges: [
        "Building a scalable architecture",
        "Mentoring self-taught developers",
        "Project mentoring with agile methodologies",
        "Ensuring high availability and performance",
      ],
      achievements: ["10 successful projects delivered", "100% client satisfaction", "98% on-time delivery rate"],
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      id: 2,
      title: "Learning Portrait API & Database Redesign",
      shortTitle: "Microservices",
      description: "Enterprise microservices architecture",
      detailedDescription:
        "Redesigned a complex microservices architecture for an enterprise application, focusing on scalability, performance, and maintainability. Implemented a zero-downtime migration strategy and optimized data consistency across services.",
      technologies: ["NextJS", "Swagger", "PostgreSQL", "Apollo Client", "Docker", "Heroku"],
      type: "ENTERPRISE_SOLUTION",
      status: "PRODUCTION",
      icon: Shield,
      color: "orange",
      year: "2024",
      duration: "12 months",
      team: "2 developers",
      role: "Tech Lead & Architect",
      challenges: [
        "Zero-downtime migration strategy",
        "Data consistency across services",
        "Performance optimization at scale",
        "Authentication and authorization complexities",
      ],
      achievements: [
        "Reduced API response time by 50%",
        "Improved data consistency across services",
        "Achieved 99.99% uptime during migration",
      ],
      links: {
        live: "https://api.learningportrait.com",
      },
    },
    {
      id: 3,
      title: "Learning Portrait Frontend Gradebook",
      shortTitle: "Competency Gradebook",
      description: "Real-time collaboration platform",
      detailedDescription:
        "Developed a real-time collaboration platform for educational institutions, enabling teachers and students to interact seamlessly",
      technologies: ["NextJS", "TypeScript", "Material UI", "GraphQL", "Storybook", "Auth0", "Vercel"],
      type: "SAAS_PLATFORM",
      status: "COMPLETED",
      icon: Rocket,
      color: "cyan",
      year: "2024",
      duration: "12 months",
      team: "1 developers",
      role: "Full-Stack Tech Lead",
      challenges: ["Real-time data synchronization", "Scalability for large user base", "Cross-platform compatibility"],
      achievements: ["Delivered fully featured demo application", "Achieved 99.9% real-time sync accuracy", "Reduced load time by 40%"],
      links: {
        live: "https://app.learningportrait.com",
      },
    },
    {
      id: 4,
      title: "Ultra Crew Mobile Application",
      shortTitle: "Long distance running assistant",
      description: "Crew assistant for long distance running",
      detailedDescription:
        "Developed a comprehensive mobile application for long-distance runners, providing real-time performance tracking, personalized training plans, and community features.",
      technologies: ["React Native", "Supabase", "Expo", "Stripe"],
      type: "MOBILE_APP",
      status: "ACTIVE",
      icon: Smartphone,
      color: "orange",
      year: "2024",
      duration: "8 months",
      team: "2 developers",
      role: "Mobile Lead Architect",
      challenges: ["Real-time performance tracking", "Personalized training algorithms", "Community engagement features"],
      achievements: [
        "Launched to App Store and Google Play",
      ],
      links: {
        demo: "#",
      },
    },
    {
      id: 5,
      title: "Ultra Crew Web Application",
      shortTitle: "Ultra Crew Web",
      description: "Web platform for long distance running",
      detailedDescription:
        "Built a feature-rich web application for long-distance runners, offering advanced search, AR product visualization, secure payments, and personalized recommendations.",
      technologies: ["NextJS", "Supabase", "Tailwind CSS", "Stripe", "Vercel"],
      type: "WEB_APP",
      status: "ACTIVE",
      icon: Cpu,
      color: "cyan",
      year: "2024",
      duration: "8 months",
      team: "2 developers",
      role: "Mobile Lead Developer",
      challenges: ["AR integration complexity", "Payment security implementation", "Performance on low-end devices"],
      achievements: ["50K+ downloads in first month", "4.8/5 app store rating", "30% increase in mobile sales"],
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      id: 6,
      title: "C&M Mechanical Services Customer web application",
      shortTitle: "C&M Mechanical Services",
      description: "Redesigned customer web application",
      detailedDescription:
        "Redesigned and implemented a customer-facing web application for C&M Mechanical Services, focusing on user experience, performance, and scalability. Integrated CI/CD pipelines for automated deployments and monitoring.",
      technologies: ["NextJS", "Cognito Forms", "Tailwind CSS", "Vercel"],
      type: "WEB_APP",
      status: "PRODUCTION",
      icon: Settings,
      color: "orange",
      year: "2021",
      duration: "4 months",
      team: "1 developers",
      role: "Architect & Developer",
      challenges: ["Legacy system integration", "User experience improvements", "CI/CD pipeline setup"],
      achievements: [
        "Improved user satisfaction by 40%",
        "Reduced page load time by 60%",
        "Achieved 99.9% uptime with automated monitoring",
        "Successfully migrated legacy data without downtime",
        "Implemented CI/CD pipeline for automated deployments",
      ],
      links: {
        live: "https://cmmechanicalhvac.com",
      },
    },
    {
      id: 7,
      title: "Animation Product Calculator",
      shortTitle: "Animation Calculator",
      description: "Product calculator for creative animations",
      detailedDescription:
        "Developed a product calculator for creative animations, allowing users to estimate costs based on various parameters and generate detailed reports.",
      technologies: ["Wordpress", "HTML", "Sass", "CSS", "PHP"],
      type: "ANIMATION_TOOL",
      status: "COMPLETED",
      icon: Lock,
      color: "cyan",
      year: "2019",
      duration: "3 months",
      team: "1 developers",
      role: "Developer",
      challenges: ["Complex cost estimation algorithms", "User-friendly interface design", "Integration with existing systems"],
      achievements: ["On-time delivery", "High user satisfaction", "Improved cost estimation accuracy by 30%"],
      links: {
        live: "https://cs.cengage.com/animation-calculator/",
      },
    },
    {
      id: 8,
      title: "Express Animations",
      shortTitle: "Wordpress page",
      description: "Wordpress page for Express Animations",
      detailedDescription:
        "Developed a Wordpress page for Express Animations, focusing on performance optimization, SEO, and user engagement. Implemented custom themes and plugins to enhance functionality.",
      technologies: ["Wordpress", "HTML", "CSS", "Sass", "PHP"],
      type: "WORDPRESS_PAGE",
      status: "COMPLETED",
      icon: Cloud,
      color: "orange",
      year: "2019",
      duration: "1 months",
      team: "1 developers",
      role: "Developer",
      challenges: ["Performance optimization", "SEO enhancements", "Custom theme development"],
      achievements: [
        "Improved page load time by 50%",
        "Increased organic traffic by 40%",
        "Achieved top rankings for target keywords",
      ],
      links: {
        live: "https://cs.cengage.com/capabilities/media-design/animation/express-animations/",
      },
    },
    {
      id: 9,
      title: "Big Ideas Math Marketing Campaign",
      shortTitle: "Marketing Campaign",
      description: "Marketing campaign for Big Ideas Math",
      detailedDescription:
        "Developed a comprehensive marketing campaign for Big Ideas Math, including social media strategies, content creation, and performance analytics. Focused on increasing brand awareness and engagement.",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      type: "MARKETING_CAMPAIGN",
      status: "PRODUCTION",
      icon: Globe,
      color: "cyan",
      year: "2019",
      duration: "2 months",
      team: "1 developers",
      role: "Developer",
      challenges: ["Brand awareness strategies", "Content creation for diverse platforms", "Performance analytics"],
      achievements: ["Achieved 200K+ impressions", "Increased engagement by 150%", "Generated 5K+ leads"],
      links: {
        live: "https://ngl.cengage.com/assets/html/bigIdeas/index.htm",
      },
    },
    {
      id: 10,
      title: "NGL K-12 Marketing Campaign",
      shortTitle: "NGL K-12 Campaign",
      description: "National Geographic Learning K-12 marketing campaign",
      detailedDescription:
        "Developed a national marketing campaign for National Geographic Learning K-12, focusing on interactive content, user engagement, and performance tracking. Implemented automated testing frameworks to ensure quality and reliability.",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      type: "MARKETING_CAMPAIGN",
      status: "PRODUCTION",
      icon: TestTube,
      color: "orange",
      year: "2018",
      duration: "3 months",
      team: "1 developers",
      role: "Developer",
      challenges: ["Interactive content development", "User engagement strategies", "Automated testing implementation"],
      achievements: ["Achieved 300K+ impressions", "Increased user engagement by 200%", "Generated 10K+ leads"],
      links: {
        live: "https://ngl.cengage.com/assets/html/digitalAccess/index.html",
      },
    },
    {
      id: 11,
      title: "NGL Digital Marketing Campaign",
      shortTitle: "Digital Marketing Campaign",
      description: "National Geographic Learning digital marketing campaign",
      detailedDescription:
        "Developed a digital marketing campaign for National Geographic Learning, focusing on data-driven strategies, real-time analytics, and personalized user experiences. Implemented a robust data pipeline for continuous improvement.",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      type: "DIGITAL_MARKETING_CAMPAIGN",
      status: "PRODUCTION",
      icon: Database,
      color: "cyan",
      year: "2018",
      duration: "3 months",
      team: "1 developers",
      role: "Developer",
      challenges: ["Data-driven marketing strategies", "Real-time analytics implementation", "Personalized user experiences"],
      achievements: ["Achieved 500K+ impressions", "Increased conversion rates by 250%", "Generated 15K+ leads"],
      links: {
        live: "https://ngl.cengage.com",
      },
    },
    {
      id: 12,
      title: "My Pantry Application",
      shortTitle: "My Pantry",
      description: "Recipe and pantry management tool",
      detailedDescription:
        "Developed a comprehensive recipe and pantry management tool with real-time inventory tracking, meal planning, and grocery list generation. Integrated with multiple social media platforms for recipe sharing and community engagement.",
      technologies: ["React Native", "Tailwind CSS", "Supabase", "GraphQL", "Stripe"],
      type: "ANALYTICS_TOOL",
      status: "COMPLETED",
      icon: Globe,
      color: "orange",
      year: "2025",
      duration: "5+ months",
      team: "1 developers",
      role: "Full-Stack Engineer",
      challenges: ["Real-time inventory synchronization", "Cross-platform compatibility", "Social media integration"],
      achievements: ["Supports 100K+ recipes", "Real-time inventory updates", "Integrated with 5+ social platforms"],
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      id: 13,
      title: "Gal's Best Pal",
      shortTitle: "GBP Wordpress Theme",
      description: "Custom Wordpress theme for Gal's Best Pal",
      detailedDescription:
        "Developed a custom Wordpress theme for Gal's Best Pal, focusing on performance optimization, SEO, and user engagement. Implemented custom plugins for enhanced functionality and user experience.",
      technologies: ["Wordpress", "HTML", "CSS", "Sass", "PHP", "JavaScript"],
      type: "WORDPRESS_THEME",
      status: "PRODUCTION",
      icon: Database,
      color: "cyan",
      year: "2022",
      duration: "6 months",
      team: "2 developers",
      role: "Lead Developer",
      challenges: ["Custom theme development", "Performance optimization", "SEO enhancements"],
      achievements: ["Improved page load time by 50%", "Increased organic traffic by 40%", "Achieved top rankings for target keywords"],
      links: {
        live: "https://galsbestpal.com",
      },
    },
    {
      id: 14,
      title: "React Magma Component Library",
      shortTitle: "React Component Library",
      description: "Reusable React components for web applications",
      detailedDescription:
        "Developed a comprehensive React component library with reusable components, focusing on performance, accessibility, and developer experience. Implemented automated testing and documentation generation.",
      technologies: ["React", "Gatsby", "Jest", "React Testing Library", "Lerna", "Netlify"],
      type: "REACT_COMPONENT_LIBRARY",
      status: "COMPLETED",
      icon: Rocket,
      color: "orange",
      year: "2020",
      duration: "12 months",
      team: "5 developers",
      role: "Senior Frontend Engineer",
      challenges: ["Component reusability", "Performance optimization", "Accessibility compliance"],
      achievements: ["Over 40 reusable components", "Reduced development time by 30%", "Improved accessibility compliance to WCAG 2.1 standards"],
      links: {
        live: "https://react-magma.cengage.com",
      },
    },
    {
      id: 15,
      title: "LeanBiologix Site Update",
      shortTitle: "LeanBiologix",
      description: "LeanBiologix wordpress site theme update",
      detailedDescription:
        "Updated the LeanBiologix Wordpress site with a new theme, focusing on performance, SEO, and user engagement. Implemented custom plugins for enhanced functionality and user experience.",
      technologies: ["Wordpress", "HTML", "CSS", "JavaScript", "PostgreSQL", "Docker"],
      type: "WORDPRESS_SITE_UPDATE",
      status: "COMPLETED",
      icon: Zap,
      color: "cyan",
      year: "2020",
      duration: "4 months",
      team: "2 developers",
      role: "Lead Developer",
      challenges: ["Theme customization", "Performance optimization", "SEO enhancements"],
      achievements: ["Improved page load time by 60%", "Increased organic traffic by 50%", "Achieved top rankings for target keywords"],
      links: {
        live: "https://leanbiologix.com",
      },
    },
    {
      id: 16,
      title: "NGL Mindtap Schools",
      shortTitle: "NGL Mindtap Schools LMS",
      description: "National Geographic Learning Mindtap Schools LMS",
      detailedDescription:
        "Developed a comprehensive Learning Management System (LMS) for National Geographic Learning, focusing on user experience, performance, and security. Implemented advanced analytics and reporting features for educators.",
      technologies: ["React", "React Bootstrap", "JavaScript", "TypeScript", "Jest", "Enzyme", "Jenkins", "AWS"],
      type: "LMS_PLATFORM",
      status: "PRODUCTION",
      icon: Shield,
      color: "orange",
      year: "2021",
      duration: "24 months",
      team: "7 developers",
      role: "Frontend Tech Lead",
      challenges: ["Complex user interface design", "Performance optimization for large datasets", "Security compliance"],
      achievements: ["Served 1M+ students", "Achieved 99.9% uptime", "Improved user satisfaction by 30%"],
      links: {
        live: "https://nglsync.cengage.com",
      },
    },
    {
      id: 17,
      title: "MyELT English Language Learning Management System",
      shortTitle: "LMS",
      description: "Educational platform for English language learning",
      detailedDescription:
        "Developed an educational platform for English language learning with personalized learning paths, interactive content, and real-time collaboration features. Integrated AI-powered tutoring and analytics for educators.",
      technologies: ['Java', 'Angular', 'React', 'Struts', 'CSS', 'JavaScript', 'Styled Components'],
      type: "EDUCATION_PLATFORM",
      status: "PRODUCTION",
      icon: Code,
      color: "cyan",
      year: "2017",
      duration: "60 months",
      team: "8 developers",
      role: "Senior Full-Stack Engineer",
      challenges: [
        "Personalized learning path algorithms",
        "Real-time collaboration features",
        "Speech Recognition tutoring integration",
        "Scalability for large user base",
      ],
      achievements: ["Served 5M+ students", "Achieved 99.9% real-time collaboration accuracy", "Improved learning outcomes by 40%"],
      links: {
        live: "https://myelt.heinle.com/ilrn/authentication/signIn.do?inst=MYELT",
      },
    },
    /*{
      id: 18,
      title: "Cybersecurity Monitoring Dashboard",
      shortTitle: "Security",
      description: "Real-time threat detection system",
      detailedDescription:
        "Developed a comprehensive cybersecurity monitoring dashboard with real-time threat detection, automated response, and compliance reporting.",
      technologies: ["React", "Elasticsearch", "Kibana", "Python", "Kafka", "Docker"],
      type: "SECURITY_PLATFORM",
      status: "PRODUCTION",
      icon: Lock,
      color: "orange",
      year: "2023",
      duration: "6 months",
      team: "5 developers",
      role: "Security Engineer",
      challenges: ["Real-time threat correlation", "False positive reduction", "Automated response implementation"],
      achievements: [
        "99.9% threat detection accuracy",
        "Sub-second alert generation",
        "Reduced false positives by 85%",
      ],
      links: {
        live: "#",
      },
    },*/
  ]

  // Get hexagon grid layout based on screen size
  const getHexagonLayout = () => {
    if (isMobile) {
      // Mobile layout: 3 columns with vertical stacking
      return {
        rows: 6,
        itemsPerRow: 3,
        hexWidth: Math.min(110, containerWidth / 3.2),
        hexHeight: Math.min(110, containerWidth / 3.2) * 0.9,
        pattern: [3, 3, 3, 3, 3, 3], // 3 hexagons per row for 6 rows
      }
    } else {
      // Desktop layout: 3-4-5-4-2 pattern
      return {
        rows: 5,
        itemsPerRow: 5,
        hexWidth: Math.min(180, containerWidth / 5.5),
        hexHeight: Math.min(180, containerWidth / 5.5) * 0.9,
        pattern: [3, 4, 5, 4, 2], // Original pattern
      }
    }
  }

  const layout = getHexagonLayout()

  // Calculate position for each hexagon
  const getHexPosition = (index: number) => {
    if (isMobile) {
      // Mobile layout: 3 columns with vertical stacking
      const col = index % 3
      const row = Math.floor(index / 3)

      // Offset every other row for honeycomb effect
      const xOffset = row % 2 === 0 ? 0 : layout.hexWidth / 2

      // Center the grid
      const totalWidth = 3 * layout.hexWidth
      const leftMargin = (containerWidth - totalWidth) / 2

      return {
        x: leftMargin + col * layout.hexWidth + xOffset,
        y: row * (layout.hexHeight * 0.75),
      }
    } else {
      // Desktop layout: 3-4-5-4-2 pattern
      const { pattern } = layout
      let currentIndex = 0
      let row = 0

      for (let i = 0; i < pattern.length; i++) {
        if (index < currentIndex + pattern[i]) {
          row = i
          break
        }
        currentIndex += pattern[i]
      }

      const positionInRow = index - currentIndex
      const rowWidth = pattern[row] * layout.hexWidth
      const leftMargin = (containerWidth - rowWidth) / 2

      return {
        x: leftMargin + positionInRow * layout.hexWidth,
        y: row * (layout.hexHeight * 0.75),
      }
    }
  }

  // Calculate container height based on layout
  const getContainerHeight = () => {
    return layout.rows * (layout.hexHeight * 0.75) + layout.hexHeight * 0.25 + 40
  }

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-orange-400" />
              <Terminal className="h-6 w-6 text-orange-400" />
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-orange-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-orbitron font-bold mb-4 text-orange-400 tracking-wider">
              PROJECT_MATRIX.HEX
            </h2>
            <p className="text-lg text-cyan-100 font-inter">
              Interactive hexagonal grid showcasing 18 innovative projects
            </p>
          </div>

          {/* Hexagonal Grid Container */}
          <div
            ref={containerRef}
            className="relative w-full mx-auto"
            style={{
              height: containerWidth ? `${getContainerHeight()}px` : "800px",
              minHeight: isMobile ? "1200px" : "800px",
            }}
          >
            {containerWidth > 0 && (
              <>
                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                  {projects.slice(0, 18).map((_, index) => {
                    const pos = getHexPosition(index)

                    // Connect to next hexagon in same row
                    if (isMobile) {
                      // For mobile: connect hexagons in a honeycomb pattern
                      const row = Math.floor(index / 3)
                      const col = index % 3

                      // Connect to right neighbor if not last in row
                      if (col < 2 && index < 17) {
                        const nextPos = getHexPosition(index + 1)
                        return (
                          <line
                            key={`line-h-${index}`}
                            x1={pos.x + layout.hexWidth / 2}
                            y1={pos.y + layout.hexHeight / 2}
                            x2={nextPos.x + layout.hexWidth / 2}
                            y2={nextPos.y + layout.hexHeight / 2}
                            stroke="url(#connectionGradient)"
                            strokeWidth="1"
                            opacity="0.3"
                          />
                        )
                      }
                      return null
                    } else {
                      // For desktop: connect hexagons in the original pattern
                      if (index < 17) {
                        const nextPos = getHexPosition(index + 1)
                        return (
                          <line
                            key={`line-${index}`}
                            x1={pos.x + layout.hexWidth / 2}
                            y1={pos.y + layout.hexHeight / 2}
                            x2={nextPos.x + layout.hexWidth / 2}
                            y2={nextPos.y + layout.hexHeight / 2}
                            stroke="url(#connectionGradient)"
                            strokeWidth="2"
                            opacity="0.3"
                          />
                        )
                      }
                      return null
                    }
                  })}
                  <defs>
                    <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00ffff" />
                      <stop offset="100%" stopColor="#ff6b35" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Hexagonal Project Cards */}
                {projects.slice(0, 18).map((project, index) => {
                  const position = getHexPosition(index)
                  return (
                    <div
                      key={project.id}
                      className="absolute cursor-pointer group"
                      style={{
                        left: `${position.x}px`,
                        top: `${position.y}px`,
                        zIndex: 2,
                        width: `${layout.hexWidth}px`,
                        height: `${layout.hexHeight}px`,
                      }}
                      onClick={() => setSelectedProject(project)}
                    >
                      {/* SVG Hexagon with Animated Border */}
                      <svg
                        width={layout.hexWidth}
                        height={layout.hexHeight}
                        viewBox={`0 0 ${layout.hexWidth} ${layout.hexHeight}`}
                        className="absolute inset-0"
                        style={{ filter: "drop-shadow(0 0 20px rgba(0, 255, 255, 0.3))" }}
                      >
                        {/* Background Hexagon */}
                        <polygon
                          points={`${layout.hexWidth / 2},${layout.hexHeight * 0.05} ${layout.hexWidth * 0.87},${layout.hexHeight * 0.3} ${layout.hexWidth * 0.87},${layout.hexHeight * 0.7} ${layout.hexWidth / 2},${layout.hexHeight * 0.95} ${layout.hexWidth * 0.13},${layout.hexHeight * 0.7} ${layout.hexWidth * 0.13},${layout.hexHeight * 0.3}`}
                          fill="rgba(0, 0, 0, 0.8)"
                          stroke={project.color === "cyan" ? "rgba(0, 255, 255, 0.5)" : "rgba(255, 107, 53, 0.5)"}
                          strokeWidth={isMobile ? "1" : "2"}
                          className="transition-all duration-300 group-hover:fill-black/90"
                        />

                        {/* Animated Border Beam */}
                        <polygon
                          points={`${layout.hexWidth / 2},${layout.hexHeight * 0.05} ${layout.hexWidth * 0.87},${layout.hexHeight * 0.3} ${layout.hexWidth * 0.87},${layout.hexHeight * 0.7} ${layout.hexWidth / 2},${layout.hexHeight * 0.95} ${layout.hexWidth * 0.13},${layout.hexHeight * 0.7} ${layout.hexWidth * 0.13},${layout.hexHeight * 0.3}`}
                          fill="none"
                          stroke={project.color === "cyan" ? "#00ffff" : "#ff6b35"}
                          strokeWidth={isMobile ? "2" : "3"}
                          strokeLinecap="round"
                          strokeDasharray={isMobile ? "15 200" : "20 300"}
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <animate
                            attributeName="stroke-dashoffset"
                            values={isMobile ? "0;-215" : "0;-320"}
                            dur="2s"
                            repeatCount="indefinite"
                            begin="0s"
                          />
                        </polygon>

                        {/* Glow Effect */}
                        <polygon
                          points={`${layout.hexWidth / 2},${layout.hexHeight * 0.05} ${layout.hexWidth * 0.87},${layout.hexHeight * 0.3} ${layout.hexWidth * 0.87},${layout.hexHeight * 0.7} ${layout.hexWidth / 2},${layout.hexHeight * 0.95} ${layout.hexWidth * 0.13},${layout.hexHeight * 0.7} ${layout.hexWidth * 0.13},${layout.hexHeight * 0.3}`}
                          fill="none"
                          stroke={project.color === "cyan" ? "#00ffff" : "#ff6b35"}
                          strokeWidth="1"
                          className="opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                          style={{
                            filter: "blur(4px)",
                          }}
                        />
                      </svg>

                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center z-10">
                        <div className="relative mb-2">
                          <project.icon
                            className={`${isMobile ? "h-6 w-6" : "h-10 w-10"} ${
                              project.color === "cyan" ? "text-cyan-400" : "text-orange-400"
                            } group-hover:scale-110 transition-transform duration-300`}
                          />
                          <div
                            className={`absolute inset-0 ${
                              project.color === "cyan" ? "bg-cyan-400" : "bg-orange-400"
                            } blur-lg opacity-20 group-hover:opacity-50 transition-opacity duration-300`}
                          />
                        </div>

                        <h3
                          className={`font-orbitron font-bold ${isMobile ? "text-xs" : "text-sm"} tracking-wider mb-1 ${
                            project.color === "cyan" ? "text-cyan-400" : "text-orange-400"
                          } group-hover:text-white transition-colors duration-300`}
                        >
                          {project.shortTitle}
                        </h3>

                        <Badge
                          variant="outline"
                          className={`${isMobile ? "text-xs px-1 py-0" : "text-xs"} font-orbitron tracking-wider transition-all duration-300 ${
                            project.status === "ACTIVE"
                              ? "border-green-400/50 text-green-400 bg-green-400/10 group-hover:border-green-400 group-hover:bg-green-400/20"
                              : project.status === "PRODUCTION"
                                ? "border-orange-400/50 text-orange-400 bg-orange-400/10 group-hover:border-orange-400 group-hover:bg-orange-400/20"
                                : "border-cyan-400/50 text-cyan-400 bg-cyan-400/10 group-hover:border-cyan-400 group-hover:bg-cyan-400/20"
                          }`}
                        >
                          {project.status}
                        </Badge>

                        {/* Hover Pulse Effect */}
                        <div
                          className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 ${
                            project.color === "cyan" ? "bg-cyan-400" : "bg-orange-400"
                          }`}
                          style={{
                            clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
                            animation: "pulse 2s infinite",
                          }}
                        />
                      </div>

                      {/* Additional Glow Layer */}
                      <div
                        className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${
                          project.color === "cyan" ? "bg-cyan-400" : "bg-orange-400"
                        }`}
                        style={{
                          clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
                          filter: "blur(20px)",
                        }}
                      />
                    </div>
                  )
                })}
              </>
            )}
          </div>

          {/* Instructions */}
          <div className="text-center mt-12">
            <p className="text-cyan-100 font-inter">
              <span className="text-cyan-400 font-orbitron tracking-wider">CLICK</span> any hexagon to access detailed
              project information
            </p>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  )
}
