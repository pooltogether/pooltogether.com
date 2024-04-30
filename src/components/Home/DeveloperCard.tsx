import { Button, ButtonProps, LINKS } from '@shared/ui'
import classNames from 'classnames'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

type DeveloperCardType = 'devDocs' | 'addVault'

interface DeveloperCardProps {
  type: DeveloperCardType
  className?: string
}

export const DeveloperCard = (props: DeveloperCardProps) => {
  const { type, className } = props

  const t = useTranslations('Home')

  const developerCardInfo: Record<
    DeveloperCardType,
    { src: `/${string}.svg`; buttonProps: ButtonProps }
  > = {
    devDocs: {
      src: '/graphics/YieldGraphic.svg',
      buttonProps: {
        href: LINKS.devDocs,
        target: '_blank',
        children: t('devDocs')
      }
    },
    addVault: {
      src: '/graphics/AddVaultGraphic.svg',
      buttonProps: {
        href: 'https://factory.cabana.fi/',
        target: '_blank',
        children: t('addYourVault')
      }
    }
  }

  const card = developerCardInfo[type]
  const { children: buttonChildren, ...restButtonProps } = card.buttonProps

  return (
    <div
      className={classNames(
        'relative w-full h-full flex flex-col items-center gap-6 bg-pt-bg-purple-darker rounded-3xl',
        'p-6 md:p-3 xl:p-6',
        className
      )}
    >
      <Image
        src='/icons/codeIcon.svg'
        width={333}
        height={259}
        alt='Code'
        className='absolute top-4 left-4 w-5 h-auto text-pt-purple-400 4xl:w-6'
      />
      <Image src={card.src} width={100} height={80} alt={type} className='w-3/4 grow mt-2' />
      <Button fullSized={true} {...restButtonProps} pill={true} className='overflow-hidden'>
        <span className='text-sm whitespace-nowrap md:text-xs xl:text-sm'>{buttonChildren}</span>
      </Button>
    </div>
  )
}
