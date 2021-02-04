import React from 'react'

import {
  SUPPORTED_CHAIN_IDS,
} from 'lib/constants'
import { chainIdToNetworkName } from 'lib/utils/chainIdToNetworkName'

const debug = require('debug')('AuthControllerContextProvider')

export const AuthControllerContext = React.createContext()

export function AuthControllerContextProvider(props) {
  const { children } = props

  const chainId = 1

  const networkName = chainIdToNetworkName(chainId)
  const supportedNetwork = SUPPORTED_CHAIN_IDS.includes(chainId)

  // const pauseQueries = !supportedNetwork || changingNetwork
  const pauseQueries = false

  return <AuthControllerContext.Provider
    value={{
      chainId,
      pauseQueries,
      // provider,
      networkName,
      supportedNetwork,
    }}
  >
    {children}
  </AuthControllerContext.Provider>
}
