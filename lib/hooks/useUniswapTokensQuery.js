import { useContext } from 'react'
import { useQuery } from 'react-query'
import { isEmpty } from 'lodash'

import {
  UNISWAP_POLLING_INTERVAL,
  QUERY_KEYS
} from 'lib/constants'
// import { AuthControllerContext } from 'lib/components/contextProviders/AuthControllerContextProvider'
import { getUniswapData } from 'lib/fetchers/getUniswapData'

export function useUniswapTokensQuery(addresses, blockNumber = -1) {
  // const { chainId, pauseQueries } = useContext(AuthControllerContext)
  const chainId = 1
  const pauseQueries = false

  const cacheKey = [
    QUERY_KEYS.uniswapTokensQuery,
    chainId,
    !isEmpty(addresses) ? addresses.join('-') : '',
    blockNumber
  ]

  const refetchInterval = !pauseQueries && (blockNumber === -1) ?
    UNISWAP_POLLING_INTERVAL :
    false

  return useQuery(
    cacheKey,
    async () => { return getUniswapData(chainId, addresses, blockNumber) },
    {
      enabled: !pauseQueries && chainId && !isEmpty(addresses),
      refetchInterval
    }
  )
}
