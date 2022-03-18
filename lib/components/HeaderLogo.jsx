import React from 'react'
import Link from 'next/link'
import classnames from 'classnames'

export const HeaderLogo = (props) => {
  const { centered } = props

  return (
    <>
      <div
        className={classnames(
          'nav--pool-logo-container flex flex-col justify-center sm:justify-start truncate sm:w-1/3 sm:mx-0',
          {
            'items-center mx-auto': centered
          }
        )}
      >
        <Link href='/' as='/' shallow>
          <a
            title={'Back to home'}
            className='pool-logo'
            style={{ outline: '2px solid transparent' }}
          />
        </Link>
      </div>
    </>
  )
}

HeaderLogo.defaultProps = {
  centered: true
}
