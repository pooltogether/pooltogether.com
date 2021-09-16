import React from 'react'

export const GridItemSupportedBy = (props) => {
  const { attribution, Icon, title, url } = props

  let maxHeight = props.maxHeight || 30

  return (
    <>
      <a
        href={url}
        title={`Open the ${title} site`}
        target='_blank'
        title={`Open the ${title}'s site`}
        rel='noopener noreferrer'
        className='rounded-lg px-4 lg:px-8 px-2 trans flex flex-col no-underline'
      >
        <div
          className={`items-center justify-center flex flex-col justify-center trans px-2 h-12 hover:text-green`}
        >
          <Icon />
          {/* <img
            src={img}
            className={`h-12 text-center fill-current`}
            title={attribution || ''}
            style={{
              maxHeight
            }}
          /> */}
        </div>
      </a>
    </>
  )
}
