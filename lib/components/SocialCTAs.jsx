import React from 'react'

import {
  MediumIconSvg,
  TwitterIconSvg,
  DiscordIconSvg,
  GithubIconSvg
} from 'lib/components/SvgComponents'

export const SocialCTAs = () => {
  return (
    <>
      <div className='pt-6 flex justify-between w-8/12 xs:w-5/12 sm:w-4/12 lg:w-1/4'>
        <a
          href='https://twitter.com/PoolTogether_'
          className='my-2 text-white hover:text-green w-10 t-1 relative'
        >
          <TwitterIconSvg />
        </a>

        <a href='/discord' className='my-2 text-white hover:text-green w-10'>
          <DiscordIconSvg />
        </a>

        <a href='https://github.com/pooltogether' className='my-2 text-white hover:text-green w-10'>
          <GithubIconSvg />
        </a>

        <a
          href='https://medium.com/pooltogether'
          className='my-2 text-white hover:text-green w-10 t-1 relative'
        >
          <MediumIconSvg />
        </a>
      </div>
    </>
  )
}
