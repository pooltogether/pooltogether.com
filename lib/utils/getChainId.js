import { getChainIdByAlias } from '@pooltogether/utilities'

export const getChainId = (currentState) => {
  const networkName = process.env.NEXT_JS_DEFAULT_ETHEREUM_NETWORK_NAME
  let chainId = getChainIdByAlias(networkName)

  if (currentState && currentState.appNetworkId) {
    // appNetworkId may not be what we want here ...
    chainId = currentState.appNetworkId
  }

  return chainId
}
