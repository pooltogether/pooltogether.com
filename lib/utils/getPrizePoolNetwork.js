import { mainnet } from '@pooltogether/v4-pool-data'
import { getContractListChainIds, PrizePoolNetwork } from '@pooltogether/v4-client-js'
import { RPC_URLS } from 'lib/constants'
import { ethers } from 'ethers'

export const getPrizePoolNetwork = () => {
  const chainIds = getContractListChainIds(mainnet.contracts)
  const readProviders = getReadProviders(chainIds, RPC_URLS)
  const prizePoolNetwork = new PrizePoolNetwork(readProviders, mainnet)
  return prizePoolNetwork
}

/**
 * @param {number[]} chainIds
 * @param {Record<number, string>} rpcUrls
 * @returns {import('@pooltogether/v4-client-js').Providers}
 */
const getReadProviders = (chainIds, rpcUrls) => {
  return chainIds.reduce((readProviders, chainId) => {
    readProviders[chainId] = new ethers.providers.JsonRpcProvider(rpcUrls[chainId], chainId)
    return readProviders
  }, {})
}