import React from 'react';
import { Button } from '../../globalStyles';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  FeaturedSection,
  FeaturedWrapper,
  FeaturedHeading,
  FeaturedContainer,
  FeaturedCard,
  FeaturedCardInfo,
  FeaturedCardIcon,
  FeaturedCardPlan,
  FeaturedCardCost,
  FeaturedCardLength,
  FeaturedCardFeatures,
  FeaturedCardFeature
} from './Featured.Elements';

const Featured = () => {
  return (
    <IconContext.Provider value={{ color: '#A9B3C1', size: 64 }}>
      <FeaturedSection>
        <FeaturedWrapper>
          <FeaturedHeading>Our Services</FeaturedHeading>
          <FeaturedContainer>
            <FeaturedCard to='/sign-up'>
              <FeaturedCardInfo>
                <FeaturedCardIcon>
                  <GiRock />
                </FeaturedCardIcon>
                <FeaturedCardPlan>Starter Pack</FeaturedCardPlan>
                <FeaturedCardCost>$99.99</FeaturedCardCost>
                <FeaturedCardLength>per month</FeaturedCardLength>
                <FeaturedCardFeatures>
                  <FeaturedCardFeature>100 New Users</FeaturedCardFeature>
                  <FeaturedCardFeature>$10,000 Budget</FeaturedCardFeature>
                  <FeaturedCardFeature>Retargeting analytics</FeaturedCardFeature>
                </FeaturedCardFeatures>
                <Button primary>Choose Plan</Button>
              </FeaturedCardInfo>
            </FeaturedCard>
            <FeaturedCard to='/sign-up'>
              <FeaturedCardInfo>
                <FeaturedCardIcon>
                  <GiCrystalBars />
                </FeaturedCardIcon>
                <FeaturedCardPlan>Gold Rush</FeaturedCardPlan>
                <FeaturedCardCost>$299.99</FeaturedCardCost>
                <FeaturedCardLength>per month</FeaturedCardLength>
                <FeaturedCardFeatures>
                  <FeaturedCardFeature>1000 New Users</FeaturedCardFeature>
                  <FeaturedCardFeature>$50,000 Budget</FeaturedCardFeature>
                  <FeaturedCardFeature>Lead Gen Analytics</FeaturedCardFeature>
                </FeaturedCardFeatures>
                <Button primary>Choose Plan</Button>
              </FeaturedCardInfo>
            </FeaturedCard>
            <FeaturedCard to='/sign-up'>
              <FeaturedCardInfo>
                <FeaturedCardIcon>
                  <GiCutDiamond />
                </FeaturedCardIcon>
                <FeaturedCardPlan>Diamond Kings</FeaturedCardPlan>
                <FeaturedCardCost>$999.99</FeaturedCardCost>
                <FeaturedCardLength>per month</FeaturedCardLength>
                <FeaturedCardFeatures>
                  <FeaturedCardFeature>Unlimited Users</FeaturedCardFeature>
                  <FeaturedCardFeature>Unlimited Budget</FeaturedCardFeature>
                  <FeaturedCardFeature>24/7 Support</FeaturedCardFeature>
                </FeaturedCardFeatures>
                <Button primary>Choose Plan</Button>
              </FeaturedCardInfo>
            </FeaturedCard>
          </FeaturedContainer>
        </FeaturedWrapper>
      </FeaturedSection>
    </IconContext.Provider>
  )
}

export default Featured;