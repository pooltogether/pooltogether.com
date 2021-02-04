import React from 'react'

import { PageContainer } from 'lib/components/PageContainer'
import { SecurityAuditsPage } from 'lib/components/SecurityAuditsPage'

export default () => {

  return <PageContainer
    pageTitle='Bug Bounties & Security Audits'
    pageComponent={<SecurityAuditsPage />}
  />

}