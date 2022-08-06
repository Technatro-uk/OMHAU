import React, { useState } from "react";
import { Row, Heading, Section } from "../../globalStyles";
import { IconContext } from "react-icons";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { dataTitle, supportData } from "../../Data/Carousel/CarouselData";
import {
  CarouselContainer,
  ButtonContainer,
  ReviewSlider,
  CarouselImage,
  Card,
  CardInformation,
  CardTitle,
  CardCategory,
  CardDescription,
  CardInfo,
  CardButton,
} from "../styles/Carousel.Elements";

const Carousel = () => {
  const sliderSettings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const [sliderRef, setSliderRef] = useState(null);

  return (
    <CarouselContainer>
      <Section margin="auto" maxWidth="1300px" padding="15px 15px" inverse>
        <Row justify="space-between" wrap="nowrap">
          <Heading width="auto" inverse>
            {dataTitle}
          </Heading>
          <ButtonContainer>
            <IconContext.Provider value={{ size: "1.3rem" }}>
              <FaArrowLeft onClick={sliderRef?.slickPrev} />
              <FaArrowRight onClick={sliderRef?.slickNext} />
            </IconContext.Provider>
          </ButtonContainer>
        </Row>

        <ReviewSlider {...sliderSettings} ref={setSliderRef}>
          {supportData.map((sd, id) => {
            return (
              <Card key={id}>
                <CardInfo>
                  <CardTitle>{sd.title}</CardTitle>
                  <CarouselImage src={sd.image} />
                  <CardInformation>
                    <CardCategory>{sd.storyCategory}</CardCategory>
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
      </Section>
    </CarouselContainer>
  );
};

export default Carousel;
