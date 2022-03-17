import React from 'react'

import { Layout } from 'lib/components/Layout'
import { PageContainer } from 'lib/components/PageContainer'
import { BrandAssets } from 'lib/components/BrandAssets'

const BrandAssetsPage = () => {
  return (
    <Layout>
      <PageContainer pageTitle='Brand Assets' pageComponent={<BrandAssets />} />
    </Layout>
  )
}

export default BrandAssetsPage
