import React from 'react'
import ContentLoader from 'react-content-loader'
import { isMobile } from 'react-device-detect'

const UI_LOADER_ANIM_DEFAULTS = {
  gradientRatio: 2.5,
  interval: 0.05,
  speed: 0.6
}

export const BannerUILoader = (props) => {
  const bgColor = '#401C94'
  const foreColor = '#501C94'

  if (isMobile) {
    return (
      <ContentLoader
        {...UI_LOADER_ANIM_DEFAULTS}
        viewBox='0 0 600 300'
        backgroundColor={bgColor}
        foregroundColor={foreColor}
      >
        <rect x='0' y='0' rx='15' ry='15' width='600' height='300' />
      </ContentLoader>
    )
  }

  return (
    <ContentLoader
      {...UI_LOADER_ANIM_DEFAULTS}
      viewBox='0 0 600 50'
      backgroundColor={bgColor}
      foregroundColor={foreColor}
    >
      <rect x='0' y='0' rx='5' ry='5' width='600' height='50' />
    </ContentLoader>
  )
}
