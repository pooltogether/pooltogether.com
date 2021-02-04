import { isEmpty } from 'lodash'
import { ethers } from 'ethers'

export const compileErc20Awards = (erc20ChainData, poolData, uniswapPriceData) => {
  const erc20GraphData = poolData?.prizeStrategy?.externalErc20Awards

  if (
    isEmpty(erc20ChainData) ||
    isEmpty(erc20GraphData) ||
    isEmpty(uniswapPriceData)
  ) {
    return {}
  }

  let data = {}

  erc20GraphData.forEach(obj => {
    const chainData = erc20ChainData.find(token => obj.address === token.address)
    const priceData = uniswapPriceData[obj.address]

    const balanceFormatted = ethers.utils.formatUnits(chainData.balance, parseInt(obj.decimals, 10))
    const value = priceData?.usd && parseFloat(balanceFormatted) * priceData.usd

    data[obj.address] = {
      ...obj,
      ...chainData,
      ...priceData,
      value
    }
  })

  return data
}
