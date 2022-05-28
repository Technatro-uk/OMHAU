import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FeaturedSection = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const FeaturedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const FeaturedHeading = styled.h1`
  color: #777;
  font-size: 28px;
  margin-bottom: 14px;
`;

export const FeaturedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
  }
`;

export const FeaturedCard = styled(Link)`
  background: #242424;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 180px;
  height: 150px;
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

export const FeaturedCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  padding: 24px;
  align-items: center;
  color: #fff;
`;

export const FeaturedCardIcon = styled.div`
  margin: 16px 0;
`;

export const FeaturedCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 16px;
`;

export const FeaturedCardCost = styled.h4`
  font-size: 20px;
  color: #333;
`;

export const FeaturedCardLength = styled.p`
  font-size: 14px;
  margin-bottom: 14px;
`;

export const FeaturedCardFeatures = styled.ul`
  margin: 16px 0 12px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
`;

export const FeaturedCardFeature = styled.li`
  margin-bottom: 10px;
`;