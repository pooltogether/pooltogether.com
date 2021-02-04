import gql from 'graphql-tag'

import { prizeFragment } from 'lib/fragments/prizeFragment'

export const prizeQuery = gql`
  query prizeQuery($prizeId: String!) {
    prize(id: $prizeId) {
      ...prizeFragment
    }
  }
  ${prizeFragment}
`
