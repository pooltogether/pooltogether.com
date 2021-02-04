import React from 'react'

import { PageContainer } from 'lib/components/PageContainer'
import { DevelopersPage } from 'lib/components/DevelopersPage'

export default function Developers(props) {

  return <PageContainer
    pageTitle='Developers'
    pageComponent={<DevelopersPage />}
  />

}