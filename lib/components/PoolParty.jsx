import React, { useState } from 'react'
import Head from 'next/head'
import classnames from 'classnames'
import Slider from 'react-slick'
import Link from 'next/link'
import { add, format } from 'date-fns'
import {
  SquareLink,
  SquareButton,
  SquareButtonTheme,
  SquareButtonSize
} from '@pooltogether/react-components'
import { useTranslation } from 'react-i18next'
import { useInterval } from 'beautiful-react-hooks'

import { DiscordIconSvg } from 'lib/components/SvgComponents'
import { HeaderLogo } from 'lib/components/HeaderLogo'
import { NftVideoPlayer } from 'lib/components/NftVideoPlayer'
import { Time } from 'lib/components/Time'

export const PoolParty = () => {
  const { t } = useTranslation()

  const title = `PoolParty - PoolTogether Season 1 NFTs`
  const description = `Earn NFTs by completing weekly PoolTogether missions`

  return (
    <>
      <Head>
        <meta
          property='og:image'
          content={`https://pooltogether.com/pool-party-season-1-facebook-share-image-1200-630@2x.png`}
        />
        <meta
          property='twitter:image:src'
          content={`https://pooltogether.com/pool-party-season-1-twitter-share-image-1200-675@2x.png`}
        />

        <meta name='description' content={description} />

        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:site_name' content={title} />

        <meta property='twitter:title' content={title} />
        <meta property='twitter:description' content={description} />
      </Head>

      <div className='font-averta'>
        <div className='header pool-container w-full z-30 mx-auto'>
          <div className='flex justify-between items-center w-full xs:px-4 sm:px-0 py-8 sm:py-4 mx-auto'>
            <div className='hidden xs:block sm:w-64'>
              <HeaderLogo centered={false} />
            </div>

            <div className='text-inverse w-full'>
              <div className='text-center flex flex-col items-center'>
                <p className='text-flashy text-xl leading-tight xs:mt-2 font-semibold'>
                  POOL PARTY
                </p>
                <p className='text-xxs xs:text-xs'>
                  POOLTOGETHER <br className='xs:hidden' /> SEASON 1 NFTs
                </p>
                <p className='text-xxs font-semibold text-default'>March 21st - May 17th, 2022</p>
              </div>
            </div>

            <div className='hidden xs:block flex justify-end sm:w-64'>
              <SquareLink
                chevron
                href='https://app.pooltogether.com'
                size={SquareButtonSize.sm}
                theme={SquareButtonTheme.teal}
                className='w-24'
              >
                <span className='pl-2'>{t('app')}</span>
              </SquareLink>
            </div>
          </div>
        </div>

        <VideoCarousel />

        <div className='pool-party--box-widths mx-auto flex flex-col items-center text-base z-10 relative pt-20 pb-32 text-inverse'>
          <h4 className='uppercase mb-4'>How it works:</h4>
          <ol className='list-decimal px-10 xs:px-0'>
            <li className='mb-2'>Complete the weekly mission before the countdown expires.</li>
            <li className='mb-2'>Come back to mint your NFTs when the next mission starts!</li>
            <li className='mb-2'>
              Each week's missions will need to be completed that week to be claimable.
            </li>
          </ol>
          <p className='text-xxxs uppercase text-default mb-6 mt-6'>
            Powered by{' '}
            <a href='https://galaxy.eco/' target='_blank' className='underline'>
              Project Galaxy
            </a>
          </p>

          <h4 className='uppercase mb-6 mt-20'>This week's missions:</h4>

          <MissionWeek1 current />
          <h4 className='uppercase mb-3 mt-20'>Previous missions:</h4>

          {/* <MissionWeek1 /> */}
          <div className='bg-pt-purple-darkest rounded-xl bg-purple-vibrant pool-party--box-widths p-8 text-center text-default-soft shadow-lg'>
            None yet, check back next week!
          </div>
        </div>
      </div>

      <div className='z-20 p-6 flex flex-col items-center font-inter bg-pt-purple-darkest shadow-lg '>
        <h5 className='text-center text-default-soft uppercase font-normal'>Need help?</h5>
        <Link href='/discord'>
          <a className='transition mx-1 mt-1 first:ml-0 last:mr-0 rounded-lg py-1 px-3 flex flex-row items-center text-lg hover:text-white hover:opacity-100 text-highlight-3 hover:text-white font-semibold'>
            <div className='inline-block my-1 text-white hover:text-green w-4 mr-2'>
              <DiscordIconSvg className='my-auto' />
            </div>
            Join the Discord
          </a>
        </Link>
      </div>

      <nav className='z-20 p-4 flex flex-row justify-center font-inter bg-pt-purple-bright shadow-lg '>
        <Link href='/'>
          <a className='transition mx-1 my-1 first:ml-0 last:mr-0 rounded-lg py-1 px-3 flex flex-row text-xs hover:text-white hover:opacity-100'>
            <span className='text-white opacity-70 hover:opacity-100'>Home</span>
          </a>
        </Link>
        <a
          href='https://app.pooltogether.com'
          className='transition mx-1 my-1 first:ml-0 last:mr-0 rounded-lg py-1 px-3 flex flex-row text-xs hover:text-white hover:opacity-100'
        >
          <span className='text-white opacity-70 hover:opacity-100'>App</span>
        </a>
        <Link href='/terms'>
          <a className='transition mx-1 my-1 first:ml-0 last:mr-0 rounded-lg py-1 px-3 flex flex-row text-xs hover:text-white hover:opacity-100'>
            <span className='text-white opacity-70 hover:opacity-100'>Terms</span>
          </a>
        </Link>
      </nav>
    </>
  )
}

const MissionState = {
  NotStarted: 'NotStarted',
  Started: 'Started',
  Ended: 'Ended',
  Claimable: 'Claimable'
}

const DateDisplay = (props) => {
  const { startTimestamp, current, firstLabel, secondLabel } = props
  const [seconds, setSeconds] = useState(0)

  // Make this component 'tick' every second
  useInterval(() => {
    setSeconds(1 + seconds)
  }, 1000)

  if (!current) {
    return null
  }

  const startsDate = new Date(startTimestamp)
  const endsDate = add(new Date(startTimestamp), {
    days: 6
  })
  const claimableDate = add(new Date(startTimestamp), {
    days: 7
  })

  const nowComparable = Date.now()

  let state, label, secondsLeft
  if (nowComparable < startsDate.getTime()) {
    label = 'Starts'
    state = MissionState.NotStarted
    secondsLeft = Math.round((startsDate.getTime() - Date.now()) / 1000)
  } else if (nowComparable < endsDate.getTime()) {
    label = 'Ends'
    state = MissionState.Started
    secondsLeft = Math.round((endsDate.getTime() - Date.now()) / 1000)
  } else if (nowComparable < claimableDate.getTime()) {
    label = 'Claimable'
    state = MissionState.Ended
    secondsLeft = Math.round((claimableDate.getTime() - Date.now()) / 1000)
  } else {
    state = MissionState.Claimable
  }

  return (
    <p className='text-xs font-semibold text-accent-3 mt-4 xs:mt-0'>
      {label && <span className='opacity-80 uppercase'>{label} in:</span>}

      <Time
        seconds={secondsLeft}
        className='mt-1 mx-auto h-14'
        timeClassName='text-sm xs:text-lg'
      />
    </p>
  )
}

const MissionCard = (props) => {
  const { current, week, task1Button, task1Text, task2Text } = props

  return (
    <div
      className={classnames(
        'rounded-xl bg-pt-purple-darkest p-4 py-6 xs:p-8 shadow-lg pool-party--box-widths',
        {
          'opacity-60 hover:opacity-100 transition': !current,
          'pool-party--border-flashy': current
        }
      )}
    >
      <div className={classnames('mt-4 flex flex-col xs:flex-row', { 'items-center': !current })}>
        <div className='relative bg-green z-20 text-center text-3xl font-black leading-none h-14 mb-8 skewed w-40'>
          <div
            className='flex justify-center flex-col bg-secondary absolute h-full z-10 w-full'
            style={{ left: 10, top: 10 }}
          >
            <h5 className='uppercase text-pink'>Week {week}</h5>
          </div>
        </div>

        <div className='xs:ml-12'>
          <DateDisplay {...props} />
        </div>
      </div>

      <br className='my-4' />

      <ul className='text-xs font-semibold'>
        <li className='mb-4'>
          <h6 className='text-white uppercase'>Mission #1:</h6>
          <h6 className='text-pt-purple-light'>
            {task1Text} <span className='text-flashy leading-tight font-semibold'>- 1x NFT</span>
          </h6>
          {task1Button && task1Button}
        </li>

        {task2Text && (
          <li className=''>
            <h6 className='text-white uppercase'>Mission #2:</h6>
            <h6 className='text-pt-purple-light'>
              {task2Text} <span className='text-flashy leading-tight font-semibold'>- 1x NFT</span>
            </h6>
          </li>
        )}
      </ul>

      <ul className='block text-default text-xs pt-2 list-disc ml-3'>
        <li>
          NFTs will be claimable <span className='underline'>24 hours after</span> mission ends.
        </li>
        <li>If you already have a deposit on Polygon you are good to go.</li>
      </ul>
    </div>
  )
}

const MissionWeek1 = (props) => {
  return (
    <MissionCard
      {...props}
      week='1'
      startTimestamp={1647889200000} // March 21st @ 3pm EST
      task1Text={<>Have a USDC deposit on Polygon</>}
      task1Button={
        <SquareLink
          href='https://app.pooltogether.com'
          size={SquareButtonSize.sm}
          theme={SquareButtonTheme.teal}
          className='w-36 mt-2'
        >
          Deposit now
        </SquareLink>
      }
      task2Text={null}
    />
  )
}
{
  /* <>
          Retweet the campaign tweet AND follow PoolTogether on Twitter
           <a
            target='_blank'
            href='https://twitter.com/PoolTogether_'
            className='text-highlight-3 underline hover:text-white'
          >
            campaign tweet
          </a>{' '} 
           AND follow{' '}
          <a
            target='_blank'
            href='https://twitter.com/PoolTogether_'
            className='text-highlight-3 underline hover:text-white'
          >
            PoolTogether
          </a>{' '} 
          on Twitter
          VERIFY HERE 
        </> */
}

{
  /* <>
          Onboard a friend to PT,{' '}
          <a
            href=''
            className='text-highlight-4 underline inline-flex items-center'
            target='_blank'
          >
            {' '}
            Fill in form <FeatherIcon icon='external-link' className='ml-2 trans w-5 h-5' />
          </a>
        </> */
}

const VideoCarousel = (props) => {
  const [indexPlaying, setIndexPlaying] = useState(0)
  const path = '/pool-party/season1'
  const settings = {
    className: 'center',
    speed: 1200,
    // autoplay: true,
    light: true,
    autoplaySpeed: 10200,
    cssEase: 'ease',
    swipeToSlide: true,
    arrows: true,
    adaptiveHeight: true,
    beforeChange: (index, next) => {
      setTimeout(() => {
        setIndexPlaying(next)
      }, 450)
    }
  }

  return (
    <div className='w-full slick--pool-party bg-slick-slide--pool-party'>
      <Slider {...settings}>
        <NftVideoPlayer
          files={{ mp4: `${path}/01_Noodles_v002.mp4`, webm: `${path}/01_Noodles_v002.webm` }}
          label={'#1. Noodles - Common'}
          dropRate={15}
          isPlaying={indexPlaying === 0}
        />
        <NftVideoPlayer
          files={{ mp4: `${path}/02_Glasses_v002.mp4`, webm: `${path}/02_Glasses_v002.webm` }}
          label={'#2. Glasses - Common'}
          dropRate={15}
          isPlaying={indexPlaying === 1}
        />
        <NftVideoPlayer
          files={{ mp4: `${path}/03_BeachBall_v002.mp4`, webm: `${path}/03_BeachBall_v002.webm` }}
          label={'#3. Beach Ball - Common'}
          dropRate={15}
          isPlaying={indexPlaying === 2}
        />
        <NftVideoPlayer
          files={{ mp4: `${path}/04_Thongs_v002.mp4`, webm: `${path}/04_Thongs_v002.webm` }}
          label={'#4. Thongs - Common'}
          dropRate={15}
          isPlaying={indexPlaying === 3}
        />
        <NftVideoPlayer
          files={{ mp4: `${path}/05_Cocktail_v002.mp4`, webm: `${path}/05_Cocktail_v002.webm` }}
          label={'#5. Cocktail - Common'}
          dropRate={15}
          isPlaying={indexPlaying === 4}
        />
        <NftVideoPlayer
          files={{ mp4: `${path}/06_Unicorn_v002.mp4`, webm: `${path}/06_Unicorn_v002.webm` }}
          label={'#6. Unicorn - Common'}
          dropRate={15}
          isPlaying={indexPlaying === 5}
        />
        <NftVideoPlayer
          files={{ mp4: `${path}/07_Trophy_v002.mp4`, webm: `${path}/07_Trophy_v002.webm` }}
          label={'#7. Trophy - Rare'}
          dropRate={7.5}
          isPlaying={indexPlaying === 6}
        />
        <NftVideoPlayer
          files={{ mp4: `${path}/08_Pooly_v002.mp4`, webm: `${path}/08_Pooly_v002.webm` }}
          label={'#8. Pooly - Ultra Rare'}
          dropRate={2.5}
          isPlaying={indexPlaying === 7}
        />
      </Slider>
    </div>
  )
}
