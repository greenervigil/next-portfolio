import ProjectDetails from './projectDetails'
import { ProjectType } from '../../../types/project-type'
import { notFound } from 'next/navigation'
import { state } from '../../../context/state'

export async function generateStaticParams() {
  // Generate static paths based on the available projects
  const paths = state.projects.map((project) => ({
    id: project.id.toString(),
  }));

  return paths;
}

export default async function Project({ params }: { params: { id: string } }) {
  const { id } = await params; 

  // Fetch the project from the static data
  const project = state.projects.find((proj: ProjectType) => proj.id.toString() === id);

  if (!project) {
    notFound();  
  }

  // Pass the project data to the client-side component
  return <ProjectDetails project={project} />;
}
