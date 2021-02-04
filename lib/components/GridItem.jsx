import React from 'react'
import { motion } from 'framer-motion'

const itemVariants = {
  hidden: {
    opacity: 0,
    scale: 1,
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
      className='w-full sm:w-1/2 lg:w-1/3 mb-4 trans flex flex-col no-underline'
      variants={itemVariants}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <div
        className='flex flex-col justify-baseline trans p-4 sm:px-10 sm:-ml-5 h-28 lg:h-40 text-white'
      >
        <div className='flex items-center justify-between'>
          <div className=' font-bold text-xl lg:text-2xl'>
            {title}
          </div>
          <img
            src={img}
            className='w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10'
            title={attribution || ''}
            style={imgStyle}
          />
        </div>

        <div
          className='mt-2 sm:mt-4 no-underline text-gray-600 text-xxs font-number'
        >
          {description}
        </div>
      </div>
    </motion.a>
  </>
}
