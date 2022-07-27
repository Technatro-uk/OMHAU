import styled from 'styled-components';
import { Row } from '../../../globalStyles';
import Slider from 'react-slick';

export const CarouselContainer = styled.div`
	width: 100%;
	padding: 10px;

	@media screen and (max-width: 768px) {
		padding: 30px;
	}

`;

export const SectionHeading = styled.h4`
  font-size: 26px;
  color: #333;
  margin-left: 1.2rem;
`;

export const ButtonContainer = styled(Row)`
	& svg {
		margin: 0.5rem;
		cursor: pointer;
	}

	& svg:hover {
		opacity: 1;
		transition: opacity 0.3s ease-in-out;
	}

	@media screen and (max-width: 960px) {
		margin: 0 auto;
	}
`;

export const ReviewSlider = styled(Slider)`
	width: 100%;

	.slick-track {
		display: flex;
		padding: 1.5rem;
		gap: 3rem;
	}

	.slick-slide {
		display: flex;
		justify-content: center;
		margin-bottom: 1;
		outline: none;
	}

	.slick-list {
		overflow: hidden;
	}
`;

export const CarouselCard = styled.div`  
  height: 100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  &:hover {
    transform: scale(1.03);
    transition: all 0.3s ease-out;
    color: #1c2237;
    border-radius: 8px;
    box-shadow: dodgerblue 0px 1px 4px;
  }

  @media screen and (max-width: 960px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 15rem;
  padding: 15px;
  justify-content: center;
  align-items: center;
  color: #333;
`;

export const CardHeading = styled.h4`
  font-size: 1rem;
  color: #333;
  text-align: center;
  padding: 0.6rem;
`;

export const CardInformation = styled.div`
  text-align: center;
  height: 3.5rem;
`;

export const CardCategory = styled.p`
  color: darkorange;
  font-size: 0.9rem;
`;

export const CardDatePublished = styled.p`
  color: #d474rf;
  font-size: 0.7rem;
  text-align: center;
`;