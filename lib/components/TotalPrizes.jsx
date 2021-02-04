import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { useQueryCache } from 'react-query'

import { QUERY_KEYS } from 'lib/constants'
import { ChainQueries } from 'lib/components/ChainQueries'
import { usePoolsQuery } from 'lib/hooks/usePoolsQuery'
import { useUniswapTokensQuery } from 'lib/hooks/useUniswapTokensQuery'
import { compilePools } from 'lib/services/compilePools'
import { getContractAddresses } from 'lib/services/getContractAddresses'
import { getPoolDataFromQueryResult } from 'lib/services/getPoolDataFromQueryResult'
import { readProvider } from 'lib/services/readProvider'
import { normalizeTo18Decimals } from 'lib/utils/normalizeTo18Decimals'

const bn = ethers.utils.bigNumberify

export const TotalPrizes = function(props) {
  const { children } = props

  return children(ethers.utils.bigNumberify('12932000000000000000000'))

  const chainId = 1
  const networkName = 'mainnet'

  const queryCache = useQueryCache()

  const [defaultReadProvider, setDefaultReadProvider] = useState({})

  useEffect(() => {
    const getReadProvider = async () => {
      const defaultReadProvider = await readProvider(networkName)
      setDefaultReadProvider(defaultReadProvider)
    }
    getReadProvider()
  }, [networkName])

  const contractAddresses = getContractAddresses(chainId)

  const { status, data: poolsGraphData, error, isFetching } = usePoolsQuery(false, chainId, contractAddresses)

  const poolData = getPoolDataFromQueryResult(contractAddresses, poolsGraphData)

  const blockNumber = -1
  
  const ethereumErc20Awards = queryCache.getQueryData([
    QUERY_KEYS.ethereumErc20sQuery,
    chainId,
    poolData?.daiPool?.poolAddress,
    -1
  ])
  const addresses = ethereumErc20Awards
    ?.filter(award => award.balance.gt(0))
    ?.map(award => award.address)

  // const ethereumErc20Awards = queryCache.getQueryData([QUERY_KEYS.ethereumErc20sQuery, chainId, poolAddress, -1])

  // this sets the data in the cache which we can pull out later with `getQueryData()`
  useUniswapTokensQuery(
    addresses,
    blockNumber
  )




  if (error) {
    console.warn(error)
  }


  return <>
    <ChainQueries
      {...props}
      // cache={queryCache}
      chainId={chainId}
      provider={defaultReadProvider}
      poolData={poolData}
    >
      {({ genericChainData }) => {
        const ethereumErc20Awards = queryCache.getQueryData([
          QUERY_KEYS.ethereumErc20sQuery,
          poolData?.daiPool?.poolAddress
        ])
        const addresses = ethereumErc20Awards
          ?.filter(award => award.balance.gt(0))
          ?.map(award => award.address)

        const pools = compilePools(contractAddresses, queryCache, poolData, isFetching, genericChainData)
        
        let totalPrizeAmountUSD = bn(0)

        pools?.forEach(_pool => {
          const decimals = _pool?.underlyingCollateralDecimals
          if (!_pool.prizeAmountUSD || !decimals) {
            return
          }

          const cumulativePrizeAmountsForPool = normalizeTo18Decimals(
            _pool.prizeAmountUSD,
            decimals
          )

          totalPrizeAmountUSD = totalPrizeAmountUSD.add(
            cumulativePrizeAmountsForPool
          )
        })

        let cachedTotalPrizeAmountUSD = queryCache.getQueryData('totalPrizeAmountUSDCached')

        if (cachedTotalPrizeAmountUSD?.eq(totalPrizeAmountUSD)) {
          return children(cachedTotalPrizeAmountUSD)
        }


        if (
          !cachedTotalPrizeAmountUSD || totalPrizeAmountUSD.gt(cachedTotalPrizeAmountUSD)
        ) {
          queryCache.setQueryData('totalPrizeAmountUSDCached', totalPrizeAmountUSD)

          if (!cachedTotalPrizeAmountUSD) {
            return children(bn('0')  )
          }

          cachedTotalPrizeAmountUSD = totalPrizeAmountUSD
        }

        const amountBN = cachedTotalPrizeAmountUSD.gt(0) ?
          cachedTotalPrizeAmountUSD :
          bn('600000000000000000000')

        return children(amountBN)
      }}
    </ChainQueries>
  </>
}
