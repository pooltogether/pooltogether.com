import classNames from 'classnames'
import { useTranslations } from 'next-intl'
import { RICH_TEXT_FORMATTING } from 'src/constants'
import { Section } from '@components/Section'
import { SimpleTextBanner } from '@components/SimpleTextBanner'
import { CommunityCard } from './CommunityCard'
import { SocialItem } from './SocialItem'

interface MainSection {
  className?: string
}

export const MainSection = (props: MainSection) => {
  const { className } = props

  const t = useTranslations('Community')

  return (
    <Section
      bg='communitySection1.svg'
      smallBg='mobileCommunitySection1.svg'
      className={classNames('aspect-[375/667] md:aspect-[1600/1560]', className)}
    >
      <SimpleTextBanner
        title={t.rich('dipInThePool', RICH_TEXT_FORMATTING)}
        description={t('activeCommunity')}
        className='absolute w-full mt-[28%] md:h-[18.4%] md:justify-end md:mt-0'
        titleClassName='max-w-[1440px]'
        descriptionClassName='max-w-[1440px] px-[5%] sm:px-0'
      />
      <CommunityCards className='w-full mt-[84%] mx-auto md:max-w-[min(82%,_1440px)] md:h-[40%] md:mt-[30.4%]' />
      <Socials className='w-full my-32 md:max-w-[min(60%,_1440px)] md:h-[25%] md:mb-0 md:mt-[3.8%] md:ml-[20%]' />
    </Section>
  )
}

interface CommunityCardsProps {
  className?: string
}

const CommunityCards = (props: CommunityCardsProps) => {
  const { className } = props

  return (
    <div
      className={classNames(
        'grid grid-cols-1 auto-rows-fr gap-3 px-4 md:grid-cols-3 md:gap-8 md:px-0',
        className
      )}
    >
      <CommunityCard type='chat' className='mx-auto' />
      <CommunityCard type='forums' className='mx-auto' />
      <CommunityCard type='voting' className='mx-auto' />
      <CommunityCard type='grants' className='mx-auto' />
      <CommunityCard type='calendar' className='mx-auto' />
    </div>
  )
}

interface SocialsProps {
  className?: string
}

const Socials = (props: SocialsProps) => {
  const { className } = props

  const t = useTranslations('Community')

  return (
    <div
      className={classNames(
        'flex flex-col gap-6 items-center justify-center py-12 bg-pt-bg-purple-darker md:py-0 md:bg-transparent xl:gap-12',
        className
      )}
    >
      <span className='text-sm text-pt-purple-400 md:text-base xl:text-lg'>
        {t('otherPlatforms')}
      </span>
      <div className='w-full flex flex-wrap gap-6 justify-center px-16 md:justify-between md:pb-4 md:px-0'>
        <SocialItem type='lens' />
        <SocialItem type='mirror' />
        <SocialItem type='twitter' />
        <SocialItem type='medium' />
        <SocialItem type='notion' />
      </div>
    </div>
  )
}
