import { NextPage } from "next";
import Button from "../components/button/button";
import Card from "../components/card/card";
import Container from "../components/container/container";
import Input from "../components/input/input";
import styles from '../styles/Home.module.css'

const Projects: NextPage = () => {
    return (
        <main>
            <Container>
                <h1 className="font-mono text-center text-6xl m-5">Projects</h1>
            </Container>
            <Container>
                <Card>
                    <Input label="text label" type="phone" name="telephone"/>
                    <Button label="button"/>
                </Card>
            </Container>
        </main>
    )
}

export default Projects;