import React, { useEffect, useState } from 'react'
import classnames from 'classnames'
import { useViewportScroll } from 'framer-motion'
import { SquareButtonSize, SquareButtonTheme, SquareLink } from '@pooltogether/react-components'
import { useRouter } from 'next/router'
import FeatherIcon from 'feather-icons-react'

import { HeaderLogo } from 'lib/components/HeaderLogo'
import { NavMobile } from 'lib/components/NavMobile'
import { Meta } from 'lib/components/Meta'
import { Nav } from 'lib/components/Nav'
import { Footer } from 'lib/components/Footer'
import { Index } from 'lib/components/Index'

const DELAY = 1

export const Layout = (props) => {
  const { children } = props

  const [animateIn, setAnimateIn] = useState(false)

  const [yScrollPosition, setYScrollPosition] = useState()
  const { scrollY } = useViewportScroll()

  scrollY.onChange((y) => {
    setYScrollPosition(y)
  })

  useEffect(() => {
    setTimeout(() => setAnimateIn(true), DELAY * 1000)
  }, [])

  return (
    <>
      <NavMobile />

      {/* <div className='fixed-banner mint-banner sticky px-8 t-0 l-0 r-0 w-full bg-pt-purple-darkest text-center py-3 z-50 backdrop-blur-2xl bg-opacity-80'>
        <div className='mint-banner--left text-xxs xs:text-xs flex flex-col xs:flex-row mx-auto items-center'>
          <div className='w-full mb-1 xs:mb-0 mx-3'>
            <span className='font-bold'> Keep Pooly flying!</span>{' '}
            <img
              src='pooly-icon@2x.png'
              className={classnames('pooly-fly relative inline mx-0 rounded-xl trans mr-0 w-4', {
                'ease-fly-in': animateIn
              })}
            />{' '}
            Mint the NFT, support PoolTogether Inc and financial empowerment.
          </div>

          <SquareLink
            className='w-20 mx-auto h-8'
            href='https://mint.pooltogether.com/'
            size={SquareButtonSize.sm}
            theme={SquareButtonTheme.tealOutline}
            style={{ paddingLeft: 14, fontSize: '15px' }}
          >
            Mint{' '}
            <FeatherIcon icon='chevron-right' className={'relative w-4 h-4'} style={{ top: 1 }} />
          </SquareLink>
        </div>
      </div> */}

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
