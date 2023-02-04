import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Container from '../components/container/container'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="py-6">
      <Head>
        <title>Daniel Greener Vigil</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-16 h-full w-auto flex flex-col justify-center items-center">
        <Container>
          <h1 className={styles.title}>
            Daniel Greener- Vigil
          </h1>
          <p className={styles.description}>
            Software Engineer / Mentor
          </p>
        </Container>
        <Container>
          <div className={styles.grid}>
            <Link href='/about'>
              <a className={styles.card}>
                <h2>About &rarr;</h2>
              </a>
            </Link>

            <Link href='/projects'>
              <a className={styles.card}>
                <h2>Projects &rarr;</h2>
              </a>
            </Link>

            <Link href='/mentorship'>
              <a className={styles.card}>
                <h2>Mentorship &rarr;</h2>
              </a>
            </Link>

            <Link href='/contact'>
              <a className={styles.card}>
                <h2>Contact &rarr;</h2>
              </a>
            </Link>
          </div>
        </Container>
      </main>
      <Container>
        <footer className="flex justify-center align-baseline border-t">
          <p className="m-3">Greener-Vigil &copy; {new Date().getFullYear()}</p>
        </footer>
      </Container>
    </div>
  )
}

export default Home
