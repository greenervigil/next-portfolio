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
                <section className="flex flex-wrap justify-center gap-4">
                    <Card>
                        <h2 className="text-2xl text-neutral-800 font-bold">{content.name}</h2>
                        <p className="text-ls text-neutral-900 my-2" dangerouslySetInnerHTML={{ __html: content.title }} />
                        
                        <div className="flex justify-center items-baseline flex-wrap gap-3 m-4">
                            <a className="text-center text-neutral-900 border border-yellow-500 rounded-lg shadow-2xl shadow-slate-900 w-44 h-9 p-1 hover:bg-yellow-100 hover:text-slate-900" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/danieljvigil/">
                                linkedin
                            </a>
                            <a className="text-center text-neutral-900 border border-yellow-500 rounded-lg shadow-2xl shadow-slate-900 w-44 h-9 p-1 hover:bg-yellow-100 hover:text-slate-900" target="_blank" rel="noreferrer" href="https://github.com/greenervigil">
                                github
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1gmmq6iEGh4FPSr18xBJsINFKs_HUvfWb9hAYEjUJOgo">
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
                <section className="flex flex-wrap justify-center gap-4">
                    {/*<Card>*/}
                        <div className="p-5 flex-auto basis-1/2">
                            <p className="font-base">{content.aboutText}</p>
                        </div>
                        <div className="p-5 flex-auto basis-1/2">
                            <p className="font-base flex flex-wrap justify-center">{content.greenfield}</p>
                        </div>

                    {/*<div className="flex-auto basis-1/2">
                            <p className="text-center font-semibold text-xl">GreenField Dev Info</p>
                            <div className="flex justify-center flex-wrap gap-3 m-4">
                                <a className="text-center border border-yellow-500 rounded-lg shadow-2xl shadow-yellow-600 w-44 h-9 p-1 hover:bg-yellow-100 hover:text-slate-900" target="_blank" rel="noreferrer" href="https://greenfield-org.github.io/">
                                    website
                                </a>
                                <a className="text-center border border-yellow-500 rounded-lg shadow-2xl shadow-yellow-600 w-44 h-9 p-1 hover:bg-yellow-100 hover:text-slate-900" target="_blank" rel="noreferrer" href="https://github.com/GreenField-Org">
                                    github
                                </a>
                            </div>
                        </div>*/}
    {/*</Card>*/}
                </section>
            </div>
        </Container>
    )
}

export default About;
