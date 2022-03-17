import React from 'react'

import { Index } from 'lib/components/Index'
import { PageContainer } from 'lib/components/PageContainer'
import { Layout } from 'lib/components/Layout'

export default function IndexPage (props) {
  return (
    <>
      <Layout>
        <PageContainer ignoreStyles pageComponent={<Index navHeight={75} />} />
      </Layout>
    </>
  )
}
