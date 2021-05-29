import React from 'react'

import { IndexGetInvolved } from 'lib/components/IndexGetInvolved'
import { IndexHero } from 'lib/components/IndexHero'
import { IndexPoolToken } from 'lib/components/IndexPoolToken'
import { IndexHowItWorks } from 'lib/components/IndexHowItWorks'
import { IndexIntegrations } from 'lib/components/IndexIntegrations'
import { IndexSupportedBy } from 'lib/components/IndexSupportedBy'
import { IndexSecurity } from 'lib/components/IndexSecurity'

export const IndexUI = (props) => {
  return (
    <>
      <IndexHero />
      <IndexIntegrations />
      <IndexHowItWorks />
      <IndexPoolToken />
      <IndexSecurity />
      <IndexSupportedBy />
      <IndexGetInvolved />
    </>
  )
}
