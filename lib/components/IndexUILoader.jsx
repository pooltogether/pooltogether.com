import React from 'react'
import ContentLoader from 'react-content-loader'

export const IndexUILoader = (
  props,
) => {
  if (!window) {
    return null
  }
  
  const theme = 'light'
  const bgColor = theme === 'light' ? '#ffffff' : '#401C94'
  const foreColor = theme === 'light' ? '#f5f5f5' : '#501C94'

  return <>
    <ContentLoader
      gradientRatio={2.5}
      interval={0.05}
      speed={0.6}
      viewBox="0 0 600 600"
      backgroundColor={bgColor}
      foregroundColor={foreColor}
    >
      <rect x="0" y="0"   rx="5" ry="5" width="600" height="80" />
      <rect x="0" y="90"  rx="5" ry="5" width="600" height="80" />
      <rect x="0" y="180" rx="5" ry="5" width="600" height="80" />
    </ContentLoader>
  </> 
}
