export const SUPPORTED_CHAIN_IDS = [1, 3, 4]

export const CREATOR_ADDRESS = '0xe0f4217390221af47855e094f6e112d43c8698fe'

export const SECONDS_PER_BLOCK = 14

export const DEFAULT_TOKEN_PRECISION = 18

export const MAINNET_POLLING_INTERVAL = process.env.NEXT_JS_DOMAIN_NAME ? 60 * 1000 : 10 * 1000
export const UNISWAP_POLLING_INTERVAL = process.env.NEXT_JS_DOMAIN_NAME ? 60 * 1000 : 10 * 1000

const domain = process.env.NEXT_JS_DOMAIN_NAME && `.${process.env.NEXT_JS_DOMAIN_NAME}`

export const COOKIE_OPTIONS = {
  sameSite: 'strict',
  secure: process.env.NEXT_JS_DOMAIN_NAME === 'pooltogether.com',
  domain
}

export const POOLS = [
  {
    name: 'DAI Pool',
    frequency: 'Weekly',
    symbol: 'PT-cDAI'
  }
]

export const PRIZE_STRATEGY_TYPES = {
  singleRandomWinner: 'singleRandomWinner',
  multipleWinners: 'multipleWinners'
}

export const CONTRACT_ADDRESSES = {
  1: {
    Usdt: '0xdac17f958d2ee523a2206206994597c13d831ec7'
    // Dai: '0x6b175474e89094c44da98b954eedeac495271d0f',
    // PermitAndDepositDai: PermitAndDepositDaiMainnet.address
  },
  3: {
    Usdt: '0x0736d0c130b2ead47476cc262dbed90d7c4eeabd'
    // Dai: '0xc2118d4d90b274016cb7a54c03ef52e6c537d957',
    // PermitAndDepositDai: PermitAndDepositDaiRopsten.address
  },
  4: {
    Usdt: '0x3b00ef435fa4fcff5c209a37d1f3dcff37c705ad'
    // PermitAndDepositDai: PermitAndDepositDaiRinkeby.address,
  }
}

export const QUERY_KEYS = {
  ethereumErc20sQuery: 'ethereumErc20sQuery',
  ethereumGenericQuery: 'ethereumGenericQuery',
  poolsQuery: 'poolsQuery',
  totalPrizePoolPrizes: 'totalPrizePoolPrizes',
  uniswapTokensQuery: 'uniswapTokensQuery',
  usePrizePools: 'usePrizePools',
  usePools: 'usePools'
}

export const POOLTOGETHER_SUBGRAPH_URIS = {
  1: process.env.NEXT_JS_SUBGRAPH_URI_MAINNET,
  3: process.env.NEXT_JS_SUBGRAPH_URI_ROPSTEN,
  4: process.env.NEXT_JS_SUBGRAPH_URI_RINKEBY
}

export const UNISWAP_GRAPH_URIS = {
  1: process.env.NEXT_JS_UNISWAP_SUBGRAPH_URI_MAINNET, // https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2
  3: process.env.NEXT_JS_UNISWAP_SUBGRAPH_URI_ROPSTEN,
  4: process.env.NEXT_JS_UNISWAP_SUBGRAPH_URI_RINKEBY // https://api.thegraph.com/subgraphs/name/blockrockettech/uniswap-v2-subgraph-rinkeby
}

export const LOOTBOX_GRAPH_URIS = {
  1: process.env.NEXT_JS_SUBGRAPH_LOOTBOX_URI_MAINNET,
  3: process.env.NEXT_JS_SUBGRAPH_LOOTBOX_URI_ROPSTEN,
  4: process.env.NEXT_JS_SUBGRAPH_LOOTBOX_URI_RINKEBY
}
