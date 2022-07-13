import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { dataTitle, supportData, sliderSettings } from '../../Data/Carousel/CarouselData';
import { Row, Heading, Section } from '../../globalStyles';
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
  CardButton
} from './Carousel.Elements';

const Carousel = () => {
	const [sliderRef, setSliderRef] = useState(null);

	return (
    <CarouselContainer>
                <Section
                  margin="auto"
                  maxWidth="1200px"
                  padding="30px 30px"
                  inverse
                >
                  <Row justify="space-between" margin="1rem" wrap="nowrap">
                    <Heading width="auto" inverse>
                      {dataTitle}
                    </Heading>
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
                    {supportData.map((sd, id) => {
                return (
                  <Card key={id}>
                    <CardInfo>
                      <CardTitle>{sd.title}</CardTitle>
                      <CarouselImage src={sd.image}/>
                      <CardInformation>
                        <CardCategory>
                          {sd.storyCategory}
                        </CardCategory>
                        <CardDescription>
                          {sd.description}
                        </CardDescription>
                      </CardInformation>
                      <Link to={sd.linkUrl}>
                        <CardButton primary>Contact</CardButton>
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

export default Carousel;