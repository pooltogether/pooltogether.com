import { marshallPoolData } from 'lib/services/marshallPoolData'

export const getPoolDataFromQueryResult = (addresses, data) => {
  let poolData = {
    daiPool: null,
  }

  if (addresses && data?.length > 0) {
    const daiGraphData = data.find(prizePool => addresses.daiPool === prizePool.id)
    const marshalledData = marshallPoolData(daiGraphData)

    poolData.daiPool = {
      ...daiGraphData,
      ...marshalledData,
    }
  }

  return poolData
}
