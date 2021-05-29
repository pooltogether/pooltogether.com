import React, { useState } from 'react'
import { ReactFitty } from 'react-fitty'

import { ButtonLink } from 'lib/components/ButtonLink'
import { TVLAndWeeklyPrizesBanner } from 'lib/components/TVLAndWeeklyPrizesBanner'
import { WistiaPlayer } from 'lib/components/WistiaPlayer'
import { IndexHeroFeaturedIn } from 'lib/components/IndexHeroFeaturedIn'

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
        <div className='pool-container flex flex-col sm:flex-row justify-between pt-12 mx-auto'>
          <div className='relative hero-text-left mb-12 sm:mb-0'>
            <div className='w-3/4 xs:w-7/12 sm:w-full mx-auto'>
              <ReactFitty className='font-bold leading-none text-center'>
                <span className='text-flashy'>Save, pool funds,</span>
              </ReactFitty>

              <ReactFitty className='mt-2 font-bold leading-none text-center'>
                <span className='text-flashy'>& win prizes together</span>
              </ReactFitty>

              <div className='text-center mt-6 sm:mt-12'>
                <ButtonLink
                  width='w-full'
                  textSize='xl'
                  href='https://app.pooltogether.com'
                  as='https://app.pooltogether.com'
                >
                  Join the Pool
                </ButtonLink>
              </div>
            </div>
          </div>

          <div>
            <button
              onClick={startVideo}
              className='bg-vid-holo flex items-start justify-center trans'
              role='img'
            >
              <div className='bg-vid-holo--inner flex items-center justify-center'>
                <WistiaPlayer play={playVideo} />

                <div className='bg-vid-circle rounded-full flex items-center justify-center hover:bg-highlight-2 trans'>
                  <div className='bg-vid-tri' />
                </div>
              </div>
            </button>
          </div>
        </div>

        <TVLAndWeeklyPrizesBanner />

        <IndexHeroFeaturedIn />

        <div className='pool-container text-center relative flex flex-col sm:flex-row mt-10 mb-16 sm:my-20 mx-auto'>
          <div className='bg-card rounded-xl mx-auto w-full sm:w-full py-8 sm:py-8 lg:px-12 lg:py-12 text-center sm:text-left'>
            <h1 className='text-center'>PoolTogether</h1>

            <img src={Squiggle} className='hidden xs:block mx-auto my-4' />
            <img src={SquiggleMobile} className='xs:hidden mx-auto my-4' />

            <div className='text-xs sm:text-2xl text-center mt-7'>
              is an open source and decentralized
              <br /> protocol for no-loss prize games
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
