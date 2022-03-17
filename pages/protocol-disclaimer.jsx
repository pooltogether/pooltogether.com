import React from 'react'

import { Layout } from 'lib/components/Layout'
import { PageContainer } from 'lib/components/PageContainer'
import { ProtocolDisclaimerPage } from 'lib/components/ProtocolDisclaimerPage'

const DisclaimerPage = () => {
  return (
    <Layout>
      <PageContainer pageTitle='Protocol Disclaimer' pageComponent={<ProtocolDisclaimerPage />} />
    </Layout>
  )
}

export default DisclaimerPage
