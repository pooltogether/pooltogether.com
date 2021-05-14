import React from 'react'
import FeatherIcon from 'feather-icons-react'
import { getChainIdByAlias } from '@pooltogether/utilities'

import { formatEtherscanAddressUrl } from 'lib/utils/formatEtherscanAddressUrl'

export const EtherscanAddressLink = (props) => {
  const { address, children, className, networkName, size } = props

  const chainId = getChainIdByAlias(networkName)
  const url = formatEtherscanAddressUrl(address, chainId)

  return (
    <>
      <a
        href={url}
        className={`trans no-underline ${className}`}
        target='_blank'
        rel='noopener noreferrer'
        title='View on Etherscan'
      >
        {children} <FeatherIcon icon='external-link' className='is-etherscan-arrow inline-block' />
      </a>
    </>
  )
}
