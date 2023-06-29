import { SECONDS_PER_DAY } from '@shared/utilities'
import { GetStaticProps } from 'next'
import { getMessages } from 'src/utils'
import { Layout } from '@components/Layout'
import { TermsOfService } from '@components/TermsOfService'

interface TermsPageProps {
  messages: IntlMessages
}

export const getStaticProps: GetStaticProps<TermsPageProps> = async ({ locale }) => {
  const messages = await getMessages(locale, { useDefault: true })

  return {
    props: { messages },
    revalidate: SECONDS_PER_DAY
  }
}

export default function TermsPage() {
  return (
    <Layout className='bg-pt-bg-purple-dark'>
      <TermsOfService className='md:mt-28' />
    </Layout>
  )
}
