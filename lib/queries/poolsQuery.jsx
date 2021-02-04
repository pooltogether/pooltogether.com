import gql from 'graphql-tag'

import { prizePoolFragment } from 'lib/fragments/prizePoolFragment'

export const poolsQuery = gql`
  query poolsQuery($ids: [String!]!) {
    prizePools(where: { id_in: $ids }) {
      ...prizePoolFragment
    }
  }
  ${prizePoolFragment}
`