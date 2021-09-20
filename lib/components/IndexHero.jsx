import React, { useState } from 'react'
import FeatherIcon from 'feather-icons-react'
import classnames from 'classnames'

import { WeeklyPrizeAmount } from 'lib/components/WeeklyPrizeAmount'
import { WistiaPlayer } from 'lib/components/WistiaPlayer'
import { IndexHeroFeaturedIn } from 'lib/components/IndexHeroFeaturedIn'

import {
  DownArrowSvg,
  TwitterIconSvg,
  DiscordIconSvg,
  GithubIconSvg
} from 'lib/components/SvgComponents'

import Squiggle from 'assets/images/squiggle.svg'
import SquiggleMobile from 'assets/images/squiggle-mobile.svg'

export const IndexHero = (props) => {
  const [playVideo, setPlayVideo] = useState(false)

  const startVideo = (e) => {
    e.preventDefault()
    setPlayVideo(true)

    setTimeout(() => {
      setPlayVideo(false)
    }, 500)
  }

  return (
    <>
      <div className='relative'>
        <div className='pool-container flex flex-col sm:flex-row justify-between mt-24 mx-auto'>
          <div className='relative w-full sm:w-5/12 mt-6'>
            <HeroLeft />
          </div>

          <div className='w-full sm:w-1/2'>
            <HeroRight />
          </div>
        </div>

        <IndexHeroFeaturedIn />

        <LuckiestWinnersBanner />

        <DownArrow />
      </div>
    </>
  )
}

const DownArrow = () => {
  return (
    <a
      className='bounce block p-2 text-white w-16 mx-auto mb-16 hover:opacity-100 opacity-90 trans'
      onClick={() => {
        const node = document.getElementById('integ')

        // This feels much smoother than `href='#integ'` or `scrollIntoView()`
        window.scrollTo({
          top: node.offsetTop + 100,
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
    <div className='bg-prize-amount text-center pt-8'>
      <h1 className='text-9xl'>
        <WeeklyPrizeAmount />
      </h1>
      <div className='uppercase font-semibold text-default -mt-2'>In weekly prizes</div>
      {/* Awarded every Thursday! */}
    </div>
  )
}

const HeroLeft = () => {
  return (
    <>
      <span
        className='font-medium font-inter text-4xl lg:text-6xl text-new-gradient'
        style={{ lineHeight: 1.125 }}
      >
        Win by saving with PoolTogether.
      </span>
      <p className='text-accent-1 mt-4' style={{ width: 446 }}>
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
      <div className='text-xl mt-8'>The more you save, the more you win!</div>
      <div className='mt-4' style={{ width: 446 }}>
        <a
          href='https://app.pooltogether.com'
          className='new-btn block text-center text-xl w-full capitalize text-xs px-2 py-2 mt-2'
        >
          Start saving & winning{' '}
          <FeatherIcon icon={'chevron-right'} className='inline-block w-6 h-6 -mt-1' />
        </a>
      </div>

      <ul className='flex mt-2'>
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

// const Bullet = () => <span className='mx-6 inline-block opacity-30'>&bull;</span>
const Bullet = () => <span className='mx-6' />

const LuckiestWinnersBanner = (props) => {
  return (
    <>
      <div className='text-center relative flex flex-col sm:flex-row mt-10 mb-16 sm:my-20 mx-auto'>
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
