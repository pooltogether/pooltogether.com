import React from 'react'
import { motion } from 'framer-motion'

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -150,
  },
  visible: {
    opacity: 1,
    x: 0,
  }
}

export const GridItemBrandAssets = (props) => {
  const {
    img,
    title,
    url,
  } = props

  let maxHeight = props.maxHeight || 72

  return <>
    <motion.div
      href={url}
      title={`View ${title}`}
      target='_blank'
      title={`Open ${title}'s website`}
      rel='noopener noreferrer'
      className='w-full sm:w-1/3  p-2 trans flex flex-col no-underline px-4 lg:px-4 mx-auto text-center'
      variants={itemVariants}
    >
      <div
        className='bg-card rounded-lg flex flex-col justify-center trans p-2 xs:px-10 h-20 py-20'
      >
        <img
          src={img}
          className={`h-64 fill-white text-center`}
          title={title}
          style={{
            maxHeight
          }}
        />
        <div className='text-caption uppercase pt-2'>
          {title}
        </div>
      </div>
    </motion.div>
  </>
}
