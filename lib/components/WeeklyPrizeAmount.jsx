import React from 'react'
import { ThemedClipSpinner } from '@pooltogether/react-components'

import { numberWithCommas } from 'lib/utils/numberWithCommas'
import { usePooltogetherTotalPrizes } from 'lib/hooks/usePooltogetherTvl'

export const WeeklyPrizeAmount = (props) => {
  const totalPrizes = usePooltogetherTotalPrizes()

  const formatNumbers = (num) => {
    if (num > 1000000) {
      return `$${numberWithCommas(num / 1000000, { precision: 2 })} ${'million'}`
    } else if (num >= 10000) {
      return `$${numberWithCommas(num, { precision: 0 })}`
    } else {
      return `$${numberWithCommas(num, { precision: 2 })}`
    }
  }

  // Check if data has loaded
  if (totalPrizes === null) {
    return <ThemedClipSpinner />
  }

  // add hard-coded V4 amount (as of oct 16, 2021) over 1 week:
  // $14,980 * 7
  // 104860
  const totalV3AndV4PrizesWeekly = Number(totalPrizes) + 104860

  return formatNumbers(totalV3AndV4PrizesWeekly)
}
