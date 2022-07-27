import styled from 'styled-components';
import { Row } from '../../globalStyles';
import Slider from 'react-slick';

export const CarouselContainer = styled.div`
	width: 100%;

	@media screen and (max-width: 768px) {
		padding: 30px;
	}

`;

export const SectionHeading = styled.h4`
  font-size: 26px;
  color: #333;
  // margin-left: 1.5rem;
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
		padding: 0.8rem;
		gap: 1.3rem;
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
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.36) 0px 1px 4px;
  height: 100%;
  text-decoration: none;

  &:hover {
    transform: scale(1.03);
    transition: all 0.3s ease-out;
    color: #1c2237;
    box-shadow: dodgerblue 0px 2px 8px 0px;
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
  width: 10rem;
  padding: 8px;
  justify-content: center;
  align-items: center;
  color: #333;
`;

export const CardHeading = styled.h4`
  font-size: 1rem;
  color: #333;
  text-align: center;
  background: transparent;
`;

export const CardInformation = styled.div`
  text-align: center;
  height: 5rem;
`;

export const CardCategory = styled.p`
  color: darkorange;
  font-size: 0.9rem;
`;

export const CardImage = styled.img`
  width: 48px;
  height: 48px;
  display: block;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const CardButton = styled.button`
    border-radius: 25px;
    white-space: nowrap;
    padding: 8px 16px;
    color: dodgerblue;
    font-size: 16px;
    outline: none;
    border: 1px solid dodgerblue;
    cursor: pointer;

    &:hover {
        transition: all 0.3s ease-in-out;
        color: #FFF;
        background: dodgerblue;
    }

    @media screen and (max-width: 960px){
        width: 100%;
    }
`;