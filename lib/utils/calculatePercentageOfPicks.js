import { divideBigNumbers } from '@pooltogether/utilities'
import { formatUnits, parseEther } from 'ethers/lib/utils'

/**
 * @param {import('@pooltogether/hooks').Amount} prizePoolTvl
 * @param {number} totalTvl
 * @param {import('@pooltogether/v4-utils-js').PrizeTier | import('@pooltogether/v4-utils-js').PrizeTierV2} prizeTier
 */
export const calculatePercentageOfPicks = async (prizePoolTvl, totalTvl, prizeTier) => {
  if ('dpr' in prizeTier && prizeTier.dpr !== undefined) {
    const percentage = Number(
      formatUnits(prizePoolTvl.amountUnformatted.mul(prizeTier.dpr).div(prizeTier.prize), 9)
    )
    return percentage
  } else {
    const tvlNormalized = parseEther(prizePoolTvl.amount)
    const totalTvlNormalized = parseEther(totalTvl.toString())
    const percentage = divideBigNumbers(tvlNormalized, totalTvlNormalized, 8)
    return percentage
  }
}