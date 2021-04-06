import { usePoolTogetherSubgraph310Client } from 'lib/hooks/subgraphClients/usePoolTogetherSubgraph310Client'
import { usePoolTogetherSubgraph332Client } from 'lib/hooks/subgraphClients/usePoolTogetherSubgraph332Client'

export function useVersionedPoolTogetherSubgraphClient(version) {
  let client
  switch (version) {
    case '3.1.0':
      client = usePoolTogetherSubgraph310Client()
      break
    case '3.3.2':
      client = usePoolTogetherSubgraph332Client()
      break
    default:
      client = usePoolTogetherSubgraph310Client()
      break
  }

  return client
}
