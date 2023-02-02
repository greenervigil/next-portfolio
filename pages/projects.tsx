import { NextPage } from "next";
import Timeline from "../components/timeline/timeline";
import styles from '../styles/Home.module.css'

const Projects: NextPage = () => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>Projects</h1>
                <Timeline />
            </main>
        </div>
    )
}

export default Projects;