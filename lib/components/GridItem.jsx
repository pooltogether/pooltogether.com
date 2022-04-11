import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
  const { description, buttonText, src, title, url } = props

  return (
    <>
      <motion.div
        title={`View ${title}`}
        className='w-full sm:w-1/3 rounded-lg trans flex flex-col no-underline mx-auto px-4 lg:px-12 mb-16'
        variants={itemVariants}
      >
        {src && (
          <div className='w-24 h-24'>
            <Image src={src} width={66} height={66} alt={title || ''} />
          </div>
        )}

        <div className='text-white flex flex-col trans pt-2 sm:pt-4'>
          <div className='font-semibold text-xl sm:text-2xl'>{title}</div>

          <div className='sm:mt-2 text-accent-1 text-lg'>{description}</div>

          <Link href={url}>
            <SquareLink
              chevron
              size={SquareButtonSize.md}
              theme={SquareButtonTheme.tealOutline}
              className='w-2/3 mt-4 text-center'
              target='_blank'
              rel='noopener noreferrer'
            >
              {buttonText || 'Open'}
            </SquareLink>
          </Link>
        </div>
      </motion.div>
    </>
  )
}

// sm:mr-8 sm:pr-4
