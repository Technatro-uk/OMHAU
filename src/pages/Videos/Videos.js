import React from 'react';
import { 
  MediaItem1, 
  MediaItem2, 
  MediaItem3,
  MediaItem4,
  MediaItem5,
  MediaItem6,
  MediaItem7,
  MediaItem8 } from './Data';
import MediaSection from '../../components/MediaSection/MediaSection';

const Videos = () => {
    
    
  return (
    <>
    <MediaSection {...MediaItem1} />
    <MediaSection {...MediaItem2} />
    <MediaSection {...MediaItem3} />
    <MediaSection {...MediaItem4} />
    <MediaSection {...MediaItem5} />
    <MediaSection {...MediaItem6} />
    <MediaSection {...MediaItem7} />
    <MediaSection {...MediaItem8} />
    </>
  );
}

export default Videos;