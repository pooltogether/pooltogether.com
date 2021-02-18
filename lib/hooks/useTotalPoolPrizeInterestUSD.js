import { QUERY_KEYS } from 'lib/constants'
import { usePrizePoolAddresses } from 'lib/hooks/usePrizePoolAddresses'
import { useReadProvider } from 'lib/hooks/useReadProvider'
import { useQuery } from 'react-query'
import { batch, contract } from '@pooltogether/etherplex'
import { ethers } from 'ethers'

import PrizePoolAbi from '@pooltogether/pooltogether-contracts/abis/PrizePool'
import PrizeStrategyAbi from '@pooltogether/pooltogether-contracts/abis/PeriodicPrizeStrategy'

const prizePoolsQuery = gql`
  query prizePoolsQuery($addresses: [ID!]) {
    prizePools(where: { id_in: $addresses }) {
      id
      underlyingCollateralDecimals

      compoundPrizePool {
        cToken {
          id
        }
      }
      
      controlledTokens {
        id
        totalSupply
        name
        symbol
      }
    }
  }
`

export const useTotalPoolPrizeInterestUSD = () => {
  const { readProvider, isLoaded: isReadProviderLoaded } = useReadProvider()
  const prizePoolAddresses = usePrizePoolAddresses()
  
  return useQuery(
    [QUERY_KEYS.totalPrizePoolPrizes, prizePoolAddresses],
    async () => {
      return getPrizePoolPrizes(readProvider, prizePoolAddresses)
    },
    {
      enabled: isReadProviderLoaded,
      refetchInterval: false,
      refetchOnWindowFocus: false
    }
  )
}

const getPrizePoolPrizes = async (provider, prizePoolAddresses) => {
  try {
    // calculateEstimatedPoolPrize
    console.log('hello')

    const pools = {}
    prizePoolAddresses.forEach(
      (prizePoolAddress) => (pools[prizePoolAddress] = { prizePool: prizePoolAddress })
    )

    prizePoolsQuery


    let batchCalls = []
    prizePoolAddresses.forEach((prizePoolAddress) => {
      const cTokenContract = contract(cTokenAddress, ERC20Abi, cTokenAddress)
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
    console.log(results)

    

    
    const supplyRatePerBlock = results[cTokenAddress].supplyRatePerBlock[0]
    const prizePeriodRemainingSeconds = results[prizeStrategyAddress].prizePeriodRemainingSeconds[0]
    const awardBalance = results[prizePoolAddress].captureAwardBalance[0]
    console.log(awardBalance)

    let totalPrizeAmountUSD = ethers.utils.bigNumberify(0)
    prizePoolAddresses.forEach((prizePoolAddress) => {
      const pool = {
        ticketSupply,
        totalSponsorship,
        underlyingCollateralDecimals,
        awardBalance,
        supplyRatePerBlock,
        prizePeriodRemainingSeconds,
      }
      const poolPrizeAmountUSD = calculateEstimatedPoolPrize(pool)
      console.log(poolPrizeAmountUSD)
      totalPrizeAmountUSD = totalPrizeAmountUSD.add(poolPrizeAmountUSD)
    })

    console.log('hi')
    return {
      totalPrizeAmountUSD: ethers.utils.bigNumberify('10219309128312093812')
    }
  } catch (e) {
    console.error(e.message)
    return {}
  }
}
