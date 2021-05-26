import React from 'react'

import MediumLogo from 'assets/images/logo-medium-white.svg'
import GithubLogo from 'assets/images/logo-github-white.svg'
import DiscordLogo from 'assets/images/logo-discord-white.svg'
import TwitterLogo from 'assets/images/logo-twitter-white.svg'

export const SocialCTAs = () => {
  return (
    <>
      <div className='pt-6 flex flex-col sm:flex-row justify-between w-10/12 xs:w-10/12 sm:w-full lg:w-10/12'>
        <a
          href='https://twitter.com/PoolTogether_'
          className='interactable-chip interactable-chip-main-bg items-center justify-center my-2'
        >
          <img alt={`Twitter logo`} src={TwitterLogo} className='h-6 xs:h-8' />
        </a>

        <a
          href='https://discord.gg/hxPhPDW'
          className='interactable-chip interactable-chip-main-bg items-center justify-center my-2'
        >
          <img alt={`Discord logo`} src={DiscordLogo} className='h-6 xs:h-8' />
        </a>

        <a
          href='https://github.com/pooltogether'
          className='interactable-chip interactable-chip-main-bg items-center justify-center my-2'
        >
          <img alt={`Github logo`} src={GithubLogo} className='h-6 xs:h-8' />
        </a>

        <a
          href='https://medium.com/pooltogether'
          className='interactable-chip interactable-chip-main-bg items-center justify-center my-2'
        >
          <img alt={`Medium logo`} src={MediumLogo} className='h-6 xs:h-8' />
        </a>
      </div>
    </>
  )
}
