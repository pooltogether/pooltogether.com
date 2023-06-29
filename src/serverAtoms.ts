import { atom, useAtomValue } from 'jotai'
import { ProtocolStats } from './types'

export const protocolStatsAtom = atom<ProtocolStats | undefined>(undefined)

export const useProtocolStats = () => {
  const protocolStats = useAtomValue(protocolStatsAtom)
  return protocolStats
}
