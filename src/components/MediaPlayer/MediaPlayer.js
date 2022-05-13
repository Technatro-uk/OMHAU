import React from 'react';
import ReactPlayer from 'react-player';
import { MediaPlayerContainer } from './MediaPlayer.Elements';


const MediaPlayer = ({ mediaUrl }) => {
  return (
    <MediaPlayerContainer>
        <ReactPlayer url={mediaUrl} controls={true} muted={false} />
    </MediaPlayerContainer>
  )
}

export default MediaPlayer;