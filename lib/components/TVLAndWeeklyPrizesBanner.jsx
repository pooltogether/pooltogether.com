import React from 'react'

import { useTotalPoolPrizeInterestUSD } from 'lib/hooks/useTotalPoolPrizeInterestUSD'
import { useTotalPoolPrizeValueLockedUSD } from 'lib/hooks/useTotalPoolPrizeValueLockedUSD'
import { numberWithCommas } from 'lib/utils/numberWithCommas'

import Rocket from 'assets/images/rocketship@2x.png'

export const TVLAndWeeklyPrizesBanner = (props) => {
  const [totalValueLocked, totalPrizePoolValueLockedIsFetched] = useTotalPoolPrizeValueLockedUSD()
  const {
    data: totalPrizeInterestUSD,
    isFetched: totalPrizeIsFetched
  } = useTotalPoolPrizeInterestUSD()

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
  if (!totalPrizeIsFetched || !totalPrizePoolValueLockedIsFetched) {
    return null
    // return <BannerUILoader />
  }

  const totalPrizeFormatted = formatNumbers(totalPrizeInterestUSD)
  const totalValueLockedFormatted = formatNumbers(totalValueLocked)

  // const PoolCountUp = (props) => {
  //   return <CountUp
  //     start={props.value || 0}
  //     end={props.value}
  //     duration={1.4}
  //     separator={','}
  //     decimals={0}
  //   />
  // }

  return (
    <div className='pool-container bg-holographic flex flex-col items-center font-bold text-primary rounded-lg text-center mt-12 px-4 py-4 mx-auto'>
      <div className='flex flex-col xs:flex-row items-center'>
        <img src={Rocket} className='w-12 h-12 xs:w-16 xs:h-16 sm:mr-4' />

        <span className='sm:leading-tight text-xs xs:text-sm sm:text-lg lg:text-xl sm:mr-auto'>
          Currently {totalValueLockedFormatted} deposited and {totalPrizeFormatted} prizes weekly!{' '}
        </span>
      </div>
    </div>
  )
}
