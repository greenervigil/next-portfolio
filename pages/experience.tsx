import { NextPage } from "next";
import Container from "../components/container/container";
import Timeline from "../components/timeline/timeline";

const Experience: NextPage = () => {
    return (
        <div className="w-screen font-mono">
            <Container>
                <h1 className="text-center text-6xl my-16">Experience</h1>
                <Timeline />
            </Container>
        </div>
    )
}

export default Experience;