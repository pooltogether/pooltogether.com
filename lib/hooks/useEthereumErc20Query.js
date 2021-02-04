import { useQuery } from 'react-query'
import { isEmpty } from 'lodash'

import {
  MAINNET_POLLING_INTERVAL,
  QUERY_KEYS,
} from 'lib/constants'
import { fetchExternalErc20Awards } from 'lib/utils/fetchExternalErc20Awards'

const getEthereumErc20Data = async (params) => {
  return await fetchExternalErc20Awards(params)
}

export function useEthereumErc20Query(params) {
  const { 
    provider,
    graphErc20Awards,
    poolAddress,
  } = params

  const enabled = !isEmpty(provider) &&
    !isEmpty(graphErc20Awards) &&
    !!poolAddress

  return useQuery(
    [QUERY_KEYS.ethereumErc20sQuery, poolAddress],
    async () => await getEthereumErc20Data(params),
    { 
      enabled,
      refetchInterval: MAINNET_POLLING_INTERVAL
    }
  )
}
