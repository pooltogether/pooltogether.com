import React from 'react'

import { PageContainer } from 'lib/components/PageContainer'
import { CareerPage } from 'lib/components/CareerPage'

export default () => {

  return <PageContainer
    pageTitle='Careers - Senior Product Designer'
    pageComponent={<CareerPage
      positionType='Full-time or Contract'
      title='Senior Product Designer'
      titleEmail='Senior+Product+Designer+Role'
      description={`
        We’re looking for a senior product designer who is confident in UI, product, and user research. This person needs to be confident in building interfaces that increase product engagement and understanding. The opportunities we have at PoolTogether are enormous and you will help by implementing a user driven approach to improving all aspects of design. This role is for a Senior Product Designer but we will consider any talented designers with three years or more designing software products in a production environment, and have an interest in Cryptocurrencies / Ethereum.
      `}
      p1Heading={`Your Qualifications`}
      p1Subheading={`You will make a fantastic candidate if you:`}
      p1={`
        <li>Enjoy working on a small team of highly competent and self directed individuals</li>
        <li>Are able to consistently ship product and iterate towards ideals</li>
        <li>Provide and receive constructive criticism from fellow coworkers to increase quality of PoolTogether brand</li>
        <li>Can guide team members when you are the expert and accept some</li>
        <li>Embrace remote work culture and build strong relationships with the PoolTogether team by maintaining a high level</li>
        <li>Enjoy a holistic view of building apps which use motion design and visual</li>
        <li>Share a strong portfolio of previous product design work showcasing</li>
        <li>Have the ability to bring design projects from concept</li>
        <li>Have proficiency with Figma, or the willingness to learn Figma and it&rsquo;s power as a collaborative design tool (Sketch, InVision, etc. also considered</li>
      `}
      p2Heading={`Your Contribution`}
      p2Subheading={`What you’ll do:`}
      p2={`
        <li>Oversee and manage design across all products</li>
        <li>Interview users and stakeholders</li>
        <li>Create wireframes, mocks or prototypes as needed</li>
        <li>Inform your thinking using analytics</li>
        <li>Oversee and manage additional design work (slide decks, social media, marketing campaigns, etc.)</li>
      `}
    />}
  />

}