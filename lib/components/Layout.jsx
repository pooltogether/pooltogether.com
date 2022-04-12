import React, { useState } from 'react'
import classnames from 'classnames'
import { useViewportScroll } from 'framer-motion'
import { useRouter } from 'next/router'

import { HeaderLogo } from 'lib/components/HeaderLogo'
import { NavMobile } from 'lib/components/NavMobile'
import { Meta } from 'lib/components/Meta'
import { Nav } from 'lib/components/Nav'
import { Footer } from 'lib/components/Footer'
import { Index } from 'lib/components/Index'

export const Layout = (props) => {
  const { children } = props

  const [yScrollPosition, setYScrollPosition] = useState()
  const { scrollY } = useViewportScroll()

  scrollY.onChange((y) => {
    setYScrollPosition(y)
  })

  return (
    <>
      <NavMobile />
      <div className={classnames('w-full z-30 mx-auto')}>
        <div className='content-max-width flex justify-center sm:justify-between items-center w-full px-4 sm:px-0 pt-8 sm:pt-2 mx-auto'>
          <HeaderLogo />
          <Nav />
        </div>
      </div>

      {children}

      <div className='footer--container'>
        <Footer />
      </div>
    </>
  )
}
