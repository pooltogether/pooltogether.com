import React from 'react'
import classnames from 'classnames'

export const QuestionMarkCircle = (props) => {
  const { white } = props

  let defaultClasses = 'bg-blue text-white'
  if (white) {
    defaultClasses = 'bg-transparent text-white border-white border-2'
  }
  
  return <>
    <span
      className={classnames(
        defaultClasses,
        'flex items-center justify-center rounded-full w-6 h-6 sm:w-5 sm:h-5 mx-1',
      )}
    >
      <span
        className='relative font-bold text-xs'
        style={{
          left: '0.02rem'
        }}
      >
        ?
      </span>
    </span>
  </>
}
