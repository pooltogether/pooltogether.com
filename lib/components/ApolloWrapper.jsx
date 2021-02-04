import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'

import { apolloClient } from 'lib/apollo/apolloClient'
import { ProviderManager } from 'lib/apollo/ProviderManager'
import { ProviderManagerContext } from 'lib/components/ProviderManagerContext'
import { TightbeamContext } from 'lib/components/TightbeamContext'

let clientPromise
export const ApolloWrapper = class extends Component {
  state = {}

  async componentDidMount() {
    if (typeof window === 'object') {
      if (!clientPromise) {
        clientPromise = apolloClient()
      }

      const { client, tightbeam } = await clientPromise

      this.setState({ client, tightbeam })
    }
  }

  render() {
    const { client, tightbeam } = this.state

    let children

    if (client) {
      children = 
        <ApolloProvider
          client={client}
        >
          <TightbeamContext.Provider
            value={tightbeam}
          >
            <ProviderManagerContext.Provider
              value={ProviderManager}
            >
              {this.props.children}
            </ProviderManagerContext.Provider>
          </TightbeamContext.Provider>
        </ApolloProvider>
    } else {
      children = <></>
    }

    return children;
  }
}
