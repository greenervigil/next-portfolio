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

interface PageProps {
  params: {
    id: string;
  };
}

export default function Project({ params }: PageProps) {
  const { id } = params; 

  // Fetch the project from the static data
  const project = state.projects.find((proj: ProjectType) => proj.id === id);

  if (!project) {
    notFound();  
  }

  // Pass the project data to the client-side component
  return <ProjectDetails project={project} />;
}
