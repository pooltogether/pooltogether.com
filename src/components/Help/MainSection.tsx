import classNames from 'classnames'
import { useTranslations } from 'next-intl'
import { RICH_TEXT_FORMATTING } from 'src/constants'
import { Section } from '@components/Section'
import { SimpleTextBanner } from '@components/SimpleTextBanner'
import { HelpCard } from './HelpCard'

interface MainSection {
  className?: string
}

export const MainSection = (props: MainSection) => {
  const { className } = props

  const t = useTranslations('Help')

  return (
    <Section
      bg='helpSection1.svg'
      smallBg='mobileHelpSection1.svg'
      className={classNames('aspect-[375/667] md:aspect-[1600/1150] md:overflow-hidden', className)}
    >
      <SimpleTextBanner
        title={t.rich('getHelp', RICH_TEXT_FORMATTING)}
        description={
          <>
            <span className='hidden md:block'>
              {t.rich('prizeLinkedSavings', {
                link: (chunks) => (
                  <a
                    href='https://medium.com/pooltogether/the-power-of-no-loss-prize-savings-1f006503f64'
                    target='_blank'
                    className='text-pt-teal'
                  >
                    {chunks}
                  </a>
                )
              })}
            </span>
            <span>{t('learnAbout')}</span>
          </>
        }
        className='absolute w-full mt-[28%] md:h-[27%] md:justify-end md:mt-0'
        titleClassName='max-w-[1440px]'
        descriptionClassName='max-w-[1440px] flex flex-col'
      />
      <HelpCards className='w-full mt-[75%] mb-8 mx-auto md:max-w-[min(82%,_1440px)] md:h-[53%] md:mt-[23.9%] md:mb-0' />
    </Section>
  )
}

interface HelpCardsProps {
  className?: string
}

const HelpCards = (props: HelpCardsProps) => {
  const { className } = props

  return (
    <div
      className={classNames(
        'grid grid-cols-1 auto-rows-fr gap-3 px-4 md:grid-cols-3 md:gap-8 md:px-0',
        className
      )}
    >
      <HelpCard type='about' className='mx-auto' />
      <HelpCard type='gettingStarted' className='mx-auto' />
      <HelpCard type='faq' className='mx-auto' />
      <HelpCard type='guides' className='mx-auto' />
      <HelpCard type='discord' className='mx-auto' />
    </div>
  )
}
