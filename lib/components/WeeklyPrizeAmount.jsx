import React from 'react'
import { ThemedClipSpinner } from '@pooltogether/react-components'
import { useWeeklyPrizeAmount } from 'lib/hooks/useWeeklyPrizeAmount'

export const WeeklyPrizeAmount = (props) => {
  const { data: amount, isFetched } = useWeeklyPrizeAmount()

  // Check if data has loaded
  if (!isFetched) {
    return <ThemedClipSpinner />
  }

  return <b>${amount}</b>
}
