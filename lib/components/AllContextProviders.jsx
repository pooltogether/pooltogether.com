import React from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import { AuthControllerContextProvider } from 'lib/components/contextProviders/AuthControllerContextProvider'
// import { PoolDataContextProvider } from 'lib/components/contextProviders/PoolDataContextProvider'

export function AllContextProviders(props) {
  const { children } = props

  return <>
    <AuthControllerContextProvider>
      {/* <PoolDataContextProvider> */}
        {children}
      {/* </PoolDataContextProvider> */}
    </AuthControllerContextProvider>
  </>
}
