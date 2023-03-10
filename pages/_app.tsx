import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/layout'

import { DefaultSeo } from 'next-seo'
import { AppWrapper } from '../context/state'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="Daniel Greener-Vigil Portfolio Site"
        description="Web developmenet portfolio site by Daniel Greener-Vigil."
        canonical='https://greenervigil.githu.io/next-portfolio/'
        openGraph={{
            type: 'website',
            locale: 'en_US',
            url: 'https://greenervigil.github.io/next-portfolio/',
            siteName: 'Daniel Greener-Vigil Portfolio',
            images: [
              {
                url: 'https://greenervigil.github.io/next-portfolio/favicon.ico',
                width: 800,
                height: 600,
                alt: 'GreenerVigil Portfolio'
              },
            ]
        }}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico'
          }
        ]}
      />

      <Layout>
        <AppWrapper>
          <Component {...pageProps} />
        </AppWrapper>
      </Layout>
    </>
  )
}

export default MyApp
