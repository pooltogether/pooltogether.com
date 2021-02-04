import React from 'react'

import { PageContainer } from 'lib/components/PageContainer'
import { TermsOfServicePage } from 'lib/components/TermsOfServicePage'

export default () => {

  return <PageContainer
    pageTitle='Terms of Service'
    pageComponent={<TermsOfServicePage />}
  />

}