import { NextPage } from "next";
import Container from "../components/container/container";
import styles from '../styles/Home.module.css';

const Contact: NextPage = () => {
    return (
        <main className={styles.main}>
            <Container>
                <h1 className={styles.title}>Contact</h1>
            </Container>
        </main>
    )
}

export default Contact;