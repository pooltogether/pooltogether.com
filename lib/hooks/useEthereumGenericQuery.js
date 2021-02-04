import { useQuery } from 'react-query'
import { isEmpty } from 'lodash'

import {
  MAINNET_POLLING_INTERVAL,
  QUERY_KEYS,
} from 'lib/constants'
import { fetchGenericChainData } from 'lib/utils/fetchGenericChainData'

const getEthereumErc20Data = async (params) => {
  const data = await fetchGenericChainData(params)
  
  return {
    dai: data
  }
}

export function useEthereumGenericQuery(params) {
  const { 
    provider,
    poolData
  } = params

  const prizeStrategyAddress = poolData?.prizeStrategy?.id
  const cTokenAddress = poolData?.compoundPrizePool?.cToken
  const poolAddress = poolData?.poolAddress

  const enabled = !isEmpty(provider) &&
    !isEmpty(poolData) && 
    !!prizeStrategyAddress &&
    !!cTokenAddress &&
    !!poolAddress

  return useQuery(
    [QUERY_KEYS.ethereumGenericQuery, poolAddress],
    async () => await getEthereumErc20Data(params),
    { 
      enabled,
      refetchInterval: MAINNET_POLLING_INTERVAL
    }
  )
}
