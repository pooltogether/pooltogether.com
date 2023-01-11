import { useQuery } from 'react-query'
import { numberWithCommas } from '@pooltogether/utilities'

export const useWeeklyPrizeAmount = () => {
  return useQuery('weeklyPrizeAmount', () => {
    return numberWithCommas('10692', { precision: 0 })
  })
}
