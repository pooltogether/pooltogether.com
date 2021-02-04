import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ReactFitty } from 'react-fitty'
import { ethers } from 'ethers'

import { ButtonLink } from 'lib/components/ButtonLink'
import { TotalPrizes } from 'lib/components/TotalPrizes'
import { WistiaPlayer } from 'lib/components/WistiaPlayer'
import { numberWithCommas } from 'lib/utils/numberWithCommas'

import Squiggle from 'assets/images/squiggle.svg'

export const IndexHero = (
  props,
) => {
  const [playVideo, setPlayVideo] = useState(false)

  const startVideo = (e) => {
    e.preventDefault()
    setPlayVideo(true)

    setTimeout(() => {
      setPlayVideo(false)
    }, 500)
  }

  return <>
    <div className='relative'>
      <div
        className='pool-container flex justify-between pt-12 mx-auto'
      >
        <div
          className=''
          style={{
            height: 'calc(40vh - 84px)',
            minHeight: 290,
            width: 420
          }}
        >
          <TotalPrizes>
            {(totalPrizeAmountUSD => {
              return <>
                <motion.div
                  animate={'enter'}
                  initial='initial'
                  transition={{ delay: 1 }}
                  variants={{
                    enter: {
                      scale: 1,
                      height: 'auto',
                      transition: {
                        duration: 0.25
                      }
                    },
                    initial: {
                      scale: 0,
                      height: 0,
                    },
                    exit: {
                      scale: 1,
                      height: 'auto',
                    }
                  }}
                >
                  <ReactFitty
                    className='text-flashy font-bold leading-none text-center'
                  >Win ${numberWithCommas(parseFloat(ethers.utils.formatUnits(
                    totalPrizeAmountUSD,
                    '18'
                  )), { precision: 0 })}</ReactFitty>
                  
                  <ReactFitty
                    className='text-flashy font-bold leading-none text-center'
                  >every week</ReactFitty>

                  <ReactFitty
                    className='mt-4 mb-2'
                  ><strong>just by saving your money.</strong></ReactFitty>

                  {/* <h1
                    className='banner-text mx-auto font-bold'
                  >
                    <span className='text-flashy sm:leading-none'>
                    </span>
                    
                  </h1> */}

                  <div
                    className='text-center mt-4'
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
                </motion.div>
              </>
            })}
          </TotalPrizes>
        </div>


        <div>
          <button
            onClick={startVideo}
            className='bg-vid-holo flex items-start justify-center trans'
            role='img'
            aria-label='Holographic gradient'
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

      
      <div
        className='text-center relative pb-12 sm:pb-0'
      >
        <div
          className='pool-container flex flex-col sm:flex-row my-20 mx-auto'
        >
          <div
            className='bg-card rounded-xl mx-auto w-full xs:w-9/12 sm:w-full py-8 sm:py-8 lg:px-12 lg:py-12 text-center sm:text-left'
          >
            <h1 className='text-center'>
              PoolTogether
            </h1>

            <img src={Squiggle} className='mx-auto my-4' />

            <div className='text-xs sm:text-2xl text-center mt-7'>
              is an open source and decentralized<br/> protocol for no-loss prize games
            </div>
          </div>

        </div>
      </div>

    </div>
  </>
}
