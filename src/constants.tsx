import { ReactNode } from 'react'

export const PROTOCOL_STATS_API_URL = 'https://protocol-stats.api.cabana.fi'

export const RICH_TEXT_FORMATTING: { [id: string]: (chunks: ReactNode) => JSX.Element } = {
  'purple-400': (chunks) => <span className='text-pt-purple-400'>{chunks}</span>,
  'teal': (chunks) => <span className='text-pt-teal'>{chunks}</span>
}
