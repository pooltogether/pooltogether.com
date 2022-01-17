import React, { useEffect } from 'react'
import FeatherIcon from 'feather-icons-react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { useTranslation, Trans } from 'react-i18next'

import { GridItem } from 'lib/components/GridItem'

export const IndexGovernance = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  const { t } = useTranslation()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    },
    hidden: {}
  }

  return (
    <>
      <div className='py-12 sm:py-24'>
        <div className='pool-container mx-auto'>
          <h5 className='uppercase text-highlight-1 pb-4'>{t('governance')}:</h5>

          <div className='flex flex-col'>
            <p className='text-sm xs:text-xl sm:text-lg lg:text-xl sm:max-w-2xl'>
              <Trans
                t={t}
                i18nKey='pooltogetherIsGovernedByPool'
                defaults='PoolTogether is a decentralized, autonomously goverened system. Changes and upgrades are proposed and voted on by the <a>POOL</a> token holders.'
                components={{
                  a: (
                    <a
                      href='https://medium.com/pooltogether/introducing-pool-23b09f36db48'
                      target='_blank'
                      className='text-pt-teal'
                    />
                  )
                }}
              />
            </p>
            <p className='mt-2'>
              <a
                href='https://medium.com/pooltogether/governance-101-fca9ab8b8ba2'
                target='_blank'
                className='text-pt-teal'
              >
                {t('learnMoreAboutGovernance', 'Learn more about PoolTogether governance')}{' '}
                <FeatherIcon
                  icon='arrow-up-right'
                  className='relative inline-block ml-1 w-5 h-5'
                  style={{ top: -2 }}
                />
              </a>
            </p>

            <motion.div
              className={
                'flex flex-col sm:flex-row sm:flex-wrap mt-12 text-base lg:text-lg -mx-4 lg:-mx-12'
              }
              ref={ref}
              animate={controls}
              initial='hidden'
              variants={containerVariants}
            >
              <GridItem
                altBg
                title={
                  <>
                    {t('learn', 'Learn')}{' '}
                    <FeatherIcon
                      icon='message-circle'
                      className='relative inline-block ml-1 w-6 h-6'
                      style={{ top: -2 }}
                    />
                  </>
                }
                description={t('seeHowGovernanceHasEvolved', 'See how governance has evolved.')}
                url='https://gov.pooltogether.com/c/ptips/8'
                buttonText={t('readForum', 'Read forum')}
              />

              <GridItem
                altBg
                title={
                  <>
                    {t('delegate', 'Delegate')}{' '}
                    <FeatherIcon
                      icon='award'
                      className='relative inline-block ml-1 w-6 h-6'
                      style={{ top: -2 }}
                    />
                  </>
                }
                description={t('seeVotersAndDelegate', 'See voters and delegate your votes.')}
                url='https://withtally.com'
                buttonText={t('useTally', 'Use Tally')}
              />

              <GridItem
                altBg
                title={
                  <>
                    {t('vote')}{' '}
                    <FeatherIcon
                      icon='check-square'
                      className='relative inline-block ml-1 w-6 h-6'
                      style={{ top: -2 }}
                    />
                  </>
                }
                description={t(
                  'easilytCreateProposalsAndVote',
                  'Easily create proposals and vote.'
                )}
                url='https://vote.pooltogether.com'
                buttonText={t('vote')}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}
