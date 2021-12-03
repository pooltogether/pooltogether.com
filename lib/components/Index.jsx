import React from 'react'
import classnames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAtom } from 'jotai'
import {
  WeeklyPrizeAmountCard,
  SquareButton,
  SquareButtonTheme,
  SquareButtonSize
} from '@pooltogether/react-components'

import { disclaimerModalOpenAtom, DisclaimerModal } from 'lib/components/DisclaimerModal'

import { WeeklyPrizeAmount } from 'lib/components/WeeklyPrizeAmount'
import { IndexHeroFeaturedIn } from 'lib/components/IndexHeroFeaturedIn'

import { IndexAnalytics } from 'lib/components/IndexAnalytics'
import { IndexGovernance } from 'lib/components/IndexGovernance'
// import { IndexGetInvolved } from 'lib/components/IndexGetInvolved'
// import { IndexPoolToken } from 'lib/components/IndexPoolToken'
import { IndexHowItWorks } from 'lib/components/IndexHowItWorks'
import { IndexEcosystem } from 'lib/components/IndexEcosystem'
// import { IndexSupportedBy } from 'lib/components/IndexSupportedBy'
// import { IndexSecurity } from 'lib/components/IndexSecurity'
import { IndexTweetSlideshow } from 'lib/components/IndexTweetSlideshow'

import { useScreenSize, ScreenSize } from 'lib/hooks/useScreenSize'

import {
  DownArrowSvg,
  TwitterIconSvg,
  DiscordIconSvg,
  GithubIconSvg
} from 'lib/components/SvgComponents'

export const Index = (props) => {
  const router = useRouter()

  if (router.pathname !== '/') {
    return null
  }

  const screenSize = useScreenSize()
  const isSmall = screenSize <= ScreenSize.sm

  let height
  if (!isSmall) {
    height = `calc(100vh - ${props.navHeight}px)`
  }

  return (
    <>
      <div
        className='w-full flex flex-col justify-between text-inverse text-center sm:text-left'
        style={{ height }}
      >
        <div className='pool-container flex flex-col sm:flex-row justify-between mx-auto w-full sm:pt-16'>
          <div className='relative w-full sm:w-5/12 mt-6 sm:mt-12'>
            <HeroLeft />
          </div>

          <div className='hero-right--width mt-6 -mx-10'>
            <HeroRight />
          </div>
        </div>

        <IndexHeroFeaturedIn />

        <LuckiestWinnersBanner />

        <DownArrow />
      </div>

      <div className='text-inverse'>
        <IndexHowItWorks />
        {/* <IndexAnalytics /> */}
        <IndexEcosystem />
        <IndexGovernance />
        <IndexTweetSlideshow />
      </div>
    </>
  )
}

const DownArrow = () => {
  return (
    <a
      className='bounce block text-white w-12 mx-auto trans mb-8 p-2 hidden sm:block'
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
  return (
    <>
      <div className='bg-prize-amount flex flex-col justify-between text-center pt-10 sm:pt-8 h-48'>
        <div className='sm:pb-10'>
          <div className='uppercase font-semibold text-default text-xxs xs:text-lg lg:text-xl mx-auto -mt-4 sm:mt-3'>
            Currently
          </div>
          <h1 className='text-4xl xs:text-6xl sm:text-7xl lg:text-9xl -mt-1 xs:-mt-1'>
            <WeeklyPrizeAmount />
          </h1>
          <div className='uppercase font-semibold text-default text-xxs xs:text-lg lg:text-xl -mt-2'>
            In weekly prizes!
          </div>
        </div>
        {/* <div className='uppercase font-semibold text-green mb-12 text-xxs xs:text-lg lg:text-xl w-1/2 mx-auto'>
          Awarded every day!
        </div> */}
        <div className='font-semibold text-default-soft pt-8 xs:pt-0 mb-12 text-xxs w-1/2 mx-auto'>
          * across all v3 and v4 pools
        </div>
      </div>

      {/* -mt-6  */}
      <ul className='flex justify-center sm:justify-end xs:mt-0 mb-8 sm:mb-0 mx-auto sm:pr-20'>
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
  const [disclaimerModalOpen, setDisclaimerModalOpen] = useAtom(disclaimerModalOpenAtom)

  const openDisclaimerModal = (e) => {
    e.preventDefault()

    console.log('click')

    setDisclaimerModalOpen(true)
  }

  return (
    <>
      <span
        className='font-medium font-inter text-2xl xs:text-3xl lg:text-6xl text-new-gradient'
        style={{ lineHeight: 1.25 }}
      >
        Win by saving.
      </span>
      <p className='text-accent-1 mt-2 sm:mt-4 sm-max-width-hero mx-auto sm:mx-0'>
        PoolTogether is a crypto-powered savings protocol based on{' '}
        <a
          href='https://en.wikipedia.org/wiki/Premium_Bond'
          target='_blank'
          title='Wikipedia entry for Premium Bonds'
        >
          Premium Bonds
        </a>
        . Save money and have a chance to win every week.
      </p>
      {/* <div className='hidden xs:block text-sm xs:text-base sm:text-xl mt-8'>
        The more you save, the more you win!
      </div> */}
      <div className='mt-4 sm:mt-8 mb-4 sm:mb-0 sm-max-width-hero mx-auto sm:mx-0 text-center'>
        <SquareButton
          chevron
          size={SquareButtonSize.md}
          theme={SquareButtonTheme.teal}
          className='mx-auto sm:mx-0 max-w-md mt-2 block'
          onClick={openDisclaimerModal}
        >
          Start saving & winning
        </SquareButton>
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
  return (
    <>
      <div className='text-center relative flex flex-col sm:flex-row mx-auto w-full'>
        <div className='bg-luckiest-winners-gradient mx-auto w-full sm:w-full py-8 sm:py-8 text-center sm:text-left overflow-hidden'>
          <div className='font-inter text-sm text-center text-green font-black uppercase'>
            Luckiest Winners
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
    </>
  )
}

const SameText = () => (
  <>
    0x614d... ✌🤑🥇 won $11,304 with only $73 deposited! <Bullet />
    0xc12c... ✨🥳🥈 won $2,669 with only $102 deposited! <Bullet />
    0x8d3b... 💸🤯🥉 won $11,115 with only $247 deposited! <Bullet />
    see all the luckiest winners on{' '}
    <a href='https://smallfish.win' target='_blank'>
      smallfish.win
    </a>{' '}
    🌊😎🏆
    <Bullet />
  </>
)
