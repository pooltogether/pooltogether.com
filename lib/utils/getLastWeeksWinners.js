import { PrizeApi } from '@pooltogether/v4-client-js'
import { getPrizePoolNetwork } from './getPrizePoolNetwork'
import { BigNumber, ethers } from 'ethers'

export const getLastWeeksWinners = async () => {
  try {
    // NOTE: Hardcoded decimals for now
    const decimals = '6'
    const prizePoolNetwork = getPrizePoolNetwork()
    const prizeDistributors = prizePoolNetwork.prizeDistributors

    prizeDistributors.forEach((prizeDistributor) => {
      console.log(prizeDistributor.id())
    })

    const winners = (
      await Promise.all(
        prizeDistributors.flatMap(async (prizeDistributor) => {
          const newestDraw = await prizeDistributor.getNewestDraw()
          const drawId = newestDraw.drawId
          const promises = []
          for (var i = 0; i < 7; i++) {
            promises.push(
              await fetch(
                PrizeApi.getDrawResultsStatusUrl(
                  prizeDistributor.chainId,
                  prizeDistributor.address,
                  drawId - i
                )
              )
            )
          }
          const results = await Promise.all(promises)
          const jsonResults = await Promise.all(results.map((result) => result.json()))

          return jsonResults
        })
      )
    ).flat()

    const totalWon = winners.reduce(
      (acc, result) => acc.add(BigNumber.from(result.meta.amountsTotal)),
      ethers.constants.Zero
    )
    return ethers.utils.formatUnits(totalWon, decimals)
  } catch (err) {
    console.error(err)
    return '4624'
  }
}
