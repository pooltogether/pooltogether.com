import gql from 'graphql-tag'

export const dynamicPrizePoolFragment = gql`
  fragment dynamicPrizePoolFragment on PrizePool {
    id

    owner

    prizeStrategy {
      id
    }

    prizePoolType
    compoundPrizePool {
      id
      cToken
    }

    reserveFeeControlledToken

    underlyingCollateralToken
    underlyingCollateralDecimals
    underlyingCollateralName
    underlyingCollateralSymbol

    maxExitFeeMantissa
    maxTimelockDuration
    timelockTotalSupply
    liquidityCap

    playerCount
    ticketSupply: totalSupply

    cumulativePrizeGross
    cumulativePrizeReserveFee
    cumulativePrizeNet

    currentPrizeId
    currentState

    prizesCount
  }
`
