import React from 'react'
import classnames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  SquareLink,
  SquareButtonTheme,
  SquareButtonSize,
  Banner,
  BannerTheme
} from '@pooltogether/react-components'
import { useTranslation, Trans } from 'next-i18next'

import { WeeklyPrizeAmount } from 'lib/components/WeeklyPrizeAmount'
import { IndexHeroFeaturedIn } from 'lib/components/IndexHeroFeaturedIn'
import { IndexGovernance } from 'lib/components/IndexGovernance'
import { IndexHowItWorks } from 'lib/components/IndexHowItWorks'
import { IndexEcosystem } from 'lib/components/IndexEcosystem'
import { IndexTweetSlideshow } from 'lib/components/IndexTweetSlideshow'

import {
  DownArrowSvg,
  TwitterIconSvg,
  DiscordIconSvg,
  GithubIconSvg
} from 'lib/components/SvgComponents'
import { ScreenSize, useScreenSize } from '@pooltogether/hooks'
import classNames from 'classnames'

export const Index = (props) => {
  const router = useRouter()

  if (router.pathname !== '/') {
    return null
  }

  const screenSize = useScreenSize()
  const isSmall = screenSize <= ScreenSize.sm
  let height
  if (!isSmall) {
    height = `calc(100vh - 75px)`
  }

  return (
    <>
      <div
        className='w-full flex flex-col justify-between text-center sm:text-left pt-2 sm:pt-20 xl:pt-24 mb-8 space-y-2'
        style={{ height }}
      >
        <div className='content-max-width flex flex-col sm:flex-row justify-between mx-auto w-full sm:space-x-4'>
          <div className='w-full sm:w-1/2 mt-6 sm:mt-12'>
            <HeroLeft />
          </div>

          <div className='w-full sm:w-1/2 mt-10 sm:mt-0 sm:pl-8 sm:pt-10'>
            <HeroRight />
          </div>
        </div>

        <IndexHeroFeaturedIn />

        <LuckiestWinnersBanner />

        <DownArrow />
      </div>

      <IndexHowItWorks />
      <IndexEcosystem />
      <IndexGovernance />
      <IndexTweetSlideshow />
    </>
  )
}

const DownArrow = () => {
  return (
    <a
      className='bounce text-white w-12 mx-auto trans p-2 hidden sm:block'
      onClick={() => {
        const pageHeight = window.innerHeight

        // This feels much smoother than `href='#integ'` or `scrollIntoView()`
        window.scrollTo({
          top: pageHeight,
          left: 0,
          behavior: 'smooth'
        })
      }}
    >
      <DownArrowSvg />
    </a>
  )
}

const HeroRight = () => {
  const { t } = useTranslation()
  return (
    <>
      <Banner
        theme={BannerTheme.rainbowBorder}
        defaultPadding={false}
        outerClassName='w-full max-w-lg mx-auto relative'
      >
        <LightningBolts />
        <div className='bg-prize-gradient flex flex-col justify-between text-center py-6 xs:py-10 px-8'>
          <div className='sm:pb-4 space-y-2 flex flex-col leading-none'>
            <span className='uppercase font-semibold text-default text-xxs xs:text-lg lg:text-xl mx-auto'>
              {t('currently', 'Currently')}
            </span>
            <span className='text-4xl xs:text-6xl sm:text-7xl lg:text-9xl'>
              <WeeklyPrizeAmount />
            </span>
            <span className='uppercase font-semibold text-default text-xxs xs:text-lg lg:text-xl'>
              {t('inWeeklyPrizes')}
            </span>
          </div>
          <span className='font-semibold text-default-soft text-xxxs xs:text-xxs mx-auto mt-2 uppercase'>
            {`${t('acrossBothVersions', 'Across all v3 and v4 pools')}`}
          </span>
        </div>
      </Banner>

      <ul className='max-w-lg flex justify-center sm:justify-end xs:mt-0 mb-8 sm:mb-0 mx-auto'>
        <HeroSocialItem width={23} href='https://twitter.com/PoolTogether_'>
          <TwitterIconSvg />
        </HeroSocialItem>

        <HeroSocialItem width={18} href='/discord'>
          <DiscordIconSvg />
        </HeroSocialItem>

        <HeroSocialItem width={19} href='https://github.com/pooltogether'>
          <GithubIconSvg />
        </HeroSocialItem>
      </ul>
    </>
  )
}

const HeroLeft = () => {
  const { t } = useTranslation()
  return (
    <>
      <span
        className='font-semibold text-2xl xs:text-3xl lg:text-6xl text-new-gradient'
        style={{ lineHeight: 1.25 }}
      >
        {t('winBySaving', 'Win by saving.')}
      </span>
      <p className='text-accent-1 mt-2 sm:mt-4 mx-auto sm:mx-0 max-w-sm'>
        <Trans
          t={t}
          i18nKey='poolTogetherIsAPrizeSavingsProtocol'
          defaults='PoolTogether is a crypto-powered savings protocol based on <a>Premium Bonds</a>. Save money and have a chance to win every week.'
          components={{
            a: (
              <a
                href='https://en.wikipedia.org/wiki/Premium_Bond'
                target='_blank'
                title='Wikipedia entry for Premium Bonds'
                className='text-pt-teal'
              />
            )
          }}
        />
      </p>
      <div className='mt-4 sm:mt-8 mb-4 sm:mb-0 mx-auto sm:mx-0 text-center'>
        <Link href='https://app.pooltogether.com'>
          <SquareLink
            chevron
            size={SquareButtonSize.md}
            theme={SquareButtonTheme.teal}
            className='mx-auto sm:mx-0 max-w-sm mt-2 block lg:w-3/4'
          >
            {t('startSavingAndWinning', 'Start saving & winning')}
          </SquareLink>
        </Link>
      </div>
    </>
  )
}

const HeroSocialItem = (props) => {
  const linkListItemClassName = 'mt-4 sm:mt-4 mx-2 sm:mr-5'
  const linkClassName = 'trans trans-fast no-underline text-default-soft'

  return (
    <li
      className={classnames(props.className, linkListItemClassName)}
      style={{ width: props.width }}
    >
      <a href={props.href} className={linkClassName}>
        {props.children}
      </a>
    </li>
  )
}

const Bullet = () => <span className='mx-6' />

const LuckiestWinnersBanner = (props) => {
  const { t } = useTranslation()
  return (
    <div className='text-center relative flex flex-col sm:flex-row mx-auto w-full'>
      <div className='bg-luckiest-winners-gradient mx-auto w-full sm:w-full py-8 sm:py-8 text-center sm:text-left overflow-hidden'>
        <div className='text-sm text-center text-green font-black uppercase'>
          {t('luckiestWinners', 'Luckiest Winners')}
        </div>
        <nav className='menu'>
          <div className='menu__item'>
            <div className='marquee'>
              <div className='marquee__inner' aria-hidden='true'>
                <span>
                  <SameText />
                </span>
                <span>
                  <SameText />
                </span>
                <span>
                  <SameText />
                </span>
                <span>
                  <SameText />
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

const SameText = () => {
  const { t } = useTranslation()
  return (
    <>
      <span>
        {t('userWonAmountWithOnlyAmountDeposited', {
          address: '0x614d... ✌🤑🥇',
          winnings: '$11,304',
          deposit: '$73'
        })}
      </span>
      <Bullet />
      <span>
        {t('userWonAmountWithOnlyAmountDeposited', {
          address: '0xc12c... ✨🥳🥈',
          winnings: '$2,669',
          deposit: '$102'
        })}
      </span>
      <Bullet />
      <span>
        {t('userWonAmountWithOnlyAmountDeposited', {
          address: '0x8d3b... 💸🤯🥉',
          winnings: '$11,115',
          deposit: '$247'
        })}
      </span>
      <Bullet />
      <Trans
        t={t}
        i18nKey='seeAllWinnersOnSmallFish'
        defaults='see all of the luckiest winners on <a>smallfish.win</a>'
        components={{
          a: <a href='https://smallfish.win' target='_blank' className='text-pt-teal' />
        }}
      />{' '}
      🌊😎🏆
      <Bullet />
    </>
  )
}

const LightningBolt = (props) => {
  const { color } = props

  const fillBackgroundColor = color === 'yellow' ? '#FC9447' : '#0BF0B9'
  const fillForegroundColor = color === 'yellow' ? '#FFC448' : '#34FDCD'

  return (
    <div
      className={classNames(props.className, 'bg-contain bg-no-repeat absolute')}
      style={{
        transform: `rotate(${props.flip ? '' : '-'}10deg) scale(${props.flip ? '' : '-'}${
          props.scale
        }, ${props.scale})`
      }}
    >
      <svg viewBox='0 0 121 101' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='m78.667 12.83 43.728 10.131L133.441 50 83.64 60.695l10.217 8.885 4.695 24.71L7.9 98.809l-6.567-6.804 49.738-26.993-16.138-14.023 43.734-38.157Z'
          fill={fillBackgroundColor}
        />
        <path
          d='m78.667 12.83-.302 1.3 43.056 9.974 10.184 24.927L83.36 59.392c-.495.105-.884.48-1.01.97a1.33 1.33 0 0 0 .415 1.34l9.868 8.58 4.323 22.753-88.517 4.412L3.51 92.34l48.196-26.157c.384-.21.641-.594.689-1.027a1.338 1.338 0 0 0-.45-1.152L36.963 50.987l42.579-37.15-.876-1.006-.302 1.298.302-1.298-.876-1.004-43.734 38.157a1.334 1.334 0 0 0 .002 2.01l14.685 12.762L.697 90.832c-.368.2-.617.555-.681.97-.064.413.067.826.357 1.127l6.567 6.806c.268.277.64.425 1.027.405l90.652-4.517a1.333 1.333 0 0 0 1.242-1.582l-4.694-24.71a1.345 1.345 0 0 0-.435-.758l-8.204-7.134 47.193-10.135a1.332 1.332 0 0 0 .955-1.808l-11.047-27.04a1.34 1.34 0 0 0-.933-.795L78.968 11.532a1.33 1.33 0 0 0-1.177.295l.876 1.004'
          fill='#11131A'
        />
        <path
          d='m66.417 2.299 55.978 20.662-51.026 27.196 22.43 19.49L1.334 92.004l37.478-37.53-16.138-14.02L66.417 2.3'
          fill={fillForegroundColor}
        />
        <path
          d='m66.417 2.299-.461 1.25 53.188 19.634L70.743 48.98a1.338 1.338 0 0 0-.698 1.027c-.049.433.12.87.45 1.156l20.48 17.795L5.623 89.595l34.132-34.179c.262-.263.402-.619.389-.99a1.328 1.328 0 0 0-.459-.958L24.704 40.452l42.59-37.15-.877-1.003-.461 1.25.461-1.25-.876-1.006L21.797 39.45a1.335 1.335 0 0 0 .001 2.012l15.06 13.082L.388 91.06a1.338 1.338 0 0 0-.218 1.596c.292.519.896.783 1.476.643l92.466-22.357a1.334 1.334 0 0 0 .56-2.303L73.708 50.423l49.313-26.286a1.33 1.33 0 0 0 .704-1.266 1.327 1.327 0 0 0-.869-1.16L66.88 1.047c-.46-.17-.97-.075-1.339.246l.876 1.006'
          fill='#11131A'
        />
      </svg>
    </div>
  )
}

LightningBolt.defaultProps = {
  scale: 1
}

const LightningBolts = () => (
  <>
    {/* Left */}
    <LightningBolt
      color='yellow'
      className='top-8 xs:top-14 -left-4 xs:-left-8 w-8 h-8 xs:w-12 xs:h-12'
      scale={0.8}
    />
    <LightningBolt
      color='teal'
      className='top-20 xs:top-20 -left-8 xs:-left-16 w-8 h-8 xs:w-12 xs:h-12'
      scale={0.6}
    />
    {/* Right */}
    <LightningBolt
      flip
      color='yellow'
      scale={0.5}
      className='top-8 xs:top-14 -right-8 xs:-right-12 w-10 h-10 xs:w-12 xs:h-12'
    />
    <LightningBolt
      flip
      color='teal'
      scale={0.7}
      className='top-14 xs:top-16 right-3 xs:-right-2 w-8 h-8 xs:w-12 xs:h-12'
    />
  </>
)
