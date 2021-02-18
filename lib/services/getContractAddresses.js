import { contractAddresses } from '@pooltogether/current-pool-data'

export const getContractAddresses = (chainId) => {
  let daiPoolAddress,
    uniPoolAddress,
    usdcPoolAddress,
    compPoolAddress,
    lootBox,
    lootBoxController

  daiPoolAddress = contractAddresses[chainId].dai?.prizePool?.toLowerCase()
  uniPoolAddress = contractAddresses[chainId].uni?.prizePool?.toLowerCase()
  usdcPoolAddress = contractAddresses[chainId].usdc?.prizePool?.toLowerCase()
  compPoolAddress = contractAddresses[chainId].comp?.prizePool?.toLowerCase()

  lootBox = contractAddresses[chainId].lootBox?.toLowerCase()
  lootBoxController = contractAddresses[chainId].lootBoxController?.toLowerCase()

  const pools = [
    daiPoolAddress,
    uniPoolAddress,
    usdcPoolAddress,
    compPoolAddress,
  ].filter((pool) => pool !== undefined)

  return {
    pools,
    'PT-cDAI': daiPoolAddress,
    'PT-cUNI': uniPoolAddress,
    'PT-cUSDC': usdcPoolAddress,
    'PT-cCOMP': compPoolAddress,
    'lootBox': lootBox,
    'lootBoxController': lootBoxController,
  }
}
