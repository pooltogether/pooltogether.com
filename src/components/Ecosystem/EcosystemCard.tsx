import { LINKS } from '@shared/ui'
import { useTranslations } from 'next-intl'
import { FancyCard, FancyCardProps } from '@components/FancyCard'

export type EcosystemCardType =
  | 'cabanaApp'
  | 'pooltimeApp'
  | 'ptApp_v4'
  | 'poolExplorer'
  | 'rewards'
  | 'flash'
  | 'depositDelegator_v4'
  | 'tally'
  | 'treasury'
  | 'dune_v4'
  | 'dune_v5'
  | 'cabanaLists'
  | 'cabanalytics'
  | 'cabanaSwaps'
  | 'prizeCalc'
  | 'migrationApp'
  | 'ptlist'
  | 'superform'
  | 'wineth'

interface EcosystemCardProps {
  type: EcosystemCardType
  className?: string
}

export const EcosystemCard = (props: EcosystemCardProps) => {
  const { type, className } = props

  const t = useTranslations('Ecosystem')

  const ecosystemCardInfo: Record<EcosystemCardType, Omit<FancyCardProps, 'className'>> = {
    cabanaApp: {
      href: 'https://app.cabana.fi/',
      iconSrc: '/icons/cabanaIcon.svg',
      title: t('cabanaAppCardTitle'),
      author: 'G9 Software Inc.',
      tags: ['ui', 'v5'],
      description: t('cabanaAppCardDescription')
    },
    pooltimeApp: {
      href: 'https://pooltime.app/',
      iconSrc: '/icons/pooltimeIcon.svg',
      title: t('pooltimeAppCardTitle'),
      author: 'PoolTime Team',
      tags: ['ui', 'v5'],
      description: t('pooltimeAppCardDescription')
    },
    ptApp_v4: {
      href: LINKS.app_v4,
      iconSrc: '/pooltogether-token-logo.svg',
      title: t('ptApp_v4CardTitle'),
      author: 'PoolTogether Inc.',
      tags: ['ui', 'v4'],
      description: t('ptApp_v4CardDescription')
    },
    poolExplorer: {
      href: LINKS.poolExplorer,
      iconSrc: '/icons/poolExplorer.svg',
      title: t('poolExplorerCardTitle'),
      author: 'Underthesea',
      tags: ['analytics', 'v4'],
      description: t('poolExplorerCardDescription')
    },
    rewards: {
      href: 'https://rewards.cabana.fi/',
      iconSrc: '/icons/cabanaIcon.svg',
      title: t('rewards'),
      author: 'G9 Software Inc.',
      tags: ['extensions', 'v5'],
      description: t('rewardsCardDescription')
    },
    flash: {
      href: 'https://flash.cabana.fi/',
      iconSrc: '/icons/cabanaIcon.svg',
      title: t('flash'),
      author: 'G9 Software Inc.',
      tags: ['extensions', 'v5'],
      description: t('flashCardDescription')
    },
    depositDelegator_v4: {
      href: LINKS.depositDelegator,
      iconSrc: '/icons/extension.svg',
      title: t('depositDelegatorCardTitle'),
      author: 'PoolTogether Inc.',
      tags: ['extensions', 'v4'],
      description: t('depositDelegatorCardDescription')
    },
    tally: {
      href: LINKS.tally,
      iconSrc: '/icons/tally.svg',
      title: t('tallyCardTitle'),
      author: 'Tally',
      tags: ['governance'],
      description: t('tallyCardDescription')
    },
    treasury: {
      href: LINKS.treasury,
      iconSrc: '/pooltogether-token-logo.svg',
      title: t('treasuryCardTitle'),
      author: 'PoolTogether Inc.',
      tags: ['governance'],
      description: t('treasuryCardDescription')
    },
    dune_v4: {
      href: LINKS.dune_v4,
      iconSrc: '/icons/dune.svg',
      title: t('dune_v4CardTitle'),
      author: 'Sarfang',
      tags: ['analytics', 'v4'],
      description: t('dune_v4CardDescription')
    },
    dune_v5: {
      href: 'https://dune.com/pooltogether/pooltogether-v5',
      iconSrc: '/icons/dune.svg',
      title: t('dune_v5CardTitle'),
      author: 'Bronder',
      tags: ['analytics', 'v5'],
      description: t('dune_v5CardDescription')
    },
    cabanaLists: {
      href: 'https://lists.cabana.fi/',
      iconSrc: '/icons/cabanaIcon.svg',
      title: t('cabanaListsCardTitle'),
      author: 'G9 Software Inc.',
      tags: ['extensions', 'v5'],
      description: t('cabanaListsCardDescription')
    },
    cabanalytics: {
      href: 'https://analytics.cabana.fi/',
      iconSrc: '/icons/cabanaIcon.svg',
      title: t('cabanalyticsCardTitle'),
      author: 'G9 Software Inc.',
      tags: ['analytics', 'v5'],
      description: t('cabanalyticsCardDescription')
    },
    cabanaSwaps: {
      href: 'https://swap.cabana.fi/',
      iconSrc: '/icons/cabanaIcon.svg',
      title: t('cabanaSwapsCardTitle'),
      author: 'G9 Software Inc.',
      tags: ['ui', 'extensions', 'v5'],
      description: t('cabanaSwapsCardDescription')
    },
    prizeCalc: {
      href: LINKS.prizeCalc,
      iconSrc: '/icons/poolySunglasses.png',
      title: t('prizeCalcCardTitle'),
      author: 'Ncookie',
      tags: ['analytics'],
      description: t('prizeCalcCardDescription')
    },
    migrationApp: {
      href: 'https://migrate.cabana.fi/',
      iconSrc: '/icons/cabanaIcon.svg',
      title: t('migrationAppCardTitle'),
      author: 'G9 Software Inc.',
      tags: ['ui', 'v3', 'v4'],
      description: t('migrationAppCardDescription')
    },
    ptlist: {
      href: 'https://ptlist.xyz/',
      iconSrc: '/icons/ptlistIcon.svg',
      title: t('ptlistCardTitle'),
      author: 'Ncookie & Trmid',
      tags: ['extensions', 'v5'],
      description: t('ptlistCardDescription')
    },
    superform: {
      href: 'https://app.superform.xyz/protocol/pooltogether',
      iconSrc: '/icons/superformIcon.png',
      title: t('superformCardTitle'),
      author: 'Superform',
      tags: ['ui', 'v5'],
      description: t('superformCardDescription')
    },
    wineth: {
      href: 'https://wineth.org',
      iconSrc: '/icons/wineth.svg',
      title: t('winethCardTitle'),
      author: 'WinETH Team',
      tags: ['ui', 'v5'],
      description: t('winethCardDescription')
    }
  }

  const card = ecosystemCardInfo[type]

  return <FancyCard {...card} className={className} />
}
