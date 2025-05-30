import classNames from 'classnames'
import { useTranslations } from 'next-intl'
import { RICH_TEXT_FORMATTING } from 'src/constants'
import { Section } from '@components/Section'
import { SimpleTextBanner } from '@components/SimpleTextBanner'
import { EcosystemCards } from './EcosystemCards'

interface MainSection {
  className?: string
}

export const MainSection = (props: MainSection) => {
  const { className } = props

  const t = useTranslations('Ecosystem')

  return (
    <Section
      bg='ecosystemSection1.svg'
      smallBg='mobileEcosystemSection1.svg'
      className={classNames('aspect-[376/667] md:aspect-[1600/1950]', className)}
    >
      <SimpleTextBanner
        title={t.rich('ptEcosystem', RICH_TEXT_FORMATTING)}
        description={t('checkOut')}
        className='absolute w-full mt-[28%] md:h-[7.8%] md:justify-end md:mt-0 lg:h-[9.6%] xl:h-[11.4%] 2xl:h-[14%]'
        titleClassName='max-w-[1440px]'
        descriptionClassName='max-w-[1440px] px-[5%] sm:px-0'
      />
      <CardRows className='w-full max-w-[1440px] mt-[58%] mb-8 mx-auto md:mt-[22%]' />
    </Section>
  )
}

interface CardRowsProps {
  className?: string
}

const CardRows = (props: CardRowsProps) => {
  const { className } = props

  const t = useTranslations('Ecosystem')

  return (
    <div className={classNames('flex flex-col gap-6 md:gap-16', className)}>
      <EcosystemCards
        iconSrc='/icons/addIcon.svg'
        title={t('interfacesSectionTitle')}
        cards={['cabanaApp', 'pooltimeApp', 'superform', 'wineth', 'yearn', 'migrationApp']}
      />
      <EcosystemCards
        iconSrc='/icons/puzzleIcon.svg'
        title={t('extensionsSectionTitle')}
        cards={['cabanaLists', 'rewards', 'ptlist']}
      />
      <EcosystemCards
        iconSrc='/icons/presentationIcon.svg'
        title={t('toolsSectionTitle')}
        cards={['treasury', 'tally', 'cabanalytics']}
      />
    </div>
  )
}
