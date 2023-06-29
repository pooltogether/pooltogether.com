import classNames from 'classnames'
import { useTranslations } from 'next-intl'
import { RICH_TEXT_FORMATTING } from 'src/constants'
import { Section } from '@components/Section'
import { SimpleTextBanner } from '@components/SimpleTextBanner'
import { SavingCard } from './SavingCard'

interface SavingSection {
  className?: string
}

export const SavingSection = (props: SavingSection) => {
  const { className } = props

  const t = useTranslations('Home')

  return (
    <Section
      bg='indexSection2.svg'
      smallBg='mobileIndexSection2.svg'
      animatedBg='indexSection2.svg'
      className={classNames('aspect-[375/1408] md:aspect-[1600/1059]', className)}
    >
      <SimpleTextBanner
        title={t.rich('savingAndWinning', RICH_TEXT_FORMATTING)}
        className='w-full h-[24.9%] px-10 md:h-[24.6%] md:mt-[2%] md:px-0'
        titleClassName='!my-auto text-[2rem]'
      />
      <SavingCards className='w-full h-[69.5%] md:max-w-[77%] md:h-[59%] md:mt-0 md:mx-auto' />
    </Section>
  )
}

interface SavingCardsProps {
  className?: string
}

const SavingCards = (props: SavingCardsProps) => {
  const { className } = props

  return (
    <div
      className={classNames(
        'flex flex-col items-center justify-evenly md:flex-row md:justify-between',
        className
      )}
    >
      <SavingCard type='deposit' className='max-w-[60%] md:grow md:max-w-[30%]' />
      <SavingCard type='winPrizes' className='max-w-[60%] md:grow md:max-w-[30%]' />
      <SavingCard type='noLoss' className='max-w-[60%] md:grow md:max-w-[30%]' />
    </div>
  )
}
