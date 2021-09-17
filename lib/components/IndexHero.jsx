import React, { useState } from 'react'
import FeatherIcon from 'feather-icons-react'

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
        <div className='pool-container flex flex-col sm:flex-row justify-between mt-24 mx-auto'>
          <div className='relative w-full sm:w-5/12 mt-6'>
            <span
              className='font-medium font-inter text-4xl lg:text-6xl text-new-gradient'
              style={{ lineHeight: 1.125 }}
            >
              Win by saving with PoolTogether.
            </span>
            <p className='text-accent-1 text-lg mt-4'>
              PoolTogether is a crypto-powered savings protocol based on{' '}
              <a href='https://en.wikipedia.org/wiki/Premium_Bond'>Premium Bonds</a>. Save your
              money and have a chance to win prizes every week.
            </p>
            <p className='text-xl mt-8'>The more you save, the more you win!</p>
            <div className='mt-4' style={{ width: 446 }}>
              <a
                href='https://app.pooltogether.com'
                className='new-btn block text-center text-xl w-full capitalize text-xs px-2 py-2 mt-2'
              >
                Start saving & winning{' '}
                <FeatherIcon icon={'chevron-right'} className='inline-block w-6 h-6 -mt-1' />
              </a>
            </div>
          </div>

          <div className='w-full sm:w-1/2'>
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

const BinanceAcademySvg = (props) => {
  return (
    <svg
      {...props}
      className='fill-current'
      height='100%'
      viewBox='0 0 148 38'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#prefix__clip0)'>
        <path d='M53.03 18.504h-6.91V4.148h6.76c2.978 0 4.795 1.47 4.795 3.707v.029c0 1.618-.864 2.53-1.906 3.089 1.667.647 2.71 1.588 2.71 3.53v.03c0 2.676-2.144 3.97-5.45 3.97zm1.458-10.09c0-.942-.744-1.471-2.084-1.471h-3.157v3.03h2.948c1.4 0 2.293-.442 2.293-1.53v-.03zm.804 5.736c0-.97-.714-1.56-2.352-1.56h-3.693v3.149h3.812c1.4 0 2.263-.5 2.263-1.56v-.029h-.03zm6.7 4.354V4.148h3.187v14.356h-3.186zm17.66 0l-7.028-9.12v9.12h-3.157V4.148h2.948l6.82 8.855V4.148h3.157v14.356h-2.74zm17.093 0l-1.34-3.207h-6.134l-1.34 3.207h-3.246L90.908 4.03h2.949l6.224 14.474h-3.336zm-4.407-10.65l-1.936 4.648h3.871l-1.935-4.647zm20.28 10.65l-7.028-9.12v9.12h-3.157V4.148h2.948l6.82 8.855V4.148h3.156v14.356h-2.739zm13.251.264c-4.288 0-7.444-3.265-7.444-7.383v-.03c0-4.089 3.126-7.413 7.594-7.413 2.739 0 4.377.912 5.717 2.206l-2.025 2.324c-1.132-1-2.263-1.618-3.722-1.618-2.442 0-4.23 2-4.23 4.472v.03c0 2.47 1.728 4.5 4.23 4.5 1.667 0 2.68-.647 3.811-1.677l2.025 2.03c-1.489 1.56-3.127 2.56-5.956 2.56zm8.547-.264V4.148h10.959v2.824h-7.773v2.912h6.85v2.824h-6.85v3.001h7.892v2.824h-11.078v-.03zM77.269 32.86h-1.905l-1.043-2.442h-4.854l-1.072 2.442H66.55l4.526-10.238h1.668l4.526 10.238zm-5.39-8.09l-1.756 4.06h3.543l-1.787-4.06zm11.763 8.266c-3.007 0-5.24-2.294-5.24-5.236 0-2.913 2.203-5.266 5.3-5.266 1.906 0 3.037.647 4.02 1.589l-1.161 1.323c-.834-.764-1.698-1.265-2.889-1.265-1.965 0-3.395 1.589-3.395 3.59 0 2 1.43 3.618 3.395 3.618 1.25 0 2.085-.5 2.948-1.324l1.162 1.147c-1.013 1.118-2.204 1.824-4.14 1.824zm16.439-.176h-1.906l-1.043-2.442h-4.854l-1.072 2.442H89.36l4.526-10.238h1.668l4.527 10.238zm-5.39-8.09l-1.758 4.06h3.544l-1.787-4.06zm11.465 8.09h-3.842V22.68h3.842c3.245 0 5.479 2.206 5.479 5.06-.03 2.912-2.263 5.119-5.479 5.119zm0-8.531h-2.025v6.913h2.025c2.173 0 3.573-1.442 3.573-3.442s-1.429-3.471-3.573-3.471zm15.812-.03h-5.807v2.648h5.152v1.588h-5.152v2.736h5.897v1.589h-7.713V22.68h7.623V24.3zm7.892 6.06h-.06l-3.216-4.766v7.267h-1.786V22.68h1.935l3.127 4.795 3.126-4.795h1.937V32.86h-1.817v-7.296l-3.246 4.795zm13.103 2.5h-1.817v-4l-4.08-6.149h2.145l2.888 4.502 2.919-4.502h2.084l-4.08 6.12v4.03h-.059zm-80.017-5.912H46.12v1.706h16.826v-1.706zM4.34 14.327L.111 18.503 4.34 22.68l4.229-4.177-4.229-4.178zm14.532-5.972l7.266 7.178 4.23-4.178L18.871 0 7.377 11.355l4.23 4.178 7.265-7.178zm14.533 5.971l-4.229 4.178 4.229 4.177 4.228-4.177-4.228-4.178zM18.872 28.682l-7.266-7.178-4.229 4.178 11.495 11.355 11.495-11.355-4.229-4.178-7.266 7.178zm0-5.971l4.229-4.178-4.229-4.177-4.228 4.177 4.228 4.177z' />
      </g>
      <defs>
        <clipPath id='prefix__clip0'>
          <path fill='#fff' transform='translate(.111)' d='M0 0h146.991v37.037H0z' />
        </clipPath>
      </defs>
    </svg>
  )
}
