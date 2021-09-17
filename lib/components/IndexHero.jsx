import React, { useState } from 'react'
import FeatherIcon from 'feather-icons-react'
import classnames from 'classnames'

import { WeeklyPrizeAmount } from 'lib/components/WeeklyPrizeAmount'
import { WistiaPlayer } from 'lib/components/WistiaPlayer'
import { IndexHeroFeaturedIn } from 'lib/components/IndexHeroFeaturedIn'

import { TwitterIconSvg, DiscordIconSvg, GithubIconSvg } from 'lib/components/SvgComponents'

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
            <span
              className='font-medium font-inter text-4xl lg:text-6xl text-new-gradient'
              style={{ lineHeight: 1.125 }}
            >
              Win by saving with PoolTogether.
            </span>
            <p className='text-accent-1 text-lg mt-4'>
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
            <p className='text-xl mt-8'>The more you save, the more you win!</p>
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
          </div>

          <div className='w-full sm:w-1/2'>
            <div className='bg-prize-amount text-center pt-8'>
              <h1 className='text-9xl'>
                <WeeklyPrizeAmount />
              </h1>
              <div className='uppercase font-semibold text-default -mt-2'>In weekly prizes</div>
              {/* Awarded every Thursday! */}
            </div>
          </div>
        </div>

        <IndexHeroFeaturedIn />

        <div className='text-center relative flex flex-col sm:flex-row mt-10 mb-16 sm:my-20 mx-auto'>
          <div className='bg-card mx-auto w-full sm:w-full py-8 sm:py-8 lg:px-12 lg:py-12 text-center sm:text-left'>
            <div className='font-inter text-sm text-center text-green font-black uppercase'>
              Luckiest Winners
            </div>
          </div>
        </div>
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
        {/* <img alt={`${props.children} icon`} src={props.iconSrc} className='mr-5 w-5' /> */}
      </a>
    </li>
  )
}
