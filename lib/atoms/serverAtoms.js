import { atom, useAtom } from 'jotai'

/** @type {import('jotai').Atom<string>} */
export const weeklyPrizeAmountAtom = atom(undefined)

export const useWeeklyPrizeAmount = () => {
  const [amount] = useAtom(weeklyPrizeAmountAtom)
  return amount
}