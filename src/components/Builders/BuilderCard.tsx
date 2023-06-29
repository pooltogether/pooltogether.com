import { LINKS } from '@shared/ui'
import { useTranslations } from 'next-intl'
import { FancyCard, FancyCardProps } from '@components/FancyCard'

export type BuilderCardType =
  | 'clientJs_v4'
  | 'clientJs'
  | 'reactHooks'
  | 'prizeTierController'
  | 'brandKit'

interface BuilderCardProps {
  type: BuilderCardType
  className?: string
}

export const BuilderCard = (props: BuilderCardProps) => {
  const { type, className } = props

  const t = useTranslations('Builders')

  const builderCardInfo: Record<BuilderCardType, Omit<FancyCardProps, 'className'>> = {
    clientJs_v4: {
      href: LINKS.clientJs_v4,
      iconSrc: '/icons/devToolIcon.svg',
      title: t('clientJs_v4CardTitle'),
      author: 'PoolTogether Inc.',
      tags: ['dev', 'v4'],
      description: t('clientJs_v4CardDescription')
    },
    clientJs: {
      href: LINKS.clientJs,
      iconSrc: '/icons/devToolIcon.svg',
      title: t('clientJsCardTitle'),
      author: 'PoolTogether Inc.',
      tags: ['dev', 'v5'],
      description: t('clientJsCardDescription')
    },
    reactHooks: {
      href: LINKS.reactHooks,
      iconSrc: '/icons/devToolIcon.svg',
      title: t('reactHooksCardTitle'),
      author: 'PoolTogether Inc.',
      tags: ['dev', 'v5'],
      description: t('reactHooksCardDescription')
    },
    prizeTierController: {
      href: LINKS.prizeTierController,
      iconSrc: '/icons/devToolIcon.svg',
      title: t('prizeTierControllerCardTitle'),
      author: 'PoolTogether Inc.',
      tags: ['dev', 'v4'],
      description: t('prizeTierControllerCardDescription')
    },
    brandKit: {
      href: LINKS.brandKit,
      iconSrc: '/icons/devToolIcon.svg',
      title: t('brandKitCardTitle'),
      author: 'PoolTogether Inc.',
      tags: ['design'],
      description: t('brandKitCardDescription')
    }
  }

  const card = builderCardInfo[type]

  return <FancyCard {...card} className={className} />
}
