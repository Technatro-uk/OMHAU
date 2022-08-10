import React, { useState } from "react";
import { Row, Section } from "../../globalStyles";
import { IconContext } from "react-icons";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { dataTitle, supportData } from "../../Data/Carousel/CarouselData";
import {
  CarouselContainer,
  SectionHeading,
  ButtonContainer,
  SliderContainer,
  ReviewSlider,
  CarouselImage,
  Card,
  CardInformation,
  CardTitle,
  CardDescription,
  CardInfo,
  CardButton,
} from "../styles/Carousel.Elements";

const Carousel = () => {
  const breakpoint = {
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
          <SectionHeading>{dataTitle}</SectionHeading>
          <ButtonContainer>
            <IconContext.Provider value={{ size: "1.3rem" }}>
              <FaArrowLeft onClick={sliderRef?.slickPrev} />
              <FaArrowRight onClick={sliderRef?.slickNext} />
            </IconContext.Provider>
          </ButtonContainer>
        </Row>

        <SliderContainer>
        <ReviewSlider {...sliderSettings} ref={setSliderRef}>
          {supportData.map((sd, id) => {
            return (
              <Card key={id}>
                <CardInfo>
                  <CardTitle>{sd.title}</CardTitle>
                  <CarouselImage src={sd.image} />
                  <CardInformation>
                    <CardDescription>{sd.description}</CardDescription>
                  </CardInformation>
                  <a href={sd.linkUrl}>
                    <CardButton primary>Contact</CardButton>
                  </a>
                </CardInfo>
              </Card>
            );
          })}
        </ReviewSlider>
        </SliderContainer>

        
      </Section>
    </CarouselContainer>
  );
};

export default Carousel;
