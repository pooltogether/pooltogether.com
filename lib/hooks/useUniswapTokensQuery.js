import { useQuery } from 'react-query'
import { isEmpty } from 'lodash'

import {
  UNISWAP_POLLING_INTERVAL,
  QUERY_KEYS
} from 'lib/constants'
import { getUniswapData } from 'lib/fetchers/getUniswapData'

export function useUniswapTokensQuery(addresses, blockNumber = -1) {
  const chainId = 1

  const cacheKey = [
    QUERY_KEYS.uniswapTokensQuery,
    chainId,
    !isEmpty(addresses) ? addresses.join('-') : '',
    blockNumber
  ]

  return useQuery(
    cacheKey,
    async () => { return getUniswapData(chainId, addresses, blockNumber) },
    {
      enabled: chainId && !isEmpty(addresses),
      refetchInterval: false,
      refetchOnWindowFocus: false
    }
  )
}
