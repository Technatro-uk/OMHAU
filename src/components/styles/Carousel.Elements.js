import styled from 'styled-components';
import { Row, Button } from '../../globalStyles';
import Slider from 'react-slick';

export const CarouselContainer = styled.div`
	width: 100%;
	height: 100vh;

	@media screen and (max-width: 768px) {
    height: 80vh;
	}

`;

export const SectionHeading = styled.h4`
  font-size: 1.6rem;
  color: #333;
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
		text-align: center;
	}
`;

export const SliderContainer = styled.div`
`;

export const ReviewSlider = styled(Slider)`

	.slick-track {
    display: block;
		padding: 1rem;
		gap: 1rem;
	}

	.slick-slide {
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
  box-shadow: dodgerblue 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  // width: 350px;
  height: 100%;
  text-decoration: none;
  border-radius: 8px;

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
  height: 350px;
  padding: 0.4rem;
  justify-content: center;
  align-items: center;
  color: #333;
`;

export const CardTitle = styled.h3`
  margin-top: 0.5rem;
  font-size: 1rem;
  border-bottom: 3px solid dodgerblue;
`;

export const CarouselImage = styled.img`
  margin: 0.5rem 0;
	width: 100%;
	height: 100px;
	object-fit: center;
	vertical-align: middle;
`;

export const CardInformation = styled.div`
  margin: 16px 12px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #010606;
`;

export const CardCategory = styled.li`
  margin-bottom: 10px;
`;

export const CardDescription = styled.li`
  font-size: 1rem;
  text-align: center;
`;

export const CardButton = styled(Button)`
	margin-top: 1.5rem;
`;