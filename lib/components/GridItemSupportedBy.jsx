import React from 'react'
import classnames from 'classnames'

export const GridItemSupportedBy = (props) => {
  const { img, title, url, heightClassName } = props

  return (
    <>
      <a
        href={url}
        title={`Open the ${title} site`}
        target='_blank'
        title={`Open the ${title}'s site`}
        rel='noopener noreferrer'
        className={classnames(
          props.className,
          heightClassName || 'h-12',
          'flex flex-col items-center rounded-lg mb-10 sm:mb-0 lg:px-8 trans no-underline trans text-default hover:text-inverse w-64'
        )}
      >
        {img}
      </a>
    </>
  )
}
