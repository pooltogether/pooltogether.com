import gql from 'graphql-tag'

import { prizeFragment } from 'lib/fragments/prizeFragment'

export const poolPrizesQuery = gql`
  query poolPrizesQuery($prizeStrategyAddress: String!, $first: Int) {
    prizeStrategy(id: $prizeStrategyAddress) {
      id
      prizes(first: $first, orderBy: awardedTimestamp, orderDirection: desc) {
        ...prizeFragment
      }
    }
  }
  ${prizeFragment}
`
