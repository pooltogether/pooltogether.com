import { LANGUAGE_ID, MODAL_KEYS, useIsModalOpen, useScreenSize } from '@shared/generic-react-hooks'
import { CaptchaModal } from '@shared/react-components'
import { Button, Footer, FooterItem, LINKS, Navbar, NavbarLink, SocialIcon } from '@shared/ui'
import { getDiscordInvite } from '@shared/utilities'
import classNames from 'classnames'
import { useReducedMotion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode, useEffect, useState } from 'react'

interface LayoutProps {
  children: ReactNode
  className?: string
}

export const Layout = (props: LayoutProps) => {
  const { children, className } = props

  const router = useRouter()

  const t_common = useTranslations('Common')
  const t_nav = useTranslations('Navigation')
  const t_footer = useTranslations('Footer')

  const { setIsModalOpen: setIsCaptchaModalOpen } = useIsModalOpen(MODAL_KEYS.captcha)

  const { isMobile } = useScreenSize()

  const shouldReduceMotion = useReducedMotion()

  const [scrollY, setScrollY] = useState<number>(0)

  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  const handleLocaleSwitch = (newLocale: LANGUAGE_ID) => {
    const { pathname, query, asPath } = router
    router.push({ pathname, query }, asPath, { locale: newLocale })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navbarLinks: NavbarLink[] = [
    { href: '/help', name: t_nav('help') },
    { href: '/ecosystem', name: t_nav('ecosystem') },
    { href: '/community', name: t_nav('community') },
    { href: '/builders', name: t_nav('builders') }
  ]

  const footerItems: FooterItem[] = [
    {
      title: t_footer('audits'),
      content: [
        {
          content: (
            <SecurityAuditItem
              svgSrc='/graphics/c4Logo.svg'
              altText='CodeArena V4 Audit'
              href={'https://code4rena.com/reports/2021-10-pooltogether'}
              date='November 5th, 2021'
            />
          )
        },
        {
          content: (
            <SecurityAuditItem
              svgSrc='/graphics/ozLogo.svg'
              altText='OpenZeppelin V3 Audit'
              href={'https://blog.openzeppelin.com/pooltogether-v3-audit'}
              date='October 21, 2020'
            />
          )
        }
      ],
      className: 'min-w-min xl:pr-20',
      titleClassName: 'whitespace-nowrap lg:text-right',
      itemClassName: 'lg:ml-auto'
    },
    {
      title: t_footer('ecosystem'),
      content: [
        { content: t_footer('tools'), href: LINKS.tools },
        { content: t_footer('devDocs'), href: LINKS.devDocs },
        { content: t_footer('security'), href: LINKS.audits },
        { content: t_footer('faq'), href: LINKS.faq },
        { content: t_footer('brandAssets'), href: LINKS.brandKit },
        { content: t_footer('governance'), href: LINKS.governance },
        { content: t_footer('userDocs'), href: LINKS.docs },
        {
          content: t_footer('protocolDisclaimer'),
          href: LINKS.protocolDisclaimer
        },
        { content: t_footer('termsOfService'), href: LINKS.termsOfService }
      ]
    },
    {
      title: t_footer('community'),
      content: [
        {
          content: 'Lens',
          href: LINKS.lens,
          icon: <SocialIcon platform='lens' className='w-6 h-auto shrink-0' />
        },
        {
          content: 'Twitter',
          href: LINKS.twitter,
          icon: <SocialIcon platform='twitter' className='w-6 h-auto shrink-0' />
        },
        {
          content: 'Discord',
          onClick: () => setIsCaptchaModalOpen(true),
          icon: <SocialIcon platform='discord' className='w-6 h-auto shrink-0' />
        },
        {
          content: 'GitHub',
          href: LINKS.github,
          icon: <SocialIcon platform='github' className='w-6 h-auto shrink-0' />
        },
        {
          content: 'Medium',
          href: LINKS.medium,
          icon: <SocialIcon platform='medium' className='w-6 h-auto shrink-0' />
        },
        {
          content: 'Mirror',
          href: LINKS.mirror,
          icon: <SocialIcon platform='mirror' className='w-6 h-auto shrink-0' />
        }
      ]
    },
    {
      title: t_footer('languages'),
      content: [
        { content: 'English', onClick: () => handleLocaleSwitch('en') },
        { content: 'Español', onClick: () => handleLocaleSwitch('es') },
        { content: 'Deutsch', onClick: () => handleLocaleSwitch('de') },
        { content: 'Français', onClick: () => handleLocaleSwitch('fr') },
        { content: 'हिन्दी', onClick: () => handleLocaleSwitch('hi') },
        // { content: 'Italiano', onClick: () => handleLocaleSwitch('it') },
        { content: '한국어', onClick: () => handleLocaleSwitch('ko') },
        { content: 'Português', onClick: () => handleLocaleSwitch('pt') },
        { content: 'Türkçe', onClick: () => handleLocaleSwitch('tr') },
        { content: '中文', onClick: () => handleLocaleSwitch('zh') },
        { content: 'Русский', onClick: () => handleLocaleSwitch('ru') }
        // { content: 'Filipino', onClick: () => handleLocaleSwitch('fil') }
      ]
    }
  ]

  const pageTitles: { [href: string]: string } = {
    '/help': t_nav('help'),
    '/ecosystem': t_nav('ecosystem'),
    '/community': t_nav('community'),
    '/builders': t_nav('builders'),
    '/terms': t_footer('termsOfService'),
    '/protocol-disclaimer': t_footer('protocolDisclaimer')
  }

  const pageTitle = pageTitles[router.pathname]

  const isDarkerFooterBg = router.pathname === '/' || router.pathname === '/ecosystem'

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`PoolTogether${!!pageTitle ? ` | ${pageTitle}` : ''}`}</title>
      </Head>

      <Navbar
        links={navbarLinks}
        activePage={router.pathname}
        // @ts-ignore
        linksAs={Link}
        append={
          <Button href={LINKS.app_v4}>
            <span className='text-sm md:px-5 md:text-base'>{t_nav('usePt')}</span>
          </Button>
        }
        onClickBrand={() => router.push('/')}
        sticky={!isMobile}
        className={classNames(
          '!px-4 !py-3 bg-transparent !border-opacity-0 sm:!px-8 md:shadow-2xl',
          {
            'transition-all': !shouldReduceMotion,
            '!shadow-transparent md:!py-8': scrollY === 0,
            'md:!py-4 md:bg-pt-bg-purple-darker md:!border-opacity-100': scrollY > 0
          }
        )}
        linkClassName='text-xs sm:text-sm md:text-base text-pt-purple-100 hover:text-pt-purple-300'
        mobileBottomClassName='!gap-4 sm:!gap-6'
      />

      <CaptchaModal
        hCaptchaSiteKey='11cdabde-af7e-42cb-ba97-76e35b7f7c39'
        header={t_common('joinDiscord')}
        onVerify={getDiscordInvite}
      />

      <main
        className={classNames(
          'relative w-full max-w-[1920px] flex flex-col grow items-center mx-auto shadow-2xl',
          className
        )}
      >
        <>{children}</>
      </main>

      <Footer
        items={footerItems}
        className={classNames({
          'bg-pt-bg-purple-darker': isDarkerFooterBg,
          'bg-pt-purple-800': !isDarkerFooterBg
        })}
        containerClassName='max-w-[1440px]'
        titleClassName='text-pt-purple-400'
      />
    </div>
  )
}

interface SecurityAuditItemProps {
  svgSrc: `${string}.svg`
  altText: string
  href: string
  date: string
}

const SecurityAuditItem = (props: SecurityAuditItemProps) => {
  const { svgSrc, altText, href, date } = props

  return (
    <a href={href} target='_blank' className='relative flex flex-col'>
      <Image src={svgSrc} alt={altText} fill={true} className='!relative' />
      <span className='-mt-[2%] ml-[20%] text-gray-200'>{date}</span>
    </a>
  )
}
