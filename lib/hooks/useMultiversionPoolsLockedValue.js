import gql from 'graphql-tag'
import { useQuery } from 'react-query'
import { isEmpty } from 'lodash'

import { QUERY_KEYS } from 'lib/constants'
import { usePrizePoolAddresses } from 'lib/hooks/usePrizePoolAddresses'
import { useVersionedPoolTogetherSubgraphClient } from 'lib/hooks/subgraphClients/useVersionedPoolTogetherSubgraphClient'

export const useMultiversionPoolsLockedValue = () => {
  // 3.1.0
  const version310 = '3.1.0'
  const {
    data: pools310Data,
    error: pools310Error,
    isFetched: pools310IsFetched
  } = usePrizePoolsLockedValueQuery(version310)

  if (pools310Error) {
    console.error(pools310Error)
  }

  // 3.3.2
  const version332 = '3.3.2'
  let {
    data: pools332Data,
    error: pools332Error,
    isFetched: pools332IsFetched
  } = usePrizePoolsLockedValueQuery(version332)

  if (pools332Error) {
    console.error(pools332Error)
  }

  // All Versions Combined
  const isFetched = pools310IsFetched && pools332IsFetched

  let data = []
  if (pools310Data && pools332Data) {
    data = [...pools310Data, ...pools332Data]
  }

  return {
    data,
    isFetched
  }
}

export const usePrizePoolsLockedValueQuery = (version) => {
  const graphQLClient = useVersionedPoolTogetherSubgraphClient(version)
  const prizePoolAddresses = usePrizePoolAddresses()

  return useQuery(
    [QUERY_KEYS.usePrizePoolsLockedValue, graphQLClient.url, version, prizePoolAddresses],
    async () => {
      return getPrizePoolsLockedValue(graphQLClient, prizePoolAddresses)
    },
    {
      enabled: graphQLClient.url && version && !isEmpty(prizePoolAddresses),
      refetchInterval: false
    }
  )
}

const getPrizePoolsLockedValue = async (graphQLClient, prizePoolAddresses) => {
  const query = prizePoolsLockedValueQuery()

  const variables = { addresses: prizePoolAddresses.map((address) => address.toLowerCase()) }

  let data
  try {
    data = await graphQLClient.request(query, variables)

    return data.prizePools
  } catch (error) {
    console.error(error)
    return
  }
}

const prizePoolsLockedValueQuery = () => {
  return gql`
    query prizePoolsQuery($addresses: [ID!]) {
      prizePools(where: { id_in: $addresses }) {
        id
        underlyingCollateralDecimals
        underlyingCollateralToken

        prizeStrategy {
          id
          multipleWinners {
            ticket {
              totalSupply
            }
            sponsorship {
              totalSupply
            }
          }
        }

        compoundPrizePool {
          cToken {
            id
          }
        }
      }
    }
  `
}
