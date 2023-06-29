import { Button } from '@shared/ui'
import classNames from 'classnames'
import { useTranslations } from 'next-intl'
import { RICH_TEXT_FORMATTING } from 'src/constants'
import { Section } from '@components/Section'
import { DeveloperCard } from './DeveloperCard'

interface MissionSection {
  className?: string
}

export const MissionSection = (props: MissionSection) => {
  const { className } = props

  return (
    <div className={classNames('relative w-full flex flex-col', className)}>
      <TextBanner className='w-full mt-[20%] mb-[10%] md:absolute md:h-[47.2%] md:mt-0 md:mb-0 md:z-10' />
      <Section
        bg='indexSection3.svg'
        smallBg='mobileIndexSection3.svg'
        animatedBg='indexSection3.svg'
        className='aspect-[375/1494] md:aspect-[1600/1430]'
      >
        <DeveloperBanner className='absolute w-full max-w-[86.8%] h-[25%] mt-[44%] md:max-w-[21%] md:h-[29.2%] md:mt-[55.8%] md:ml-[4%]' />
        <DeveloperCards className='w-full max-w-[60%] h-[50.9%] mt-[174.8%] ml-[20%] md:max-w-[47.5%] md:h-[19%] md:mt-[62.6%] md:ml-[45.5%]' />
      </Section>
    </div>
  )
}

interface TextBannerProps {
  className?: string
}

const TextBanner = (props: TextBannerProps) => {
  const { className } = props

  const t = useTranslations('Home')
  const t_common = useTranslations('Common')

  return (
    <div
      className={classNames(
        'flex flex-col gap-2 items-center justify-center text-center px-4 md:gap-10 md:px-0 xl:gap-20',
        className
      )}
    >
      <span className='text-xs text-pt-purple-100 lg:text-sm'>{t('whyPrizeSavings')}</span>
      <div className='flex flex-col items-center gap-2 mb-8 text-pt-purple-100 md:mb-0'>
        <span className='font-averta font-bold text-[2rem] !leading-tight md:text-2xl md:!leading-normal lg:text-[2rem] xl:text-[2.5rem]'>
          {t.rich('theMission', RICH_TEXT_FORMATTING)}
        </span>
        <span className='text-base md:w-3/4 md:text-sm lg:text-lg xl:text-xl'>
          {t('provenTool')}
        </span>
      </div>
      <Button href='https://medium.com/pooltogether/the-power-of-no-loss-prize-savings-1f006503f64'>
        <span className='text-base px-[.4em] py-[.2em] md:text-sm lg:text-base'>
          {t_common('readMore')}
        </span>
      </Button>
    </div>
  )
}

interface DeveloperBannerProps {
  className?: string
}

const DeveloperBanner = (props: DeveloperBannerProps) => {
  const { className } = props

  const t = useTranslations('Home')

  return (
    <div
      className={classNames(
        'flex flex-col gap-2 justify-center p-4 text-pt-purple-100 md:gap-4 md:p-0',
        className
      )}
    >
      <span className='text-xs xl:text-sm'>{t('forDevelopers')}</span>
      <span className='font-averta font-bold text-[2rem] !leading-tight text-pt-purple-50 md:text-2xl lg:text-[2rem] xl:text-[2.5rem]'>
        {t('buildOnPt')}
      </span>
      <span className='text-base md:text-sm lg:text-base xl:text-xl'>{t('organicUsage')}</span>
    </div>
  )
}

interface DeveloperCardsProps {
  className?: string
}

const DeveloperCards = (props: DeveloperCardsProps) => {
  const { className } = props

  return (
    <div
      className={classNames(
        'flex flex-col gap-12 justify-between md:grid md:grid-cols-3 md:gap-4',
        className
      )}
    >
      <DeveloperCard type='v4Docs' className='grow' />
      <DeveloperCard type='docs' className='grow' />
      <DeveloperCard type='addToken' className='grow' />
    </div>
  )
}
