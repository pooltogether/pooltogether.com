import React, { useRef } from 'react'
import classnames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useTranslation }from 'lib/../i18n'

import { motion, useCycle } from 'framer-motion'
import { useDimensions } from 'lib/hooks/useDimensions'
import { NavMobileMenuToggle } from 'lib/components/NavMobileMenuToggle'
import { NavMobileList } from 'lib/components/NavMobileList'

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 60px) calc(100% - 60px))`,
    transition: {
      type: 'spring',
      stiffness: 50,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(30px at calc(100% - 60px) calc(100% - 60px))',
    transition: {
      delay: 0.15,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
}

export const NavMobile = (props) => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  return <>
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
      className={classnames(
        'flex items-center justify-center sm:hidden z-40 fixed h-full w-full',
        {
          'pointer-events-none': !isOpen
        }
      )}
      style={{ 
        right: 0,
        bottom: 0,
      }}
    >
      <motion.div className='mobile-nav-background' variants={sidebar} />
      
      <NavMobileList
        toggleOpen={toggleOpen}
      />
      <NavMobileMenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  </>
    
}
