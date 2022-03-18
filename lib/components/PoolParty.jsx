import React, { useState } from 'react'
import classnames from 'classnames'
import FeatherIcon from 'feather-icons-react'
import Slider from 'react-slick'
import { add, format } from 'date-fns'
import { SquareButton, SquareButtonTheme, SquareButtonSize } from '@pooltogether/react-components'

import { DiscordIconSvg } from 'lib/components/SvgComponents'
import { HeaderLogo } from 'lib/components/HeaderLogo'
import { NftVideoPlayer } from 'lib/components/NftVideoPlayer'

export const PoolParty = () => {
  const [indexPlaying, setIndexPlaying] = useState(0)
  const path = '/pool-party/season1'
  const settings = {
    className: 'center',
    speed: 1200,
    autoplay: true,
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
    <>
      <div className='font-averta'>
        <div className='header pool-container w-full z-30 mx-auto'>
          <div className='flex justify-between items-center w-full xs:px-4 sm:px-0 py-8 sm:py-4 mx-auto'>
            <HeaderLogo centered={false} />
            <div className='text-inverse'>
              <div className='flex flex-col items-end'>
                <p className='text-center text-flashy text-xl leading-tight xs:mt-2 font-semibold'>
                  POOL PARTY
                </p>
                <p className='text-xxs xs:text-xs'>POOLTOGETHER SEASON 1 NFTs</p>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full slick--pool-party bg-slick-slide--pool-party'>
          <Slider {...settings}>
            <NftVideoPlayer
              files={[`${path}/01_Noodles_v002.mp4`, `${path}/01_Noodles_v002.webm`]}
              label={'#1. Noodles - Common'}
              dropRate={15}
              isPlaying={indexPlaying === 0}
            />
            <NftVideoPlayer
              files={[`${path}/02_Glasses_v002.mp4`, `${path}/02_Glasses_v002.webm`]}
              label={'#2. Glasses - Common'}
              dropRate={15}
              isPlaying={indexPlaying === 1}
            />
            <NftVideoPlayer
              files={[`${path}/03_BeachBall_v002.mp4`, `${path}/03_BeachBall_v002.webm`]}
              label={'#3. Beach Ball - Common'}
              dropRate={15}
              isPlaying={indexPlaying === 2}
            />
            <NftVideoPlayer
              files={[`${path}/04_Thongs_v002.mp4`, `${path}/04_Thongs_v002.webm`]}
              label={'#4. Thongs - Common'}
              dropRate={15}
              isPlaying={indexPlaying === 3}
            />
            <NftVideoPlayer
              files={[`${path}/05_Cocktail_v002.mp4`, `${path}/05_Cocktail_v002.webm`]}
              label={'#5. Cocktail - Common'}
              dropRate={15}
              isPlaying={indexPlaying === 4}
            />
            <NftVideoPlayer
              files={[`${path}/06_Unicorn_v002.mp4`, `${path}/06_Unicorn_v002.webm`]}
              label={'#6. Unicorn - Common'}
              dropRate={15}
              isPlaying={indexPlaying === 5}
            />
            <NftVideoPlayer
              files={[`${path}/07_Trophy_v002.mp4`, `${path}/07_Trophy_v002.webm`]}
              label={'#7. Trophy - Rare'}
              dropRate={7.5}
              isPlaying={indexPlaying === 6}
            />
            <NftVideoPlayer
              files={[`${path}/08_Pooly_v002.mp4`, `${path}/08_Pooly_v002.webm`]}
              label={'#8. Pooly - Ultra Rare'}
              dropRate={2.5}
              isPlaying={indexPlaying === 7}
            />
          </Slider>
        </div>

        <div className=' pool-party--box-widths mx-auto flex flex-col items-center text-base z-10 relative pt-20 pb-32 text-inverse'>
          <h3 className='uppercase mb-4'>How it works:</h3>
          <ol className='list-decimal px-10 xs:px-0'>
            <li className='mb-2'>
              Complete the weekly missions by the end of Season 1 to earn random collectibles,
              claimable each week.
            </li>
            <li className='mb-2'>
              {' '}
              Those who qualify will be able to claim NFTs that will unlock within 24 hours after
              each weekly mission concludes.{' '}
            </li>
            <li className='mb-2'>
              Didn’t finish on time? You will have{' '}
              <span className='text-default font-semibold opacity-60'>(at least)</span> one more
              week!
            </li>
          </ol>

          <p className='text-xs font-semibold text-default mt-6 text-center'>
            Season 1:
            <br />
            March 21st - May 17th, 2022
          </p>

          <h3 className='uppercase mb-4 mt-20'>This week's missions:</h3>

          <MissionWeek1 />
          <h3 className='uppercase mb-4 mt-20'>Previous missions:</h3>

          <div className='bg-pt-purple-darkest rounded-xl bg-purple-vibrant pool-party--box-widths p-8 text-center text-default-soft shadow-lg'>
            None yet, check back next week!
          </div>
        </div>
      </div>

      <div className='z-20 p-6 flex flex-col items-center font-inter bg-pt-purple-darkest shadow-lg '>
        <h5 className='text-center text-default-soft uppercase font-normal'>Need help?</h5>
        <a
          className='transition mx-1 mt-1 first:ml-0 last:mr-0 rounded-lg py-1 px-3 flex flex-row items-center text-lg hover:text-white hover:opacity-100 text-highlight-3 hover:text-white font-semibold'
          href='/discord'
        >
          <div className='inline-block my-1 text-white hover:text-green w-4 mr-2'>
            <DiscordIconSvg className='my-auto' />
          </div>
          Join the Discord
        </a>
      </div>

      <nav className='z-20 p-4 flex flex-row justify-center font-inter bg-pt-purple-bright shadow-lg '>
        <a
          className='transition mx-1 my-1 first:ml-0 last:mr-0 rounded-lg py-1 px-3 flex flex-row text-xs hover:text-white hover:opacity-100'
          href='/'
        >
          <span className='text-white opacity-70 hover:opacity-100'>Home</span>
        </a>
        <a
          className='transition mx-1 my-1 first:ml-0 last:mr-0 rounded-lg py-1 px-3 flex flex-row text-xs hover:text-white hover:opacity-100'
          href='https://app.pooltogether.com'
        >
          <span className='text-white opacity-70 hover:opacity-100'>App</span>
        </a>
        <a
          className='transition mx-1 my-1 first:ml-0 last:mr-0 rounded-lg py-1 px-3 flex flex-row text-xs hover:text-white hover:opacity-100'
          href='/terms'
        >
          <span className='text-white opacity-70 hover:opacity-100'>Terms</span>
        </a>
      </nav>
    </>
  )
}

const DateDisplay = ({ firstLabel, secondLabel, timestamp }) => {
  let label

  if (secondLabel) {
    label =
      Boolean(secondLabel) && Date.now() * 1000 > timestamp ? `${firstLabel}:` : `${secondLabel}:`
  } else {
    label = `${firstLabel}:`
  }

  return (
    <p className='text-xs font-semibold text-accent-3'>
      <span className='opacity-60'>{label}</span> {format(timestamp, 'MMM do yyyy, hh:mm a')}
    </p>
  )
}

const MissionCard = ({ current, week, startTimestamp, task1Text, task2Text }) => {
  return (
    <div
      className={classnames(
        'rounded-xl bg-pt-purple-darkest p-8 shadow-lg pool-party--box-widths',
        {
          'pool-party--border-flashy': current
        }
      )}
    >
      <div className='flex flex-col xs:flex-row'>
        <div className='relative bg-green z-20 text-center text-3xl font-black leading-none h-14 mb-8 skewed w-40'>
          <div
            className='flex justify-center flex-col bg-secondary absolute h-full z-10 w-full'
            style={{ left: 10, top: 10 }}
          >
            <h5 className='uppercase text-pink'>Week {week}</h5>
          </div>
        </div>

        <div className='xs:ml-12'>
          <DateDisplay timestamp={startTimestamp} firstLabel='Starts' secondLabel='Started' />
          <DateDisplay
            timestamp={add(new Date(startTimestamp), {
              days: 6
            })}
            firstLabel='Ends'
            secondLabel='Ended'
          />
          <DateDisplay
            timestamp={add(new Date(startTimestamp), {
              days: 7
            })}
            firstLabel='Claimable'
          />
        </div>
      </div>

      {/* style={{ borderColor: '#5940A9' }} */}
      <hr className='my-4 w-full pool-party--border-flashy' />

      <ul className='text-xs font-semibold'>
        <li className='mb-4'>
          <h6 className='text-white uppercase'>Mission #1:</h6>
          <h6 className='text-pt-purple-light'>
            {task1Text} <span className='text-flashy leading-tight font-semibold'>- 1x NFT</span>
          </h6>
        </li>

        <li className=''>
          <h6 className='text-white uppercase'>Mission #2:</h6>
          <h6 className='text-pt-purple-light'>
            {task2Text} <span className='text-flashy leading-tight font-semibold'>- 1x NFT</span>
          </h6>
        </li>
      </ul>
    </div>
  )
}

const MissionWeek1 = () => {
  return (
    <MissionCard
      current
      week='1'
      task1Text='Deposit or hold the minimum ($4 USDC) on Polygon'
      task2Text={
        <>
          Retweet the{' '}
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
        </>
      }
      startTimestamp={1647889200000} // March 21st @ 3pm EST
    />
  )
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
