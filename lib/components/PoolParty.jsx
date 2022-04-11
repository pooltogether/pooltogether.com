import React, { useState } from 'react'
import FeatherIcon from 'feather-icons-react'
import Head from 'next/head'
import classnames from 'classnames'
import Slider from 'react-slick'
import Link from 'next/link'
import { add } from 'date-fns'
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

          <MissionWeek4 current />
          <h4 className='uppercase mb-3 mt-20'>Previous missions:</h4>

          <MissionWeek3 />
          <MissionWeek2 />
          <MissionWeek1 />
        </div>
      </div>

      <div className='z-20 p-6 flex flex-col items-center bg-pt-purple-darkest shadow-lg '>
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

      <nav className='z-20 p-4 flex flex-row justify-center bg-pt-purple-bright shadow-lg '>
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
  Ended: 'Ended'
}

const DateDisplay = (props) => {
  const { startTimestamp, current, firstLabel, secondLabel } = props
  const [seconds, setSeconds] = useState(0)

  // Make this component 'tick' every second
  useInterval(() => {
    setSeconds(1 + seconds)
  }, 1000)

  // if (!current) {
  //   return null
  // }

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
    return null
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
  const {
    current,
    week,
    task1Text,
    task1Description,
    task1Button,
    task2Text,
    task2Button,
    bulletPoint1,
    bulletPoint2,
    claimLink1,
    claimLink2
  } = props

  return (
    <div
      className={classnames(
        'rounded-xl bg-pt-purple-darkest p-4 py-6 xs:p-8 shadow-lg pool-party--box-widths mb-4',
        {
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
          <h6 className='text-white uppercase'>
            <span
              className={classnames({
                'opacity-60': !current
              })}
            >
              Mission #1:{' '}
            </span>
            {!current && (
              <div className='inline-block relative z-20 text-center font-black leading-none h-6 w-24'>
                <div
                  className='flex justify-center flex-col bg-red absolute h-full z-10 w-full rounded-lg'
                  style={{ left: 4, top: 6 }}
                >
                  <span className='text-sm uppercase text-white'>Expired</span>
                </div>
              </div>
            )}
          </h6>
          <h6
            className={classnames('text-pt-purple-light', {
              'opacity-60': !current
            })}
          >
            <span className='text-blue'>{task1Text}</span>{' '}
            <span className='text-flashy leading-tight font-semibold'>- 1x NFT</span>{' '}
          </h6>

          {task1Description && task1Description}

          {task1Button && task1Button}

          {claimLink1 && (
            <SquareLink
              href={claimLink1}
              size={SquareButtonSize.sm}
              theme={SquareButtonTheme.rainbow}
              className='w-44 mt-2'
            >
              <span className='py-1'>Claim now</span>
            </SquareLink>
          )}
        </li>

        {task2Text && (
          <li className=''>
            <h6 className='text-white uppercase'>
              <span
                className={classnames({
                  'opacity-60': !current
                })}
              >
                Mission #2:{' '}
              </span>
              {!current && (
                <div className='inline-block relative z-20 text-center font-black leading-none h-6 w-24'>
                  <div
                    className='flex justify-center flex-col bg-red absolute h-full z-10 w-full rounded-lg'
                    style={{ left: 4, top: 6 }}
                  >
                    <span className='text-sm uppercase text-white'>Expired</span>
                  </div>
                </div>
              )}
            </h6>
            <h6
              className={classnames('text-pt-purple-light', {
                'opacity-60': !current
              })}
            >
              <span className='text-blue'>{task2Text}</span>{' '}
              <span className='text-flashy leading-tight font-semibold'>- 1x NFT</span>
            </h6>
            {task2Button && task2Button}

            {claimLink2 && (
              <SquareLink
                href={claimLink2}
                size={SquareButtonSize.sm}
                theme={SquareButtonTheme.rainbow}
                className='w-44 mt-2'
              >
                <span className='py-1'>Claim now</span>
              </SquareLink>
            )}
          </li>
        )}
      </ul>

      <ul className='block text-white dark:text-default text-xs pt-8 list-decimal ml-3'>
        <li>
          NFTs will be claimable <span className='underline'>24 hours after</span> mission ends.
        </li>
        {bulletPoint1 && <li>{bulletPoint1}</li>}
        {bulletPoint2 && <li>{bulletPoint2}</li>}
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
      task2Text={null}
      bulletPoint1='If you already have a deposit on Polygon you are good to go.'
      claimLink1='https://galaxy.eco/PoolTogether/campaign/GCTKRUUx9o'
    />
  )
}

const MissionWeek2 = (props) => {
  return (
    <MissionCard
      {...props}
      week='2'
      claimLink1='https://galaxy.eco/PoolTogether/campaign/GC49rUU1Fi'
      claimLink2='https://galaxy.eco/PoolTogether/campaign/GCTwrUU1kQ'
      startTimestamp={1648494000000} // March 28th @ 3pm EST
      task1Text={
        <>
          Hold the POOL
          <BulletPointAsterisk number='2' /> token
        </>
      }
      task2Text={
        <>
          Subscribe to the PT Newsletter
          <BulletPointAsterisk number='3' />
        </>
      }
      bulletPoint1={
        <>
          <strong>The following POOL is valid:</strong>{' '}
          <ul>
            <ListItemLink
              href='https://etherscan.io/token/0x0cec1a9154ff802e7934fc916ed7ca50bde6844e'
              label='POOL token on Ethereum'
            />
            <ListItemLink
              href='https://etherscan.io/token/0x27d22a7648e955e510a40bdb058333e9190d12d4'
              label='pPOOL prize pool ticket on Ethereum'
            />
            <ListItemLink
              href='https://polygonscan.com/token/0x25788a1a171ec66da6502f9975a15b609ff54cf6'
              label='POOL (POS) token on Polygon'
            />

            <ListItemLink
              href='https://polygonscan.com/token/0xd80eaa761ccfdc8698999d73c96cec39fbb1fc48'
              label='pPOOL on Polygon'
            />

            <ListItemLink
              href='https://polygonscan.com/token/0x34908ec7f451beaa88c46c60a394cf324f86f67e'
              label='SushiSwap Polygon LP'
            />

            <ListItemLink
              href='https://etherscan.io/address/0x85cb0bab616fe88a89a35080516a8928f38b518b'
              label='UniswapV2 Ethereum LP'
            />

            <ListItemLink
              href='https://polygonscan.com/token/0x1585d301b58661bc0cb5a8eba24ecae7b4600470'
              label='Quickswap Polygon LP'
            />
          </ul>
          <div className='opacity-50 font-semibold'>Snapshot: Sunday April 3, 19:00 UTC</div>
        </>
      }
      bulletPoint2={
        <>
          Subscribe to the community newsletter in one of the five languages, then fill in and
          submit the Gleam form
        </>
      }
    />
  )
}

const MissionWeek3 = (props) => {
  return (
    <MissionCard
      {...props}
      week='3'
      startTimestamp={1649098800000} // April 4th @ 3pm EST
      task1Text={
        <>
          Check if you won prizes
          <BulletPointAsterisk number='2' /> at least once this week
        </>
      }
      task1Button={
        <SquareButton
          href='https://app.pooltogether.com/prizes'
          size={SquareButtonSize.sm}
          theme={SquareButtonTheme.rainbow}
          className='w-60 mt-2 h-12'
          disabled
        >
          Claimable Monday
        </SquareButton>
      }
      bulletPoint1={
        <>
          Checking for prizes on Ethereum, Polygon or Avalanche will enter your address prior to the
          snapshot{' '}
          <div className='opacity-50 font-semibold'>Snapshot: Sunday April 10, 19:00 UTC</div>
        </>
      }
    />
  )
}

const MissionWeek4 = (props) => {
  return (
    <MissionCard
      {...props}
      week='4'
      startTimestamp={1649703600000} // April 11th @ 3pm EST
      task1Text={<>Delegate 10$ worth of PTUASDC to a friend using the "Delegatoor" app</>}
      task1Description={
        <>
          <div className='text-pt-purple-light mt-2'>
            {' '}
            Use the new{' '}
            <a href='https://tools.pooltogether.com/delegate' className='text-pt-teal underline'>
              Deposit Delegator
            </a>{' '}
            and share your chances to win prizes with a friend! Delegate at least $10 worth of
            PoolTogether tickets (PTaUSDC) to be eligible. <br />
            <a
              href='https://docs.pooltogether.com/how-to/deposit-delegator'
              target='_blank'
              className='text-pt-teal underline flex items-center'
            >
              <span>How to delegate & what is the Deposit Delegator</span>
              <FeatherIcon icon={'external-link'} className='inline-block w-4 h-4 ml-1' />
            </a>
          </div>
        </>
      }
      task1Button={null}
      bulletPoint1={
        <>
          'Using the Deposit Delegator on Polygon will enter your address prior to the snapshot'
          <div className='opacity-50 font-semibold'>Snapshot: Sunday April 17, 19:00 UTC</div>
        </>
      }
    />
  )
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

const BulletPointAsterisk = (props) => {
  const { number } = props
  return <sup className='relative text-xxxs text-highlight-2'>{number}</sup>
}

const ListItemLink = (props) => (
  <li>
    <a href={props.href} className='underline' target='_blank'>
      {props.label}
    </a>
  </li>
)
