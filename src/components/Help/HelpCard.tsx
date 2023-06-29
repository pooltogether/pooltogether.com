import { MODAL_KEYS, useIsModalOpen } from '@shared/generic-react-hooks'
import { LINKS } from '@shared/ui'
import classNames from 'classnames'
import { useTranslations } from 'next-intl'
import { SimpleCard, SimpleCardProps } from '@components/SimpleCard'

type HelpCardType = 'about' | 'gettingStarted' | 'faq' | 'guides' | 'discord'

interface HelpCardProps {
  type: HelpCardType
  className?: string
}

export const HelpCard = (props: HelpCardProps) => {
  const { type, className } = props

  const t = useTranslations('Help')

  const { setIsModalOpen: setIsCaptchaModalOpen } = useIsModalOpen(MODAL_KEYS.captcha)

  const helpCardInfo: Record<HelpCardType, Omit<SimpleCardProps, 'className'>> = {
    about: {
      href: LINKS.docs,
      iconSrc: '/icons/infoIcon.svg',
      title: t('aboutCardTitle'),
      description: t('aboutCardDescription')
    },
    gettingStarted: {
      href: LINKS.gettingStarted,
      iconSrc: '/icons/clickIcon.svg',
      title: t('gettingStartedCardTitle'),
      description: t('gettingStartedCardDescription')
    },
    faq: {
      href: LINKS.faq,
      iconSrc: '/icons/questionIcon.svg',
      title: t('faqCardTitle'),
      description: t('faqCardDescription')
    },
    guides: {
      href: LINKS.guides,
      iconSrc: '/icons/bookIcon.svg',
      title: t('guidesCardTitle'),
      description: t('guidesCardDescription')
    },
    discord: {
      onClick: () => setIsCaptchaModalOpen(true),
      iconSrc: '/icons/chatIcon.svg',
      title: t('discordCardTitle'),
      description: t('discordCardDescription')
    }
  }

  const card = helpCardInfo[type]

  return <SimpleCard {...card} className={classNames('max-w-sm md:max-w-none', className)} />
}
