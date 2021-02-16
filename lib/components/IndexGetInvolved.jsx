import React from 'react'

import { SocialCTAs } from 'lib/components/SocialCTAs'

export const IndexGetInvolved = () => {
  return <>
    <div className='bg-secondary bg-get-involved'>
      <div className='pool-container mx-auto py-16 sm:py-24'>

        <h1
          className='text-center'
        >
          Get involved
        </h1>


        <div className='flex flex-col items-center rounded-lg p-4 py-12 sm:p-10 mt-8 bg-overlay'>
          <h3
            className='my-0 leading-tight mb-4 w-3/4 text-center'
          >
            Join our growing community
          </h3>
          <div
            className='font-normal w-3/4 xs:w-2/3 sm:w-1/2 lg:w-1/3 text-center text-xs sm:text-sm'
          >
            Make your contribution or get community support 24/7.
          </div>

          <SocialCTAs />
        </div>
        
      </div>
    </div>
  </>
}
