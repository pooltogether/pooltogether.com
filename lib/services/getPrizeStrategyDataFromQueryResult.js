export const getPrizeStrategyDataFromQueryResult = (addresses, data) => {
  let prizeStrategyData = {
    daiPrizeStrategy: {},
  }

  if (addresses && data?.singleRandomWinners?.length > 0) {
    const dynamicDaiData = data.singleRandomWinners.find(prizeStrat => addresses.daiPrizeStrategy === prizeStrat.id)

    prizeStrategyData.daiPrizeStrategy = { prizeStrategyAddress: addresses.daiPrizeStrategy, ...prizeStrategyData.daiPrizeStrategy, ...dynamicDaiData }
  }

  return prizeStrategyData
}
