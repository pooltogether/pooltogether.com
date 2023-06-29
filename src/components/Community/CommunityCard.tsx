import { MODAL_KEYS, useIsModalOpen } from '@shared/generic-react-hooks'
import { LINKS } from '@shared/ui'
import classNames from 'classnames'
import { useTranslations } from 'next-intl'
import { SimpleCard, SimpleCardProps } from '@components/SimpleCard'

type CommunityCardType = 'chat' | 'forums' | 'voting' | 'grants' | 'calendar'

interface CommunityCardProps {
  type: CommunityCardType
  className?: string
}

export const CommunityCard = (props: CommunityCardProps) => {
  const { type, className } = props

  const t = useTranslations('Community')

  const { setIsModalOpen: setIsCaptchaModalOpen } = useIsModalOpen(MODAL_KEYS.captcha)

  const communityCardInfo: Record<CommunityCardType, Omit<SimpleCardProps, 'className'>> = {
    chat: {
      onClick: () => setIsCaptchaModalOpen(true),
      iconSrc: '/icons/chatIcon.svg',
      title: t('chatCardTitle'),
      description: t('chatCardDescription')
    },
    forums: {
      href: LINKS.governance,
      iconSrc: '/icons/governanceIcon.svg',
      title: t('forumsCardTitle'),
      description: t('forumsCardDescription')
    },
    voting: {
      href: LINKS.tally,
      iconSrc: '/icons/votingIcon.svg',
      title: t('votingCardTitle'),
      description: t('votingCardDescription')
    },
    grants: {
      href: LINKS.grants,
      iconSrc: '/icons/grantsIcon.svg',
      title: t('grantsCardTitle'),
      description: t('grantsCardDescription')
    },
    calendar: {
      href: LINKS.communityCalendar,
      iconSrc: '/icons/calendarIcon.svg',
      title: t('calendarCardTitle'),
      description: t('calendarCardDescription')
    }
  }

  const card = communityCardInfo[type]

  return <SimpleCard {...card} className={classNames('max-w-sm md:max-w-none', className)} />
}
