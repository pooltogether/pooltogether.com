import React from 'react'
import FeatherIcon from 'feather-icons-react'
import classnames from 'classnames'

export const NEW_BUTTON_THEME = {
  largeGreen: 'largeGreen',
  smallBlack: 'smallBlack'
}

export const NewButton = (props) => {
  const theme = props.theme

  let themeClassName
  if (theme === NEW_BUTTON_THEME.largeGreen) {
    themeClassName = ''
  }

  return (
    <a
      {...props}
      className={classnames(
        props.className,
        themeClassName,
        'new-btn block text-center text-xl w-full text-xs px-2 py-2 mt-2'
      )}
    >
      {props.children} <FeatherIcon icon={'chevron-right'} className='inline-block w-6 h-6 -mt-1' />
    </a>
  )
}
