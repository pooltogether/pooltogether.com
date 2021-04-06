import { useMemo } from 'react'

import { useUniswapTokensQuery } from 'lib/hooks/useUniswapTokensQuery'
import { useMultiversionPoolsLockedValue } from 'lib/hooks/useMultiversionPoolsLockedValue'
import { ethers } from 'ethers'

export const useTotalPoolPrizeValueLockedUSD = () => {
  const { data: prizePools, isFetched: prizePoolsIsFetched } = useMultiversionPoolsLockedValue()

  const addresses = prizePools?.map((prizePool) => prizePool.underlyingCollateralToken)
  const { data: uniswapTokenData, isFetched: uniswapDataIsFetched } = useUniswapTokensQuery(
    addresses
  )

  return useMemo(() => {
    if (!uniswapDataIsFetched || !prizePoolsIsFetched) {
      return [0, false]
    }

    let totalValueLockedUSD = 0
    prizePools.forEach((prizePool) => {
      const {
        ticketSupply,
        totalSponsorship,
        underlyingCollateralToken,
        underlyingCollateralDecimals
      } = extractGraphData(prizePool)
      const underlyingTokenValueUSD = uniswapTokenData?.[underlyingCollateralToken]?.usd

      const ticketSupplyFormatted = Number(
        ethers.utils.formatUnits(ticketSupply, underlyingCollateralDecimals)
      )
      const sponsorshipSupplyFormatted = Number(
        ethers.utils.formatUnits(totalSponsorship, underlyingCollateralDecimals)
      )

      const poolPrizeTotalValueLockedUSD = underlyingTokenValueUSD
        ? ticketSupplyFormatted * underlyingTokenValueUSD
        : ticketSupplyFormatted
      const poolPrizeTotalSponsorshipValueLockedUSD = underlyingTokenValueUSD
        ? sponsorshipSupplyFormatted * underlyingTokenValueUSD
        : sponsorshipSupplyFormatted

      totalValueLockedUSD += poolPrizeTotalValueLockedUSD + poolPrizeTotalSponsorshipValueLockedUSD
    })

    return [totalValueLockedUSD, true]
  }, [uniswapTokenData, prizePools, prizePoolsIsFetched, uniswapDataIsFetched])
}

const extractGraphData = (prizePool) => {
  return {
    ticketSupply: prizePool.prizeStrategy.multipleWinners?.ticket.totalSupply || 0,
    totalSponsorship: prizePool.prizeStrategy.multipleWinners?.sponsorship.totalSupply || 0,
    underlyingCollateralDecimals: prizePool.underlyingCollateralDecimals,
    underlyingCollateralToken: prizePool.underlyingCollateralToken,
    cTokenAddress: prizePool.compoundPrizePool?.cToken,
    prizeStrategyAddress: prizePool.prizeStrategy.id,
    prizePoolAddress: prizePool.id
  }
}
