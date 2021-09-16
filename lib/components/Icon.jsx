import React from 'react'

import Fortune from 'assets/images/fortune-logo.svg'

const iconTypes = {
  fortune: Fortune
}

export const Icon = ({ name, ...props }) => {
  let Icon = iconTypes[name]
  return <Icon {...props} />
}
