import { useContext, useEffect, useState } from 'react'

import { AuthControllerContext } from 'lib/components/contextProviders/AuthControllerContextProvider'
import { useEthereumErc20Query } from 'lib/hooks/useEthereumErc20Query'
// import { useEthereumErc721Query } from 'lib/hooks/useEthereumErc721Query'
import { useEthereumGenericQuery } from 'lib/hooks/useEthereumGenericQuery'

const debug = require('debug')('pool-app:ChainQueries')

export function ChainQueries(props) {
  const {
    children,
    provider,
    poolData,
  } = props

  const { chainId, pauseQueries } = useContext(AuthControllerContext)

  const {
    status: genericChainStatus,
    data: genericChainData,
    error: genericChainError,
    isFetching: genericIsFetching
  } = useEthereumGenericQuery({
    pauseQueries,
    chainId,
    provider,
    poolData: poolData?.daiPool,
  })

  if (genericChainError) {
    console.warn(genericChainError)
  }






  const poolAddress = poolData?.daiPool?.poolAddress
  const graphExternalErc20Awards = poolData?.daiPool?.externalErc20Awards

  const {
    status: externalErc20ChainStatus,
    data: externalErc20ChainData,
    error: externalErc20ChainError,
    isFetching: externalErc20IsFetching
  } = useEthereumErc20Query({
    pauseQueries,
    chainId,
    provider,
    graphErc20Awards: graphExternalErc20Awards,
    poolAddress,
  })

  if (externalErc20ChainError) {
    console.warn(externalErc20ChainError)
  }



  // const graphExternalErc721Awards = poolData?.daiPool?.externalErc721Awards

  // const {
  //   status: externalErc721ChainStatus,
  //   data: externalErc721ChainData,
  //   error: externalErc721ChainError,
  //   isFetching: externalErc721IsFetching
  // } = useEthereumErc721Query({
  //   pauseQueries,
  //   chainId,
  //   provider,
  //   graphErc721Awards: graphExternalErc721Awards,
  //   poolAddress,
  // })

  // if (externalErc721ChainError) {
  //   console.warn(externalErc721ChainError)
  // }

  return children({
    genericChainData,
  })
}
