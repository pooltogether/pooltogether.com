import * as React from 'react'
import classnames from 'classnames'
import { motion } from 'framer-motion'
import { NavMobileListItem } from 'lib/components/NavMobileListItem'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
}

const links = [
  {
    label: 'App',
    href: 'https://app.pooltogether.com',
    as: 'https://app.pooltogether.com'
  },
  {
    label: 'Tools',
    i18nKey: 'tools',
    href: 'https://tools.pooltogether.com',
    as: 'https://tools.pooltogether.com'
  },
  {
    label: 'Developers',
    i18nKey: 'developers',
    href: 'https://dev.pooltogether.com',
    as: 'https://dev.pooltogether.com'
  },
  {
    label: 'Governance',
    i18nKey: 'governance',
    href: 'https://gov.pooltogether.com',
    as: 'https://gov.pooltogether.com'
  },
  {
    label: 'Help',
    i18nKey: 'help',
    href: 'https://docs.pooltogether.com',
    as: 'https://docs.pooltogether.com'
  }
]

export const NavMobileList = (props) => (
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
