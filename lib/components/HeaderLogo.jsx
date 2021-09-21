import React from 'react'
import Link from 'next/link'

export const HeaderLogo = (props) => {
  return (
    <>
      <div className='nav--pool-logo-container flex flex-col justify-center sm:justify-start items-center truncate sm:w-1/3 mx-auto sm:mx-0'>
        <Link href='/' as='/' shallow>
          <a title={'Back to home'} className='pool-logo' />
        </Link>
      </div>
    </>
  )
}
