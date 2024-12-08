import Container from "../../components/container/container";
import { NextPage } from "next";
import styles from '../styles/Home.module.css'

const Mentorship: NextPage = () => {
    return (
        <main className={styles.main}>
            <Container>
                <h1 className={styles.title}>Mentorship</h1>
            </Container>
        </main>
    )
}

export default Mentorship;