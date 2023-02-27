import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ButtonGroup from '../components/button-group/button-group'
import Button from '../components/button/button'
import Container from '../components/container/container'
import { useAppContext } from '../context/state'

const Home: NextPage = () => {
  const content = useAppContext()
  return (
    <>
      <Head>
        <meta name="keywords" content="Daniel Vigil, Daniel Greener-Vigil, profolio, React, Next, NextJS, Tailwind, TailwindCSS, HTML, CSS, JavaScript, Wordpress, Development, Developer"/>
        <meta name="author" content="Daniel J Greener-Vigil" />
        {/*<html lang={'en'} />*/}
      </Head>
    
      <div className='mt-6 mb-32 font-mono flex flex-wrap'>
        <Container>
          <h1 className="text-teal-600 text-center text-6xl font-bold m-6">
            {content.name}
          </h1>
          <div className="flex flex-wrap justify-center">
            <p className="flex-auto text-center m-6">
              {content.title.substring(0, content.title.indexOf('<'))}
            </p>
          </div>

          <div className="flex flex-wrap justify-center">
            <p className='flex-auto m-6 w-1/2 lg:mx-40'>{`Enthusiastically bringing development to the web and mobile with a focus on UI/UX,  accessibility and performance. Embracing the unknown in order to bring a client's vision to life.`}</p>
          </div>

          <div className='flex justify-center gap-5'>
            <Link href="/contact" >
              <a className='bg-yellow-500 text-slate-900 text-center rounded-lg shadow-2xl shadow-teal-600 w-36 h-9 p-1 hover:bg-yellow-600 hover:text-white hover:shadow-teal-500'>Contact Me!</a>
            </Link>
            <Link href="/about">
              <a className='text-center border border-yellow-500 rounded-lg shadow-2xl shadow-teal-600 w-44 h-9 p-1 hover:bg-yellow-100 hover:text-slate-900'>Learn more...</a>
            </Link>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Home
