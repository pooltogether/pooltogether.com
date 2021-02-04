import { ethers } from 'ethers'

import {
  QUERY_KEYS
} from 'lib/constants'

import { calculateEstimatedPoolPrize } from 'lib/services/calculateEstimatedPoolPrize'
import { calculateEstimatedExternalAwardsValue } from 'lib/services/calculateEstimatedExternalAwardsValue'
import { compileErc20Awards } from 'lib/services/compileErc20Awards'

// this gathers the current data for a pool
// note: when calculating value of ERC20 tokens this uses current chain data (infura/alchemy) to get the balance
// but uses the Uniswap subgraph to get the prices
export const compilePool = (
  poolInfo,
  poolAddress,
  cache,
  poolChainData,
  poolGraphData,
) => {
  const poolObj = {
    ...poolChainData,
    ...poolGraphData,
  }

  const uniswapPriceData = cache.getQueryData([QUERY_KEYS.uniswapTokensQuery, poolAddress])
  const ethereumErc20Awards = cache.getQueryData([QUERY_KEYS.ethereumErc20sQuery, poolAddress])

  const externalErc20Awards = compileErc20Awards(ethereumErc20Awards, poolGraphData, uniswapPriceData)

  const externalAwardsEstimateUSD = calculateEstimatedExternalAwardsValue(externalErc20Awards)

  const interestPrizeEstimateUSD = calculateEstimatedPoolPrize(poolObj)

  const totalPrizeEstimateUSD = externalAwardsEstimateUSD ?
    interestPrizeEstimateUSD.add(ethers.utils.parseEther(
      externalAwardsEstimateUSD.toString()
    )) :
    interestPrizeEstimateUSD

  return {
    ...poolInfo,
    ...poolObj,
    prizeAmountUSD: totalPrizeEstimateUSD,
    interestPrizeUSD: interestPrizeEstimateUSD,
    externalAwardsUSD: externalAwardsEstimateUSD,
    // externalItemAwardsEstimate,
    externalErc20Awards,
  }
}
