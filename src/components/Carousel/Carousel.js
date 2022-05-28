import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { IconContext } from 'react-icons';
import { data, sliderSettings } from './Data';
import { Row, Heading, Section, TextWrapper } from '../../globalStyles';
import {
	CarouselContainer,
	ButtonContainer,
	ReviewSlider,
	ImageWrapper,
	CarouselImage,
	CardButton,
} from './Carousel.Elements';

const Carousel = () => {
	const [sliderRef, setSliderRef] = useState(null);

	return (
    <CarouselContainer>
      <Section margin="auto" maxWidth="1200px" padding="50px 50px" inverse>
        <Row justify="space-between" margin="1.5rem" wrap="nowrap">
          <Heading width="auto" inverse>
          Need to chat with someone?
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
          {data.map((re, index) => (
            <ImageWrapper key={index}>
              <CarouselImage src={re.image} />
              <TextWrapper size="0.8rem" margin="5px auto" weight="bold">
                {re.title}
              </TextWrapper>
              <TextWrapper size="0.8rem" margin="0.5rem" color="#010606">
                {re.description}
              </TextWrapper>
              <a href={re.linkUrl} target='_blank' rel='noreferrer'>
                <CardButton><BsFillArrowRightCircleFill /></CardButton>
              </a>
            </ImageWrapper>
          ))}
        </ReviewSlider>
      </Section>
    </CarouselContainer>
  );
};

export default Carousel;