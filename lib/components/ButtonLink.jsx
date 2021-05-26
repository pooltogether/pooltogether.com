import React from 'react'
import classnames from 'classnames'
import Link from 'next/link'

export const getButtonClasses = (props) => {
  let {
    border,
    bg,
    blue,
    height,
    hoverBg,
    hoverBorder,
    hoverText,
    noAnim,
    padding,
    rounded,
    secondary,
    tertiary,
    selected,
    text,
    transition,
    className,
    textSize,
    width
  } = props

  let defaultClasses =
    'font-bold relative inline-block text-center leading-snug cursor-pointer outline-none focus:outline-none active:outline-none no-underline'
  let animClass = noAnim ? '' : 'button-scale'

  if (selected) {
    defaultClasses += ` opacity-50`
    animClass = ``
  }

  // eg. textSize='sm', textSize='xl'
  textSize = getTextSize(textSize)

  let defaultPadding = 'px-4 xs:px-6 sm:px-4 lg:px-12 py-2 sm:py-2'
  let defaultRounded = 'rounded-full'
  let defaultTrans = 'trans trans-fast'

  let defaultBorder = 'border-highlight-1'
  let defaultBg = 'bg-highlight-1'
  let defaultText = 'text-secondary'

  let defaultHoverBorder = 'hover:border-highlight-2'
  let defaultHoverBg = 'hover:bg-highlight-4'
  let defaultHoverText = 'hover:text-secondary'

  if (secondary) {
    defaultBorder = 'border-highlight-2 border-2'
    defaultBg = 'bg-transparent'
    defaultText = 'text-highlight-2'

    defaultHoverBorder = 'hover:border-highlight-1'
    defaultHoverBg = 'hover:bg-body'
    defaultHoverText = 'hover:text-highlight-1'

    if (blue) {
      defaultBorder = 'border-blue border-2'
      defaultText = 'text-blue'

      defaultHoverBorder = 'hover:border-blue-2'
      defaultHoverText = 'hover:text-blue-2'
    }
  }

  if (tertiary) {
    defaultBorder = 'border-transparent border-2'
    defaultBg = 'bg-transparent'
    defaultText = 'text-highlight-2'

    defaultHoverBorder = 'hover:border-transparent'
    defaultHoverBg = 'hover:bg-body'
    defaultHoverText = 'hover:text-highlight-1'
  }

  padding = padding ? `${padding}` : defaultPadding
  rounded = rounded ? `rounded-${rounded}` : defaultRounded
  transition = transition ? `${transition}` : defaultTrans
  height = height ? `${height}` : ''
  width = width ? `${width}` : ''

  border = border ? `border-${border}` : defaultBorder
  bg = bg ? `bg-${bg}` : defaultBg
  text = text ? `text-${text}` : defaultText

  hoverBorder = hoverBorder ? `hover:border-${hoverBorder}` : defaultHoverBorder
  hoverBg = hoverBg ? `hover:bg-${hoverBg}` : defaultHoverBg
  hoverText = hoverText ? `hover:text-${hoverText}` : defaultHoverText

  return classnames(
    className,
    defaultClasses,
    animClass,
    bg,
    border,
    height,
    padding,
    rounded,
    text,
    hoverBg,
    hoverBorder,
    hoverText,
    textSize,
    transition,
    width
  )
}

const getTextSize = (size) => {
  switch (size) {
    case 'xs':
      return `text-xxs xs:text-xs sm:text-sm lg:text-base`
    case 'sm':
      return `text-xs xs:text-sm sm:text-base lg:text-lg`
    case 'lg':
      return `text-base xs:text-lg sm:text-xl lg:text-2xl`
    case 'xl':
      return `text-lg xs:text-xl sm:text-2xl lg:text-3xl`
    case '2xl':
      return `text-xl xs:text-2xl sm:text-3xl lg:text-4xl`
    default:
      return `text-sm sm:text-base lg:text-xl`
  }
}

export const ButtonLink = (props) => {
  let { children, as, href } = props

  const classes = getButtonClasses(props)

  return (
    <Link href={href} as={as} scroll={false}>
      <a
        // {...linkProps}
        className={classes}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </a>
    </Link>
  )
}
