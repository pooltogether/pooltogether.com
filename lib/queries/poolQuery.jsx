import gql from 'graphql-tag'

import { prizePoolFragment } from 'lib/fragments/prizePoolFragment'

export const poolQuery = (number) => {
  const blockFilter = number > 0 ? `, block: { number: ${number} }` : ''

  return gql`
    query poolQuery($poolAddress: String!) {
      prizePool(id: $poolAddress ${blockFilter}) {
        ...prizePoolFragment
      }
    }
    ${prizePoolFragment}
  `
}
