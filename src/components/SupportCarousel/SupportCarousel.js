import React, { useState } from 'react';
import { supportData } from "../../Data/Carousel/CarouselData";
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
  CardDescription,
  ArrowLink
} from "./SupportCarousel.Elements";

const SupportCarousel = ({ data }) => {

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
    <SectionHeading>Online Support</SectionHeading>
    <Slider>
        <SliderLeftArrow onClick={prevSlide}/>
        <SliderRightArrow onClick={nextSlide}/>
    { supportData.map((sData, index) => {
        return (
          <SlideContainer key={index}>
            {index === current && (
              <SliderCard>
                <CardImageContainer>
                    <CardHeading>{sData.title}</CardHeading>
                  <SliderImage src={sData.image} alt={sData.title} />
                  <CardInfo>
                    <CardDescription>{sData.description}</CardDescription>
                    <a href={sData.linkUrl} target="_blank" rel="noreferrer">
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

export default SupportCarousel;