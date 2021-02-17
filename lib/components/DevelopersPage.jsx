import React from 'react'

import { ButtonLink } from 'lib/components/ButtonLink'
import { SocialCTAs } from 'lib/components/SocialCTAs'

import PoolBlob from 'assets/images/pool-blob@2x.png'
import PrizeIllustration from 'assets/images/prize_transparent.png'

export const DevelopersPage = (props) => {
  return <>
    <div
      className='pool-container mx-auto flex flex-col text-base h-full z-10 relative pt-10 sm:pt-0'
    >
      <h1
        className='text-center text-flashy text-4xl sm:text-7xl lg:text-10xl'
      >
        Build Together
      </h1>

      <h4
        className='mb-12 text-center sm:w-1/2 lg:w-1/3 mx-auto'
      >
        Create your own prize pools and govern the protocol
      </h4>

      <div className='flex flex-col items-center'>
        <ButtonLink
          href='https://docs.pooltogether.com/tutorials/creating-a-prize-pool'
          as='https://docs.pooltogether.com/tutorials/creating-a-prize-pool'
          className='community-button flex items-center underline font-bold mb-7'
        >
          Prize pool builder quick guide
        </ButtonLink>

        <a
          href='https://docs.pooltogether.com'
          as='https://docs.pooltogether.com'
          className='community-button flex items-center underline font-bold'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='feather feather-file-text mr-2'
          >
            <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'></path>
            <polyline points='14 2 14 8 20 8'></polyline>
            <line x1='16' y1='13' x2='8' y2='13'></line>
            <line x1='16' y1='17' x2='8' y2='17'></line>
            <polyline points='10 9 9 9 8 9'></polyline>
          </svg> Developer Documentation
        </a>
      </div>

      <img
        src={PrizeIllustration}
        style={{ maxWidth: 400 }}
        className='mx-auto my-9 w-full'
      />
    </div>

    <div
      className='bg-developers-art-waves pt-24 lg:pt-64 px-4 sm:px-0'
    >

    </div>

    <div
      className='pool-container mx-auto flex flex-col text-base h-full z-10 relative pt-20 pb-12'
    >
      <div className='flex flex-col-reverse sm:flex-row sm:items-center sm:justify-center text-center sm:text-left'>
        <div className='max-w-lg mx-auto mt-10 sm:mt-0'>
          <h2>
            Participate in
            <br/><span className='text-flashy'>Decentralized Governance</span>
          </h2>

          <p className='my-4'>
            Share your ideas, make proposals, and vote. The protocol is solely controlled by the POOL token holders. 
          </p>

          <ButtonLink
            href='https://medium.com/p/23b09f36db48'
            as='https://medium.com/p/23b09f36db48'
            className='items-center underline font-bold my-4'
          >
            Learn more about governance
          </ButtonLink>
        </div>

        <div className='mx-auto'>
          <img src={PoolBlob} className='w-full xs:w-auto max-w-sm mx-auto' />
        </div>

      </div>
    </div>

    <div className='bg-secondary bg-get-involved'>
      <div className='pool-container mx-auto py-16'>

        <div className='flex flex-col items-center rounded-lg p-4 py-12 sm:p-10 bg-overlay'>
          <h3
            className='my-0 leading-tight mb-4 w-3/4 text-center'
          >
            Stuck, or not sure where to start?
          </h3>

          <div
            className='font-normal w-3/4 xs:w-2/3 sm:w-1/2 lg:w-1/3 text-center text-xs sm:text-sm'
          >
            Join one of our community channels and get support 24/7. 
          </div>

          <SocialCTAs />
        </div>

      </div>
    </div>

  </>
}
