import type { LucideIcon } from "lucide-react"

export type ProjectType = {
  id: number
  title: string
  shortTitle: string
  description: string
  detailedDescription: string
  technologies: string[]
  type: string
  status: string
  icon: LucideIcon
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
