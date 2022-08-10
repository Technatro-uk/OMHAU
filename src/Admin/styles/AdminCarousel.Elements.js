import styled from 'styled-components';
import { Row } from '../../globalStyles';
import Slider from 'react-slick';
import { FaArrowRight } from 'react-icons/fa';

export const CarouselContainer = styled.div`
	width: 100%;
	padding: 10px;

	@media screen and (max-width: 768px) {
		padding: 30px;
	}

`;

export const ButtonContainer = styled(Row)`
	& svg {
		opacity: 0.5;
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
		padding: 0.5rem;
	}

	.slick-slide {
		display: flex;
		justify-content: center;
		outline: none;
	}

	.slick-list {
		overflow: hidden;
	}
`;

export const CarouselCard = styled.div`
  border: 1px solid dodgerblue;
  border-radius: 5px;
  width: 300px;
  text-align: center;
  margin-top: 2rem;

  @media screen and (max-width: 960px) {
    width: 200px;
  }
`;

export const CardImageContainer = styled.div`
  width: 60px;
  height: 60px;
  overflow: hidden;
  border-radius: 100%;
  margin: -30px auto 0;

  @media screen and (max-width: 960px) {
    width: 40px;
    height: 40px;
    margin: -20px auto 0;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: center;
  background-color: #FFF;
`;

export const CardInfo = styled.div`
  width: 200px;
  padding: 5px;

  @media screen and (max-width: 960px) {
    width: 150px;
  }
`;

export const CardHeading = styled.h4`
  color: #333;
  text-align: center;
  padding: 5px;

  @media screen and (max-width: 960px) {
    font-size: 0.8rem;
  }
`;

export const ArrowLink = styled(FaArrowRight)`
  font-size: 1.2rem;
  color: dodgerblue;

  &:hover {
    transform: scale(1.4);
  }
`;