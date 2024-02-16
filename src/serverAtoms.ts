import { atom, useAtomValue } from 'jotai'
import { AggregatedProtocolStats } from './types'

export const protocolStatsAtom = atom<AggregatedProtocolStats | undefined>(undefined)

export const useProtocolStats = () => {
  const protocolStats = useAtomValue(protocolStatsAtom)
  return protocolStats
}
