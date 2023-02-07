import { NextPage } from "next";
import Container from "../components/container/container";
import Timeline from "../components/timeline/timeline";

const Experience: NextPage = () => {
    return (
        <Container>
            <h1 className="font-mono text-center text-6xl m-5">Experience</h1>
            <Timeline />
        </Container>
    )
}

export default Experience;