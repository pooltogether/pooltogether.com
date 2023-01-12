import { getAmountFromUnformatted, numberWithCommas } from '@pooltogether/utilities'
import { PrizePool, PrizePoolNetwork } from '@pooltogether/v4-client-js'
import { parseUnits } from 'ethers/lib/utils'
import { calculatePercentageOfPicks } from './calculatePercentageOfPicks'
import { getPrizePoolNetwork } from './getPrizePoolNetwork'
import { getTicketSupplies } from './getTicketSupplies'

export const getWeeklyPrizeAmount = async () => {
  try {
    const prizePoolNetwork = getPrizePoolNetwork()
    const prizePoolTicketSupplies = await getTicketSupplies(prizePoolNetwork)
    const totalTicketSupply = prizePoolTicketSupplies.reduce((sum, entry) => sum += Number(entry.supply.amount), 0)
    let prizeAmount = 0

    let promises = prizePoolNetwork.prizePools.map(prizePool => (async () => {
      const ticketSupply = prizePoolTicketSupplies.find(entry => entry.prizePoolId === prizePool.id())?.supply
      if (!!ticketSupply) {
        const prizePoolPrizeAmount = await getPrizePoolPrizeAmount(prizePoolNetwork, prizePool, ticketSupply, totalTicketSupply)
        if (!!prizePoolPrizeAmount) {
          prizeAmount += prizePoolPrizeAmount
        }
      }
    })())
    await Promise.all(promises)

    const weeklyPrizeAmount = Math.ceil((prizeAmount * 7)).toString()

    return weeklyPrizeAmount
  } catch(err) {
    console.error(err)
    return '10692'
  }
}

/**
 * @param {PrizePoolNetwork} prizePoolNetwork
 * @param {PrizePool} prizePool
 * @param {import('@pooltogether/hooks').Amount} ticketSupply
 * @param {number} totalTicketSupply
 */
const getPrizePoolPrizeAmount = async (prizePoolNetwork, prizePool, ticketSupply, totalTicketSupply) => {
  const prizeDistributor = prizePoolNetwork.prizeDistributors.find(
    (prizeDistributor) => prizeDistributor.chainId === prizePool.chainId
  )
  const prizeTier = await prizeDistributor.getUpcomingPrizeTier()
  const ticketData = await prizePool.getTicketData()
  const percentageOfPicks = await calculatePercentageOfPicks(
    ticketSupply,
    totalTicketSupply,
    prizeTier
  )
  const expectedPrizeAmount = getAmountFromUnformatted(
    prizeTier.prize
      .mul(parseUnits(percentageOfPicks.toString(), 9))
      .div(parseUnits('1', 9)),
      ticketData.decimals
  ).amount

  return Number(expectedPrizeAmount)
}
