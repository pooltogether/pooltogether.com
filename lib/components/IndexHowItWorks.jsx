import React from 'react'

import SquigglePurple from 'assets/images/squiggle-purple.svg'

const HowItWorksBox = (props) => {
  return <>
    <div
      className={`bg-default rounded-lg shadow-xl trans how-it-works-box bg-secondary px-6 py-8 sm:px-8 sm:py-12 lg:pb-20 sm:-mx-8 mb-10 sm:mb-10 sm:max-w-1/3 lg:max-w-sm`}
    >
      <h4 className='how-it-works-box-title text-highlight-2 uppercase sm:pb-2'>
        {props.title}
      </h4>

      <img src={SquigglePurple} className='mt-2 sm:mt-4 mb-5 sm:mb-8' />

      <div className='text-xs xs:text-sm sm:text-base lg:text-xl'>
        {props.description}
      </div>
    </div>
  </>
}

export const IndexHowItWorks = () => {
  return <>
    <div className='bg-secondary'>
      <div
        className='bg-how-art-waves pt-24 px-4 sm:px-0'
      >
        <div className='pool-container mx-auto pb-8'>
          <div className='flex items-center justify-between'>
            <h1
              className='leading-10 sm:leading-tight'
            >
              <div
                className='text-flashy'
              >How</div> <div className='block -mt-2'>it works</div>
            </h1>
          </div>
        </div>

        <div className='pool-container mx-auto flex flex-col sm:flex-row justify-between'>
          <HowItWorksBox
            title='Get tickets'
            description='Deposit into any prize pool and instantly get tickets.'
          />

          <HowItWorksBox
            title='Win prizes'
            description={`As long as you have deposits you're eligible to win prizes. Prizes are made up of the all the interest earned on deposited money in the pools.`}
          />

          <HowItWorksBox
            title='Never lose'
            description='Remove your deposit at anytime. As long as you stay in the pools you continue to be eligible to win.'
          />
        </div>
      </div>
    </div>
  </>
}
