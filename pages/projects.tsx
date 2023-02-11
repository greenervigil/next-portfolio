import { NextPage } from "next";
import Card2 from "../components/card/card-2";
import Container from "../components/container/container";
import { useAppContext } from "../context/state";

const Projects: NextPage = () => {

    const data = useAppContext()

    return (
        <>
            <Container>
                <h1 className="font-mono text-center text-6xl m-5">Projects</h1>
            </Container>
            <div className="flex justify-center gap-3 flex-wrap max-w-5xl">
                {data.projects.map((project, i) => {
                    return <Card2 data={project} key={i} />
                })}
            </div>
        </>
    )
}

export default Projects;