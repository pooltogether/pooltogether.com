import { SECONDS_PER_DAY } from '@shared/utilities'
import { GetStaticProps } from 'next'
import { getMessages } from 'src/utils'
import { MainSection } from '@components/Ecosystem/MainSection'
import { Layout } from '@components/Layout'

interface EcosystemPageProps {
  messages: IntlMessages
}

export const getStaticProps: GetStaticProps<EcosystemPageProps> = async ({ locale }) => {
  const messages = await getMessages(locale, { useDefault: true })

  return {
    props: { messages },
    revalidate: SECONDS_PER_DAY
  }
}

export default function EcosystemPage() {
  return (
    <Layout className='bg-pt-bg-purple-dark'>
      <MainSection className='-mt-[4.25rem] md:mt-0' />
    </Layout>
  )
}
