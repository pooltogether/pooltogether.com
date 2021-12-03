import React from 'react'
import classnames from 'classnames'
import Link from 'next/link'
import { useAtom } from 'jotai'
import { useRouter } from 'next/router'

import { disclaimerModalOpenAtom } from 'lib/components/DisclaimerModal'

import { useTranslation } from 'lib/../i18n'

export const Nav = (props) => {
  const { t } = useTranslation()

  const router = useRouter()

  const [, setDisclaimerModalOpen] = useAtom(disclaimerModalOpenAtom)

  const developersPage = router.pathname.match('developers')
  const governancePage = router.pathname.match('governance')
  const communityPage = router.pathname.match('community')
  const morePage = router.pathname.match('more')

  const navLinkClasses =
    'font-titillium capitalize text-center leading-none rounded-full flex justify-start items-center text-sm lg:text-lg py-3 px-2 lg:px-4 trans tracking-wider outline-none focus:outline-none active:outline-none text-white'

  const openDisclaimerModal = (e) => {
    e.preventDefault()

    setDisclaimerModalOpen(true)
  }

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
            {t('developers')}
          </a>
        </Link>
        {/* 
        <Link href='/governance' as='/governance' shallow>
          <a
            className={classnames('mr-3', navLinkClasses, {
              'text-white hover:text-highlight-2': !governancePage,
              'text-highlight-2 hover:text-highlight-2': governancePage
            })}
          >
            {t('governance', 'Governance')}
          </a>
        </Link> */}

        {/* <Link href='/community' as='/community' shallow>
          <a
            className={classnames('mr-3', navLinkClasses, {
              'text-white hover:text-highlight-2': !communityPage,
              'text-highlight-2 hover:text-highlight-2': communityPage
            })}
          >
            {t('community', 'Community')}
          </a>
        </Link> */}

        {/* <a
          className={classnames('mr-3', navLinkClasses, {
            'text-white hover:text-highlight-2': !morePage,
            'text-highlight-2 hover:text-highlight-2': morePage
          })}
        >
          {t('more', 'More')}
        </a> */}

        <a
          className={classnames(
            'font-titillium inline-flex items-center justify-center capitalize tracking-wider outline-none focus:outline-none active:outline-none',
            'hover:bg-default rounded-full border-2 border-highlight-2 px-10 py-1 trans trans-fast text-sm lg:text-lg font-semibold'
          )}
          onClick={openDisclaimerModal}
        >
          {t('app')}
        </a>
      </nav>
    </>
  )
}
