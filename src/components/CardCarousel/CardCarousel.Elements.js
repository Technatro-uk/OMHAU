import styled from 'styled-components';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaArrowRight } from 'react-icons/fa';

export const SectionHeading = styled.h4`
margin-top: 3rem;
  font-size: 26px;
  color: #333;
  text-align: center;
`;

export const Slider = styled.section`
margin-top: 3rem;
    position: relative;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SlideContainer = styled.div`
    position: absolute;
`;

export const SliderCard = styled.div`
  border: 1px solid dodgerblue;
  border-radius: 3px;
  width: 100%;
  text-align: center;
`;

export const CardImageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 100%;
  margin: -40% auto 0;
`;

export const SliderImage = styled.img`
  width: 80%;
  height: 80%;
    border-radius: 10px;
    background-color: #fff;

    @media screen and (max-width: 960px) {
        width: 50%;
        height: 50%;
    }
`;

export const SliderLeftArrow = styled(FaArrowAltCircleLeft)`
    position: absolute;
    top: 50%;
    left: 1rem;
    font-size: 2rem;
    color: dodgerblue;
    z-index: 10;
    cursor: pointer;
    user-select: none;
`;

export const SliderRightArrow = styled(FaArrowAltCircleRight)`
    position: absolute;
    top: 50%;
    right: 1rem;
    font-size: 2rem;
    color: dodgerblue;
    z-index: 10;
    cursor: pointer;
    user-select: none;
`;

export const CardInfo = styled.div`
  width: 200px;
  padding-bottom: 20px;

  @media screen and (max-width: 960px) {
    width: 150px;
  }
`;

export const CardHeading = styled.h4`
  color: #333;
  text-align: center;
  padding: 20px 0;

  @media screen and (max-width: 960px) {
    font-size: 1rem;
  }
`;

export const ArrowLink = styled(FaArrowRight)`
  font-size: 1.2rem;
  color: dodgerblue;

  &:hover {
    transform: scale(1.4);
  }
`;