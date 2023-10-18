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
      <Link href='/'>
        <Image
          src='/pooltogether-logo.svg'
          width={716}
          height={284}
          alt='PoolTogether'
          className='h-14 w-auto'
        />
      </Link>
      <span className='mt-4 font-averta font-bold text-4xl'>{t('interfacesTitle')}</span>
      <span className='max-w-2xl'>
        {t('manyWays')} {t('decentralization')}
      </span>
    </div>
  )
}
