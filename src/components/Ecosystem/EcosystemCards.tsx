import Image from 'next/image'
import { EcosystemCard, EcosystemCardType } from './EcosystemCard'

interface EcosystemCardsProps {
  iconSrc: `${string}.svg`
  title: string
  cards: EcosystemCardType[]
}

export const EcosystemCards = (props: EcosystemCardsProps) => {
  const { iconSrc, title, cards } = props

  return (
    <div className='flex flex-col gap-4 items-center'>
      <div className='flex gap-3 items-center text-pt-purple-50'>
        <Image
          src={iconSrc}
          width={32}
          height={32}
          alt={title}
          className='h-6 w-auto text-pt-purple-300 md:h-8'
        />
        <span className='text-sm md:text-xl'>{title}</span>
      </div>
      <div className='w-full flex flex-wrap gap-4 justify-center'>
        {cards.map((cardType) => {
          return (
            <EcosystemCard
              key={`${cardType}-card`}
              type={cardType}
              className='w-[45%] min-w-[21rem] max-w-xl md:w-[30%] shrink'
            />
          )
        })}
      </div>
    </div>
  )
}
