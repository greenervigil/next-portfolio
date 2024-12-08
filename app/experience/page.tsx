import Button from "../../components/button/button";
import Container from "../../components/container/container";
import { NextPage } from "next";
import Timeline from "../../components/timeline/timeline";

const Experience: NextPage = () => {
    return (
        <div className="w-screen font-mono">
            <Container>
                <h1 className="text-center text-6xl my-16">Experience</h1>
                <div className="flex justify-center m-5">
                <a target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1gmmq6iEGh4FPSr18xBJsINFKs_HUvfWb9hAYEjUJOgo/">
                    <Button 
                        label='Download CV/Resume'
                    >
                        {`Download Resume/CV`}
                    </Button>
                </a>
                </div>
                <Timeline />
            </Container>
        </div>
    )
}

export default Experience;