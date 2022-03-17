import React, { useState, useRef, useEffect } from 'react'
import FeatherIcon from 'feather-icons-react'
import { SquareButton, SquareButtonTheme, SquareButtonSize } from '@pooltogether/react-components'
import { add, format } from 'date-fns'

import Slider from 'react-slick'
import { HeaderLogo } from 'lib/components/HeaderLogo'
import { VideoPlayer } from 'lib/components/VideoPlayer'

export const PoolParty = () => {
  const [isPlaying, setIsPlaying] = useState(true)
  const path = '/pool-party/season1'
  const settings = {
    className: 'center',
    speed: 600,
    autoplay: true,
    autoplaySpeed: 8500,
    cssEase: 'ease',
    pauseOnHover: true,
    swipeToSlide: true,
    arrows: true,
    focusOnSelect: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 5480,
        settings: {
          // slidesToShow: 4
        }
      },
      {
        breakpoint: 1480,
        settings: {
          // slidesToShow: 3
        }
      },
      {
        breakpoint: 940,
        settings: {
          // centerMode: true,
          // slidesToShow: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          // centerMode: true,
          // slidesToShow: 1
        }
      }
    ]
  }

  return (
    <>
      <div className='font-averta'>
        <div className='header pool-container w-full z-30 mx-auto'>
          <div className='flex justify-between items-center w-full px-4 sm:px-0 pt-8 pb-2 sm:pt-2 mx-auto'>
            <HeaderLogo centered={false} />
            <div className='text-white'>
              <div className='flex flex-col items-end'>
                <p className='text-center text-flashy text-xl leading-tight xs:mt-2'>POOL PARTY</p>
                <p className='font-semibold'>POOLTOGETHER - SEASON 1 NFTs</p>
              </div>
            </div>
          </div>
        </div>

        <div className='sm:-t-4 relative w-full'>
          <Slider {...settings}>
            <VideoPlayer files={[`${path}/01_Noodles_v002.webm`]} isPlaying={isPlaying} />
            <VideoPlayer files={[`${path}/02_Glasses_v002.webm`]} isPlaying={isPlaying} />
            <VideoPlayer files={[`${path}/03_BeachBall_v002.webm`]} isPlaying={isPlaying} />
            <VideoPlayer files={[`${path}/04_Thongs_v002.webm`]} isPlaying={isPlaying} />
            <VideoPlayer files={[`${path}/05_Cocktail_v002.webm`]} isPlaying={isPlaying} />
            <VideoPlayer files={[`${path}/06_Unicorn_v002.webm`]} isPlaying={isPlaying} />
            <VideoPlayer files={[`${path}/07_Trophy_v002.webm`]} isPlaying={isPlaying} />
            <VideoPlayer files={[`${path}/08_Pooly_v002.webm`]} isPlaying={isPlaying} />
          </Slider>
        </div>

        <div className='pool-container mx-auto flex flex-col items-center text-base z-10 relative py-20 text-white'>
          <h3 className='uppercase mb-4'>How it works:</h3>
          <ol className='list-decimal w-full xs:w-10/12  sm:w-1/2 px-6'>
            <li className='mb-2'>
              Complete the weekly missions by the end of Season 1 to earn claimable collectibles
              each week.
            </li>
            <li className='mb-2'>
              {' '}
              Qualifiers NFTs will unlock within 24 hours after weekly missions conclude.{' '}
            </li>
            <li className='mb-2'>
              Didn’t finish on time? You will have{' '}
              <span className='text-default font-semibold'>(at least)</span> one more week!
            </li>
          </ol>

          <p className='text-xs font-semibold text-default mt-6 text-center'>
            Season 1:
            <br />
            March 21st - May 17th, 2022
          </p>

          <h3 className='uppercase mb-4 mt-32'>This week's mission:</h3>

          <MissionWeek1 />
          <h3 className='uppercase mb-4 mt-32'>Previous missions:</h3>

          <div className='bg-darkened rounded-xl bg-purple-vibrant w-full xs:w-10/12 sm:w-1/2 p-8 text-center text-default-soft'>
            None yet, check back next week!
          </div>
        </div>
      </div>
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
      <span className='opacity-60'>{label}</span> {format(timestamp, 'MMM do, yyyy - hh:mm a')}
    </p>
  )
}

const MissionCard = ({ week, startTimestamp, task1Text, task2Text }) => {
  return (
    <div className='rounded-xl bg-purple-vibrant w-full xs:w-10/12 sm:w-1/2 p-8'>
      <h5 className='uppercase text-pink'>Week {week}</h5>
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

      <hr className='my-3 bg-pt-purple w-full' />

      <ul className='text-xs text-pt-purple-light font-semibold'>
        <li className='mb-4'>
          {task1Text}{' '}
          <span className='text-white'>
            {' '}
            <br />
            1x NFT
          </span>
        </li>

        <li className=''>
          {task2Text}{' '}
          <span className='text-white'>
            {' '}
            <br />
            1x NFT
          </span>
        </li>
      </ul>
    </div>
  )
}

const MissionWeek1 = () => {
  return (
    <MissionCard
      week='1'
      task1Text='Check for prizes at least once this week'
      task2Text={
        <>
          Onboard a friend to PT,{' '}
          <a
            href=''
            className='text-highlight-1 underline inline-flex items-center'
            target='_blank'
          >
            {' '}
            Fill in form <FeatherIcon icon='external-link' className='ml-2 trans w-5 h-5' />
          </a>
        </>
      }
      startTimestamp={1647889200000} // March 21st @ 3pm EST
    />
  )
}
