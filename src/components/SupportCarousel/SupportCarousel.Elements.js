import styled from "styled-components";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaArrowRight,
} from "react-icons/fa";

export const SectionHeading = styled.h4`
  margin-top: 3rem;
  font-size: 26px;
  color: #333;
  text-align: center;
`;

export const SliderLeftArrow = styled(FaArrowAltCircleLeft)`
  position: absolute;
  top: 0;
  left: 1rem;
  font-size: 2rem;
  color: dodgerblue;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

export const SliderRightArrow = styled(FaArrowAltCircleRight)`
  position: absolute;
  top: 0;
  right: 1rem;
  font-size: 2rem;
  color: dodgerblue;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

export const Slider = styled.section`
  margin-top: 1rem;
  position: relative;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SlideContainer = styled.div`
  position: absolute;
  padding: 1rem;

  @media screen and (max-width: 960px) {
    margin-top: 40%;
  }
`;

export const SliderCard = styled.div`
  border: 1px solid dodgerblue;
  border-radius: 3px;
  width: 50vw;
  text-align: center;

  @media screen and (max-width: 572px) {
    width: 100%;
  }
`;

export const CardImageContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  border-radius: 5%;
  // margin: -40% auto 0;
`;

export const SliderImage = styled.img`
  width: 30%;
  height: 15%;
  object-fit: contain;

  @media screen and (max-width: 572px) {
    width: 80%;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  justify-content: center;
  align-items: center;
  color: #333;
`;

export const CardHeading = styled.h4`
  color: #333;
  text-align: center;
  font-weight: bold;
  border-bottom: 2px solid dodgerblue;

  @media screen and (max-width: 960px) {
    font-size: 1rem;
  }
`;

export const CardDescription = styled.li`
padding: 0.5rem 0;
  font-size: 1.2rem;
  text-align: center;
  list-style: none;

  @media screen and (max-width: 572px) {
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
