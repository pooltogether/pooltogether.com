import classNames from 'classnames'
import { useTranslations } from 'next-intl'

type SavingCardType = 'deposit' | 'winPrizes' | 'noLoss'

interface SavingCardProps {
  type: SavingCardType
  className?: string
}

export const SavingCard = (props: SavingCardProps) => {
  const { type, className } = props

  const t = useTranslations('Home')

  const savingCardInfo: Record<
    SavingCardType,
    { src: `/${string}.svg`; title: string; description: string }
  > = {
    deposit: {
      src: '/graphics/DepositGraphic.svg',
      title: t('depositCardTitle'),
      description: t('depositCardDescription')
    },
    winPrizes: {
      src: '/graphics/WinPrizesGraphic.svg',
      title: t('winPrizesCardTitle'),
      description: t('winPrizesCardDescription')
    },
    noLoss: {
      src: '/graphics/NoLossGraphic.svg',
      title: t('noLossCardTitle'),
      description: t('noLossCardDescription')
    }
  }

  const card = savingCardInfo[type]

  return (
    <div className={classNames('flex flex-col gap-6 md:gap-4 lg:gap-6', className)}>
      <div className='w-full bg-pt-bg-purple-darker rounded-2xl md:rounded-3xl'>
        <object type='image/svg+xml' data={card.src} className='w-full' />
      </div>
      <div className='flex flex-col gap-1 text-center md:gap-2'>
        <span className='font-averta font-bold text-2xl text-pt-purple-100 md:text-lg lg:text-2xl xl:text-[2rem]'>
          {card.title}
        </span>
        <span className='text-base text-gray-100 whitespace-nowrap md:text-xs lg:text-sm xl:text-base'>
          {card.description}
        </span>
      </div>
    </div>
  )
}
