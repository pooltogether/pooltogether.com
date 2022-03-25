import React, { useEffect } from 'react'
import classnames from 'classnames'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { supportedLanguages } from '../../i18n'

// import MailIcon from 'assets/images/mail-footer.svg'

import {
  TwitterIconSvg,
  DiscordIconSvg,
  GithubIconSvg,
  MediumIconSvg
} from 'lib/components/SvgComponents'

export const Footer = () => {
  const { t } = useTranslation()

  const linkListItemClassNames = 'my-2'
  const linkClassNames = 'trans trans-fast text-accent-1 no-underline'

  const FooterLink = (props) => (
    <>
      <li className={linkListItemClassNames}>
        <Link href={props.href} as={props.href}>
          <a
            className={classnames(linkClassNames, {
              flex: props.iconSrc
            })}
          >
            {props.svg && (
              <div
                className={classnames(props.svgClassName, 'relative inline-block mr-4 w-5 ')}
                style={props.svgStyle}
              >
                {props.svg}
              </div>
            )}
            {props.children}
          </a>
        </Link>
      </li>
    </>
  )

  return (
    <>
      <footer className='footer pool-container w-full text-white text-sm mx-auto'>
        <div className='flex flex-col pt-10 lg:pt-20'>
          <div className='pt-6 sm:pt-0 pb-8 flex flex-col sm:flex-row justify-between'>
            <div className='pb-8 sm:pb-0 sm:pr-8'>
              <Link href='/' as='/' shallow>
                <a title={'Back to home'} className='pool-logo border-0 trans block w-full' />
              </Link>
            </div>

            <nav className='flex flex-col sm:flex-row space-x-0 space-y-4 sm:space-x-10 sm:space-y-0'>
              <div className='flex flex-col'>
                <span className='font-semibold block'>{t('ecosystem', 'Ecosystem')}</span>
                <ul>
                  <FooterLink href='https://tools.pooltogether.com'>{t('tools', 'Tools')}</FooterLink>
                  <FooterLink href='/developers'>{t('developers', 'Developers')}</FooterLink>
                  <FooterLink href='/audits'>{t('security', 'Security')}</FooterLink>
                  <FooterLink href='https://docs.pooltogether.com/faq/general'>FAQ</FooterLink>
                  <FooterLink href='/brand-assets'>{t('assets', 'Assets')}</FooterLink>
                  <FooterLink href='https://gov.pooltogether.com/'>{t('governance')}</FooterLink>
                  <FooterLink href='https://www.notion.so/PoolTogether-Knowledge-Base-fa721ccefa3242eaabd125a8415acd27'>
                    {t('knowledgeBase', 'Knowledge Base')}
                  </FooterLink>
                </ul>
              </div>

              <div className='flex flex-col'>
                <span className='font-semibold block'>{t('releases', 'Releases')}</span>

                <ul>
                  <FooterLink href='https://v4.pooltogether.com'>Version 4</FooterLink>
                  <FooterLink href='https://v3.pooltogether.com'>Version 3</FooterLink>
                  <FooterLink href='https://v2.pooltogether.com'>Version 2</FooterLink>
                  <FooterLink href='https://v1.pooltogether.com'>Version 1</FooterLink>
                </ul>
              </div>

              <div className='flex flex-col'>
                <span className='font-semibold block'>{t('community', 'Community')}</span>

                <ul>
                  <FooterLink
                    href='https://twitter.com/PoolTogether_'
                    svg={<TwitterIconSvg />}
                    svgStyle={{ top: 1 }}
                  >
                    Twitter
                  </FooterLink>

                  <FooterLink href='/discord' svg={<DiscordIconSvg />} svgStyle={{ top: 4 }}>
                    Discord
                  </FooterLink>

                  <FooterLink
                    href='https://github.com/pooltogether'
                    svg={<GithubIconSvg />}
                    svgStyle={{ top: 2 }}
                  >
                    Github
                  </FooterLink>

                  <FooterLink href='https://medium.com/pooltogether' svg={<MediumIconSvg />}>
                    Medium
                  </FooterLink>
                </ul>
              </div>

              <div className='flex flex-col'>
                <span className='font-semibold block pb-2'>{t('language', 'Language')}</span>

                <ul className='flex flex-col space-y-2'>
                  {supportedLanguages.map((sl) => (
                    <LanguageTrigger key={sl.locale} locale={sl.locale}>
                      {sl.language}
                    </LanguageTrigger>
                  ))}
                </ul>
              </div>
            </nav>
          </div>

          <div className='flex justify-between flex-col sm:flex-row pt-2 pb-10 sm:pb-20 lg:pb-20 text-xs border-t border-accent-4'>
            <div className='w-32 lg:w-32'>
              <nav className='flex justify-between w-full'>
                <a
                  className={classnames(
                    'terms mt-2 sm:mt-4 mr-6 text-accent-1',
                    'trans trans-fast text-accent-1 no-underline'
                  )}
                  href='/terms'
                >
                  {t('terms', 'Terms')}
                </a>
                <a
                  className={classnames(
                    'terms mt-2 sm:mt-4',
                    'trans trans-fast text-accent-1 no-underline'
                  )}
                  href='/sitemap.xml'
                >
                  {t('sitemap', 'Sitemap')}
                </a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

const LanguageTrigger = (props) => {
  const { children, locale } = props
  const { i18n } = useTranslation()
  return (
    <button
      onClick={() => i18n.changeLanguage(locale)}
      className='text-pt-teal hover:text-white transition-colors text-left'
    >
      {children}
    </button>
  )
}
