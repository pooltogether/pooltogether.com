import { isEmpty } from 'lodash'

export function calculateEstimatedExternalAwardsValue(
  externalAwardsChainData,
) {
  let totalUsd = null

  if (isEmpty(externalAwardsChainData)) {
    return totalUsd
  }

  const keys = Object.keys(externalAwardsChainData)

  keys.forEach(key => {
    const award = externalAwardsChainData[key]

    if (!award.value) {
      return
    }

    if (totalUsd === null) {
      totalUsd = 0
    }

    totalUsd += award.value
  })

  return totalUsd
}
