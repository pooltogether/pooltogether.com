import React, { useState, useRef, useEffect } from 'react'
import { SquareButton, SquareButtonTheme, SquareButtonSize } from '@pooltogether/react-components'

import { HeaderLogo } from 'lib/components/HeaderLogo'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { VideoPlayer } from 'lib/components/VideoPlayer'

export const PoolParty = () => {
  const [isPlaying, setIsPlaying] = useState(true)
  const path = '/pool-party/season1'
  const settings = {
    className: 'center',
    infinite: true,
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
        breakpoint: 1480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 940,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1
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
            <VideoPlayer files={[`${path}/01_Noodles_v002.mp4`]} isPlaying={isPlaying} />
            <VideoPlayer files={[`${path}/02_Glasses_v002.mp4`]} isPlaying={isPlaying} />
            <VideoPlayer files={[`${path}/03_BeachBall_v002.mp4`]} isPlaying={isPlaying} />
            <VideoPlayer files={[`${path}/04_Thongs_v002.mp4`]} isPlaying={isPlaying} />
            <VideoPlayer files={[`${path}/05_Cocktail_v002.mp4`]} isPlaying={isPlaying} />
            <VideoPlayer files={[`${path}/06_Unicorn_v002.mp4`]} isPlaying={isPlaying} />
            <VideoPlayer files={[`${path}/07_Trophy_v002.mp4`]} isPlaying={isPlaying} />
            <VideoPlayer files={[`${path}/08_Pooly_v002.mp4`]} isPlaying={isPlaying} />
          </Slider>
        </div>

        <div className='pool-container mx-auto flex flex-col items-center text-base z-10 relative pt-20'></div>
      </div>
    </>
  )
}
