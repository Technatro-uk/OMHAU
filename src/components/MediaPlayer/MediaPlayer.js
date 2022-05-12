import React from 'react';
import ReactPlayer from 'react-player/lazy';
import { MediaPlayerContainer } from './MediaPlayer.Elements';


const MediaPlayer = ({ mediaUrl }) => {
  return (
    <MediaPlayerContainer>
        <ReactPlayer url={mediaUrl} />
    </MediaPlayerContainer>
  )
}

export default MediaPlayer;