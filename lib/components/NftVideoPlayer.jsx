import React from 'react'

export const NftVideoPlayer = ({ label, dropRate, files, isPlaying }) => {
  return (
    <div>
      <VideoPlayer files={files} isPlaying={isPlaying} />
      <div className='text-white text-center bg-pt-purple-bright py-2 sm:py-4'>
        <span className='font-semibold'>{label}</span>
        <span className='block text-xxs opacity-60'>{dropRate}% drop rate</span>
      </div>
    </div>
  )
}

export const VideoPlayer = (props) => {
  const { isPlaying, files } = props

  return (
    <div className='flex w-screen' style={{ height: '50vh' }}>
      {isPlaying && (
        <video
          playsInline
          autoPlay
          muted
          loop
          preload='auto'
          className='mx-auto'
          style={{ height: 'inherit' }}
        >
          <source src={files.webm} type='video/webm' />
          <source src={files.mp4} type='video/mp4' />
        </video>
      )}
    </div>
  )
}
