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
  const sliderSettings = {
    arrows: false,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 4,
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