import * as React from 'react'
import classnames from 'classnames'
import { useAtom } from 'jotai'
import { motion } from 'framer-motion'
import { NavMobileListItem } from 'lib/components/NavMobileListItem'

import { disclaimerModalOpenAtom } from 'lib/components/DisclaimerModal'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
}

export const NavMobileList = (props) => {
  const [, setDisclaimerModalOpen] = useAtom(disclaimerModalOpenAtom)

  const links = [
    {
      label: 'Home',
      href: '/',
      as: '/'
    },
    {
      label: 'Developers',
      href: '/developers',
      as: '/developers'
    },
    {
      label: 'App',
      onClick: (callback) => {
        setDisclaimerModalOpen(true)

        if (callback) callback()
      }
    }
  ]

  return (
    <motion.ul variants={variants} className={classnames('nav-mobile-list', props.className)}>
      {links.map((link, index) => (
        <NavMobileListItem
          toggleOpen={props.toggleOpen}
          link={link}
          index={index}
          key={`nav-mobile-listitem-${index}`}
        />
      ))}
    </motion.ul>
  )
}
