import React from 'react'
import classnames from 'classnames'

export const GridItemSupportedBy = (props) => {
  const { img, title, url } = props

  return (
    <>
      <a
        href={url}
        title={`Open the ${title} site`}
        target='_blank'
        title={`Open the ${title}'s site`}
        rel='noopener noreferrer'
        className={classnames(props.className, 'flex flex-col items-center rounded-lg mb-8 sm:mb-0 px-4 lg:px-8 trans no-underline trans h-8 text-default hover:text-inverse')}
        style={{minWidth: 230}}
      >
        {img}
      </a>
    </>
  )
}
