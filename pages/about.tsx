import { NextPage } from "next"
import Button from "../components/button/button"
import Card from "../components/card/card"
import Carousel from "../components/carousel/carousel"
import Container from "../components/container/container"
import { useAppContext } from "../context/state"

const About: NextPage = () => {
    const content = useAppContext()

    return (
        <Container>
            <div className="sm:mt-3 font-mono">
                <section className="flex justify-center gap-4">
                    <Card>
                        <h2 className="text-2xl font-bold">{content.name}</h2>
                        <h4 className="text-ls my-2" dangerouslySetInnerHTML={{ __html: content.title }}></h4>
                        
                        <div className="flex justify-center items-baseline flex-wrap gap-3 m-4">
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/danieljvigil/">
                                linkedin
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/greenervigil">
                                github
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1gmmq6iEGh4FPSr18xBJsINFKs_HUvfWb9hAYEjUJOgo/">
                                <Button 
                                    label='Download CV/Resume'
                                >
                                    {`Download Resume/CV`}
                                </Button>
                            </a>
                </div>

                    </Card>
                    <Carousel />
                </section>
                <section className="flex justify-center gap-4">
                    {/*<Card>*/}
                        <div className="p-5">
                            <p className="font-base">{content.aboutText}</p>
                        </div>
                        <div className="p-5">
                            <p className="font-base flex flex-wrap justify-center">{content.greenfield}</p>
                        </div>

                        <div className="flex justify-center flex-wrap gap-3 m-4">
                            <a target="_blank" rel="noreferrer" href="https://greenfield-org.github.io/">
                                website
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/GreenField-Org">
                                github
                            </a>
                        </div>
    {/*</Card>*/}
                </section>
            </div>
        </Container>
    )
}

export default About;