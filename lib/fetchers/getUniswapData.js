import { request, gql } from 'graphql-request'

import { CONTRACT_ADDRESSES, UNISWAP_GRAPH_URIS } from 'lib/constants'

const QUERY_TEMPLATE = `token__num__: tokens(where: { id: "__address__" } __blockFilter__) {
  id
  derivedETH
}`

const _addStablecoin = (addresses, usdtAddress) => {
  const usdt = addresses.find(address => usdtAddress === address)

  if (!usdt) {
    addresses.splice(0, 0, usdtAddress)
  }

  return addresses
}

const _getBlockFilter = (blockNumber) => {
  let blockFilter = ''

  if (blockNumber && blockNumber > 0) {
    blockFilter = `, block: { number: ${blockNumber} }`
  }

  return blockFilter
}

const _calculateUsd = (token) => {
  let derivedETH = token?.derivedETH

  if (!derivedETH || derivedETH === '0') {
    derivedETH = 0.2 // 1 ETH is $5 USD, used for Rinkeby, etc
  }

  return 1 / derivedETH
}

export const getUniswapData = async (chainId, addresses, blockNumber) => {
  const blockFilter = _getBlockFilter(blockNumber)

  // We'll use this stablecoin to measure the price of ETH off of
  const stablecoinAddress = CONTRACT_ADDRESSES[chainId]?.['Usdt']

  _addStablecoin(
    addresses,
    stablecoinAddress,
  )

  // build a query selection set from all the token addresses
  let query = ``
  for (let i = 0; i < addresses.length; i++) {
    const address = addresses[i]

    const selection = QUERY_TEMPLATE
      .replace('__num__', i)
      .replace('__address__', address)
      .replace('__blockFilter__', blockFilter)

    query = `${query}\n${selection}`
  }

  const response = await request(
    UNISWAP_GRAPH_URIS[1],
    gql`
      query uniswapTokensQuery {
        ${query}
      }
    `
  )

  // unpack the data into a useful object 
  let data = {}
  for (let i = 0; i < addresses.length; i++) {
    const address = addresses[i]
    const token = response[`token${i}`][0]

    data[address] = token
  }

  // calculate and cache the price of eth in the data object 
  data['ethereum'] = {
    derivedETH: '1',
    id: 'eth',
    usd: _calculateUsd(data[stablecoinAddress])
  }

  // calculate the price of the token in USD
  for (let i = 0; i < addresses.length; i++) {
    const address = addresses[i]
    const token = data[address]

    if (token) {
      data[address] = {
        ...token,
        usd: data['ethereum'].usd * parseFloat(token.derivedETH)
      }
    }
  }

  return data
}
