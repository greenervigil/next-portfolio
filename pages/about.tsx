import { NextPage } from "next"
import Button from "../components/button/button"
import Card from "../components/card/card"
import Container from "../components/container/container"
import { useAppContext } from "../context/state"

const About: NextPage = () => {
    const content = useAppContext()

    return (
        <Container>
            <div className="mt-24 sm:mt-3 font-mono">
                <section className="m-14">
                    <Card>
                        <h2 className="text-2xl font-bold">{content.name}</h2>
                        <h4 className="text-ls my-2" dangerouslySetInnerHTML={{ __html: content.title }}></h4>
                        <p className="font-base">{content.aboutText}</p>
                        <div className="flex justify-center flex-wrap gap-3 m-4">
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/danieljvigil/">
                        {/*<FontAwesomeIcon icon={faLinkedin} size={'lg'} color="#18cae6"/>*/}
                        linkedin
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/greenervigil">
                        {/*<FontAwesomeIcon icon={faGithub} size={'lg'} color="#18cae6"/>*/}
                        github
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1gmmq6iEGh4FPSr18xBJsINFKs_HUvfWb9hAYEjUJOgo/">
                        <Button 
                            label='Download CV/Resume'
                        >Download Resume/CV</Button>
                    </a>
                </div>

                <p className="font-base flex flex-wrap justify-center">{content.greenfield}</p>

                <div className="flex justify-center flex-wrap gap-3 m-4">
                    <a target="_blank" rel="noreferrer" href="https://greenfield-org.github.io/">
                        {/*<FontAwesomeIcon icon={faGlobe} size={'lg'} color="#18cae6" />*/}
                        website
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/GreenField-Org">
                        {/*<FontAwesomeIcon icon={faGithub} size={'lg'} color="#18cae6" />*/}
                        github
                    </a>
                </div>
                    </Card>
                </section>
            </div>
            {/*<div className="relative flex flex-col justify-center gap-6 sm:flex-row md:flex-col lg:flex-row my-12">
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
    </div>*/}
        </Container>
    )
}

export default About;