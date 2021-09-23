export const SUPPORTED_CHAIN_IDS = [1, 3, 4]

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

export const DEFAULT_QUERY_OPTIONS = Object.freeze({
  refetchInterval: false,
  refetchOnReconnect: false,
  refetchOnWindowFocus: false,
  refetchOnMount: false,
  staleTime: 15000
})
