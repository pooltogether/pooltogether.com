import React, { useState } from 'react'

import { WistiaPlayer } from 'lib/components/WistiaPlayer'

const HowItWorksBox = (props) => {
  return (
    <>
      <div className={`w-full flex justify-between items-center trans mb-10 sm:mb-10`}>
        <h1 className='uppercase'>{props.title}</h1>

        <div className='w-full pl-6 text-xs xs:text-sm sm:text-base lg:text-xl'>
          {props.description}
        </div>
      </div>
    </>
  )
}

export const IndexHowItWorks = () => {
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
      <div className='pool-container mx-auto pt-24 pb-8'>
        <h5 className='uppercase text-highlight-1 pb-4'>How it works:</h5>

        <div className='flex flex-col sm:flex-row w-full justify-between'>
          <div className='w-1/2'>
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

          <div className='w-1/2 ml-20'>
            <HowItWorksBox title='1.' description='Deposit money for a chance to win' />

            <HowItWorksBox title='2.' description={`Prizes are awarded each week`} />

            <HowItWorksBox
              title='3.'
              description={`Even if you don't win, keep all of your money!`}
            />
          </div>
        </div>
      </div>
    </>
  )
}
