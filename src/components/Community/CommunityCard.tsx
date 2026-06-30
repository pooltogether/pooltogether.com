import { MODAL_KEYS, useIsModalOpen } from '@shared/generic-react-hooks'
import classNames from 'classnames'
import { useTranslations } from 'next-intl'
import { SimpleCard, SimpleCardProps } from '@components/SimpleCard'

type CommunityCardType = 'chat'

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
    }
  }

  const card = communityCardInfo[type]

  return <SimpleCard {...card} className={classNames('max-w-sm md:max-w-none', className)} />
}
