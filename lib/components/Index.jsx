import React from 'react'
import FeatherIcon from 'feather-icons-react'
import classnames from 'classnames'
import { useRouter } from 'next/router'

import { WeeklyPrizeAmount } from 'lib/components/WeeklyPrizeAmount'
import { IndexHeroFeaturedIn } from 'lib/components/IndexHeroFeaturedIn'

import { IndexGetInvolved } from 'lib/components/IndexGetInvolved'
import { IndexPoolToken } from 'lib/components/IndexPoolToken'
import { IndexHowItWorks } from 'lib/components/IndexHowItWorks'
import { IndexIntegrations } from 'lib/components/IndexIntegrations'
import { IndexSupportedBy } from 'lib/components/IndexSupportedBy'
import { IndexSecurity } from 'lib/components/IndexSecurity'

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

  return (
    <>
      {/* mt-24  */}
      <div
        class='w-full flex flex-col justify-between w-full text-inverse text-center sm:text-left'
        style={{ height: `calc(100vh - ${props.navHeight}px)` }}
      >
        <div className='pool-container flex flex-col sm:flex-row justify-between mx-auto w-full pt-2 sm:pt-16'>
          <div className='relative w-full sm:w-5/12 mt-6'>
            <HeroLeft />
          </div>

          <div className='w-full sm:w-7/12 lg:w-1/2 mt-6'>
            <HeroRight />
          </div>
        </div>

        <IndexHeroFeaturedIn />

        <LuckiestWinnersBanner />

        <DownArrow />
      </div>

      <div className='text-inverse'>
        <IndexHowItWorks />
        <IndexIntegrations />
        <IndexPoolToken />
        <IndexSecurity />
        {/* <IndexSupportedBy /> */}
        <IndexGetInvolved />
      </div>
    </>
  )
}

const DownArrow = () => {
  return (
    <a
      className='bounce block text-white w-12 mx-auto trans mb-8 p-2'
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
      <div className='bg-prize-amount flex flex-col justify-between text-center pt-8'>
        <div className='pb-10'>
          <h1 className='text-4xl xs:text-6xl sm:text-9xl -mt-6 sm:-mt-0'>
            <WeeklyPrizeAmount />
          </h1>
          <div className='uppercase font-semibold text-default -mt-2'>In weekly prizes</div>
        </div>
        <div className='uppercase font-semibold text-green mb-12 text-xs xs:text-lg lg:text-xl w-1/2 mx-auto'>
          Awarded every Thursday!
        </div>
      </div>

      <ul className='flex justify-center sm:justify-end mt-0 mb-8 sm:mb-0 mx-auto sm:pr-20'>
        <HeroSocialItem width={23} href='https://twitter.com/PoolTogether_'>
          <TwitterIconSvg />
        </HeroSocialItem>

        <HeroSocialItem width={18} href='https://discord.gg/hxPhPDW'>
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
  return (
    <>
      <span
        className='font-medium font-inter text-2xl xs:text-3xl lg:text-6xl text-new-gradient'
        style={{ lineHeight: 1.25 }}
      >
        Win by saving with PoolTogether.
      </span>
      <p className='text-accent-1 mt-4 sm-max-width-hero'>
        PoolTogether is a crypto-powered savings protocol based on{' '}
        <a
          href='https://en.wikipedia.org/wiki/Premium_Bond'
          target='_blank'
          title='Wikipedia entry for Premium Bonds'
        >
          Premium Bonds
        </a>
        . Save your money and have a chance to win prizes every week.
      </p>
      <div className='text-sm xs:text-base sm:text-xl mt-8'>
        The more you save, the more you win!
      </div>
      <div className='mt-4 mb-12 sm:mb-0 sm-max-width-hero'>
        <a
          href='https://app.pooltogether.com'
          className='new-btn block text-center text-xl w-full capitalize text-xs px-2 py-2 mt-2'
        >
          Start saving & winning{' '}
          <FeatherIcon icon={'chevron-right'} className='inline-block w-6 h-6 -mt-1' />
        </a>
      </div>
    </>
  )
}

const HeroSocialItem = (props) => {
  const linkListItemClassName = 'mt-4 mr-5'
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
          <nav class='menu'>
            <div class='menu__item'>
              <div class='marquee'>
                <div class='marquee__inner' aria-hidden='true'>
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
    0x614d... 🌊🏆 won $11,304 with only $73 deposited <Bullet />
    jon.eth 🌊🏆 won $2,669 with only $102 deposited <Bullet />
    0x9a84... 🌊🏆 won $11,115 with only $247 deposited <Bullet />
    ... and have a chance to win prizes... <Bullet />
    based on Francesco Zagami's https://dribbble.com/shots/9524661-Homepage-Menu-Interaction{' '}
    <Bullet />
  </>
)
