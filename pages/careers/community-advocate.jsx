import React from 'react'

import { PageContainer } from 'lib/components/PageContainer'
import { CareerPage } from 'lib/components/CareerPage'

export default () => {

  return <PageContainer
    pageTitle='Careers - Community Advocate'
    pageComponent={<CareerPage
      positionType='Part-time'
      title='Community Advocate'
      titleEmail='Community+Advocate+Role'
      description={`PoolTogether is looking for passionate community advocates to share the PoolTogether mission, vision and product with audiences around the world. We are looking for volunteers (compensated with a small monthly stipend) to represent and provide support to PoolTogether users in all languages and countries. If you are excited about our mission and enjoy bringing new people into the blockchain ecosystem, please apply!`}
      p1Heading={`Responsibilities`}
      p1={`
      <li>Actively build community around PoolTogether in the region and language you represent (i.e. host events, manage communication channels, etc.)</li>
      <li>Create onboarding materials and help articles in the language you represent</li>
      <li>Manage user support in the language you represent</li>
      <li>Weekly check-ins with the PoolTogether team to update on progress and learn the latest about the product</li>
      `}
      p2Heading={`Requirements`}
      p2={`
      <li>Must use PoolTogether</li>
      <li>Must understand and align with PoolTogether’s mission to build products fostering financial security</li>
      <li>Must understand Ethereum and be equipped to provide troubleshooting support</li>
      <li>Fluency in English and language applied for</li>
      <li>Reliable Internet connection</li>
      `}
      p3Heading={`Compensation:`}
      p3Subheading={`Initial compensation will be a monthly stipend`}
    />}
  />

}