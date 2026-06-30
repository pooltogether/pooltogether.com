import { useTranslations } from 'next-intl'
import { FancyCard, FancyCardProps } from '@components/FancyCard'

export type EcosystemCardType =
  | 'cabanaLite'
  | 'cabanaWorld'
  | 'cabanaMigrations'
  | 'pooltime'
  | 'shinjo'
  | 'poolside'
  | 'wineth'
  | 'yearn'

interface EcosystemCardProps {
  type: EcosystemCardType
  className?: string
}

export const EcosystemCard = (props: EcosystemCardProps) => {
  const { type, className } = props

  const t = useTranslations('Ecosystem')

  const ecosystemCardInfo: Record<EcosystemCardType, Omit<FancyCardProps, 'className'>> = {
    cabanaLite: {
      href: 'https://app.cabana.fi/',
      iconSrc: '/icons/cabanaIcon.svg',
      title: t('cabanaLiteCardTitle'),
      author: 'G9 Software Inc.',
      tags: ['ui', 'v5'],
      description: t('cabanaLiteCardDescription')
    },
    cabanaWorld: {
      href: 'https://world.org/ecosystem/app_85f4c411dc00aadabc96cce7b3a77219',
      iconSrc: '/icons/cabanaIcon.svg',
      title: t('cabanaWorldCardTitle'),
      author: 'G9 Software Inc.',
      tags: ['ui', 'v5'],
      description: t('cabanaWorldCardDescription')
    },
    cabanaMigrations: {
      href: 'https://migrate.cabana.fi/',
      iconSrc: '/icons/cabanaIcon.svg',
      title: t('cabanaMigrationsCardTitle'),
      author: 'G9 Software Inc.',
      tags: ['ui', 'v3', 'v4'],
      description: t('cabanaMigrationsCardDescription')
    },
    pooltime: {
      href: 'https://pooly.eth.limo/',
      iconSrc: '/icons/pooltimeIcon.svg',
      title: t('pooltimeCardTitle'),
      author: 'PoolTime Team',
      tags: ['ui', 'v5'],
      description: t('pooltimeCardDescription')
    },
    shinjo: {
      href: 'https://shinjo.app/',
      iconSrc: '/icons/shinjoIcon.svg',
      title: t('shinjoCardTitle'),
      author: 'Shinjo Team',
      tags: ['ui', 'v5'],
      description: t('shinjoCardDescription')
    },
    poolside: {
      href: 'https://poolsidewin.eth.limo/',
      iconSrc: '/icons/poolsideIcon.svg',
      title: t('poolsideCardTitle'),
      author: 'DvD',
      tags: ['ui', 'v5'],
      description: t('poolsideCardDescription')
    },
    wineth: {
      href: 'https://wineth.org',
      iconSrc: '/icons/wineth.svg',
      title: t('winethCardTitle'),
      author: 'WinETH Team',
      tags: ['ui', 'v5'],
      description: t('winethCardDescription')
    },
    yearn: {
      href: 'https://pooltogether.yearn.space/',
      iconSrc: '/icons/yearn.svg',
      title: t('yearnCardTitle'),
      author: 'Yearn Team',
      tags: ['ui', 'v5'],
      description: t('yearnCardDescription')
    }
  }

  const card = ecosystemCardInfo[type]

  return <FancyCard {...card} className={className} />
}
