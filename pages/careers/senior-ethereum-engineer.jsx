import React from 'react'

import { PageContainer } from 'lib/components/PageContainer'
import { CareerPage } from 'lib/components/CareerPage'

export default () => {

  return <PageContainer
    pageTitle='Careers - Senior Ethereum Engineer'
    pageComponent={<CareerPage
      positionType='Full-time'
      title='Senior Ethereum Engineer'
      titleEmail='Senior+Ethereum+Engineer+Role'
      description={`In this role you will build out PoolTogether’s core protocol, applications, and supporting systems.
        You will use a customer-driven approach to ensure that you’re always building the right thing for our end users.
        The candidate is expected to have at least five years developing software in a production environment.`
      }
      p1Heading={`Your Role`}
      p1Subheading={`As an Ethereum Engineer, you will:`}
      p1={`<li>Work closely with the protocol design lead to implement new smart contract features.</li>
        <li>Ensure maximum code quality through test coverage, automated analysis tools, and continuous integration.</li>
        <li>Maintain accurate public documentation of the source code.</li>
        <li>Actively learn latest smart contract development techniques.</li>
        <li>Develop static web applications that integrate with the protocol and other systems.</li>
        <li>Write Graph Protocol subgraphs to optimize the retrieval of data from Ethereum.</li>
        <li>Work with third-party development teams effectively to perform integrations.</li>
        <li>Handle developer questions and support requests.</li>
        <li>Guide team members when you are the expert and accept some leadership roles.</li>
        <li>Embrace remote work culture and build strong relationships with the PoolTogether team by maintaining a high level of communication.</li>`
      }
      p2Heading={`Your Contribution`}
      p2Subheading={`Required skills include:`}
      p2={`<li>Experience developing Ethereum smart contracts in the Solidity language. Up-to-date and historic knowledge is essential as the language spec moves quickly.</li>
        <li>Knowledge of important security concerns when developing smart contracts.</li>
        <li>Understand smart contract deployment and lifecycle.</li>
        <li>Experience building static web applications: you can implement a design, optimize the static build, and continuously deploy it to staging and production environments.</li>
        <li>Strong written skills, especially for technical documentation and support.</li>
        <li>Ability to work both independently and collaboratively on a team.</li>
        <li>Adept at considering problems from all angles and contributing to solutions effectively.</li>`
      }
    />}
  />

}