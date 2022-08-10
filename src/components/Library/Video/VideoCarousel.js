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
  const breakpoint = {
    // Very small screen / phone
    xs: 450,
    // Small screen / phone
    sm: 576,
    // Medium screen / tablet
    md: 768,
    // Large screen / desktop
    lg: 992,
    // Extra large screen / wide desktop
    xl: 1200,
  };

  const sliderSettings = {
    mobileFirst: true,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: breakpoint.xs,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: breakpoint.sm,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: breakpoint.md,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: breakpoint.lg,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: breakpoint.xl,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
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