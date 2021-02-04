import { batch, contract } from '@pooltogether/etherplex'

import ERC20Abi from 'lib/../abis/ERC20Abi'

const debug = require('debug')('pool-app:fetchGenericChainData')

export const fetchExternalErc20Awards = async ({
  provider,
  graphErc20Awards,
  poolAddress,
}) => {
  const poolsExternalErc20AwardsData = []
  const batchCalls = []
  
  let etherplexTokenContract
  let erc20Address
  let values
  let i
  
  const awards = graphErc20Awards?.map(award => award.address)

  // Prepare batched calls
  for (i = 0; i < awards?.length; i++) {
    erc20Address = awards[i]
    etherplexTokenContract = contract(erc20Address, ERC20Abi, erc20Address)

    batchCalls.push(
      etherplexTokenContract
        .balanceOf(poolAddress)
    )
  }

  // Execute batched calls
  values = await batch(
    provider,
    ...batchCalls
  )

  // Map batch call results to erc20 data
  for (i = 0; i < awards?.length; i++) {
    erc20Address = awards[i]
    etherplexTokenContract = awards[erc20Address]

    const balance = values[erc20Address].balanceOf[0]

    poolsExternalErc20AwardsData.push({
      ...etherplexTokenContract,
      address: erc20Address,
      balance,
    })
  }

  return poolsExternalErc20AwardsData
}
