import React from 'react'

import { PageContainer } from 'lib/components/PageContainer'
import { ProtocolDisclaimerPage } from 'lib/components/ProtocolDisclaimerPage'

export default () => {
  return (
    <PageContainer pageTitle='Protocol Disclaimer' pageComponent={<ProtocolDisclaimerPage />} />
  )
}
