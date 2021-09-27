import React from 'react'
import { motion } from 'framer-motion'
import { SquareLink, SquareButtonTheme, SquareButtonSize } from '@pooltogether/react-components'

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
  const { attribution, description, buttonText, img, svg, title, url, imgStyle } = props

  return (
    <>
      <motion.div
        href={url}
        title={`View ${title}`}
        target='_blank'
        rel='noopener noreferrer'
        className='w-full sm:w-1/3 rounded-lg trans flex flex-col no-underline mx-auto px-4 lg:px-12 mb-16'
        variants={itemVariants}
      >
        {img && <img src={img} className='w-24 h-24' title={attribution || ''} style={imgStyle} />}
        {svg && <div className='w-24 h-24'>{svg}</div>}

        <div className='text-white flex flex-col trans pt-2 sm:pt-4'>
          <div className='font-inter font-semibold text-xl sm:text-2xl'>{title}</div>

          <div className='sm:mt-2 text-accent-1 text-lg'>{description}</div>

          <SquareLink
            chevron
            size={SquareButtonSize.md}
            theme={SquareButtonTheme.tealOutline}
            href={url}
            className='w-2/3 mt-4 text-center'
            target='_blank'
          >
            {buttonText || 'Open'}
          </SquareLink>
        </div>
      </motion.div>
    </>
  )
}

// sm:mr-8 sm:pr-4
