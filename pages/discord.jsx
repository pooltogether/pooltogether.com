import React from 'react'

import { PageContainer } from 'lib/components/PageContainer'
import { DiscordPage } from 'lib/components/DiscordPage'

const Discord = () => {
  return (
    <PageContainer
      pageTitle='Join Discord community'
      pageDescription='Join our Discord to chat with the community about the PoolTogether protocol!'
      pageComponent={<DiscordPage />}
    />
  )
}

export default Discord
