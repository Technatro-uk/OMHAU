import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Row, Button, Section } from "../../../globalStyles";
import {
  CarouselContainer,
  SectionHeading,
  ButtonContainer,
  ReviewSlider,
  CarouselCard,
  CardInformation,
  CardHeading,
  CardDatePublished,
  CardCategory,
  CardInfo,
} from './AudioCarousel.Elements';

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
            Recently Added
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
                    <CardInfo>
                        <CardCategory>
                          {ds.audioType}
                        </CardCategory>
                      <CardHeading>
                      {ds.audioAuthor}
                      </CardHeading>
                      <CardInformation>
                      <CardDatePublished>
                        (Added {ds.datePublished})
                      </CardDatePublished>
                      </CardInformation>
                      <a
                        href={ds.audioURL}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button primary>Go to</Button>
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
