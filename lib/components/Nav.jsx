import React from 'react'
import classnames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  SquareLink,
  SquareButtonSize,
  SquareButtonTheme,
  DropdownList
} from '@pooltogether/react-components'
import { useTranslation } from 'next-i18next'
import { i18n as i18nConfig } from '../../next-i18next.config'
import Cookies from 'js-cookie'

export const Nav = (props) => {
  const { t } = useTranslation()

  const router = useRouter()

  const developersPage = router.pathname.match('developers')

  const navLinkClasses =
    'font-titillium capitalize text-center leading-none rounded-full flex justify-start items-center text-sm lg:text-lg py-3 trans tracking-wider outline-none focus:outline-none active:outline-none text-white'

  return (
    <>
      <nav className='justify-end items-center hidden sm:flex w-2/3 space-x-8'>
        <LanguagePickerDropdown />

        <Link href='https://dao.pooltogether.com' as='https://dao.pooltogether.com' shallow>
          <a className={classnames(navLinkClasses, 'text-white hover:text-highlight-2')}>DAO</a>
        </Link>

        <Link href='https://gov.pooltogether.com' as='https://gov.pooltogether.com' shallow>
          <a className={classnames(navLinkClasses, 'text-white hover:text-highlight-2')}>
            {t('governance')}
          </a>
        </Link>

        <Link href='https://dev.pooltogether.com' as='https://dev.pooltogether.com' shallow>
          <a className={classnames(navLinkClasses, 'text-white hover:text-highlight-2')}>
            {t('developers', 'Developers')}
          </a>
        </Link>

        <Link href='https://tools.pooltogether.com' as='https://tools.pooltogether.com' shallow>
          <a className={classnames(navLinkClasses, 'text-white hover:text-highlight-2')}>
            {t('tools', 'Tools')}
          </a>
        </Link>

        <SquareLink
          chevron
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

const LanguagePickerDropdown = () => {
  const { i18n } = useTranslation()
  const router = useRouter()
  const langs = getLangs(i18nConfig.locales)

  const formatValue = (locale) => (
    <span className='capitalize'>{`${locale} - ${langs[locale].name}`}</span>
  )

  return (
    <DropdownList
      id='language-picker-dropdown'
      className={classnames('text-pt-purple-light text-sm sm:text-sm')}
      label={i18n.language}
      formatValue={formatValue}
      onValueSet={(locale) => {
        Cookies.set('NEXT_LOCALE', locale)
        const { pathname, asPath, query } = router
        router.push({ pathname, query }, asPath, { locale })
      }}
      current={i18n.language}
      values={langs}
    />
  )
}

const getLangs = (locales) =>
  locales.reduce((langs, locale) => {
    const englishIntl = new Intl.DisplayNames(['en'], { type: 'language' })
    const nativeIntl = new Intl.DisplayNames([locale], { type: 'language' })
    langs[locale] = {
      name: englishIntl.of(locale),
      nativeName: nativeIntl.of(locale)
    }
    return langs
  }, {})
