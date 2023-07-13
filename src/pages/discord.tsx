import { CaptchaModal } from '@shared/react-components'
import { getDiscordInvite, SECONDS_PER_DAY } from '@shared/utilities'
import { GetStaticProps } from 'next'
import { useTranslations } from 'next-intl'
import { getMessages } from 'src/utils'
import { Layout } from '@components/Layout'

interface DiscordPageProps {
  messages: IntlMessages
}

export const getStaticProps: GetStaticProps<DiscordPageProps> = async ({ locale }) => {
  const messages = await getMessages(locale, { useDefault: true })

  return {
    props: { messages },
    revalidate: SECONDS_PER_DAY
  }
}

export default function DiscordPage() {
  const t = useTranslations('Common')

  return (
    <Layout className='bg-pt-bg-purple-dark'>
      <div className='min-h-[50vh] flex grow md:mt-28'>
        <CaptchaModal
          hCaptchaSiteKey='11cdabde-af7e-42cb-ba97-76e35b7f7c39'
          header={t('joinDiscord')}
          onVerify={getDiscordInvite}
          isOnPageContent={true}
        />
      </div>
    </Layout>
  )
}
