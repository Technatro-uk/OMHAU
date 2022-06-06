import React from 'react';
import { Button } from '../../globalStyles';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  QuickEscapesSection,
  QuickEscapesWrapper,
  QuickEscapesHeading,
  QuickEscapesContainer,
  QuickEscapesCard,
  QuickEscapesCardInfo,
  QuickEscapesCardIcon,
  QuickEscapesCardPlan,
  QuickEscapesCardCost,
  QuickEscapesCardLength,
  QuickEscapesCardFeatures,
  QuickEscapesCardFeature
} from './QuickEscapes.Elements';

const QuickEscapes = () => {
  return (
    <IconContext.Provider value={{ color: 'dodgerblue', size: 36 }}>
      <QuickEscapesSection>
        <QuickEscapesWrapper>
          <QuickEscapesHeading>Quick Escapes</QuickEscapesHeading>
          <QuickEscapesContainer>
            <QuickEscapesCard to='/sign-up'>
              <QuickEscapesCardInfo>
                <QuickEscapesCardIcon>
                  <GiRock />
                </QuickEscapesCardIcon>
                <QuickEscapesCardPlan>Starter Pack</QuickEscapesCardPlan>
                <QuickEscapesCardCost>$99.99</QuickEscapesCardCost>
                <QuickEscapesCardLength>per month</QuickEscapesCardLength>
                <QuickEscapesCardFeatures>
                  <QuickEscapesCardFeature>100 New Users</QuickEscapesCardFeature>
                  <QuickEscapesCardFeature>$10,000 Budget</QuickEscapesCardFeature>
                  <QuickEscapesCardFeature>Retargeting analytics</QuickEscapesCardFeature>
                </QuickEscapesCardFeatures>
                <Button primary>Choose Plan</Button>
              </QuickEscapesCardInfo>
            </QuickEscapesCard>
            <QuickEscapesCard to='/sign-up'>
              <QuickEscapesCardInfo>
                <QuickEscapesCardIcon>
                  <GiCrystalBars />
                </QuickEscapesCardIcon>
                <QuickEscapesCardPlan>Gold Rush</QuickEscapesCardPlan>
                <QuickEscapesCardCost>$299.99</QuickEscapesCardCost>
                <QuickEscapesCardLength>per month</QuickEscapesCardLength>
                <QuickEscapesCardFeatures>
                  <QuickEscapesCardFeature>1000 New Users</QuickEscapesCardFeature>
                  <QuickEscapesCardFeature>$50,000 Budget</QuickEscapesCardFeature>
                  <QuickEscapesCardFeature>Lead Gen Analytics</QuickEscapesCardFeature>
                </QuickEscapesCardFeatures>
                <Button primary>Choose Plan</Button>
              </QuickEscapesCardInfo>
            </QuickEscapesCard>
            <QuickEscapesCard to='/sign-up'>
              <QuickEscapesCardInfo>
                <QuickEscapesCardIcon>
                  <GiCutDiamond />
                </QuickEscapesCardIcon>
                <QuickEscapesCardPlan>Diamond Kings</QuickEscapesCardPlan>
                <QuickEscapesCardCost>$999.99</QuickEscapesCardCost>
                <QuickEscapesCardLength>per month</QuickEscapesCardLength>
                <QuickEscapesCardFeatures>
                  <QuickEscapesCardFeature>Unlimited Users</QuickEscapesCardFeature>
                  <QuickEscapesCardFeature>Unlimited Budget</QuickEscapesCardFeature>
                  <QuickEscapesCardFeature>24/7 Support</QuickEscapesCardFeature>
                </QuickEscapesCardFeatures>
                <Button primary>Choose Plan</Button>
              </QuickEscapesCardInfo>
            </QuickEscapesCard>
          </QuickEscapesContainer>
        </QuickEscapesWrapper>
      </QuickEscapesSection>
    </IconContext.Provider>
  )
}

export default QuickEscapes;