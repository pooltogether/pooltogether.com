import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import DesktopLogo from '../../public/images/pooltogether-logo.svg'
import DesktopLogoDark from '../../public/images/pooltogether-logo-black.svg'
import MobileLogo from '../../public/images/pooltogether-mark--white.svg'
import MobileLogoDark from '../../public/images/pooltogether-black-mark.svg'
import classNames from 'classnames'

export const HeaderLogo = (props) => {
  return (
    <Link href='/' as='/' shallow>
      <a title={'Back to home'} className={props.className}>
        <ImageContainer
          width={154}
          height={60}
          className='hidden sm:dark:block'
          src={DesktopLogo}
        />
        <ImageContainer
          width={154}
          height={60}
          className='hidden dark:hidden sm:block'
          src={DesktopLogoDark}
        />
        <ImageContainer
          width={29}
          height={50}
          className='hidden dark:block sm:dark:hidden'
          src={MobileLogo}
        />
        <ImageContainer
          width={29}
          height={50}
          className='block sm:hidden dark:hidden'
          src={MobileLogoDark}
        />
      </a>
    </Link>
  )
}

const ImageContainer = (props) => {
  const { className, ...imageProps } = props
  return (
    <div className={classNames(className)}>
      <Image {...imageProps} alt='PoolTogether Logo' />
    </div>
  )
}
