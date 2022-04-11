import React from 'react'

import { Index } from 'lib/components/Index'
import { PageContainer } from 'lib/components/PageContainer'
import { Layout } from 'lib/components/Layout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import i18nConfig from '../next-i18next.config'

export async function getStaticProps(context) {
  const { locale } = context
  const translations = await serverSideTranslations(locale, ['common'], i18nConfig)
  console.log('getStaticProps', { context })
  return {
    props: {
      ...translations
    }
  }
}

export default function IndexPage(props) {
  return (
    <>
      <Layout>
        <PageContainer ignoreStyles pageComponent={<Index navHeight={75} />} />
      </Layout>
    </>
  )
}
