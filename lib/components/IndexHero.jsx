import React, { useState } from 'react'
import { ReactFitty } from 'react-fitty'

import { ButtonLink } from 'lib/components/ButtonLink'
import { WistiaPlayer } from 'lib/components/WistiaPlayer'
import { useTotalPoolPrizeInterestUSD } from 'lib/hooks/useTotalPoolPrizeInterestUSD'

import Rocket from 'assets/images/rocketship@2x.png'
import Squiggle from 'assets/images/squiggle.svg'
import SquiggleMobile from 'assets/images/squiggle-mobile.svg'

const BySavingMoneyText = () => (<strong>just by saving your money</strong>)

const EveryWeekText = () => 'every week'

// const PoolCountUp = (props) => {
//   return <CountUp
//     start={props.value || 0}
//     end={props.value}
//     duration={1.4}
//     separator={','}
//     decimals={0}
//   />
// }

export const IndexHero = (
  props,
) => {
  let { data: totalPrizeInterestUSD, isFetched } = useTotalPoolPrizeInterestUSD()
  if (!isFetched || typeof totalPrizeInterestUSD === 'object') {
    totalPrizeInterestUSD = 34532
  }
  
  const [playVideo, setPlayVideo] = useState(false)

  const startVideo = (e) => {
    e.preventDefault()
    setPlayVideo(true)

    setTimeout(() => {
      setPlayVideo(false)
    }, 500)
  }

  return <>
    <div
      className='pool-container text-center font-bold text-xs xs:text-lg border-flashy purple-pink-gradient-animation mx-auto pt-4 pb-5 px-6 xs:mt-4 xs:leading-tight'
    >
      {/* <span
        role='img'
        aria-label='megaphone emoji'
        className='mx-2 text-xl block xs:inline-block'
      >📣</span> */}
       POOL Token and decentralized governance is live! <a
        href='#token'
        className='text-green trans'
      >Find out more</a> 
      {/* <span
        role='img'
        aria-label='megaphone emoji'
        className='mx-2 text-xl hidden xs:inline-block'
      >📣</span> */}
    </div>
    
    <div className='relative'>
      <div
        className='pool-container flex flex-col sm:flex-row justify-between pt-12 mx-auto'
      >
        <div
          className='relative hero-text-left mb-12 sm:mb-0'
        >
            <div className='w-3/4 xs:w-7/12 sm:w-full mx-auto'>
              <ReactFitty
                className='font-bold leading-none text-center'
              >
                <span className='text-flashy'>Win</span> by saving
              </ReactFitty>
              
              <ReactFitty
                className='font-bold leading-none text-center'
              >your money</ReactFitty>

              <div
                className='text-center mt-6 sm:mt-12'
              >
                <ButtonLink
                  width='w-full'
                  textSize='xl'
                  href='https://app.pooltogether.com'
                  as='https://app.pooltogether.com'
                >
                  Deposit now
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
              <WistiaPlayer
                play={playVideo}
              />

              <div
                className='bg-vid-circle rounded-full flex items-center justify-center hover:bg-highlight-2 trans'
              >
                <div
                  className='bg-vid-tri'
                />
              </div>
            </div>
          </button>
        </div>
      </div>

      <div className='pool-container bg-holographic flex flex-col items-center font-bold text-primary rounded-lg text-center mt-12 px-4 py-4 mx-auto'>
        <div className='flex items-center'>
          <img
            src={Rocket}
            className='w-12 h-12 xs:w-16 xs:h-16 sm:mr-4'
          />

          <span
            className='sm:leading-tight text-xs xs:text-lg sm:text-xl  sm:mr-auto'
          >Currently $X.XX million deposited and $YY,000 prizes weekly! {totalPrizeInterestUSD.toString()}</span>
        </div>
      </div>
    
      <div
        className='pool-container text-center relative flex flex-col sm:flex-row my-20 mx-auto'
      >
        <div
          className='bg-card rounded-xl mx-auto w-full sm:w-full py-8 sm:py-8 lg:px-12 lg:py-12 text-center sm:text-left'
        >
          <h1 className='text-center'>
            PoolTogether
          </h1>

          <img src={Squiggle} className='hidden xs:block mx-auto my-4' />
          <img src={SquiggleMobile} className='xs:hidden mx-auto my-4' />

          <div className='text-xs sm:text-2xl text-center mt-7'>
            is an open source and decentralized<br/> protocol for no-loss prize games
          </div>
        </div>
      </div>

    </div>
  </>
}
