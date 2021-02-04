import React from 'react'
import classnames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useTranslation } from 'lib/../i18n'

export const Nav = (props) => {
  const { t } = useTranslation()

  const router = useRouter()

  const developersPage = router.pathname.match('developers')
  const communityPage = router.pathname.match('community')

  const navLinkClasses = 'capitalize text-center leading-none rounded-full hover:bg-accent-grey-1 flex justify-start items-center text-lg py-3 px-4 lg:px-8 trans tracking-wider outline-none focus:outline-none active:outline-none font-bold'

  return <>
    <nav
      className='justify-end items-center hidden sm:flex w-2/3'
    >
      <Link
        href='/developers'
        as='/developers'
        shallow
      >
        <a
          className={classnames(
            'mr-3',
            navLinkClasses,
            {
              'text-accent-2 hover:text-highlight-2': !developersPage,
              'text-highlight-2 hover:text-highlight-2 bg-accent-grey-1': developersPage
            }
          )}
        >
          {t('developers')}
        </a>
      </Link>

      <Link
        href='/community'
        as='/community'
        shallow
      >
        <a
          className={classnames(
            navLinkClasses,
            'mr-8',
            {
              'text-accent-2 hover:text-highlight-2': !communityPage,
              'text-highlight-2 hover:text-highlight-2 bg-accent-grey-1': communityPage
            }
          )}
        >
          {t('community')}
        </a>
      </Link>


      <Link
        href='https://app.pooltogether.com'
        as='https://app.pooltogether.com'
      >
        <a
          className={classnames(
            'inline-flex items-center justify-center uppercase font-bold tracking-wider outline-none focus:outline-none active:outline-none',
            'hover:bg-default rounded-full border-2 border-highlight-2 px-10 py-1 trans trans-fast text-lg',
          )}
        >
          {t('app')}
        </a>
      </Link>
    </nav>
  </>
    
}
