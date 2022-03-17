import React from 'react'

import { Layout } from 'lib/components/Layout'
import { PageContainer } from 'lib/components/PageContainer'
import { DevelopersPage } from 'lib/components/DevelopersPage'

export default function Developers (props) {
  return (
    <Layout>
      <PageContainer pageTitle='Developers' pageComponent={<DevelopersPage />} />
    </Layout>
  )
}
