import React from 'react'
import { motion } from 'framer-motion'

const itemVariants = {
  hidden: {
    opacity: 0,
    scale: 1
  },
  visible: {
    opacity: 1,
    scale: 1
  }
}

export const GridItem = (props) => {
  const { attribution, description, img, title, url, imgStyle } = props

  return (
    <>
      <motion.a
        href={url}
        title={`View ${title}`}
        target='_blank'
        rel='noopener noreferrer'
        className='w-full sm:w-1/3 rounded-lg  p-2 trans flex flex-col no-underline px-4 lg:px-8 mx-auto'
        variants={itemVariants}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        <div className='interactable-chip-alt-bg text-white interactable-chip hover:shadow-xl flex flex-col justify-center trans py-4 px-10 sm:px-8 h-32'>
          <div className='flex items-center justify-between w-full'>
            <div className='font-bold text-xl sm:text-lg lg:text-xl'>{title}</div>
            <img
              src={img}
              className='w-6 h-6 lg:w-8 lg:h-8'
              title={attribution || ''}
              style={imgStyle}
            />
          </div>

          <div className='mt-2 sm:mt-4 no-underline text-gray-600 text-xxs'>{description}</div>
        </div>
      </motion.a>
    </>
  )
}
