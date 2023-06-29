import { LINKS } from '@shared/ui'
import classNames from 'classnames'
import Image from 'next/image'

const socialItemInfo = {
  lens: { href: LINKS.lens, name: 'Lens Protocol', iconSrc: '/icons/lensIcon.svg' },
  mirror: { href: LINKS.mirror, name: 'Mirror', iconSrc: '/icons/mirrorIcon.svg' },
  twitter: { href: LINKS.twitter, name: 'Twitter', iconSrc: '/icons/twitterIcon.svg' },
  medium: { href: LINKS.medium, name: 'Medium', iconSrc: '/icons/mediumIcon.svg' },
  notion: { href: LINKS.notion, name: 'Notion', iconSrc: '/icons/notionIcon.svg' }
} satisfies { [id: string]: { href: string; name: string; iconSrc: `${string}.svg` } }

interface SocialItemProps {
  type: keyof typeof socialItemInfo
  className?: string
}

export const SocialItem = (props: SocialItemProps) => {
  const { type, className } = props

  const social = socialItemInfo[type]

  return (
    <a
      href={social.href}
      target='_blank'
      className={classNames('flex flex-col gap-3 items-center md:gap-6', className)}
    >
      <span className='text-lg text-pt-purple-100 md:text-base xl:text-lg'>{social.name}</span>
      <Image
        src={social.iconSrc}
        width={48}
        height={48}
        alt={`${social.name} Icon`}
        className='h-full max-h-6 w-auto md:max-h-8 xl:max-h-12'
      />
    </a>
  )
}
