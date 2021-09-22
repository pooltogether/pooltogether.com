import React, { useEffect } from 'react'
import classnames from 'classnames'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { numberWithCommas } from '@pooltogether/utilities'

import { NewButton } from 'lib/components/NewButton'

export const IndexAnalytics = () => {
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
      <div className='py-24'>
        <div className='pool-container mx-auto pt-24 pb-8'>
          <h5 className='uppercase text-highlight-1 pb-4'>Protocol analytics:</h5>

          <motion.div
            className={classnames(
              'flex flex-col sm:flex-row sm:justify-between',
              'mt-8 mb-4 rounded-xl text-base lg:text-lg sm:mx-4 lg:mx-24'
            )}
            ref={ref}
            animate={controls}
            initial='hidden'
            variants={containerVariants}
          >
            <AnalyticsGridItem value='$789M' title='value deposited' />
            <AnalyticsGridItem value={numberWithCommas(48762)} title='weekly prizes' />
            <AnalyticsGridItem value='$21M' title='weekly prize value' />
            <AnalyticsGridItem value='$5M+' title='awarded so far' />
          </motion.div>
        </div>

        <div className='pool-container mx-auto'>
          <NewButton
            target='_blank'
            href='https://info.pooltogether.com'
            className='mx-auto max-w-md'
          >
            See more protocol analytics
          </NewButton>
        </div>
      </div>
    </>
  )
}

function AnalyticsGridItem (props) {
  return (
    <div className='text-center leading-none mb-10 sm:mb-0'>
      <h1 className='text-7xl'>{props.value}</h1>
      <div className='font-normal text-sm text-default mt-3'>{props.title}</div>
    </div>
  )
}
