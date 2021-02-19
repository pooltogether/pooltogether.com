import { QUERY_KEYS } from 'lib/constants'
import { useQuery } from 'react-query'
import { batch, contract } from '@pooltogether/etherplex'
import { ethers } from 'ethers'
import { isEmpty } from 'lodash'

import CTokenAbi from '@pooltogether/pooltogether-contracts/abis/CTokenInterface'
import PrizePoolAbi from '@pooltogether/pooltogether-contracts/abis/PrizePool'
import PrizeStrategyAbi from '@pooltogether/pooltogether-contracts/abis/PeriodicPrizeStrategy'

import { usePrizePools } from 'lib/hooks/usePrizePools'
import { useReadProvider } from 'lib/hooks/useReadProvider'
import { calculateEstimatedPoolPrize } from 'lib/services/calculateEstimatedPoolPrize'
import { normalizeTo18Decimals } from 'lib/utils/normalizeTo18Decimals'

export const useTotalPoolPrizeInterestUSD = () => {
  const { readProvider, isLoaded: isReadProviderLoaded } = useReadProvider()
  const { data: prizePools } = usePrizePools()

  const prizePoolAddresses = []
  prizePools && Object.keys(prizePools).forEach(key => { prizePoolAddresses.push(prizePools[key].id) })

  return useQuery(
    [QUERY_KEYS.totalPrizePoolPrizes, prizePoolAddresses],
    async () => {
      return getPrizePoolPrizes(readProvider, prizePools)
    },
    {
      enabled: isReadProviderLoaded && !isEmpty(prizePoolAddresses),
      refetchInterval: false,
      refetchOnWindowFocus: false
    }
  )
}

const extractGraphData = (prizePool) => {
  const underlyingCollateralDecimals = prizePool.underlyingCollateralDecimals

  return {
    ticketSupply: normalizeTo18Decimals(
      prizePool.prizeStrategy.multipleWinners.ticket.totalSupply,
      underlyingCollateralDecimals
    ),
    totalSponsorship: normalizeTo18Decimals(
      prizePool.prizeStrategy.multipleWinners.sponsorship.totalSupply,
      underlyingCollateralDecimals
    ),
    underlyingCollateralDecimals,
    cTokenAddress: prizePool.compoundPrizePool.cToken,
    prizeStrategyAddress: prizePool.prizeStrategy.id,
    prizePoolAddress: prizePool.id,
  } 
}

const getPrizePoolPrizes = async (provider, prizePools) => {
  try {
    let batchCalls = []
    prizePools.forEach((prizePool) => {
      const { cTokenAddress, prizeStrategyAddress, prizePoolAddress } = extractGraphData(prizePool)

      const cTokenContract = contract(cTokenAddress, CTokenAbi, cTokenAddress)
      const prizeStrategyContract = contract(prizeStrategyAddress, PrizeStrategyAbi, prizeStrategyAddress)
      const prizePoolContract = contract(prizePoolAddress, PrizePoolAbi, prizePoolAddress)

      batchCalls.push(
        cTokenContract
          .supplyRatePerBlock(),
        prizeStrategyContract
          .prizePeriodRemainingSeconds(),
        prizePoolContract.
          captureAwardBalance()
      )
    })
    const results = await batch(provider, ...batchCalls)
    
    let totalPrizeAmountUSD = 0
    prizePools.forEach((prizePool) => {
      const {
        cTokenAddress,
        prizeStrategyAddress,
        prizePoolAddress,
        ticketSupply,
        totalSponsorship,
        underlyingCollateralDecimals
      } = extractGraphData(prizePool)

      console.log(results)
      const supplyRatePerBlock = results[cTokenAddress].supplyRatePerBlock[0]
      const prizePeriodRemainingSeconds = results[prizeStrategyAddress].prizePeriodRemainingSeconds[0]
      // const awardBalance = results[prizePoolAddress].captureAwardBalance[0]
      const awardBalance = normalizeTo18Decimals(
        results[prizePoolAddress].captureAwardBalance[0],
        underlyingCollateralDecimals
      )

      console.log('...........................')
      // console.log(ticketSupply.toString())
      // console.log(totalSponsorship.toString())
      console.log(underlyingCollateralDecimals)
      // console.log(awardBalance.toString())
      console.log(supplyRatePerBlock.toString())
      const poolPrizeAmountUSD = calculateEstimatedPoolPrize({
        ticketSupply,
        totalSponsorship,
        underlyingCollateralDecimals,
        awardBalance,
        supplyRatePerBlock,
        prizePeriodRemainingSeconds,
      })
      console.log(poolPrizeAmountUSD)
      totalPrizeAmountUSD = totalPrizeAmountUSD + parseFloat(poolPrizeAmountUSD)
    })

    return totalPrizeAmountUSD
  } catch (e) {
    console.error(e.message)
    return {}
  }
}
