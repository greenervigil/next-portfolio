"use client"

import Card2 from "../../components/card/card-2"
import Container from "../../components/container/container"
import { NextPage } from "next"
import React from "react"
import { state } from '../../context/state'

const Projects: NextPage = () => {
    const [filterData, setFilterData] = React.useState(state.projects);
    const [active, setActive] = React.useState<string[]>([]);
    const tech: string[] = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'NextJS', 'Bootstrap', 'Wordpress', 'Tailwind CSS', 'Builder.io', 'Algolia', 'Jest', 'React Testing Library', 'Storybook', 'MUI', 'Storyblok', 'NextSEO', 'React Magma', 'Gatsby', 'Shadcn/ui', 'turborepo', 'Lerna', 'Headless Wordpress']

    const handleFilter = (e: any) => {
        e.preventDefault()
        setActive([])
        if (e.target.innerHTML === 'All') {
            setFilterData(state.projects)
        } else {
            setFilterData(state.projects.filter(
                project => project.tech.includes(e.target.innerHTML)
            ))
            setActive(e.target.innerHTML)
        }
    }

    return (
        <div className="flex flex-wrap justify-center">
            <Container>
                <h1 className="font-mono text-center text-6xl mt-16">Projects</h1>
                <section className="text-center m-5">
                    <p className="m-5">Select an option to filter:</p>
                    <button className="pointer text-sm rounded-2xl m-1 py-2 px-4 border border-yellow-500 hover:bg-yellow-100 hover:text-slate-900 shadow-2xl shadow-yellow-500" onClick={handleFilter}>All</button>
                    {tech.map(item => {
                        return (
                            <button 
                                key={item} 
                                className={`pointer text-sm rounded-2xl m-1 py-2 px-4 border border-yellow-500 hover:bg-yellow-100 hover:text-slate-900 shadow-2xl shadow-yellow-500 ${
                                    active.includes(item) ? "bg-teal-600" : ""
                                  }`}
                                onClick={handleFilter}
                            >
                                {item}
                            </button>
                        )
                    })}
                </section>
            </Container>
            <div className="flex justify-center gap-3 flex-wrap max-w-5xl">
                {filterData.map((project, i) => {
                    return <Card2 data={project} key={i} />
                })}
            </div>
        </div>
    )
}

export default Projects;