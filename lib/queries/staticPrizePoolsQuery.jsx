import gql from 'graphql-tag'

import { staticPrizePoolFragment } from 'lib/fragments/staticPrizePoolFragment'

// There is no "query multiple ids using an array" in TheGraph's API,
// so query all prizePools and filter using code
// This could be a huge performance hit if there are tons of prizePools

export const staticPrizePoolsQuery = gql`
  query staticPrizePoolsQuery {
    prizePools {
      ...staticPrizePoolFragment

      prizeStrategy {
        id
      }
    }
  }
  ${staticPrizePoolFragment}
`
