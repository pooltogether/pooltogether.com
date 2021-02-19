import { request } from 'graphql-request'

import { POOLTOGETHER_SUBGRAPH_URIS } from 'lib/constants'
import { poolQuery } from 'lib/queries/poolQuery'

export const getPoolsData = async (chainId, contractAddresses, blockNumber) => {
  const poolAddress = contractAddresses.pools[0]

  const variables = {
    poolAddress
  }

  const query = poolQuery(blockNumber)

  let data
  try {
    data = await request(
      POOLTOGETHER_SUBGRAPH_URIS[chainId],
      query,
      variables
    )
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2))
  }

  return data?.prizePool ? [data?.prizePool] : []
}
