import React from 'react'
import { ThemedClipSpinner } from '@pooltogether/react-components'
import { useWeeklyPrizeAmount } from 'lib/atoms/serverAtoms'

export const WeeklyPrizeAmount = () => {
  const weeklyPrizeAmount = useWeeklyPrizeAmount()

  // Check if data has loaded
  if (!weeklyPrizeAmount) {
    return <ThemedClipSpinner />
  }

  return <b>${weeklyPrizeAmount}</b>
}
