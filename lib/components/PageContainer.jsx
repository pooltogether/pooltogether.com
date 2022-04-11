import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

import { Meta } from 'lib/components/Meta'

export const PageContainer = (props) => {
  const { ignoreStyles } = props
  const router = useRouter()

  const transition = { duration: 0.2, ease: [0.43, 0.13, 0.23, 0.96] }

  const variants = {
    initial: { /*y: -10,*/ opacity: 0 },
    enter: { /*y: 0,*/ opacity: 1, transition },
    exit: {
      // y: 10,
      opacity: 0,
      transition: { duration: 0.2, ...transition }
    }
  }

  const wrapperClassnames = ignoreStyles ? '' : 'min-height-container mx-auto leading-relaxed'

  return (
    <>
      <Meta title={props.pageTitle} description={props.pageDescription} />
      <motion.div
        variants={variants}
        transition={transition}
        initial='initial'
        animate='enter'
        exit='exit'
      >
        <div className={wrapperClassnames}>{props.pageComponent}</div>
      </motion.div>
    </>
  )
}
