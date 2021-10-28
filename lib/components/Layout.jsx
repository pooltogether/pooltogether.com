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
// import { LanguagePicker } from 'lib/components/LanguagePicker'

export const Layout = (props) => {
  const { children } = props

  const [yScrollPosition, setYScrollPosition] = useState()
  const { scrollY } = useViewportScroll()

  scrollY.onChange((y) => {
    setYScrollPosition(y)
  })

  const router = useRouter()

  const isIndex = router.pathname === '/'

  // const signIn = router.query.signIn
  // const deposit = /deposit/.test(router.asPath)
  // const withdraw = /withdraw/.test(router.asPath)

  const navHeight = 75

  return (
    <>
      <Meta />
      <NavMobile />

      <div className={classnames('header pool-container w-full z-30 mx-auto')}>
        <div
          className='flex justify-between items-center w-full px-4 sm:px-0 pt-8 pb-2 sm:pt-2 mx-auto'
          style={{ height: navHeight }}
        >
          <HeaderLogo />
          <Nav />
        </div>
      </div>

      <Index navHeight={navHeight} />

      {!isIndex && (
        <div
          className='flex flex-col w-full pb-20'
          // style={{
          //   minHeight: '100vh'
          // }}
        >
          <div className='content'>
            <div className='mx-auto w-full flex flex-grow relative z-10 h-full page'>
              <div className='flex flex-col flex-grow'>
                <div
                  className='relative text-inverse flex flex-col flex-grow h-full z-10'
                  style={{
                    flex: 1
                  }}
                >
                  {React.cloneElement(children, {
                    ...props
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className='footer--container'>
        <Footer />
      </div>
    </>
  )
}
