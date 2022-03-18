import React from 'react'
import ReactPlayer from 'react-player'

export const VideoPlayer = ({ files, isPlaying }) => {
  return (
    <div className=''>
      <ReactPlayer url={files} loop playing={isPlaying} volume={0} width='100vw' height='50vh' />
    </div>
  )
}
