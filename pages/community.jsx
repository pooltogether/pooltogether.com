import React from 'react'

import { PageContainer } from 'lib/components/PageContainer'
import { CommunityPage } from 'lib/components/CommunityPage'

export default function Community(props) {

  return <PageContainer
    pageTitle='Community'
    pageComponent={<CommunityPage />}
  />

}