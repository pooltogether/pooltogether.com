import React from 'react'

import DeFiPulseLogo from 'assets/images/defi-pulse-logo@2x.png'

export const IndexFeaturedIn = () => {
  return <>
    <div className='bg-darkened'>
      <div className='pool-container mx-auto py-16 px-2 xs:px-12'>

        <h4
          className='text-center mb-10'
        >
          🎊&nbsp; Featured on &nbsp;🎊
        </h4>

        <a
          href='https://defipulse.com/'
          target='_blank'
          rel='noopener noreferrer'
          title='defi pulse link'
        >
          <img
            src={DeFiPulseLogo}
            className='mx-auto w-auto defi-pulse-image'
            alt='defi pulse logo'
          />
        </a>
      </div>
    </div>
  </>
}
