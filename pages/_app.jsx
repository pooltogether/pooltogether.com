import React, { useEffect } from 'react'
import * as Fathom from 'fathom-client'
// import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClient, QueryClientProvider } from 'react-query'

import { DEFAULT_QUERY_OPTIONS } from 'lib/constants'
import { AllContextProviders } from 'lib/components/AllContextProviders'

import 'assets/styles/index.css'

// pooltogether.com specific:
import '../i18n'
import 'assets/styles/layout.css'
import 'assets/styles/pool.css'
import 'assets/styles/tweets.css'
import 'assets/styles/marquee.css'

import 'assets/styles/pool-party.css'

import '@reach/dialog/styles.css'
import '@reach/menu-button/styles.css'
import '@reach/tooltip/styles.css'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      ...DEFAULT_QUERY_OPTIONS
    }
  }
})

if (process.env.NEXT_JS_SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.NEXT_JS_SENTRY_DSN,
    release: process.env.NEXT_JS_RELEASE_VERSION
  })
}

function MyApp ({ Component, pageProps, router }) {
  useEffect(() => {
    const handleExitComplete = () => {
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0 })
      }
    }

    router.events.on('routeChangeComplete', handleExitComplete)
    return () => {
      router.events.off('routeChangeComplete', handleExitComplete)
    }
  }, [])

  useEffect(() => {
    const fathomSiteId = process.env.NEXT_JS_FATHOM_SITE_ID

    if (fathomSiteId) {
      Fathom.load(process.env.NEXT_JS_FATHOM_SITE_ID, {
        url: 'https://goose.pooltogether.com/script.js',
        includedDomains: ['pooltogether.com', 'www.pooltogether.com']
      })

      function onRouteChangeComplete (url) {
        if (window['fathom']) {
          window['fathom'].trackPageview()
        }
      }

      router.events.on('routeChangeComplete', onRouteChangeComplete)

      return () => {
        router.events.off('routeChangeComplete', onRouteChangeComplete)
      }
    }
  }, [])

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AllContextProviders>
          <Component {...pageProps} />
        </AllContextProviders>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
