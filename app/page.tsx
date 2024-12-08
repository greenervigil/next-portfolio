import Button from '../components/button/button'
import Card from '../components/card/card'
import Carousel from '../components/carousel/carousel'
import Container from '../components/container/container'
import type { NextPage } from 'next'
import { Suspense } from 'react'
import { Testimonials } from '../components/testimonials/testimonials'
import { state } from '../context/state'

const Page: NextPage = () => {

  return (
    <>
      <Container>
            <div className="sm:mt-3">
                <section className="flex flex-wrap justify-center gap-4">
                    <Card>
                        <h1 className="text-3xl text-neutral-800 font-bold">{state.name}</h1>
                        <p className="text-ls text-neutral-900 my-2" dangerouslySetInnerHTML={{ __html: state.title }} />
                        
                        <div className="flex justify-center items-baseline flex-wrap gap-3 m-4">
                            <a className="text-center text-neutral-900 border border-yellow-500 rounded-lg shadow-2xl shadow-slate-900 w-44 h-9 p-1 hover:bg-yellow-100 hover:text-slate-900" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/danieljvigil/">
                                linkedin
                            </a>
                            <a className="text-center text-neutral-900 border border-yellow-500 rounded-lg shadow-2xl shadow-slate-900 w-44 h-9 p-1 hover:bg-yellow-100 hover:text-slate-900" target="_blank" rel="noreferrer" href="https://github.com/greenervigil">
                                github
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1gmmq6iEGh4FPSr18xBJsINFKs_HUvfWb9hAYEjUJOgo">
                                <Button 
                                    label='Download CV/Resume'
                                >
                                    {`Download Resume/CV`}
                                </Button>
                            </a>
                        </div>

                    </Card>
                    {/*<Carousel />*/}
                </section>
                <section className="flex flex-wrap justify-center gap-4 mx-20">
                    {/*<Card>*/}
                        <div className="p-5 flex-auto basis-1/2">
                            <div className="font-base" dangerouslySetInnerHTML={{ __html: state.aboutText}} />
                        </div>
                        <div className="p-5 flex-auto basis-1/2">
                            <div className="font-base flex flex-wrap justify-center" dangerouslySetInnerHTML={{ __html: state.greenfield}} />
                        </div>

                        <div className="flex-auto basis-1/2">
                            <h2 className="text-center font-semibold text-2xl">GreenField Development information</h2>
                            <div className="flex justify-center flex-wrap gap-3 m-4">
                                {/*<a className="text-center border border-yellow-500 rounded-lg shadow-2xl shadow-yellow-600 w-44 h-9 p-1 hover:bg-yellow-100 hover:text-slate-900" target="_blank" rel="noreferrer" href="https://greenfield-org.github.io/" >
                                    website
                                </a>*/}
                                <a className="text-center border border-yellow-500 rounded-lg shadow-2xl shadow-yellow-600 w-44 h-9 p-1 hover:bg-yellow-100 hover:text-slate-900" target="_blank" rel="noreferrer" href="https://github.com/GreenField-Org">
                                    github
                                </a>
                            </div>
                        </div>
    {/*</Card>*/}
                </section>
                <h2 className="text-2xl text-neutral-800 dark:text-neutral-200 font-bold text-center mx-20">Hear what people are saying</h2>
                <Suspense fallback={<div>Loading...</div>}>
                    <Testimonials testimonials={state.testimonials} />
                </Suspense>
            </div>
        </Container>
    </>
  )
}

export default Page
