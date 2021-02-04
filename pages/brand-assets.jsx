import React from 'react'

import { PageContainer } from 'lib/components/PageContainer'
import { BrandAssetsPage } from 'lib/components/BrandAssetsPage'

export default () => {

  return <PageContainer
    pageTitle='Brand Assets'
    pageComponent={<BrandAssetsPage />}
  />

}