import React from 'react'

import { SUPPORTED_CHAIN_IDS } from 'lib/constants'
import { getNetworkNameAliasByChainId } from '@pooltogether/utilities'

const debug = require('debug')('AuthControllerContextProvider')

export const AuthControllerContext = React.createContext()

export function AuthControllerContextProvider(props) {
  const { children } = props

  const chainId = 1

  const networkName = getNetworkNameAliasByChainId(chainId)
  const supportedNetwork = SUPPORTED_CHAIN_IDS.includes(chainId)

  // const pauseQueries = !supportedNetwork || changingNetwork
  const pauseQueries = false

  return (
    <AuthControllerContext.Provider
      value={{
        chainId,
        pauseQueries,
        // provider,
        networkName,
        supportedNetwork
      }}
    >
      {children}
    </AuthControllerContext.Provider>
  )
}
