import { SECONDS_PER_DAY } from '@shared/utilities'
import { GetStaticProps } from 'next'
import { getMessages } from 'src/utils'
import { MainSection } from '@components/Builders/MainSection'
import { Layout } from '@components/Layout'

interface BuildersPageProps {
  messages: IntlMessages
}

export const getStaticProps: GetStaticProps<BuildersPageProps> = async ({ locale }) => {
  const messages = await getMessages(locale, { useDefault: true })

  return {
    props: { messages },
    revalidate: SECONDS_PER_DAY
  }
}

export default function BuildersPage() {
  return (
    <Layout className='bg-pt-bg-purple-dark md:bg-transparent'>
      <MainSection className='-mt-[4.25rem] md:mt-0' />
    </Layout>
  )
}
