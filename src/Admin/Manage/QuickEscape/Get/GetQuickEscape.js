import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import { Button } from "../../../../globalStyles";
import { IconContext } from "react-icons/lib";
import CustomCarousel from "../../../../components/Carousel/CustomCarousel/CustomCarousel";
import {
  QuickEscapeWrapper,
  QuickEscapeContainer,
  QuickEscapeCard,
  QuickEscapeCardInfo,
  QuickEscapeCardTitle,
  QuickEscapeCardAuthor,
  QuickEscapeIcon,
  QuickEscapeCardInformation,
  QuickEscapeCardCategory,
  QuickEscapeCardDescription,
} from "./GetQuickEscape.Elements";

export default class StoriesLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      QuickEscapeLibrary: [],
    };
  }

  getDataFromAPI() {
    fetch("https://localhost:7021/api/QuickEscape/getallquickescapes")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ QuickEscapeLibrary: data });
      });
  }

  componentDidMount() {
    this.getDataFromAPI();
  }

  render() {
    const { QuickEscapeLibrary } = this.state;

    return (
      <>
        <QuickEscapeWrapper>
          {/* CAROUSEL FOR RECENTLY ADDED STORIES.. */}
          <CustomCarousel dataSource={QuickEscapeLibrary} />

          <QuickEscapeContainer>
            {QuickEscapeLibrary.map((qeData, id) => {
              return (
                <QuickEscapeCard key={id}>
                  <QuickEscapeCardInfo>
                    <QuickEscapeCardTitle>
                      {qeData.QuickEscapeTitle}
                    </QuickEscapeCardTitle>
                    <QuickEscapeCardAuthor>
                      {qeData.escapeAuthor}
                    </QuickEscapeCardAuthor>
                    <QuickEscapeIcon src={qeData.escapeImage} />
                    <QuickEscapeCardInformation>
                      <QuickEscapeCardCategory>
                        {qeData.escapeType}
                      </QuickEscapeCardCategory>
                      <QuickEscapeCardDescription>
                        {qeData.escapeDescription}
                      </QuickEscapeCardDescription>
                    </QuickEscapeCardInformation>
                    <a
                      href={qeData.escapeSource ? qeData.escapeSource : ""}
                      target="_blank"
                    >
                      <Button primary>Choose escape</Button>
                    </a>
                  </QuickEscapeCardInfo>
                </QuickEscapeCard>
              );
            })}
          </QuickEscapeContainer>
        </QuickEscapeWrapper>
      </>
    );
  }
}
