"use client"

import { useMemo, useState } from "react"
import { Terminal } from "lucide-react"
import { ProjectCarousel } from "./project-carousel"
import { ProjectModal } from "./project-modal"
import { useAppState } from "@/context/state-context"
import { ProjectedTitle, getTitleRevealDuration } from "@/components/projected-title"
import type { ProjectType } from "@/types/project-type"

const PAGE_TITLE = "PROJECT_MATRIX"
const contentRevealStyle = { animationDelay: `${getTitleRevealDuration(PAGE_TITLE)}ms` }

// Projects built within this window are "current"; older ones move to the
// archive carousel instead of being dropped, since several no longer have a
// live link to show but are still worth keeping visible.
const CURRENT_WINDOW_YEARS = 3

const CURRENT_TITLE = "CURRENT_BUILDS"
const ARCHIVE_TITLE = "ARCHIVE_LOG"

function byYearDescending(a: ProjectType, b: ProjectType) {
  return parseInt(b.year, 10) - parseInt(a.year, 10)
}

export function Projects() {
  const { projects } = useAppState()
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null)

  const { currentProjects, archivedProjects } = useMemo(() => {
    const cutoffYear = new Date().getFullYear() - CURRENT_WINDOW_YEARS
    const current: ProjectType[] = []
    const archived: ProjectType[] = []

    for (const project of projects) {
      const year = parseInt(project.year, 10)
      if (!Number.isNaN(year) && year >= cutoffYear) {
        current.push(project)
      } else {
        archived.push(project)
      }
    }

    return {
      currentProjects: current.sort(byYearDescending),
      archivedProjects: archived.sort(byYearDescending),
    }
  }, [projects])

  return (
    <section id="projects" className="py-20 relative overflow-hidden" aria-labelledby="projects-heading" role="region">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 mb-4" aria-hidden="true">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-orange-400" />
              <Terminal className="h-6 w-6 text-orange-400" />
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-orange-400" />
            </div>
            <ProjectedTitle
              text={PAGE_TITLE}
              srLabel="Projects"
              id="projects-heading"
              as="h2"
              className="text-2xl sm:text-3xl lg:text-4xl font-orbitron font-bold mb-4 text-orange-400 tracking-wide sm:tracking-wider"
            />
            <p className="text-base sm:text-lg text-cyan-100 font-inter fade-in-content" style={contentRevealStyle}>
              Interactive project carousels showcasing {projects.length} innovative projects
            </p>
            <div className="sr-only">
              Use the arrow buttons, Tab, or the left and right arrow keys to browse each carousel. Select the
              centered card to open its details.
            </div>
          </header>

          <div className="space-y-16">
            <div>
              <ProjectedTitle
                text={CURRENT_TITLE}
                srLabel="Current projects"
                as="h3"
                className="text-lg sm:text-xl font-orbitron font-bold mb-6 text-center text-cyan-400 tracking-wide sm:tracking-wider"
              />
              <ProjectCarousel
                projects={currentProjects}
                onOpen={setSelectedProject}
                ariaLabel="Current projects"
              />
            </div>

            <div>
              <ProjectedTitle
                text={ARCHIVE_TITLE}
                srLabel="Archived projects"
                as="h3"
                className="text-lg sm:text-xl font-orbitron font-bold mb-6 text-center text-orange-400 tracking-wide sm:tracking-wider"
              />
              <p className="text-cyan-100/70 font-inter text-sm text-center mb-6 max-w-2xl mx-auto">
                Earlier work, some since replaced or retired — kept here since it shaped how I build today.
              </p>
              <ProjectCarousel
                projects={archivedProjects}
                onOpen={setSelectedProject}
                ariaLabel="Archived projects"
              />
            </div>
          </div>

          {/* Instructions */}
          <div className="text-center mt-8">
            <p className="text-cyan-100 font-inter text-sm sm:text-base">
              <span className="text-cyan-400 font-orbitron tracking-wider">CLICK</span> a card to bring it into focus,
              then select it to open the project file
            </p>
            <p className="text-cyan-100/70 font-inter text-xs mt-2">Use Tab and Enter to navigate</p>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  )
}
