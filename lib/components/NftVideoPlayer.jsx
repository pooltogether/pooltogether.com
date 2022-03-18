import React from 'react'
import ReactPlayer from 'react-player'

export const NftVideoPlayer = ({
  setIndexPlaying,
  indexPlaying,
  label,
  dropRate,
  files,
  isPlaying
}) => {
  return (
    <div>
      <ReactPlayer url={files} loop playing={isPlaying} volume={0} width='100vw' height='50vh' />
      <div className='text-white text-center bg-pt-purple-bright py-2 sm:py-4'>
        <span className='font-semibold'>{label}</span>
        <span className='block text-xxs opacity-60'>{dropRate}% drop rate</span>
      </div>
    </div>
  )
}
