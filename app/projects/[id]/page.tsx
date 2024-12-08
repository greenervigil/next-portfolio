import ProjectDetails from './projectDetails'
import { ProjectType } from '../../../types/project-type'
import { notFound } from 'next/navigation'
import { state } from '../../../context/state'

// Static generation with dynamic paths
export function generateStaticParams() {
  // Generate static paths based on the available projects
  const paths = state.projects.map((project) => ({
    id: project.id.toString(),  // Make sure id is a string
  }))

  return paths;
}

export default async function Project({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;  // Destructure `id` from `params`

  // Find the project that matches the id from state.projects
  const project = state.projects.find((proj: ProjectType) => proj.id.toString() === id);

  if (!project) {
    notFound();  // If project not found, show 404
  }

  // Return the project details to be displayed on the page
  return <ProjectDetails project={project} />;
}
