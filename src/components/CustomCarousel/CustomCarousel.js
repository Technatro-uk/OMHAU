import React, { useState } from "react";
import { IconContext } from "react-icons";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
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
  ArrowLink,
} from "../styles/CustomCarousel.Elements";

const CustomCarousel = ({ dataSource }) => {
  const breakpoint = {
    // Extra small screen / phone
    es: 300,
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
        breakpoint: breakpoint.es,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
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
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: breakpoint.md,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: breakpoint.lg,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: breakpoint.xl,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  };

  const [sliderRef, setSliderRef] = useState(null);

  return (
    <CarouselContainer>
      <Section inverse>
        <Row justify="space-between" wrap="nowrap">
          <SectionHeading>Resources</SectionHeading>
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
                <CardImageContainer>
                  <CardImage src={ds.image} />
                </CardImageContainer>
                <CardInfo>
                  <CardHeading>{ds.title}</CardHeading>
                  <a href={ds.linkUrl} target="_blank" rel="noreferrer">
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
