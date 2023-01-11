import { getAmountFromUnformatted, msToS } from '@pooltogether/utilities'
import { PrizePoolNetwork } from '@pooltogether/v4-client-js'

/**
 * @param {PrizePoolNetwork} prizePoolNetwork
 * @returns {Promise<{ supply: import('@pooltogether/hooks').Amount, prizePoolId: string }[]>}
 */
export const getTicketSupplies = async (prizePoolNetwork) => {
  const timestamp = Math.round(msToS(Date.now()))
  const prizePoolSupplies = []

  let promises = prizePoolNetwork.prizePools.map(prizePool => (async () => {
    const ticketData = await prizePool.getTicketData()
    const supplyUnformatted = await prizePool.getTicketTwabTotalSupplyAt(timestamp)
    const supply = getAmountFromUnformatted(supplyUnformatted, ticketData.decimals)
    const prizePoolId = prizePool.id()
    prizePoolSupplies.push({ supply, prizePoolId })
  })())
  await Promise.all(promises)

  return prizePoolSupplies
}