import gql from 'graphql-tag'
import { request } from 'graphql-request'
import { AuthControllerContext } from 'lib/components/contextProviders/AuthControllerContextProvider'
import { POOLTOGETHER_SUBGRAPH_URIS, QUERY_KEYS } from 'lib/constants'
import { useContext } from 'react'
import { useQuery } from 'react-query'
import { usePrizePoolAddresses } from 'lib/hooks/usePrizePoolAddresses'
import { ethers } from 'ethers'
import { isEmpty } from 'lodash'

export const usePrizePools = () => {
  const { chainId } = useContext(AuthControllerContext)
  const prizePoolAddresses = usePrizePoolAddresses()

  return useQuery(
    [QUERY_KEYS.usePrizePools, chainId, prizePoolAddresses],
    async () => {
      return getPrizePools(chainId, prizePoolAddresses)
    },
    {
      enabled: chainId && !isEmpty(prizePoolAddresses),
      refetchInterval: false
    }
  )
}

const getPrizePools = async (chainId, prizePoolAddresses) => {
  const query = prizePoolsQuery()

  const variables = { addresses: prizePoolAddresses.map((address) => address.toLowerCase()) }

  try {
    const subgraphData = await request(POOLTOGETHER_SUBGRAPH_URIS[chainId], query, variables)

    return subgraphData.prizePools
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2))
    return
  }
}

const prizePoolsQuery = () => {
  return gql`
    query prizePoolsQuery($addresses: [ID!]) {
      prizePools(where: { id_in: $addresses }) {
        id
        underlyingCollateralDecimals

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
