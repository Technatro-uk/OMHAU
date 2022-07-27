import React, { Component } from "react";
import { FiSearch } from "react-icons/fi";
// import { Link } from 'react-router-dom';
import { Button } from "../../../globalStyles";
import QuickEscapesCarousel from "./QuickEscapesCarousel";
import {
  QuickEscapeWrapper,
  GridNavbar,
  NavTitle,
  NavSearch,
  NavForm,
  NavDescription,
  InputContainer,
  FormInput,
  FormBtn,
  QuickEscapeContainer,
  SectionHeading,
  QuickEscapeCard,
  QuickEscapeCardInfo,
  QuickEscapeHeader,
  QuickEscapeCardTitle,
  QuickEscapeCardAuthor,
  QuickEscapeIcon,
  QuickEscapeCardInformation,
  QuickEscapeCardCategory,
  QuickEscapeCardDescription,
} from "./QuickEscapes.Elements";

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
        <GridNavbar>
            <NavTitle>Quick Escapes</NavTitle>
            <NavSearch>
              <NavForm>
                <InputContainer>
                  <FormInput type="text" placeholder="Search Escapes.." />
                </InputContainer>
                <FormBtn>
                  <FiSearch />
                </FormBtn>
              </NavForm>
            </NavSearch>
          </GridNavbar>
          <NavDescription>
            Need to escape and relax for a while? <br />
            Below you will find a collection of games, puzzles, live cameras and
            more.
          </NavDescription>
          {/* CAROUSEL FOR RECENTLY ADDED STORIES.. */}
          <QuickEscapesCarousel dataSource={QuickEscapeLibrary} />

          <SectionHeading>All Escapes</SectionHeading>
          <QuickEscapeContainer>
            {QuickEscapeLibrary.map((qeData, id) => {
              return (
                <QuickEscapeCard key={id}>
                  <QuickEscapeCardInfo>
                    <QuickEscapeHeader>
                      <QuickEscapeCardTitle>
                        {qeData.escapeTitle}
                      </QuickEscapeCardTitle>
                      <QuickEscapeCardAuthor>
                        {qeData.escapeAuthor}
                      </QuickEscapeCardAuthor>
                    </QuickEscapeHeader>
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
                      href={
                        qeData.escapeSourceURL ? qeData.escapeSourceURL : ""
                      }
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button primary>Choose escape</Button>
                    </a>
                  </QuickEscapeCardInfo>
                </QuickEscapeCard>
              );
            })}
          </QuickEscapeContainer>
      </>
    );
  }
}
