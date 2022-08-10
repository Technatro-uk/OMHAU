import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Row } from "../../globalStyles";
import { IconContext } from "react-icons";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {
  AccordionContainer,
  ButtonContainer,
  TitleOptions,
  SectionHeading,
} from "../styles/CustomTable.Elements";
import {
  ReviewSlider,
  CarouselCard,
  CardHeading,
  CardImageContainer,
  CardImage,
  CardInfo,
  ArrowLink,
} from "../styles/AdminCarousel.Elements";

const AdminCarousel = ({ dataSource }) => {
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
    <AccordionContainer>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <TitleOptions>
              <SectionHeading>Quick Links</SectionHeading>
            </TitleOptions>
          </Accordion.Header>
          <Accordion.Body>
            <Row justify="space-between" wrap="nowrap">
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
                  <CarouselCard key={id}>
                    <CardImageContainer>
                      <CardImage src={ds.image} />
                    </CardImageContainer>
                    <CardInfo>
                      <CardHeading>{ds.title}</CardHeading>
                      <Link to={ds.linkUrl} target="_blank" rel="noreferrer">
                        <ArrowLink />
                      </Link>
                    </CardInfo>
                  </CarouselCard>
                );
              })}
            </ReviewSlider>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </AccordionContainer>
  );
};

export default AdminCarousel;