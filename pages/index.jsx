import React from 'react'
import { useHydrateAtoms } from 'jotai/utils'

import { Index } from 'lib/components/Index'
import { PageContainer } from 'lib/components/PageContainer'
import { Layout } from 'lib/components/Layout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import i18nConfig from '../next-i18next.config'
import { getWeeklyPrizeAmount } from 'lib/utils/getWeeklyPrizeAmount'
import { weeklyPrizeAmountAtom } from 'lib/atoms/serverAtoms'

export async function getStaticProps(context) {
  const { locale } = context

  const translations = await serverSideTranslations(locale, ['common'], i18nConfig)
  const weeklyPrizeAmount = await getWeeklyPrizeAmount()

  return {
    props: {
      ...translations,
      weeklyPrizeAmount
    },
    revalidate: 86400
  }
}

/**
 * @param {{ weeklyPrizeAmount: string }} props
 */
export default function IndexPage(props) {
  const { weeklyPrizeAmount } = props

  useHydrateAtoms([[weeklyPrizeAmountAtom, weeklyPrizeAmount]])

  return (
    <>
      <Layout>
        <PageContainer ignoreStyles pageComponent={<Index />} />
      </Layout>
    </>
  )
}
