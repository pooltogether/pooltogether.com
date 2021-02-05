import React from 'react'

import { EmailSignup } from 'lib/components/EmailSignup'

import MediumLogo from 'assets/images/logo-medium-white.svg'
import GithubLogo from 'assets/images/logo-github-white.svg'
import DiscordLogo from 'assets/images/logo-discord-white.svg'
import TwitterLogo from 'assets/images/logo-twitter-white.svg'

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

          <div className='pt-6 sm:pt-12 flex flex-col sm:flex-row justify-between w-10/12 xs:w-10/12 sm:w-full lg:w-10/12'>
            <a
              href='https://twitter.com/PoolTogether_'
              className='interactable-chip my-2'
            >
              <img
                alt={`Twitter logo`}
                src={TwitterLogo}
                className='h-6 xs:h-8'
              />
            </a>

            <a
              href='https://discord.gg/hxPhPDW'
              className='interactable-chip my-2'
            >
              <img
                alt={`Discord logo`}
                src={DiscordLogo}
                className='h-6 xs:h-8'
              />
            </a>
            
            <a
              href='https://github.com/pooltogether'
              className='interactable-chip my-2'
            >
              <img
                alt={`Github logo`}
                src={GithubLogo}
                className='h-6 xs:h-8'
              />
            </a>
            
            <a
              href='https://medium.com/pooltogether'
              className='interactable-chip my-2'
            >
              <img
                alt={`Medium logo`}
                src={MediumLogo}
                className='h-6 xs:h-8'
              />
            </a>
          </div>
        </div>



        {/* <div className='flex flex-col items-center rounded-lg p-4 py-12 sm:p-10 mt-12 bg-overlay'>
          <h3
            className='my-0 leading-tight mb-4 w-3/4 text-center'
          >
            Sign up for our newsletter
          </h3>
          <div
            className='font-normal w-3/4 xs:w-2/3 sm:w-1/2 lg:w-1/3 text-center text-xs sm:text-sm'
          >
            Get the latest updates about pools and new releases.
          </div>

          <div className='pt-6 w-10/12 sm:w-full'>
            <div className='items-center text-center block h-32 sm:h-40'>
              <EmailSignup
                flexWrapperClasses=''
                listId={process.env.NEXT_JS_MAILCHIMP_LIST_GENERAL_ID}
                successMessage={<>
                  <div className='text-green font-bold'>
                    Nice.
                    <br />You'll be getting all the good PoolTogether news!
                  </div>
                </>}
              />
            </div>
          </div>
        </div> */}


      </div>
    </div>
  </>
}
