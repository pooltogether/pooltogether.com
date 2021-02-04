import React from 'react'
import { motion } from 'framer-motion'

const itemVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
  }
}

export const GridItem = (props) => {
  const {
    attribution,
    description,
    img,
    title,
    url,
    imgStyle,
  } = props

  return <>
    <motion.a
      href={url}
      title={`View ${title}`}
      target='_blank'
      rel='noopener noreferrer'
      className='w-full lg:w-1/3 mb-4 px-4 py-2 lg:p-4 trans flex flex-col no-underline'
      variants={itemVariants}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <div
        className='flex flex-col justify-baseline trans p-8 sm:pt-5 sm:pb-8 sm:px-8 h-40 xs:h-40 lg:h-44 bg-primary text-white hover:bg-highlight-5 rounded-lg'
      >
        
        <div className='flex items-center justify-between'>
          <div className=' font-bold text-xl lg:text-2xl'>
            {title}
          </div>
          <img
            src={img}
            className='w-10 h-10'
            title={attribution || ''}
            style={imgStyle}
          />
        </div>

        <div
          className='mt-2 no-underline text-gray-600 text-xxs font-number'
        >
          {description}
        </div>
      </div>
    </motion.a>
  </>
}
