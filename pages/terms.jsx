import React from 'react'

import { Layout } from 'lib/components/Layout'
import { PageContainer } from 'lib/components/PageContainer'
import { TermsOfServicePage } from 'lib/components/TermsOfServicePage'

const TermsPage = () => {
  return (
    <Layout>
      <PageContainer pageTitle='Terms of Service' pageComponent={<TermsOfServicePage />} />
    </Layout>
  )
}

export default TermsPage
