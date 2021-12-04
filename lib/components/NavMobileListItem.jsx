import * as React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}

const colors = ['#ff77e1', '#69FEB8', '#17e1fd', '#ffeb77', '#7FB3FF']

export const NavMobileListItem = ({ link, index, toggleOpen }) => {
  const style = { color: `${colors[index]}` }

  return (
    <>
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className='font-bold text-center mb-6 text-xl'
        style={style}
      >
        {Boolean(link.href) ? (
          <Link href={link.href} as={link.as}>
            <a onClick={toggleOpen} style={style}>
              {link.label}
            </a>
          </Link>
        ) : (
          <a
            onClick={(e) => {
              e.preventDefault()
              link.onClick(toggleOpen)
            }}
            style={style}
          >
            {link.label}
          </a>
        )}
      </motion.li>
    </>
  )
}
