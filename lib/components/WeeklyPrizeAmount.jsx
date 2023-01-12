import React from 'react'
import { ThemedClipSpinner } from '@pooltogether/react-components'
import { useWeeklyPrizeAmount } from 'lib/atoms/serverAtoms'
import { numberWithCommas } from '@pooltogether/utilities'

export const WeeklyPrizeAmount = () => {
  const weeklyPrizeAmount = useWeeklyPrizeAmount()

  // Check if data has loaded
  if (!weeklyPrizeAmount) {
    return <ThemedClipSpinner />
  }

  return <b>${numberWithCommas(weeklyPrizeAmount, { precision: 0 })}</b>
}
