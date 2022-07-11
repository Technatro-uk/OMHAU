import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StorySection = styled.div`
  // height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StoryWrapper = styled.div`
  display: grid;
  grid-template-column: repeat(2, 1fr);
  align-items: center;
  margin: 10px auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StoryHeading = styled.h1`
  color: #777;
  font-size: 28px;
  margin-bottom: 14px;
`;

export const StoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
  }
`;

export const StoryCard = styled(Link)`
  background: #fff;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 180px;
  height: 100%;
  text-decoration: none;
  border-radius: 4px;

  &:nth-child(2) {
    margin: 24px;
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`;

export const StoryCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 350px;
  padding: 24px;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const StoryCardIcon = styled.div`
  margin: 16px 0;
`;

export const StoryCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 16px;
`;

export const StoryCardCost = styled.h4`
  font-size: 20px;
  color: #333;
`;

export const StoryCardLength = styled.p`
  font-size: 14px;
  margin-bottom: 14px;
`;

export const StoryCardFeatures = styled.ul`
  margin: 16px 0 12px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
`;

export const StoryCardFeature = styled.li`
  margin-bottom: 10px;
`;