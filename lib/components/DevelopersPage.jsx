import React from 'react'
import Link from 'next/link'
import { SquareLink, SquareButtonTheme, SquareButtonSize } from '@pooltogether/react-components'
import { useTranslation, Trans } from 'react-i18next'

import { SocialCTAs } from 'lib/components/SocialCTAs'

import PoolBlob from 'assets/images/pool-blob@2x.png'
import PrizeIllustration from 'assets/images/prize_transparent.png'

export const DevelopersPage = (props) => {
  const { t } = useTranslation()
  return (
    <>
      <div className='pool-container mx-auto flex flex-col text-base h-full z-10 relative'>
        <h1 className='text-center text-flashy text-4xl sm:text-7xl lg:text-10xl'>
          {t('buildTogether', 'Build Together')}
        </h1>

        <h4 className='mb-12 text-center sm:w-1/2 lg:w-1/3 mx-auto leading-snug'>
          {t('createPrizePoolsAndGovern', 'Create your own prize pools and govern the protocol.')}
        </h4>

        <div className='flex flex-col items-center'>
          {/* <ButtonLink
            href='https://docs.pooltogether.com/tutorials/creating-a-prize-pool'
            as='https://docs.pooltogether.com/tutorials/creating-a-prize-pool'
            className='community-button flex items-center underline font-bold mb-7'
          >
            v4 (Tsunami) integration guide
          </ButtonLink> */}

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
            </svg>{' '}
            {t('developerDocumentation', 'Developer Documentation')}
          </a>
        </div>

        <img src={PrizeIllustration} style={{ maxWidth: 400 }} className='mx-auto my-9 w-full' />
      </div>

      <div className='pool-container mx-auto flex flex-col text-base h-full z-10 relative sm:pb-40 pt-20 pb-12'>
        <div className='flex flex-col-reverse sm:flex-row sm:items-center sm:justify-center text-center sm:text-left'>
          <div className='max-w-2xl mx-auto sm:mx-0 mt-10 sm:mt-0'>
            <div>
              <h2 className='leading-snug'>
                <Trans
                  i18nKey={'participateInDecentralizedGovernance'}
                  components={{ style: <span className='text-flashy' /> }}
                />
              </h2>

              <p className='my-4 leading-normal'>
                {t(
                  'shareIdeasOnPoolTogether',
                  'Share your ideas, make proposals, and vote. The protocol is solely controlled by the POOL token holders.'
                )}
              </p>
            </div>

            <div className='mt-8'>
              <SquareLink
                chevron
                Link={Link}
                size={SquareButtonSize.md}
                theme={SquareButtonTheme.teal}
                href='https://medium.com/p/23b09f36db48'
                as='https://medium.com/p/23b09f36db48'
                className='items-center block sm:inline'
              >
                {t('learnMoreAboutGovernance', 'Learn more about governance')}
              </SquareLink>
            </div>

            <div className='mt-8'>
              <SquareLink
                chevron
                Link={Link}
                size={SquareButtonSize.md}
                theme={SquareButtonTheme.tealOutline}
                href='https://gov.pooltogether.com'
                as='https://gov.pooltogether.com'
                className='items-center my-4 block sm:inline'
              >
                {t('joinTheDiscussion', 'Join the discussion')}
              </SquareLink>
            </div>
          </div>

          <div className='mx-auto sm:ml-auto sm:mr-0'>
            <img src={PoolBlob} className='w-10/12 sm:w-auto max-w-sm mx-auto' />
          </div>
        </div>
      </div>

      <div className='bg-slick-slide'>
        <div className='pool-container mx-auto py-16'>
          <div className='flex flex-col items-center rounded-lg p-0 py-12 sm:p-10'>
            <h3 className='my-0 leading-tight mb-4 text-center'>
              {t('stuckOrNotSureWhereToStart', 'Stuck, or not sure where to start?')}
            </h3>

            <div className='font-normal w-10/12 xs:w-2/3 sm:w-1/2 lg:w-1/3 text-center text-xs sm:text-sm'>
              {t(
                'joinOurCommunityChannelsForSupport',
                'Join one of our community channels and get support 24/7.'
              )}
            </div>

            <SocialCTAs />
          </div>
        </div>
      </div>
    </>
  )
}
