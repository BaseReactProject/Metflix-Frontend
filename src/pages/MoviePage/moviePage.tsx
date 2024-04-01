import React from 'react'
import VideoPlayer from '../../components/video-player/video-player'

type Props = {
}

const MoviePage = (props: Props) => {
  return (
    <>
        <VideoPlayer videoType={0}/>
    </>
  )
}

export default MoviePage