import { useAtom } from 'jotai'
import { graphQLErrorAtom } from 'lib/atoms/graphQLErrorAtom'

const retryCodes = [408, 500, 502, 503, 504, 522, 524]

export const useTheGraphCustomFetch = () => {
  const [_, setGraphQLError] = useAtom(graphQLErrorAtom)

  const theGraphCustomFetch = async (request, options, retry = 0) =>
    fetch(request, options)
      .then(async (response) => {
        if (response.ok) return response

        if (retry < 3 && retryCodes.includes(response.status)) {
          await sleep(retry)
          return theGraphCustomFetch(request, options, retry + 1)
        }

        throw new Error(JSON.stringify(response))
      })
      .catch((reason) => {
        setGraphQLError(true)
        return reason
      })

  return theGraphCustomFetch
}

const sleep = async (retry) => await new Promise((r) => setTimeout(r, 500 * retry))
