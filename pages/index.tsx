import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Container from '../components/container/container'
import water from '../public/water.jpg';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Daniel Greener Vigil</title>
        <meta name="description" content="Daniel Greener-Vigil Portfolio" />
        <meta name="keywords" content="Daniel Vigil, Daniel Greener-Vigil, profolio, React, Next, NextJS, Tailwind, TailwindCSS, HTML, CSS, JavaScript, Wordpress, Development, Developer"/>
        <meta name="author" content="Daniel J Greener-Vigil" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <h1 className="font-mono text-teal-600 text-center text-6xl">
          Daniel Greener- Vigil
        </h1>
        <p className="font-mono text-center text-base mt-16 mx-0">
          Software Engineer / Mentor
        </p>
      </Container>
      <Container>
        <div className="flex justify-center flex-wrap max-w-4xl my-20 bg-water">
          <Link href='/about'>
            <a className="m-4 p-6 text-left max-w-sm border border-teal-600 rounded-lg hover:border hover:border-cyan-600 hover:bg-teal-600 hover:text-white shadow-2xl shadow-slate-700 hover:shadow-teal-600">
              <h2 className="font-mono text-2xl mb-4">About &rarr;</h2>
            </a>
          </Link>

          <Link href='/projects'>
            <a className="m-4 p-6 text-left max-w-sm border border-teal-600 rounded-lg hover:border hover:border-cyan-600 hover:bg-teal-600 hover:text-white shadow-2xl shadow-slate-700 hover:shadow-teal-600">
              <h2 className="font-mono text-2xl mb-4">Projects &rarr;</h2>
            </a>
          </Link>

          <Link href='/mentorship'>
            <a className="m-4 p-6 text-left max-w-sm border border-teal-600 rounded-lg hover:border hover:border-cyan-600 hover:bg-teal-600 hover:text-white shadow-2xl shadow-slate-700 hover:shadow-teal-600">
              <h2 className="font-mono text-2xl mb-4">Mentorship &rarr;</h2>
            </a>
          </Link>

          <Link href='/contact'>
            <a className="m-4 p-6 text-left max-w-sm border border-teal-600 rounded-lg hover:border hover:border-cyan-600 hover:bg-teal-600 hover:text-white shadow-2xl shadow-slate-700 hover:shadow-teal-600">
              <h2 className="font-mono text-2xl mb-4">Contact &rarr;</h2>
            </a>
          </Link>
        </div>
      </Container>
    </>
  )
}

export default Home
