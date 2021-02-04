import gql from 'graphql-tag'

import { dynamicSingleRandomWinnerFragment } from 'lib/fragments/dynamicSingleRandomWinnerFragment'

export const dynamicSingleRandomWinnerQuery = gql`
  query dynamicSingleRandomWinnerQuery($owner: String!) {
    singleRandomWinners(where: { owner: $owner }) {
      ...dynamicSingleRandomWinnerFragment
    }
  }
  ${dynamicSingleRandomWinnerFragment}
`
