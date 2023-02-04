import { NextPage } from "next";
import Button from "../components/button/button";
import styles from '../styles/Home.module.css'

const Projects: NextPage = () => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>Projects</h1>
                <Button label="button"/>
            </main>
        </div>
    )
}

export default Projects;