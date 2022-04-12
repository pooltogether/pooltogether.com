import React, { useEffect } from 'react'
import * as Fathom from 'fathom-client'
// import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClient, QueryClientProvider } from 'react-query'

import { DEFAULT_QUERY_OPTIONS } from 'lib/constants'
import { AllContextProviders } from 'lib/components/AllContextProviders'

import '../styles/globals.css'
import '@pooltogether/react-components/dist/globals.css'

// pooltogether.com specific:
import 'styles/layout.css'
import 'styles/pool.css'
import 'styles/tweets.css'
import 'styles/marquee.css'
import 'styles/pool-party.css'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { appWithTranslation, i18n } from 'next-i18next'
import i18nConfig from '../next-i18next.config'

import Locize from 'i18next-locize-backend'

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

function MyApp({ Component, pageProps, router }) {
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
    i18n.use(Locize).init(i18nConfig)
  }, [])

  useEffect(() => {
    const fathomSiteId = process.env.NEXT_JS_FATHOM_SITE_ID

    if (fathomSiteId) {
      Fathom.load(process.env.NEXT_JS_FATHOM_SITE_ID, {
        url: 'https://goose.pooltogether.com/script.js',
        includedDomains: ['pooltogether.com', 'www.pooltogether.com']
      })

      function onRouteChangeComplete(url) {
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

  if (!i18n.isInitialized) return null

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

export default appWithTranslation(MyApp, i18nConfig)
