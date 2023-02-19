import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Container from "../../components/container/container";
import { useAppContext } from "../../context/state";
import { ProjectType } from "../../types/project-type";

const Project: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const data: ProjectType[] = useAppContext().projects
  const project = data.filter(proj => proj.id == id)[0]

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-mono text-7xl m-10 font-bold">
        <a target="_blank" href={project.link} rel="noreferrer">{project.title}</a>
      </h1>
      <Image
        className="shadow-lg shadow-teal-600 border border-solid border-teal-600 rounded-xl" 
        src={`${project.imageSrc}`} 
        alt={project.imageDescription}
        blurDataURL="data:..."
        placeholder="blur" 
        width={800}
        height={400}
      />
      <Container>
        <h3 className="font-mono text-3xl font-semibold text-center">Project Description</h3>

        <p className="font-mono text-center p-9">{project.description}</p>
      </Container>
      <Container>
        <h3 className="font-mono text-3xl font-semibold text-center">Technologies</h3>

        <ul className="font-mono text-center m-9">
          {project.tech.map((tech, i) => {
            return <li className="m-4" key={i}>{tech}</li>
          })}
        </ul>
      </Container>
    </div>
  )
}

export default Project;