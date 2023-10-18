import classNames from 'classnames'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

interface InterfacesHeaderProps {
  className?: string
}

export const InterfacesHeader = (props: InterfacesHeaderProps) => {
  const { className } = props

  const t = useTranslations('Interfaces')

  return (
    <div className={classNames('flex flex-col gap-4 items-center text-center', className)}>
      <Image
        src='/pooltogether-logo.svg'
        width={716}
        height={284}
        alt='PoolTogether'
        className='h-14 w-auto'
      />
      <span className='mt-4 font-averta font-bold text-4xl'>{t('interfacesTitle')}</span>
      <div className='max-w-xl flex flex-col items-center'>
        <span>{t('manyWays')}</span>
        <span>
          {t('decentralization')}{' '}
          {t.rich('learnMore', {
            link: (chunks) => (
              <Link href='/ecosystem' className='text-pt-teal'>
                {chunks}
              </Link>
            )
          })}
        </span>
      </div>
    </div>
  )
}
