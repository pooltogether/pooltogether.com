import React, { useState } from 'react'
import classnames from 'classnames'
import { motion, useViewportScroll } from 'framer-motion'

import { HeaderLogo } from 'lib/components/HeaderLogo'
import { NavMobile } from 'lib/components/NavMobile'
import { Meta } from 'lib/components/Meta'
import { Nav } from 'lib/components/Nav'
import { Footer } from 'lib/components/Footer'
// import { LanguagePicker } from 'lib/components/LanguagePicker'

export const Layout = (props) => {
  const {
    children
  } = props

  const [yScrollPosition, setYScrollPosition] = useState()
  const { scrollY } = useViewportScroll()

  scrollY.onChange(y => {
    setYScrollPosition(y)
  })

  // const router = useRouter()

  // const signIn = router.query.signIn
  // const deposit = /deposit/.test(router.asPath)
  // const withdraw = /withdraw/.test(router.asPath)

  return <>
    <Meta />

    <NavMobile />

    <div
      className='flex flex-col w-full'
      style={{
        minHeight: '100vh'
      }}
    >
      <div
        className={classnames(
          'header pool-container w-full z-30 mx-auto',
        )}
      >
        <div
          className='flex justify-between items-center w-full px-4 sm:px-0 py-10 mx-auto'
        >
          <HeaderLogo />
          <Nav />
        </div>
      </div>

      <div className='content'>
        <div
          className='mx-auto w-full flex flex-grow relative z-10 h-full page'
        >
          <div
            className='flex flex-col flex-grow'
          >
            <div
              className='relative flex flex-col flex-grow h-full z-10'
              style={{
                flex: 1
              }}
            >
              <div
                className='text-inverse'
              >
                <div
                  className='pool-container text-center font-bold text-xs xs:text-lg border-flashy purple-pink-gradient-animation mx-auto pt-4 pb-5 px-6 xs:mt-4 xs:leading-tight'
                >
                  <span
                    role='img'
                    aria-label='megaphone emoji'
                    className='mx-2 text-xl block xs:inline-block'
                  >📣</span> POOL Token and decentralized governance is live!
                  <br /><a
                    href='#token'
                    className='text-inverse hover:text-green border-b trans'
                  >Find out more</a> <span
                    role='img'
                    aria-label='megaphone emoji'
                    className='mx-2 text-xl hidden xs:inline-block'
                  >📣</span>
                </div>

                {React.cloneElement(children, {
                  ...props,
                })}
              </div>
            </div>
          </div>
        </div>
      </div>


      <div
        className='footer--container'
      >
        <Footer />
      </div>
    </div>
  </>
}
