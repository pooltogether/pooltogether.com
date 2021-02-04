import React from 'react'

import { useTranslation } from 'lib/../i18n'
// import { IndexFeaturedIn } from 'lib/components/IndexFeaturedIn'
import { IndexGetInvolved } from 'lib/components/IndexGetInvolved'
import { IndexHero } from 'lib/components/IndexHero'
import { IndexPoolToken } from 'lib/components/IndexPoolToken'
import { IndexHowItWorks } from 'lib/components/IndexHowItWorks'
import { IndexIntegrations } from 'lib/components/IndexIntegrations'
import { IndexBackedBy } from 'lib/components/IndexBackedBy'
import { IndexSecurity } from 'lib/components/IndexSecurity'

export const IndexUI = (
  props,
) => {
  const { t } = useTranslation()

  return <>
    <IndexHero />
    <IndexPoolToken />
    <IndexIntegrations />
    <IndexHowItWorks />
    <IndexSecurity />
    <IndexBackedBy />
    <IndexGetInvolved />
    {/* <IndexFeaturedIn /> */}
  </>
}
