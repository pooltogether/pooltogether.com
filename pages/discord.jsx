import React from 'react'

import { Layout } from 'lib/components/Layout'
import { PageContainer } from 'lib/components/PageContainer'
import { DiscordPage } from 'lib/components/DiscordPage'

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

const Discord = () => {
  return (
    <Layout>
      <PageContainer
        pageTitle='Join Discord community'
        pageDescription='Join our Discord to chat with the community about the PoolTogether protocol!'
        pageComponent={<DiscordPage />}
      />
    </Layout>
  )
}

export default Discord
