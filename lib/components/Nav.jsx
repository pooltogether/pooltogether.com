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
import { useTranslation } from 'react-i18next'
import { supportedLanguages } from 'i18n'

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

        <Link href='/developers' as='/developers' shallow>
          <a
            className={classnames(navLinkClasses, {
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

const LanguagePickerDropdown = () => {
  const { i18n } = useTranslation()

  const languages = supportedLanguages.reduce((acc, language) => {
    acc[language.locale] = language
    return acc
  }, {})

  const formatValue = (locale) => (
    <span className='capitalize'>{`${locale} - ${languages[locale].language}`}</span>
  )

  return (
    <DropdownList
      id='language-picker-dropdown'
      className={classnames('text-pt-purple-light text-sm sm:text-sm')}
      label={i18n.language}
      formatValue={formatValue}
      onValueSet={(locale) => {
        i18n.changeLanguage(locale)
      }}
      current={i18n.language}
      values={languages}
    />
  )
}
