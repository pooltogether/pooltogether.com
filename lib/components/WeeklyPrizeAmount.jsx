import React from 'react'
import { ThemedClipSpinner } from '@pooltogether/react-components'
import { numberWithCommas } from '@pooltogether/utilities'
import { useQuery } from 'react-query'

export const WeeklyPrizeAmount = (props) => {
  const { data: amount, isFetched } = useWeeklyPrizeAmount()

  // Check if data has loaded
  if (!isFetched) {
    return <ThemedClipSpinner />
  }

  return <b>${amount}</b>
}

const useWeeklyPrizeAmount = () => {
  return useQuery('weeklyPrizeAmount', () => {
    return numberWithCommas('29400', { precision: 0 })
  })
}
