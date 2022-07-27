import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Row, Section } from "../../globalStyles";
import {
  CarouselContainer,
  SectionHeading,
  ButtonContainer,
  ReviewSlider,
  CarouselCard,
  CardHeading,
  CardImageContainer,
  CardImage,
  CardInfo,
  ArrowLink
} from './CustomCarousel.Elements';

const CustomCarousel = ({ dataSource }) => {
  
  const sliderSettings = {
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,    
  };
  
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <CarouselContainer>
      <Section inverse>
        <Row justify="space-between" wrap="nowrap">
          <SectionHeading>
            Resources
          </SectionHeading>
          <ButtonContainer>
            <IconContext.Provider
              value={{ size: "1.3rem" }}
            >
              <FaArrowLeft onClick={sliderRef?.slickPrev} />
              <FaArrowRight onClick={sliderRef?.slickNext} />
            </IconContext.Provider>
          </ButtonContainer>
        </Row>

        <ReviewSlider {...sliderSettings} ref={setSliderRef}>
          {dataSource.map((ds, id) => {
            return (
              <CarouselCard key={id}>
                      <CardImageContainer>
                        <CardImage src={ds.image}/>
                      </CardImageContainer>
                    <CardInfo>
                      <CardHeading>
                      {ds.title}
                      </CardHeading>
                      <a
                        href={ds.linkUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <ArrowLink />
                      </a>
                    </CardInfo>
                  </CarouselCard>
            );
          })}
        </ReviewSlider>
      </Section>
    </CarouselContainer>
  );
};

export default CustomCarousel;
