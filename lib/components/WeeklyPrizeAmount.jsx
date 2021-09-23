import React from 'react'
import { ThemedClipSpinner } from '@pooltogether/react-components'

// import { useTranslation } from 'lib/../i18n'
import { numberWithCommas } from 'lib/utils/numberWithCommas'
import { usePooltogetherTotalPrizes } from 'lib/hooks/usePooltogetherTvl'

export const WeeklyPrizeAmount = (props) => {
  // const { t } = useTranslation()

  const totalPrizes = usePooltogetherTotalPrizes()

  const formatNumbers = (num) => {
    if (num > 1000000) {
      return `$${numberWithCommas(num / 1000000, { precision: 2 })} ${'million'}`
    } else if (num > 10000) {
      return `$${numberWithCommas(num, { precision: 0 })}`
    } else {
      return `$${numberWithCommas(num, { precision: 2 })}`
    }
  }

  // Check if data has loaded
  if (totalPrizes === null) {
    return <ThemedClipSpinner />
    // return <>...</>
  }

  const totalPrizeFormatted = formatNumbers(totalPrizes)

  return totalPrizeFormatted
}
