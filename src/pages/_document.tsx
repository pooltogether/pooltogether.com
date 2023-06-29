import { DOMAINS } from '@shared/ui'
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    const title = 'PoolTogether'
    const description = 'The permissionless protocol for saving and winning.'
    const keywords =
      'ethereum optimism polygon avalanche prize savings win save protocol blockchain'
    const twitterHandle = '@PoolTogether_'

    return (
      <Html className='bg-pt-bg-purple-darker text-gray-100 overflow-x-hidden dark'>
        <Head>
          <link rel='icon' href='/favicon.png' type='image/x-icon' />
          <link rel='apple-touch-icon' href='/apple-touch-icon.png' />

          <meta name='theme-color' content='#21064e' />
          <meta name='description' content={description} />
          <meta name='keywords' content={keywords} />
          <meta name='author' content='PT Inc.' />

          <meta property='og:title' content={title} />
          <meta property='og:description' content={description} />
          <meta property='og:site_name' content={title} />
          <meta property='og:url' content={DOMAINS.landingPage} />
          <meta property='og:type' content='website' />
          <meta
            property='og:image'
            content={`${DOMAINS.landingPage}/facebook-share-image-1200-630.png`}
          />
          <meta property='og:rich_attachment' content='true' />
          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='630' />

          <meta property='twitter:title' content={title} />
          <meta property='twitter:description' content={description} />
          <meta property='twitter:card' content='summary_large_image' />
          <meta property='twitter:site' content={twitterHandle} />
          <meta
            property='twitter:image:src'
            content={`${DOMAINS.landingPage}/twitter-share-image-1200-675.png`}
          />
          <meta property='twitter:url' content={DOMAINS.landingPage} />
          <meta property='twitter:creator' content={twitterHandle} />

          <link rel='manifest' href='/manifest.json' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
