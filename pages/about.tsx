import { NextPage } from "next"
import Button from "../components/button/button"
import Card from "../components/card/card"
import Container from "../components/container/container"
import { useAppContext } from "../context/state"

const About: NextPage = () => {
    const content = useAppContext()

    return (
        <Container>
            <div className="mt-24">
                <section className="m-14">
                    <Card>
                        <h2 className="font-mono text-2xl font-bold">{content.name}</h2>
                        <h4 className="font-mono text-ls my-2" dangerouslySetInnerHTML={{ __html: content.title }}></h4>
                        <p className="font-mono font-base">{content.aboutText}</p>
                        <div className="flex justify-center gap-3 m-4">
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/danieljvigil/">
                        {/*<FontAwesomeIcon icon={faLinkedin} size={'lg'} color="#18cae6"/>*/}
                        linkedin
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/greenervigil">
                        {/*<FontAwesomeIcon icon={faGithub} size={'lg'} color="#18cae6"/>*/}
                        github
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1gmmq6iEGh4FPSr18xBJsINFKs_HUvfWb9hAYEjUJOgo/">
                        <Button 
                            label='Download CV/Resume'
                        >Download Resume/CV</Button>
                    </a>
                </div>

                <Container>
                    <p className="font-base font-mono">{content.greenfield}</p>
                </Container>

                <div className="flex justify-center gap-3">
                    <a target="_blank" rel="noreferrer" href="https://greenfield-org.github.io/">
                        {/*<FontAwesomeIcon icon={faGlobe} size={'lg'} color="#18cae6" />*/}
                        website
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/GreenField-Org">
                        {/*<FontAwesomeIcon icon={faGithub} size={'lg'} color="#18cae6" />*/}
                        github
                    </a>
                </div>
                    </Card>
                </section>
            </div>
        </Container>
    )
}

export default About;