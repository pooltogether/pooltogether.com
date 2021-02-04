import React from 'react'
import { motion } from 'framer-motion'

import { Meta } from 'lib/components/Meta'

export const PageContainer = (props) => {
  const transition = { duration: 0.2, ease: [0.43, 0.13, 0.23, 0.96] }

  const variants = {
    initial: { /*y: -10,*/ opacity: 0 },
    enter: { /*y: 0,*/ opacity: 1, transition },
    exit: {
      // y: 10,
      opacity: 0,
      transition: { duration: 0.2, ...transition },
    },
  }

  const motionDivClassnames = 'sm:pt-20 xl:pt-24 trans'
  const wrapperClassnames = 'min-height-container mx-auto pb-10 sm:pb-8 lg:pb-20 leading-relaxed'

  return <>
    <motion.div
      variants={variants}
      transition={transition}
      initial='initial'
      animate='enter'
      exit='exit'
      className={motionDivClassnames}
    >
      <Meta
        title={props.pageTitle}
      />

      <div
        className={wrapperClassnames}
      >
        {props.pageComponent}
      </div>
    </motion.div>
  </>
}