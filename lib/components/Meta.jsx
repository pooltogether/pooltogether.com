import Head from 'next/head'

export const Meta = ({ title, description }) => {
  const defaultTitle = 'PoolTogether'
  title = title ? `${defaultTitle} - ${title}` : defaultTitle

  const rootUrl = `https://pooltogether.com`
  const url = typeof window !== 'undefined' ? window.location.href : rootUrl

  const defaultDescription = `PoolTogether`
  description = description ? description : defaultDescription

  const keywords = 'ethereum'
  const twitterHandle = '@PoolTogether_'

  return (
    <>
      <Head>
        <title>{title}</title>

        <link rel='icon' href='/favicon.png' type='image/x-icon' />

        <meta name='theme-color' content='#1e0b43' />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta name='author' content='PoolTogether' />

        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:site_name' content={title} />
        <meta property='og:url' content={url} />
        <meta
          property='og:image'
          content={`${rootUrl}/pooltogether-facebook-share-image-1200-630@2x.png`}
        />
        <meta property='og:rich_attachment' content='true' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />

        <meta property='twitter:title' content={title} />
        <meta property='twitter:site' content={twitterHandle} />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:description' content={description} />
        <meta
          property='twitter:image:src'
          content={`${rootUrl}/pooltogether-twitter-share-image-1200-675@2x.png`}
        />
        <meta property='twitter:url' content={url} />
        <meta property='twitter:creator' content={twitterHandle} />
      </Head>
    </>
  )
}

Meta.defaultProps = {
  description: `Win by saving with PoolTogether. The more you save, the more you win!`
}
