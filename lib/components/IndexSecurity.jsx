import React from 'react'

import { ButtonLink } from 'lib/components/ButtonLink'

import SecurityLocksSvg from 'assets/images/security-art-locks@2x.png'

export const IndexSecurity = () => {
  const securityImg = <img
    src={SecurityLocksSvg}
    className='max-w-full'
  />

  return <>
    <div
      className='bg-secondary'
    >
      <div
        className='pool-container mx-auto py-8 sm:pt-24'
      >
        <div
          className='flex items-center justify-between'
        >
          <div
            className='flex flex-col sm:w-2/3'
          >
            <h1
              className='leading-10 sm:leading-tight'
            >
              <span
                className='text-flashy'
                style={{ display: 'block' }}
              >
                Security
              </span> <div className='-mt-3 block'>
                &amp; risks
              </div>
            </h1>

            <div
              className='w-1/2 xs:w-1/3 sm:hidden mt-6'
            >
              {securityImg}
            </div>

            <p
              className='font-number text-xs sm:text-lg pr-12 py-6 sm:pb-12'
            >
              PoolTogether is an open-source and decentralized protocol that is provided on an "as is" and "as available" basis. The protocol has unique risks associated with its use. It is important to understand these risks before using the protocol.
            </p>

            <div
              className='sm:w-1/2'
            >
              <ButtonLink
                href='https://docs.pooltogether.com/security/risks'
                as='https://docs.pooltogether.com/security/risks'
                className='mb-12'
              >
                Learn about Risk
              </ButtonLink>
            </div>
          </div>

          <div
            className='hidden sm:block w-1/2 sm:-mt-10'
          >
            {securityImg}
          </div>
        </div>
      </div>

    </div>
  </>
}
