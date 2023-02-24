import { NextPage } from "next";
import React from "react";
import Card2 from "../../components/card/card-2";
import Container from "../../components/container/container";
import { useAppContext } from "../../context/state";

const Projects: NextPage = () => {
    const data = useAppContext()
    const [filterData, setFilterData] = React.useState(data.projects);
    const tech = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Java', 'React', 'NextJS', 'Bootstrap', 'Wordpress']

    const handleFilter = (e: any) => {
        e.preventDefault()
        setFilterData(e.target.innerHTML)
    }

    return (
        <>
            <Container>
                <h1 className="font-mono text-center text-6xl mt-16">Projects</h1>
                <section className="text-center m-5">
                    <p className="m-5">Select an option to filter:</p>
                    {tech.map(item => {
                        return (
                            <button 
                                key={item} 
                                className="pointer text-sm rounded-2xl m-1 py-2 px-4 border border-teal-600 hover:bg-teal-600"
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
        </>
    )
}

export default Projects;