import React from 'react'

import { Layout } from 'lib/components/Layout'
import { PageContainer } from 'lib/components/PageContainer'
import { TermsOfServicePage } from 'lib/components/TermsOfServicePage'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import i18nConfig from '../next-i18next.config'

export async function getStaticProps(context) {
  const { locale } = context
  const translations = await serverSideTranslations(locale, ['common'], i18nConfig)
  return {
    props: {
      ...translations
    }
  }
}

const TermsPage = () => {
  return (
    <Layout>
      <PageContainer pageTitle='Terms of Service' pageComponent={<TermsOfServicePage />} />
    </Layout>
  )
}

export default TermsPage
