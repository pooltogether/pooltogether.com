import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import classNames from 'classnames'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export type FancyCardTag =
  | 'ui'
  | 'extensions'
  | 'analytics'
  | 'governance'
  | 'dev'
  | 'design'
  | 'v4'
  | 'v5'

export interface FancyCardProps {
  href: string
  iconSrc: string
  title: string
  author: string
  tags: FancyCardTag[]
  description: string
  className?: string
}

export const FancyCard = (props: FancyCardProps) => {
  const { href, iconSrc, title, author, tags, description, className } = props

  const t_common = useTranslations('Common')
  const t_tags = useTranslations('Tags')

  const cleanupRegex = /^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/?\n]+)/i
  const cleanURI = cleanupRegex.exec(href)?.[1]

  return (
    <a
      href={href}
      target='_blank'
      className={classNames(
        'flex flex-col gap-3 p-6 bg-[#8247E5]/30 rounded-2xl',
        'outline outline-2 -outline-offset-2 outline-transparent hover:outline-pt-purple-100/20 hover:shadow-lg',
        'md:gap-4',
        'bg-[radial-gradient(farthest-corner_at_0%_5%,_#440BA0B3_0%,_#5820CFB3_100%),_radial-gradient(farthest-corner_at_0%_0%,_#634E90_50%,_#36147D_100%)]',
        className
      )}
    >
      <div className='flex gap-2 items-center md:flex-col md:gap-0 md:items-start'>
        <Image src={iconSrc} width={48} height={48} alt={title} className='h-12 w-auto' />
        <div className='flex flex-col'>
          <span className='text-base text-pt-purple-50 md:text-xl'>{title}</span>
          <span className='text-xs text-pt-purple-300'>{t_common('author', { author })}</span>
        </div>
      </div>
      <div className='flex gap-2 items-center'>
        {tags.map((tag, i) => (
          <span
            key={`${title.toLowerCase().replace(' ', '-')}-card-tag-${i}`}
            className='px-3 py-1 text-xs font-medium bg-pt-transparent text-pt-purple-100 rounded-lg'
          >
            {t_tags(tag)}
          </span>
        ))}
      </div>
      <span className='min-h-[32px] text-xs text-pt-purple-100 line-clamp-2 md:min-h-[48px] md:text-base'>
        {description}
      </span>
      <div className='flex gap-2 items-center ml-auto text-pt-purple-300 whitespace-nowrap'>
        <span className='text-base'>{t_common('openURL', { url: cleanURI })}</span>
        <ArrowTopRightOnSquareIcon className='w-4 h-auto' />
      </div>
    </a>
  )
}
