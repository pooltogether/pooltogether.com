import React from 'react'
import Link from 'next/link'

import PoolTogetherLogo from 'assets/images/pooltogether-logo.svg'

export const HeaderLogo = (props) => {
  return <>
    <div
      className='nav--pool-logo-container justify-start flex items-center truncate sm:w-1/3 mx-auto sm:mx-0'
    >
      <Link
        href='/'
        as='/'
        shallow
      >
        <a
          title={'Back to home'}
          className='pool-logo border-0 trans block w-full '
        >
          <img src={PoolTogetherLogo} />
        </a>
      </Link>
    </div>
  </>
}
