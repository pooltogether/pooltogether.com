import gql from 'graphql-tag'

import { dynamicPrizeStrategyFragment } from 'lib/fragments/dynamicPrizeStrategyFragment'

export const dynamicPrizeStrategiesQuery = gql`
  query dynamicPrizeStrategiesQuery($id: String!) {
    prizeStrategies(where: { id: $id }) {
      ...dynamicPrizeStrategyFragment
    }
  }
  ${dynamicPrizeStrategyFragment}
`
