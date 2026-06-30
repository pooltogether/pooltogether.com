import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import classNames from 'classnames'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export type InterfaceCardType =
  | 'cabanaLite'
  | 'cabanaWorld'
  | 'cabanaMigrations'
  | 'pooltime'
  | 'shinjo'
  | 'poolside'
  | 'wineth'
  | 'yearn'

interface InterfaceCardProps {
  type: InterfaceCardType
  className?: string
}

export const InterfaceCard = (props: InterfaceCardProps) => {
  const { type, className } = props

  const t = useTranslations('Ecosystem')

  const interfaceCardInfo: Record<
    InterfaceCardType,
    { href: string; iconSrc: string; title: string }
  > = {
    cabanaLite: {
      href: 'https://app.cabana.fi/',
      iconSrc: '/icons/cabanaIcon.svg',
      title: t('cabanaLiteCardTitle')
    },
    cabanaWorld: {
      href: 'https://world.org/ecosystem/app_85f4c411dc00aadabc96cce7b3a77219',
      iconSrc: '/icons/cabanaIcon.svg',
      title: t('cabanaWorldCardTitle')
    },
    cabanaMigrations: {
      href: 'https://migrate.cabana.fi/',
      iconSrc: '/icons/cabanaIcon.svg',
      title: t('cabanaMigrationsCardTitle')
    },
    pooltime: {
      href: 'https://pooly.eth.limo/',
      iconSrc: '/icons/pooltimeIcon.svg',
      title: t('pooltimeCardTitle')
    },
    shinjo: {
      href: 'https://shinjo.app/',
      iconSrc: '/icons/shinjoIcon.svg',
      title: t('shinjoCardTitle')
    },
    poolside: {
      href: 'https://poolsidewin.eth.limo/',
      iconSrc: '/icons/poolsideIcon.svg',
      title: t('poolsideCardTitle')
    },
    wineth: {
      href: 'https://wineth.org',
      iconSrc: '/icons/wineth.svg',
      title: t('winethCardTitle')
    },
    yearn: {
      href: 'https://pooltogether.yearn.space/',
      iconSrc: '/icons/yearn.svg',
      title: t('yearnCardTitle')
    }
  }

  const card = interfaceCardInfo[type]

  return (
    <a
      href={card.href}
      target='_blank'
      className={classNames(
        'w-full flex gap-3 p-8 bg-[#8247E5]/30 rounded-2xl group',
        'outline outline-2 -outline-offset-2 outline-transparent hover:outline-pt-purple-100/20 hover:shadow-lg',
        'md:gap-4',
        'bg-[radial-gradient(farthest-corner_at_0%_5%,_#440BA0B3_0%,_#5820CFB3_100%),_radial-gradient(farthest-corner_at_0%_0%,_#634E90_50%,_#36147D_100%)]',
        className
      )}
    >
      <div className='flex gap-2 items-center'>
        <div className='flex h-12 w-12 items-center justify-center'>
          <Image
            src={card.iconSrc}
            width={48}
            height={48}
            alt={card.title}
            className='h-full w-auto max-w-full'
          />
        </div>
        <span className='text-base text-pt-purple-100 md:text-xl'>{card.title}</span>
      </div>
      <ArrowTopRightOnSquareIcon className='w-8 h-auto ml-auto text-pt-purple-300 group-hover:text-pt-purple-400' />
    </a>
  )
}
