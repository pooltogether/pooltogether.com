import React from 'react'

import { Layout } from 'lib/components/Layout'
import { PageContainer } from 'lib/components/PageContainer'
import { SecurityAuditsPage } from 'lib/components/SecurityAuditsPage'

const AuditsPage = () => {
  return (
    <Layout>
      <PageContainer
        pageTitle='Bug Bounties & Security Audits'
        pageComponent={<SecurityAuditsPage />}
      />
    </Layout>
  )
}

export default AuditsPage
