import styled from 'styled-components';
import { Row, Button } from '../../globalStyles';
import Slider from 'react-slick';

export const CarouselContainer = styled.div`
	width: 100%;
	background: #FFF;
	max-width: 1300px;
	margin-right: auto;
	margin-left: auto;
	padding: 20px;
	height: 100vh;

	@media screen and (max-width: 768px) {
		padding: 30px;
	}

`;

export const ButtonContainer = styled(Row)`
	& svg {
		opacity: 0.5;
		margin: 1rem;
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

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 350px;
  padding: 24px;
  justify-content: center;
  align-items: center;
  color: #333;
`;

export const Card = styled.div`
  background: #fff;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 350px;
  height: 350px;
  text-decoration: none;
  border-radius: 4px;

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

export const CardTitle = styled.h3`
  margin-bottom: 15px;
  font-size: 16px;
`;

export const CardAuthor = styled.h4`
  font-size: 14px;
  color: #333;
`;

export const CardDatePublished = styled.p`
  font-size: 14px;
  margin-bottom: 14px;
`;

export const CardWordCount = styled.p`
  font-size: 14px;
  margin-bottom: 14px;
`;

export const CarouselImage = styled.img`
	width: 100%;
	height: 100px;
	object-fit: cover;
	vertical-align: middle;
`;

export const CardInformation = styled.div`
  margin: 16px 12px;
  list-style: none;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #010606;
`;

export const CardCategory = styled.li`
  margin-bottom: 10px;
`;

export const CardDescription = styled.li`
  font-size: 1.1rem;
  text-align: center;
`;

export const CardButton = styled(Button)`
	margin-top: 2.5rem;
`;