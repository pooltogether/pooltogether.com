import React from 'react'
import { ThemeContextProvider } from '@pooltogether/react-components'

import { AuthControllerContextProvider } from 'lib/components/contextProviders/AuthControllerContextProvider'

export function AllContextProviders(props) {
  const { children } = props

  return (
    <>
      <AuthControllerContextProvider>
        <ThemeContextProvider>
          {/* <PoolDataContextProvider> */}
          {children}
          {/* </PoolDataContextProvider> */}
        </ThemeContextProvider>
      </AuthControllerContextProvider>
    </>
  )
}
