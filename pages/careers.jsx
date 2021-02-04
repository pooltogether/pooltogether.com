import React from 'react'

import { PageContainer } from 'lib/components/PageContainer'
import { CareersPage } from 'lib/components/CareersPage'

export default () => {

  return <PageContainer
    pageTitle='Careers'
    pageComponent={<CareersPage />}
  />

}