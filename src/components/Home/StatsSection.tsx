import classNames from 'classnames'
import { useTranslations } from 'next-intl'
import { ReactNode } from 'react'
import { useFormattedProtocolStats } from '@hooks/useFormattedProtocolStats'

interface StatsSection {
  className?: string
}

export const StatsSection = (props: StatsSection) => {
  const { className } = props

  const t = useTranslations('Home')

  const { totalPrizes, tvl, uniqueWallets } = useFormattedProtocolStats()

  return (
    <section
      className={classNames(
        'relative w-full max-w-[1440px] grid grid-cols-2 gap-6 items-center justify-between px-4 py-12',
        'md:flex md:mt-20 md:mb-10 md:px-0 md:py-0 xl:max-w-[75%]',
        className
      )}
    >
      <Stat title={t('totalPrizesAwarded')} value={totalPrizes} />
      <Stat title={t('savedWithPt')} value={tvl} />
      <Stat title={t('uniqueWallets')} value={`${uniqueWallets}+`} />
      <Stat title={t('lossesEver')} value='0' />
    </section>
  )
}

interface StatProps {
  title: string
  value: ReactNode
}

export const Stat = (props: StatProps) => {
  const { title, value } = props

  return (
    <div className='flex flex-col grow items-center text-pt-purple-100 md:w-0'>
      <span className='text-lg font-averta font-bold md:text-xl lg:text-2xl xl:text-3xl'>
        <>{value}</>
      </span>
      <span className='text-center text-[13px] md:text-xs lg:text-sm xl:text-base'>{title}</span>
    </div>
  )
}
