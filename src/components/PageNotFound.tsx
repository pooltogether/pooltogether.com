import { Button } from '@shared/ui'
import classNames from 'classnames'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

interface PageNotFoundProps {
  className?: string
}

export const PageNotFound = (props: PageNotFoundProps) => {
  const { className } = props

  const t = useTranslations('Error')

  return (
    <div
      className={classNames(
        'w-full max-w-[1440px] min-h-[75vh] flex flex-col gap-4 items-center justify-center p-4 text-center',
        className
      )}
    >
      <span className='text-3xl'>🤔 Hmmm...</span>
      <h2 className='mb-8 font-bold text-3xl'>{t('404')}</h2>
      <Link href='/' passHref={true}>
        <Button>
          <span className='text-xl'>{t('return')}</span>
        </Button>
      </Link>
    </div>
  )
}
