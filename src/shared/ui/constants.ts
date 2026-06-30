/**
 * Domains
 */
export const DOMAINS = Object.freeze({
  app: 'https://app.pooltogether.com',
  landingPage: 'https://pooltogether.com',
  docs: 'https://docs.pooltogether.com',
  devDocs: 'https://dev.pooltogether.com'
})

/**
 * Links
 */
export const LINKS = Object.freeze({
  ...DOMAINS,
  brandKit: `https://www.figma.com/community/file/1309277420331106706`,
  pooltogetherUiKit: `https://www.figma.com/community/file/1312204004590586926`,
  pooltogetherTokenBrandingGuidelines: `https://www.figma.com/community/file/1296919804512902494`,
  gettingStarted: `${DOMAINS.docs}/welcome/getting-started`,
  faq: `${DOMAINS.docs}/welcome/faq`,
  guides: `${DOMAINS.docs}/pooltogether/guides`,
  audits: `${DOMAINS.docs}/security/audits`,
  twitter: `https://twitter.com/PoolTogether_`,
  github: `https://github.com/pooltogether`,
  medium: `https://medium.com/pooltogether`,
  farcaster: `https://farcaster.xyz/~/channel/pool-together`,
  mirror: `https://pooltogether.mirror.xyz/`,
  clientJs: `https://www.npmjs.com/package/@generationsoftware/hyperstructure-client-js`,
  reactHooks: `https://www.npmjs.com/package/@generationsoftware/hyperstructure-react-hooks`
})
