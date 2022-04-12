import React from 'react'

import { PageContainer } from 'lib/components/PageContainer'
import { PoolParty } from 'lib/components/PoolParty'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import i18nConfig from '../../next-i18next.config'

export async function getStaticProps(context) {
  const { locale } = context
  const translations = await serverSideTranslations(locale, ['common'], i18nConfig)
  return {
    props: {
      ...translations
    }
  }
}

const PoolPartyPage = () => {
  return <PageContainer ignoreStyles pageComponent={<PoolParty />} />
}

export default PoolPartyPage
