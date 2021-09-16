import React from 'react'
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

export const GridItemSupportedBy = (props) => {
  const { attribution, img, title, url, small, noPadding, altBg } = props

  let maxHeight = props.maxHeight || 44

  return (
    <>
      <motion.a
        href={url}
        title={`Open the ${title} site`}
        target='_blank'
        title={`Open the ${title}'s site`}
        rel='noopener noreferrer'
        className='rounded-lg my-1 p-2 trans flex flex-col no-underline px-4 lg:px-8'
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        <div
          className={`bg-green items-center justify-center flex flex-col justify-center trans p-2 xs:px-10 h-20`}
        >
          <img
            src={img}
            className={`h-32 fill-white text-center`}
            title={attribution || ''}
            style={{
              maxHeight
            }}
          />
        </div>
      </motion.a>
    </>
  )
}
