import { useContext } from 'react'
import { useQuery } from 'react-query'
import { NETWORK } from '@pooltogether/utilities'

import { QUERY_KEYS } from 'lib/constants'
import { AuthControllerContext } from 'lib/components/contextProviders/AuthControllerContextProvider'
import { MAINNET_POLLING_INTERVAL } from 'lib/constants'
import { getPoolsByChainId } from 'lib/fetchers/getPools'

/**
 * Fetches pool graph data, chain data, token prices, lootbox data & merges it all.
 * Returns a flat list of pools
 * @returns
 */
export const useAllPools = () => {
  const { data: poolsByChainId, ...useAllPoolsResponse } = useAllPoolsKeyedByChainId()
  const pools = poolsByChainId ? Object.values(poolsByChainId).flat() : null
  return { ...useAllPoolsResponse, data: pools }
}

/**
 * Fetches pool graph data, chain data, token prices, lootbox data & merges it all
 * @returns
 */
export const useAllPoolsKeyedByChainId = () => {
  const { pauseQueries } = useContext(AuthControllerContext)

  const ethereumChainId = NETWORK.mainnet
  const polygonChainId = NETWORK.matic

  const enabled = !pauseQueries

  const { data: ethereumPools, ...ethereumUseQuery } = useQuery(
    [QUERY_KEYS.usePools, ethereumChainId],
    async () => await getPoolsByChainId(ethereumChainId),
    {
      enabled,
      refetchInterval: MAINNET_POLLING_INTERVAL
    }
  )

  const { data: polygonPools, ...polygonUseQuery } = useQuery(
    [QUERY_KEYS.usePools, polygonChainId],
    async () => await getPoolsByChainId(polygonChainId),
    {
      enabled,
      refetchInterval: MAINNET_POLLING_INTERVAL
    }
  )

  const refetch = () => {
    ethereumUseQuery.refetch()
    polygonUseQuery.refetch()
  }
  const isFetched = ethereumUseQuery.isFetched && polygonUseQuery.isFetched
  const isFetching = ethereumUseQuery.isFetching && polygonUseQuery.isFetching
  let data = null
  if (ethereumUseQuery.isFetched) {
    if (!data) {
      data = {}
    }
    data[ethereumChainId] = ethereumPools
  }
  if (polygonUseQuery.isFetched) {
    if (!data) {
      data = {}
    }
    data[polygonChainId] = polygonPools
  }

  return { data, isFetched, isFetching, refetch }
}
