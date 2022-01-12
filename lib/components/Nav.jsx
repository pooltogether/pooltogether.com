import React from 'react'
import classnames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { SquareLink, SquareButtonSize, SquareButtonTheme } from '@pooltogether/react-components'

import { useTranslation } from 'react-i18next'

export const Nav = (props) => {
  const { t } = useTranslation()

  const router = useRouter()

  const developersPage = router.pathname.match('developers')
  const governancePage = router.pathname.match('governance')
  const communityPage = router.pathname.match('community')
  const morePage = router.pathname.match('more')

  const navLinkClasses =
    'font-titillium capitalize text-center leading-none rounded-full flex justify-start items-center text-sm lg:text-lg py-3 px-2 lg:px-4 trans tracking-wider outline-none focus:outline-none active:outline-none text-white'

  return (
    <>
      <nav className='justify-end items-center hidden sm:flex w-2/3'>
        <Link href='/developers' as='/developers' shallow>
          <a
            className={classnames('mr-3', navLinkClasses, {
              'text-white hover:text-highlight-2': !developersPage,
              'text-highlight-2 hover:text-highlight-2': developersPage
            })}
          >
            {t('developers', 'Developers')}
          </a>
        </Link>

        <SquareLink
          chevron
          Link={Link}
          href='https://app.pooltogether.com'
          size={SquareButtonSize.sm}
          theme={SquareButtonTheme.teal}
        >
          <span className='pl-2'>{t('app')}</span>
        </SquareLink>
      </nav>
    </>
  )
}
