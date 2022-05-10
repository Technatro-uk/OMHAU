import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
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
			<Section margin="auto" maxWidth="1100px" padding="50px 50px" inverse>
			<Row justify="space-between" margin="1rem" wrap="wrap">
				<Heading width="auto" inverse>
					Resources
				</Heading>
				<ButtonContainer>
					<IconContext.Provider value={{ size: '1.5rem', color: 'dodgerblue' }}>
						<FaArrowLeft onClick={sliderRef?.slickPrev} />
						<FaArrowRight onClick={sliderRef?.slickNext} />
					</IconContext.Provider>
				</ButtonContainer>
			</Row>

			<ReviewSlider {...sliderSettings} ref={setSliderRef}>
				{data.map((re, index) => (
					<ImageWrapper key={index}>
						<CarouselImage src={re.image} />
						<TextWrapper size="1.1rem" margin="0.4rem 0 0" weight="bold">
							{re.title}
						</TextWrapper>
						<TextWrapper size="0.9rem" margin="0.7rem" color="#4f4f4f">
							{re.description}
						</TextWrapper>
						<CardButton>Learn More</CardButton>
					</ImageWrapper>
				))}
			</ReviewSlider>
		</Section>
		</CarouselContainer>
	);
};

export default Carousel;