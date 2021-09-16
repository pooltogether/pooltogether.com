import React, { useState } from 'react'
// import { ReactFitty } from 'react-fitty'

import { ButtonLink } from 'lib/components/ButtonLink'
import { WeeklyPrizeAmount } from 'lib/components/WeeklyPrizeAmount'
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
        <div className='pool-container flex flex-col sm:flex-row justify-between mt-32 mx-auto'>
          <div className='relative w-full sm:w-5/12'>
            <div className='mx-auto'>
              {/* <ReactFitty className='font-bold leading-none text-center'>
                <span className='text-flashy'>Save, pool funds,</span>
              </ReactFitty> */}
              {/* <ReactFitty className='mt-2 font-bold leading-none text-center'>
                <span className='text-flashy'>& win prizes together</span>
              </ReactFitty> */}
              {/* text-flashy */}
              <span className='font-semibold font-sans-regular text-4xl lg:text-6xl leading-tight text-new-gradient'>
                Win by saving with PoolTogether.
              </span>
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

          <div className='w-full sm:w-1/2 mx-auto'>
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
