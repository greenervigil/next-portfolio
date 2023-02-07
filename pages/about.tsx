import { NextPage } from "next";
import Head from "next/head";
import Button from "../components/button/button";
import Card from "../components/card/card";
import Container from "../components/container/container";
import styles from '../styles/Home.module.css'

const content = {
    name: 'Daniel Greener-Vigil',
    title: `Software Engineer / Web Developer <br/>Mentor`,
    aboutText: 'I have a passion for learning and bring that passion to software.  I have been a Software Engineer for 6 years and bring my passion to learn to each project.  I am always willing to learn something new and never shy away from the unknown.  I welcome new challenges and help cultivate those abilities in others.',
    greenfield: 'I have spent the last few years developing a mentorship program to assist self taught developers through projects designed for the developer with the Agile Methodology, version control practices and standard project management.'
}

const About: NextPage = () => {
    return (
        <Container>
            <h1 className="font-mono text-center text-6xl m-5">About</h1>

            <div>
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
                            label='&nbsp;Download CV/Resume'
                        />
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