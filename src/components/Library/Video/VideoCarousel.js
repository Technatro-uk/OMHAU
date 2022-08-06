import React, { useState } from "react";
import { Row, Button, Section } from "../../../globalStyles";
import { IconContext } from "react-icons";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
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
} from "../../styles/VideoCarousel.Elements";

const VideoCarousel = ({ dataSource }) => {
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
          <SectionHeading>Recently Added</SectionHeading>
          <ButtonContainer>
            <IconContext.Provider value={{ size: "1.3rem" }}>
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
                  <CardCategory>{ds.videoCategory}</CardCategory>
                  <CardHeading>{ds.videoAuthor}</CardHeading>
                  <CardInformation>
                    <CardDatePublished>
                      (Added {ds.mediaAdded})
                    </CardDatePublished>
                  </CardInformation>
                  <a href={ds.videoSource} target="_blank" rel="noreferrer">
                    <Button primary>Watch</Button>
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

export default VideoCarousel;