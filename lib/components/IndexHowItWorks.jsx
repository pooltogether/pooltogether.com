import React, { useState } from 'react'
import { useTranslation } from 'next-i18next'
import ReactPlayer from 'react-player'

const HowItWorksBox = (props) => {
  return (
    <>
      <div className={`w-full flex justify-between items-center trans mb-4 sm:mb-10`}>
        <h1 className='uppercase'>{props.title}</h1>

        <div className='w-full pl-6 text-base lg:text-xl'>{props.description}</div>
      </div>
    </>
  )
}

export const IndexHowItWorks = () => {
  const [playVideo, setPlayVideo] = useState(false)

  const { t } = useTranslation()

  const startVideo = (e) => {
    e.preventDefault()
    setPlayVideo(true)
  }

  return (
    <>
      <div className='content-max-width mx-auto pt-24 pb-8'>
        <h5 className='uppercase text-highlight-1 pb-4'>{t('howItWorks', 'How it works:')}</h5>

        <div className='flex flex-col sm:flex-row w-full justify-between'>
          <div className='sm:w-1/2'>
            <div>
              <button
                onClick={startVideo}
                className='bg-vid-holo flex items-start justify-center trans'
                role='img'
              >
                <div className='bg-vid-holo--inner flex items-center justify-center'>
                  {playVideo ? (
                    <ReactPlayer playing url='https://www.youtube.com/watch?v=VXbi9kUoDvo' />
                  ) : (
                    <div className='bg-vid-circle rounded-full flex items-center justify-center hover:bg-highlight-2 trans'>
                      <div className='bg-vid-tri' />
                    </div>
                  )}
                </div>
              </button>
            </div>
          </div>

          <div className='w-full sm:w-1/2 sm:ml-20 mt-10 sm:mt-0'>
            <HowItWorksBox
              title='1.'
              description={t('depositForAChanceToWin', 'Deposit money for a chance to win')}
            />
            <HowItWorksBox
              title='2.'
              description={t('prizesAreAwardedDaily', 'Prizes are awarded every day')}
            />
            <HowItWorksBox
              title='3.'
              description={t('evenIfYouDontWin', `Even if you don't win, keep all of your money!`)}
            />

            <div className='relative bg-green z-20 text-center text-2xl font-black leading-none w-full h-14 mt-8 sm:mt-0 -ml-1 sm:ml-0'>
              <div
                className='flex justify-center flex-col bg-secondary absolute w-full h-full z-10'
                style={{ left: 10, top: 10 }}
              >
                {t('itsThatSimple', `It's that simple`)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
