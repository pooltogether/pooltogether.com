import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ethers } from 'ethers'

import { useTranslation } from 'lib/../i18n'
import { ButtonLink } from 'lib/components/ButtonLink'
import { TotalPrizes } from 'lib/components/TotalPrizes'
import { WistiaPlayer } from 'lib/components/WistiaPlayer'
import { PoolCountUp } from 'lib/components/PoolCountUp'
import { displayAmountInEther } from 'lib/utils/displayAmountInEther'

export const IndexHero = (
  props,
) => {
  const { t } = useTranslation()

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
        className='pool-container pt-12 mx-auto'
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
                animate={totalPrizeAmountUSD.gt(0) ? 'enter' : null}
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
                <h1
                  className='banner-text mx-auto font-bold'
                >
                  <span className='text-flashy sm:leading-none'>Win $
                    <PoolCountUp
                      fontSansRegular
                      decimals={0}
                      duration={8}
                      start={0}
                      end={parseFloat(ethers.utils.formatUnits(
                        totalPrizeAmountUSD,
                        '18'
                      ))}
                    /> every week
                  </span>
                  <div className='banner-text--small'>
                    just by saving your money.
                  </div>
                </h1>

                <div
                  className='text-center'
                >
                  <ButtonLink
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

      
      <div
        clipPath='url(#wave)'
        className='bg-vid text-center relative pb-12 sm:pb-0'
      >
        <div className='custom-shape-divider-top-1600195439 pointer-events-none'>
          <svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
            <path
              d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
              fill='#290B5A'
            ></path>
          </svg>
        </div>
        
        <div
          className='pool-container flex flex-col sm:flex-row pt-10 sm:mt-32 sm:pt-20 text-left mx-auto'
        >
          <div
            className='mx-auto xs:w-9/12 sm:w-1/2 pt-8 sm:pt-8 lg:px-12 lg:py-12 text-center sm:text-left'
          >
            <h2
              className='text-flashy'
            >
              PoolTogether
            </h2>

            <div className='font-number font-bold text-xs sm:text-lg sm:pr-20 lg:pr-10 pb-2 sm:pb-0'>
              is a protocol for no-loss money games powered by Ethereum.
            </div>
          </div>

          <div
            className='flex flex-col items-center z-10'
          >
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
                  className='bg-vid-circle flex items-center justify-center hover:bg-highlight-2 trans'
                >
                  <div
                    className='bg-vid-tri'
                  />
                </div>
              </div>
            </button>
            
            <button
              onClick={startVideo}
              className='text-center font-bold mb-1 mb-4 text-white hover:text-highlight-2 trans hover:border-highlight-2 border-b border-transparent'
            >
              Watch how it works!
            </button>
          </div>
        </div>
      </div>

    </div>
  </>
}
