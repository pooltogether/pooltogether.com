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
  const t_common = useTranslations('Common')
  const t_interfaces = useTranslations('Interfaces')

  return (
    <Layout
      hideNavbar
      hideFooter
      className='px-4 py-16 bg-gradient-to-b from-pt-bg-purple-darker to-pt-purple-800'
    >
      <InterfacesHeader />
      <InterfaceCards
        title={t_common('version', { number: 5 })}
        cards={['cabanaApp', 'pooltimeApp']}
        className='mt-8'
      />
      <InterfaceCards
        title={t_common('version', { number: 4 })}
        cards={['ptApp_v4']}
        append={
          <span className='px-4 text-center text-xs text-pt-purple-100 md:px-8'>
            <span className='text-pt-pink'>*</span> {t_interfaces('v4Info')}
          </span>
        }
        className='mt-8'
      />
    </Layout>
  )
}
