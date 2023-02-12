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
      </Head>

      <Container>
        <h1 className="font-mono text-teal-600 mt-16 text-center text-7xl font-bold">
          {content.name}
        </h1>
        <p className="font-mono text-center text-base mt-2">
          {content.title.substring(0, content.title.indexOf('<'))}
        </p>
        <p className='font-mono mt-5 px-72 pb-2'>{`Enthusiastically bringing development to the web and mobile with a focus on UI/UX,  accessibility and performance. Embracing the unknown in order to bring a client's vision to life.`}</p>
        <ButtonGroup>
          <Button label="Learn more.." />
          <Button label="Contact me!" />
        </ButtonGroup>
      </Container>
      <div className="relative flex flex-col justify-center gap-6 sm:flex-row md:flex-col lg:flex-row my-12">
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/240px-HTML5_logo_and_wordmark.svg.png" height={48} width={48} alt="html 5"/>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/240px-CSS3_logo_and_wordmark.svg.png" height={48} width={48} alt="css 3"/>
        <Image src="https://pluralsight2.imgix.net/paths/images/javascript-542e10ea6e.png" height={48} width={48} alt="javascript" />
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Expressjs.png/240px-Expressjs.png" height={48} width={48} alt="express" />
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png" height={48} width={48} alt="node js" />
        <Image src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" height={48} width={48} alt="react js" />
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkSKpjWP2yvVBxiPJgB1hnAPKp-F4rvd6OZmVRk3xi6tCGZe_tcDzNek-nskxntA-dFKk&usqp=CAU" height={48} width={48} alt="wordpress" />
        <Image src="https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs" height={48} width={48} alt="next js" />
        <Image src="https://miro.medium.com/max/1200/0*T6pKJjgoPIBy_u-_.png" height={48} width={48} alt="svelte" />
        <Image src="/solid-logo.svg" height={48} width={48} alt="solid js" />
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" height={48} width={48} alt="typescript" />
    </div>
    </>
  )
}

export default Home
