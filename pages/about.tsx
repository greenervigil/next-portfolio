import { NextPage } from "next";
import Head from "next/head";
import Container from "../components/container/container";
import styles from '../styles/Home.module.css'

const About: NextPage = () => {
    return (
        <main className={styles.main}>
            <Container>
                <h1 className={styles.title}>About</h1>
            </Container>
        </main>
    )
}

export default About;