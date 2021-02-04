import gql from 'graphql-tag'

import { dynamicPrizePoolFragment } from 'lib/fragments/dynamicPrizePoolFragment'

export const dynamicPrizePoolsQuery = gql`
  query dynamicPrizePoolsQuery($owner: String!) {
    prizePools(where: { owner: $owner }) {
      ...dynamicPrizePoolFragment
    }
  }
  ${dynamicPrizePoolFragment}
`
