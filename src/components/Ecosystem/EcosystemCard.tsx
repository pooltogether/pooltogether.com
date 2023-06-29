import { LINKS } from '@shared/ui'
import { useTranslations } from 'next-intl'
import { FancyCard, FancyCardProps } from '@components/FancyCard'

export type EcosystemCardType =
  | 'ptApp_v4'
  | 'poolExplorer'
  | 'depositDelegator'
  | 'tally'
  | 'treasury'
  | 'dune_v4'
  | 'prizeCalc'

interface EcosystemCardProps {
  type: EcosystemCardType
  className?: string
}

export const EcosystemCard = (props: EcosystemCardProps) => {
  const { type, className } = props

  const t = useTranslations('Ecosystem')

  const ecosystemCardInfo: Record<EcosystemCardType, Omit<FancyCardProps, 'className'>> = {
    ptApp_v4: {
      href: LINKS.app_v4,
      iconSrc: '/pooltogether-token-logo.svg',
      title: t('ptApp_v4CardTitle'),
      author: 'PoolTogether Inc.',
      tags: ['ui'],
      description: t('ptApp_v4CardDescription')
    },
    poolExplorer: {
      href: LINKS.poolExplorer,
      iconSrc: '/icons/poolExplorer.svg',
      title: t('poolExplorerCardTitle'),
      author: 'Underthesea',
      tags: ['ui', 'extensions'],
      description: t('poolExplorerCardDescription')
    },
    depositDelegator: {
      href: LINKS.depositDelegator,
      iconSrc: '/icons/extension.svg',
      title: t('depositDelegatorCardTitle'),
      author: 'PoolTogether Inc.',
      tags: ['extensions'],
      description: t('depositDelegatorCardDescription')
    },
    tally: {
      href: LINKS.tally,
      iconSrc: '/icons/tally.svg',
      title: t('tallyCardTitle'),
      author: 'Tally',
      tags: ['extensions', 'governance'],
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
      tags: ['analytics'],
      description: t('dune_v4CardDescription')
    },
    prizeCalc: {
      href: LINKS.prizeCalc,
      iconSrc: '/icons/poolySunglasses.png',
      title: t('prizeCalcCardTitle'),
      author: 'Ncookie',
      tags: ['analytics'],
      description: t('prizeCalcCardDescription')
    }
  }

  const card = ecosystemCardInfo[type]

  return <FancyCard {...card} className={className} />
}
