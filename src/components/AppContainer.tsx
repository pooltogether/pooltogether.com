import { useFathom } from '@shared/generic-react-hooks'
import { Flowbite } from '@shared/ui'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { IntlProvider } from 'next-intl'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'

// React Query Client:
const queryClient = new QueryClient()

export const AppContainer = (props: AppProps) => {
  const { Component, pageProps } = props

  const router = useRouter()

  // Fathom Analytics
  useFathom(
    process.env.NEXT_PUBLIC_FATHOM_SITE_ID as string,
    ['pooltogether.com'],
    // @ts-ignore
    router.events?.on,
    router.events?.off
  )

  return (
    <Flowbite theme={{ dark: true }}>
      <QueryClientProvider client={queryClient}>
        <IntlProvider locale={router.locale ?? 'en'} messages={pageProps.messages}>
          <div id='modal-root' />
          <Component {...pageProps} />
        </IntlProvider>
      </QueryClientProvider>
    </Flowbite>
  )
}
