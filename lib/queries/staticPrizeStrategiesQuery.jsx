import gql from 'graphql-tag'

import { staticPrizeStrategyFragment } from 'lib/fragments/staticPrizeStrategyFragment'

// There is no "query multiple ids using an array" in TheGraph's API,
// so query all prizeStrategies and filter using code
// This could be a huge performance hit if there are tons of prizeStrategies

export const staticPrizeStrategiesQuery = gql`
  query staticPrizeStrategiesQuery {
    prizeStrategies {
      ...staticPrizeStrategyFragment
    }
  }
  ${staticPrizeStrategyFragment}
`
