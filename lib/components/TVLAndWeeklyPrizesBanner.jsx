import React from 'react'

// import { useTranslation } from 'lib/../i18n'
import { numberWithCommas } from 'lib/utils/numberWithCommas'
import { usePooltogetherTvl, usePooltogetherTotalPrizes } from 'lib/hooks/usePooltogetherTvl'
import { BannerUILoader } from 'lib/components/BannerUILoader'

import Rocket from 'assets/images/rocketship@2x.png'

export const TVLAndWeeklyPrizesBanner = (props) => {
  // const { t } = useTranslation()

  const totalValueLocked = usePooltogetherTvl()
  const totalPrizes = usePooltogetherTotalPrizes()

  const formatNumbers = (num) => {
    if (num > 1000000) {
      return `$${numberWithCommas(num / 1000000, { precision: 2 })} ${'million'}`
    } else if (num > 100000) {
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

  return (
    <div className='pool-container bg-card flex flex-col items-center font-bold text-accent-3 rounded-lg text-center mt-6 px-4 py-4 mx-auto'>
      <div className='flex flex-col xs:flex-row items-center'>
        <img src={Rocket} className='w-12 h-12 xs:w-16 xs:h-16 sm:mr-4' />

        <span className='sm:leading-tight text-xs xs:text-sm sm:text-lg lg:text-xl sm:mr-auto'>
          Currently awarding {totalPrizeFormatted} in prizes weekly!
        </span>
      </div>
    </div>
  )
}
