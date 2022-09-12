import { NextPage } from "next";
import Head from "next/head";
import styles from '../styles/Home.module.css'

const About: NextPage = () => {
    return (
        <div className={styles.container}>

            <main className={styles.main}>
                <h1 className={styles.title}>About</h1>
            </main>
        </div>
    )
}

export default About;