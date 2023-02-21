import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Container from "../../components/container/container";
import { useAppContext } from "../../context/state";
import { ProjectType } from "../../types/project-type";

interface ProjectProps {
  project: ProjectType
}

const Project: NextPage<ProjectProps> = ({ project }) => {
  const router = useRouter()

  //const data: ProjectType[] = useAppContext().projects
  //const project = data.filter(proj => proj.id == id)[0]

  if (router.isFallback) {
    return <div>Loading...</div>
  }

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

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: '1' }},
      { params: { id: '2' }},
      { params: { id: '3' }},
      { params: { id: '4' }},
      { params: { id: '5' }},
      { params: { id: '6' }},
      { params: { id: '7' }},
      { params: { id: '8' }},
      { params: { id: '9' }},
      { params: { id: '10' }},
      { params: { id: '11' }},
    ],
    fallback: false
  }
}

export const  getStaticProps: GetStaticProps<{ projects: ProjectType[] }> = async ({ context }) => {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://.../projects`)
  const projects: ProjectType[] = await res.json()

  // Pass post data to the page via props
  return {
    props: { projects },
  }
}

export default Project;