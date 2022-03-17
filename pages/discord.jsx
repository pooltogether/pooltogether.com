import React from 'react'

import { Layout } from 'lib/components/Layout'
import { PageContainer } from 'lib/components/PageContainer'
import { DiscordPage } from 'lib/components/DiscordPage'

const Discord = () => {
  return (
    <Layout>
      <PageContainer
        pageTitle='Join Discord community'
        pageDescription='Join our Discord to chat with the community about the PoolTogether protocol!'
        pageComponent={<DiscordPage />}
      />
    </Layout>
  )
}

export default Discord
