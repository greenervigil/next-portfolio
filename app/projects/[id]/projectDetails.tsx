'use client'

import Container from '../../../components/container/container'
import Image from 'next/image'
import { ProjectType } from '../../../types/project-type'
import { prefix } from '../../../utils/prefix'

interface ProjectDetailsProps {
  project: ProjectType
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-mono text-7xl m-10 font-bold">
        <a target="_blank" href={project.link} rel="noreferrer">{project.title}</a>
      </h1>
      <Image
        className="shadow-lg shadow-teal-600 border border-solid border-teal-600 rounded-xl"
        src={`${prefix}${project.imageSrc}`} 
        alt={project.imageDescription}
        blurDataURL="data:..." 
        placeholder="blur" 
        width={800} 
        height={400}
      />
      <Container>
        <h2 className="font-mono text-3xl font-semibold text-center">Project Description</h2>
        <p className="font-mono text-center p-9">{project.description}</p>
      </Container>
      <Container>
        <h2 className="font-mono text-3xl font-semibold text-center">Tech Stack</h2>
        <div className="font-mono text-center m-9">
          {project.tech.map((tech, i) => (
            <p className="m-4" key={i}>{tech}</p>
          ))}
        </div>
      </Container>
    </div>
  )
}
