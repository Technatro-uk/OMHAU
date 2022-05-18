import React from 'react';
import { SliderData } from './SliderData';
import { SliderContainer } from './ImageSlider.Elements';

const VideoSlider = () => {
  return (
    <SliderContainer>
      {SliderData.map((slide, index) => {
        return (
          <img key={index} src={slide.image} alt='image' />
        )
      })}
    </SliderContainer>
  );
}

export default VideoSlider;