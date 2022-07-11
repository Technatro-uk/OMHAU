import React, { Component } from "react";
import { Button } from '../../../../globalStyles';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  StorySection,
  StoryWrapper,
  StoryHeading,
  StoryContainer,
  StoryCard,
  StoryCardInfo,
  StoryCardIcon,
  StoryCardPlan,
  StoryCardCost,
  StoryCardLength,
  StoryCardFeatures,
  StoryCardFeature
} from '../../../../components/StoriesLibrary/StoriesLibrary.Elements';

export default class GetStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StoryLibrary: [],
    };
  }

  getDataFromAPI() {
    fetch("https://localhost:7021/api/Story")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ StoryLibrary: data });
      });
  }

  componentDidMount() {
    this.getDataFromAPI();
  }

  componentDidUpdate() {
    // this.getDataFromAPI();
  }

  render() {
    const { StoryLibrary } = this.state;

    return (
      <>
        <IconContext.Provider value={{ color: 'dodgerblue', size: 36 }}>
      <StorySection>
        <StoryWrapper>
          <StoryHeading>Quick Escapes</StoryHeading>
          <StoryContainer>
            <StoryCard to='/sign-up'>
              <StoryCardInfo>
                <StoryCardIcon>
                  <GiRock />
                </StoryCardIcon>
                <StoryCardPlan>Starter Pack</StoryCardPlan>
                <StoryCardCost>$99.99</StoryCardCost>
                <StoryCardLength>per month</StoryCardLength>
                <StoryCardFeatures>
                  <StoryCardFeature>100 New Users</StoryCardFeature>
                  <StoryCardFeature>$10,000 Budget</StoryCardFeature>
                  <StoryCardFeature>Retargeting analytics</StoryCardFeature>
                </StoryCardFeatures>
                <Button primary>Choose Plan</Button>
              </StoryCardInfo>
            </StoryCard>
            <StoryCard to='/sign-up'>
              <StoryCardInfo>
                <StoryCardIcon>
                  <GiCrystalBars />
                </StoryCardIcon>
                <StoryCardPlan>Gold Rush</StoryCardPlan>
                <StoryCardCost>$299.99</StoryCardCost>
                <StoryCardLength>per month</StoryCardLength>
                <StoryCardFeatures>
                  <StoryCardFeature>1000 New Users</StoryCardFeature>
                  <StoryCardFeature>$50,000 Budget</StoryCardFeature>
                  <StoryCardFeature>Lead Gen Analytics</StoryCardFeature>
                </StoryCardFeatures>
                <Button primary>Choose Plan</Button>
              </StoryCardInfo>
            </StoryCard>
            <StoryCard to='/sign-up'>
              <StoryCardInfo>
                <StoryCardIcon>
                  <GiCutDiamond />
                </StoryCardIcon>
                <StoryCardPlan>Diamond Kings</StoryCardPlan>
                <StoryCardCost>$999.99</StoryCardCost>
                <StoryCardLength>per month</StoryCardLength>
                <StoryCardFeatures>
                  <StoryCardFeature>Unlimited Users</StoryCardFeature>
                  <StoryCardFeature>Unlimited Budget</StoryCardFeature>
                  <StoryCardFeature>24/7 Support</StoryCardFeature>
                </StoryCardFeatures>
                <Button primary>Choose Plan</Button>
              </StoryCardInfo>
            </StoryCard>
          </StoryContainer>
        </StoryWrapper>
      </StorySection>
    </IconContext.Provider>
      </>
    );
  }
}
