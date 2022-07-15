import styled from 'styled-components';
import { Row, Button } from '../../../globalStyles';
import Slider from 'react-slick';

export const CarouselContainer = styled.div`
	width: 100%;
	background: #FFF;
	max-width: 100vw;
	margin: 0 auto;
	padding: 20px;
	// height: 100vh;

	@media screen and (max-width: 768px) {
		padding: 30px;
	}

`;

export const SectionHeading = styled.h4`
  font-size: 26px;
  color: #333;
  margin-left: 1.5rem;
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
	width: 1200px;

	.slick-track {
		display: flex;
		padding: 20px;
		gap: 2rem;
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

export const Card = styled.div`
  background: #fff;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
//   width: 350px;
  height: 200px;
  text-decoration: none;
  border-radius: 12px;

  &:hover {
    transform: scale(1.03);
    transition: all 0.5s ease-out;
    color: #1c2237;
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
  padding: 14px;
  justify-content: center;
  align-items: center;
  color: #333;
`;

export const CardHeading = styled.h4`
  font-size: 14px;
  color: #333;
  height: 50px;
  text-align: center;
  margin: 10px;
`;

export const CardDatePublished = styled.p`
  color: #d474rf;
  font-size: 0.6rem;
  font-weight: bold;
  margin-top: 8px;
`;

export const CardInformation = styled.ul`
  margin: 8px 0 10px;
  list-style: none;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: darkorange;
`;

export const CardCategory = styled.li`
  font-size: 0.8rem;
  font-weight: bold;
  color: #d474rf;
  height: 20px;
`;

export const CardButton = styled(Button)`
  	font-wight: 700;
	margin-top: 1.5rem;
`;