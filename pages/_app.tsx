import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/layout'

import { DefaultSeo } from 'next-seo'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="Daniel Greener-Vigil Portfolio Site"
        description="Web developmenet portfolio site by Daniel Greener-Vigil."
        openGraph={{
            type: 'website',
            locale: 'en_IE',
            url: 'https://www.url.ie/',
            siteName: 'SiteName',
        }}
        twitter={{
            handle: '@handle',
            site: '@site',
            cardType: 'summary_large_image',
        }}
      />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
