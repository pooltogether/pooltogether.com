import React from 'react'

import { AuthControllerContextProvider } from 'lib/components/contextProviders/AuthControllerContextProvider'

export function AllContextProviders(props) {
  const { children } = props

  return (
    <>
      <AuthControllerContextProvider>{children}</AuthControllerContextProvider>
    </>
  )
}
