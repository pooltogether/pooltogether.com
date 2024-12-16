import { SECONDS_PER_DAY } from '@shared/utilities'
import { GetStaticProps } from 'next'
import { useTranslations } from 'next-intl'
import { getMessages } from 'src/utils'
import { InterfaceCards } from '@components/Interfaces/InterfaceCards'
import { InterfacesHeader } from '@components/Interfaces/InterfacesHeader'
import { Layout } from '@components/Layout'

interface InterfacesPageProps {
  messages: IntlMessages
}

export const getStaticProps: GetStaticProps<InterfacesPageProps> = async ({ locale }) => {
  const messages = await getMessages(locale, { useDefault: true })

  return {
    props: { messages },
    revalidate: SECONDS_PER_DAY
  }
}

export default function InterfacesPage() {
  const t = useTranslations('Interfaces')

  return (
    <Layout
      hideNavbar
      hideFooter
      className='px-4 py-16 bg-gradient-to-b from-pt-bg-purple-darker to-pt-purple-800'
    >
      <InterfacesHeader />
      <InterfaceCards cards={['cabanaApp', 'pooltimeApp', 'superform', 'wineth']} className='mt-8' />
      <InterfaceCards title={t('migrationPrompt')} cards={['migrationApp']} className='mt-8' />
    </Layout>
  )
}
