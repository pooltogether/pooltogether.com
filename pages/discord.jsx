import React from 'react'

import { PageContainer } from 'lib/components/PageContainer'
import { DiscordPage } from 'lib/components/DiscordPage'

export default () => {
  return <PageContainer pageTitle='Join Discord community' pageComponent={<DiscordPage />} />
}
