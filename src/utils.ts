import deepmerge from 'deepmerge'
import { PROTOCOL_STATS_API_URL } from './constants'
import { AggregatedProtocolStats } from './types'

export const getProtocolStats = async () => {
  const results = await fetch(PROTOCOL_STATS_API_URL)
  const data: AggregatedProtocolStats = await results.json()
  return data
}

export const getMessages = async (locale?: string, options?: { useDefault?: boolean }) => {
  const defaultMessages: IntlMessages = (await import(`../messages/en.json`)).default

  if (!locale) return defaultMessages

  const localeMessages: IntlMessages = (await import(`../messages/${locale}.json`)).default
  const messages = options?.useDefault
    ? deepmerge<IntlMessages>(defaultMessages, localeMessages)
    : localeMessages

  return messages
}
