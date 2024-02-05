import { formatNumberForDisplay } from '@shared/utilities'
import { useTranslations } from 'next-intl'
import { useProtocolStats } from 'src/serverAtoms'

export const useFormattedProtocolStats = () => {
  const protocolStats = useProtocolStats()

  const t = useTranslations('Common')

  const formatProtocolStatsValue = (value: number, options?: { hideLabel?: boolean }) => {
    if (value >= 1e9) {
      const formattedValue = formatNumberForDisplay(Math.floor(value) / 1e9, {
        maximumFractionDigits: 1
      })
      return !options?.hideLabel ? t('billion', { value: formattedValue }) : formattedValue
    } else if (value >= 1e6) {
      const formattedValue = formatNumberForDisplay(Math.floor(value) / 1e6, {
        maximumFractionDigits: 1
      })
      return !options?.hideLabel ? t('million', { value: formattedValue }) : formattedValue
    } else if (value >= 1e3) {
      const formattedValue = formatNumberForDisplay(Math.floor(value / 1e3) * 1e3)
      return !options?.hideLabel ? t('thousand', { value: formattedValue }) : formattedValue
    } else {
      const formattedValue = formatNumberForDisplay(value, { maximumFractionDigits: 0 })
      return formattedValue
    }
  }

  if (!!protocolStats) {
    return {
      totalPrizes: `$${formatProtocolStatsValue(protocolStats.total.awarded.usd)}`,
      tvl: `$${formatProtocolStatsValue(protocolStats.total.current.tvl.usd)}`,
      uniqueWallets: formatProtocolStatsValue(protocolStats.total.current.users, {
        hideLabel: true
      })
    }
  }

  return {}
}
