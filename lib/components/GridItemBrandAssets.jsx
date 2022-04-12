import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -150
  },
  visible: {
    opacity: 1,
    x: 0
  }
}

export const GridItemBrandAssets = (props) => {
  const { src, title, url } = props

  return (
    <>
      <motion.div
        title={`View ${title}`}
        className='w-full sm:w-1/3  p-2 trans flex flex-col no-underline px-4 lg:px-4 mx-auto text-center'
        variants={itemVariants}
      >
        <div className='bg-card rounded-lg flex flex-col justify-center trans py-4 h-24 xs:h-36'>
          <Image src={src} width={66} height={66} />
          <div className='text-caption uppercase pt-2'>{title}</div>
        </div>
      </motion.div>
    </>
  )
}
