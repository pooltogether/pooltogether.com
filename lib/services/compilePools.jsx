import { isEmpty } from 'lodash'

import { POOLS } from 'lib/constants'
import { compilePool } from 'lib/services/compilePool'

export const compilePools = (contractAddresses, cache, poolsGraphData, graphDataLoading, genericChainData) => {
  let pools = []

  if (!graphDataLoading && !isEmpty(genericChainData)) {
    POOLS.forEach(POOL => {
      const _pool = compilePool(
        POOL,
        contractAddresses.daiPool,
        cache,
        genericChainData.dai,
        poolsGraphData.daiPool,
      )

      if (_pool?.id) {
        pools.push(_pool)
      }
    })
  }

  return pools
}
