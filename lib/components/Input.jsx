// NEW INPUT IS BELOW, REQUIRES REACT-HOOK-FORM

import React from 'react'
import classnames from 'classnames'
import { omit } from 'lodash'

export function Input(props) {
  let {
    rounded,
    isError,
  } = props

  const defaultClasses = 'border-green border-2 bg-secondary hover:bg-darkened active:bg-darkened focus:bg-darkened focus:outline-none focus:outline-none leading-snug py-4 mb-2 px-4 lg:px-8 text-sm sm:text-base lg:text-xl xl:text-2xl font-bold sm:h-16 lg:h-20'
  
  rounded = rounded ? rounded : 'rounded-lg'

  const className = classnames(
    defaultClasses,
    rounded,
    props.className, {
      'text-red': isError,
    }
  )

  const newProps = omit(props, [
    'isError',
    'rounded'
  ])

  return <>
    <input
      {...newProps}
      className={className}
    />
  </>
}

// import React from 'react'
// import classnames from 'classnames'
// import { omit } from 'lodash'
// import { isBrowser } from 'react-device-detect'

// export function Input(props) {
//   let {
//     autoFocus,
//     // placeholder,
//     // handleChange,
//     // value,
//     marginClasses,
//     large,
//     textClasses,
//     roundedClasses,
//     pattern,
//     isError,
//     required,
//     register,
//     validate,
//   } = props

//   const defaultClasses = 'text-white bg-purple trans rounded-full focus:outline-none focus:outline-none leading-none px-6 py-2 lg:py-2'
//   // const defaultClasses = 'text-white border-2 border-primary bg-purple trans rounded-lg focus:outline-none focus:outline-none leading-none px-6 py-2 lg:py-2'

//   if (roundedClasses === undefined) {
//     roundedClasses = 'rounded'
//   }

//   if (marginClasses === undefined) {
//     marginClasses = 'mb-2 lg:mb-2'
//   }

//   if (textClasses === undefined) {
//     textClasses = large ? 'font-bold text-3xl sm:text-5xl' : 'text-xl sm:text-2xl'
//   }

//   const className = classnames(
//     defaultClasses,
//     marginClasses,
//     textClasses,
//     roundedClasses,
//     props.className, 
//     {
//       'text-red': isError,
//       'font-number': props.type === 'number'
//     }
//   )

//   const newProps = omit(props, [
//     'label',
//     'large',
//     'marginClasses',
//     'roundedClasses',
//     'textClasses',
//     'isError',
//     'isLight',
//     'register',
//     'required', // required is consumed by the register func but we don't want it on the <input />
//     'pattern',
//     'validate',
//     'unsignedNumber',
//     'unsignedWholeNumber',
//     'centerLabel',
//     'rightLabel',
//   ])

//   return <>
//     <input
//       {...newProps}
//       autoFocus={autoFocus && isBrowser}
//       ref={register({
//         required,
//         pattern,
//         validate
//       })}

//       // rounded-full
//       className={classnames(
//         className,
//         'bg-primary text-inverse w-full focus:outline-none leading-none pl-6',
//       )}
//     />

//   </>
// }