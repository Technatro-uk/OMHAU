import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Row, Section } from "../../globalStyles";
import {
  CarouselContainer,
  SectionHeading,
  ButtonContainer,
  ReviewSlider,
  Card,
  CardInformation,
  // CardHeading,
  CardImage,
  CardButton,
  CardInfo,
} from "./AdminCarousel.Elements";

const CustomCarousel = ({ dataSource }) => {
  const sliderSettings = {
    arrows: false,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  const [sliderRef, setSliderRef] = useState(null);

  return (
    <CarouselContainer>
      <Section inverse>
        <Row justify="space-between" wrap="nowrap">
          <SectionHeading>Quick Links</SectionHeading>
          <ButtonContainer>
            <IconContext.Provider
              value={{ size: "1.3rem", color: "dodgerblue" }}
            >
              <FaArrowLeft onClick={sliderRef?.slickPrev} />
              <FaArrowRight onClick={sliderRef?.slickNext} />
            </IconContext.Provider>
          </ButtonContainer>
        </Row>

        <ReviewSlider {...sliderSettings} ref={setSliderRef}>
          {dataSource.map((ds, id) => {
            return (
              <Card key={id}>
                <CardInfo>
                  <CardInformation>
                    <CardImage src={ds.image} />
                  </CardInformation>
                  <Link to={ds.linkUrl}>
                    <CardButton>
                    {ds.title}
                    </CardButton>
                  </Link>
                </CardInfo>
              </Card>
            );
          })}
        </ReviewSlider>
      </Section>
    </CarouselContainer>
  );
};

export default CustomCarousel;
