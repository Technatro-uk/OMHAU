import React, { useState } from 'react';
import {
    SectionHeading,
  Slider,
  SliderImage,
  SliderLeftArrow,
  SliderRightArrow,
  CardImageContainer,
  SlideContainer,
  SliderCard,
  CardInfo,
  CardHeading,
  ArrowLink
} from "./CardCarousel.Elements";

const CardCarousel = ({ data }) => {

    const [current, setCurrent] = useState(0);
    const length = data.length;

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    if(!Array.isArray(data) || data.length <= 0) {
        return null;
    }

  return (
    <>
    <SectionHeading>Resources</SectionHeading>
    <Slider>
        <SliderLeftArrow onClick={prevSlide}/>
        <SliderRightArrow onClick={nextSlide}/>
    { data.map((slide, index) => {
        return (
          <SlideContainer key={index}>
            {index === current && (
              <SliderCard>
                <CardImageContainer>
                  <SliderImage src={slide.image} alt={slide.title} />
                  <CardInfo>
                    <CardHeading>{slide.title}</CardHeading>
                    <a href={slide.linkUrl} target="_blank" rel="noreferrer">
                      <ArrowLink />
                    </a>
                  </CardInfo>
                </CardImageContainer>
              </SliderCard>
            )}
          </SlideContainer>
        ); 
    })}
    </Slider>
    </>
  )
}

export default CardCarousel