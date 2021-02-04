import React from 'react'
import classnames from 'classnames'

import DaiSvg from 'assets/images/dai-new-transparent.png'
import WbtcSvg from 'assets/images/asset_BTC.svg'
// import DaiSvg from 'assets/images/dai.svg'
import MissingCurrencySvg from 'assets/images/activity.svg'
import UsdcSvg from 'assets/images/usdc-new-transparent.png'
// import UsdcSvg from 'assets/images/usdc.svg'
import UsdtSvg from 'assets/images/usdt-new-transparent.png'
// import UsdtSvg from 'assets/images/usdt.svg'

export const PoolCurrencyIcon = (
  props,
) => {
  const {
    className,
    sm,
    lg,
    xl,
    pool
  } = props
  
  const noMargin = props.noMargin || false
  const symbol = pool?.underlyingCollateralSymbol?.toLowerCase()

  let currencyIcon = 'circle'
  if (symbol === 'dai') {
    currencyIcon = DaiSvg
  } else if (symbol === 'usdc') {
    currencyIcon = UsdcSvg
  } else if (symbol === 'usdt') {
    currencyIcon = UsdtSvg
  } else if (symbol === 'wbtc') {
    currencyIcon = WbtcSvg
  } else {
    currencyIcon = MissingCurrencySvg
  }

  let sizeClasses = 'w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10'
  if (sm) {
    sizeClasses = 'w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8'
  }
  else if (lg) {
    sizeClasses = 'w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16'
  } else if (xl) {
    sizeClasses = 'w-12 h-12 sm:w-16 sm:h-16 lg:w-18 lg:h-18'
  }

  return <>
    <img
      src={currencyIcon}
      className={classnames(
        sizeClasses,
        {
          [className]: className,
          'inline-block': !className,
          'mr-2': !noMargin,
        }
      )}
    />
  </>
}
