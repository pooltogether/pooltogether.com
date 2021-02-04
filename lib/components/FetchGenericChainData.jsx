import { useContext, useEffect, useState } from 'react'
import { isEmpty } from 'lodash'

import {
  MAINNET_POLLING_INTERVAL
} from 'lib/constants'
import { useInterval } from 'lib/hooks/useInterval'
import { fetchGenericChainData } from 'lib/utils/fetchGenericChainData'

const debug = require('debug')('pool-app:FetchGenericChainData')

export const FetchGenericChainData = (props) => {
  const {
    chainId,
    children,
    provider,
    poolData,
  } = props

  const [alreadyExecuted, setAlreadyExecuted] = useState(false)
  const [genericChainData, setGenericChainData] = useState({})
  const [storedChainId, setStoredChainId] = useState(null)

  const fetchDataFromInfura = async () => {
    const chainData = {
      dai: {},
    }

    // console.log({ poolData})
    try {
      chainData.dai = await fetchGenericChainData(
        provider,
        poolData.daiPool
      )
    }
    catch (e) {
      console.warn(e)
    }
    finally {
      return chainData
    }
  }

  useInterval(() => {
    const getChainDataAsync = async () => {
      debug('fetching new chain data after MAINNET_POLLING_INTERVAL expired', MAINNET_POLLING_INTERVAL)
      const genericData = await fetchDataFromInfura()
      setGenericChainData(genericData)
    }

    getChainDataAsync()
  }, MAINNET_POLLING_INTERVAL)

  // This only runs once when the component is mounted or when we reset the
  // `alreadyExecuted` state var if the user changes network, etc
  useEffect(() => {
    const conditionallyGetChainData = async () => {
      const genericData = await fetchDataFromInfura()

      // console.log(genericData)

      if (isEmpty(genericData.dai)) {
        // console.log('NO HIT, resetting ....')
        setAlreadyExecuted(false)
      } else if (!isEmpty(genericData.dai)) {
        // console.log('got data!')
        setGenericChainData(genericData)
      }
    }

    const ready = !isEmpty(provider) && !isEmpty(poolData.daiPool)

    if (!alreadyExecuted && ready) {
      // console.log('ready and trying')
      setAlreadyExecuted(true)
      conditionallyGetChainData()
    }
  }, [provider, chainId, poolData])

  useEffect(() => {
    const resetGenericChainData = () => {
      if (chainId !== storedChainId) {
        setAlreadyExecuted(false)
        setStoredChainId(chainId)
      }
    }

    resetGenericChainData()
  }, [chainId])

  return children({ genericChainData })
}
