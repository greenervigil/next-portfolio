import { NextPage } from "next";
import Button from "../components/button/button";
import Card from "../components/card/card";
import Container from "../components/container/container";
import styles from '../styles/Home.module.css'

const Projects: NextPage = () => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>Projects</h1>
                <Card>
                    <Button label="button"/>
                </Card>
            </main>
        </div>
    )
}

export default Projects;