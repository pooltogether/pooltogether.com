import React from 'react'
import { Time as PTTime } from '@pooltogether/react-components'

export const Time = (props) => <PTTime {...props} />

Time.defaultProps = {
  hideDays: false,
  getTimeColorClassName: (seconds) => {
    // 1 hour
    if (seconds >= 3600) {
      return 'text-highlight-6'
      // 30 minutes
    } else if (seconds >= 3600) {
      return 'text-orange'
    } else {
      return 'text-functional-red'
    }
  }
}
