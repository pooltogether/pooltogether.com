import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

import { GridItem } from 'lib/components/GridItem'

export const IndexGovernance = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

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
          <h5 className='uppercase text-highlight-1 pb-4'>Governance:</h5>

          <div className='flex flex-col'>
            <p className='text-sm xs:text-xl sm:text-lg lg:text-xl sm:max-w-2xl'>
              PoolTogether is a decentralized, autonomously goverened system. Changes and upgrades
              are proposed and voted on by the{' '}
              <a
                href='https://medium.com/pooltogether/introducing-pool-23b09f36db48'
                target='_blank'
              >
                POOL
              </a>{' '}
              token holders.
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
                title={'Governance Forum'}
                description={`Discuss sentiment for changes prior to making proposals and discuss on the forum.`}
                url='https://gov.pooltogether.com'
                buttonText='Read forum'
              />

              <GridItem
                altBg
                title={'Tally'}
                description={`View proposal and voting history, active voters, and delegate your votes on Tally.`}
                url='https://withtally.com'
                buttonText='Use Tally'
              />

              <GridItem
                altBg
                title={'Vote'}
                description={`PoolTogether’s Vote provides you with an easy proposal creation system and voting tools.`}
                url='https://vote.pooltogether.com'
                buttonText='Use Vote'
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}
