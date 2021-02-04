import React, { useEffect, useState } from 'react'
import classnames from 'classnames'

import { V3LoadingDots } from 'lib/components/V3LoadingDots'

const VIDEO_ID = 'pvj32sxfho'

export const WistiaPlayer = (props) => {
  useEffect(() => {
    const script1 = document.createElement('script')
    script1.src = `//fast.wistia.com/assets/external/E-v1.js`
    script1.async = true
    document.body.appendChild(script1)
  }, [])

  const [loadingIndicatorVisible, setLoadingIndicatorVisible] = useState(false)
  const [alreadyExecuted, setAlreadyExecuted] = useState(false)

  useEffect(() => {

    if (window && window.Wistia && props.play) {
      const videoPlayer = document.getElementById('video-player')
      
      function makeEmbedPop(elem) {
        

        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0 })
        }
        
        elem.setAttribute('class', '')
        elem.setAttribute('class', 'wistia_embed wistia_async_' + VIDEO_ID + ' popover=true popoverContent=link')

        var popoverAction = {}

        popoverAction[VIDEO_ID] = function (video) {
          video.popover.show()
          video.play()
        }

        window._wq = window._wq || []
        _wq = []
        _wq.push(popoverAction)



        if (!alreadyExecuted) {
          setLoadingIndicatorVisible(true)

          const intTimer = setInterval(() => {
            if (elem.classList.contains('wistia_embed_initialized')) {
              setAlreadyExecuted(true)
              setLoadingIndicatorVisible(false)
              clearInterval(intTimer)
            }
          }, 200)
        }
      }

      
      makeEmbedPop(videoPlayer)

    }
  }, [props.play])

  return <>
    <div
      className={classnames(
        'fixed flex items-center justify-center t-0 r-0 l-0 b-0',
        {
          'hidden': !loadingIndicatorVisible,
          'bg-body block': loadingIndicatorVisible
        }
      )} 
      style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
       }}
    >
      <V3LoadingDots />
    </div>

    <div id='video-player' />
  </>
}
