import React from 'react'

// import { useTranslation } from 'lib/../i18n'
import { numberWithCommas } from 'lib/utils/numberWithCommas'
import { usePooltogetherTvl, usePooltogetherTotalPrizes } from 'lib/hooks/usePooltogetherTvl'
import { BannerUILoader } from 'lib/components/BannerUILoader'

export const WeeklyPrizeAmount = (props) => {
  // const { t } = useTranslation()

  const totalValueLocked = usePooltogetherTvl()
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
  if (totalValueLocked === null || totalPrizes === null) {
    return (
      <div className='pool-container mx-auto mt-12'>
        <BannerUILoader />
      </div>
    )
  }

  const totalPrizeFormatted = formatNumbers(totalPrizes)
  // const totalValueLockedFormatted = formatNumbers(totalValueLocked)

  return totalPrizeFormatted
}
