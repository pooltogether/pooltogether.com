import gql from 'graphql-tag'

import { playerFragment } from 'lib/fragments/playerFragment'

// # query prizePlayersQuery($prizePoolAddress: ID!, $prizeId: String!, $first: Int!, $skip: Int!) {
export const prizePlayersQuery = gql`
  query prizePlayersQuery($prizePoolAddress: ID!, $first: Int!, $skip: Int!) {
    players(first: $first, skip: $skip, orderBy: balance, orderDirection: desc, where: { prizePool: $prizePoolAddress }) {
      ...playerFragment
    }
  }
  ${playerFragment}
`

