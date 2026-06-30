import { SECONDS_PER_DAY } from '@shared/utilities'
import { GetStaticProps } from 'next'
import { getMessages } from 'src/utils'
import { CryptoSection } from '@components/Home/CryptoSection'
import { HeroSection } from '@components/Home/HeroSection'
import { MissionSection } from '@components/Home/MissionSection'
import { SavingSection } from '@components/Home/SavingSection'
import { Layout } from '@components/Layout'

interface HomePageProps {
  messages: IntlMessages
}

export const getStaticProps: GetStaticProps<HomePageProps> = async ({ locale }) => {
  const messages = await getMessages(locale, { useDefault: true })

  return {
    props: { messages },
    revalidate: SECONDS_PER_DAY
  }
}

export default function HomePage() {
  return (
    <Layout>
      <HeroSection className='md:mt-20' />
      <SavingSection />
      <MissionSection />
      <CryptoSection className='mt-[35%] md:mt-0' />
    </Layout>
  )
}
