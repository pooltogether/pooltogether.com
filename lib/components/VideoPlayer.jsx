import React, { useState } from 'react'
import ReactPlayer from 'react-player'

export const VideoPlayer = ({ files, isPlaying }) => {
  return (
    <div className='-mx-10'>
      <ReactPlayer url={files} loop playing volume={0} width='100%' height='100%' />
    </div>
  )
}
