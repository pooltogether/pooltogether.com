import { useRouter } from 'next/router'
import Head from 'next/head'
import React from 'react'

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN_NAME

export const PageHead = () => {
  const router = useRouter()
  return (
    <Head>
      <link rel='alternate' href={`https://${DOMAIN}${router.pathname}`} hrefLang='x-default' />
      {router.locales.map((locale) => (
        <link
          rel='alternate'
          hrefLang={locale}
          href={`https://${DOMAIN}${
            locale === 'en' ? router.pathname : `/${locale}${router.pathname}`
          }`}
        />
      ))}
    </Head>
  )
}
