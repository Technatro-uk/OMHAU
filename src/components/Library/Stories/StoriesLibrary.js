import React, { Component } from "react";
import { FiSearch } from "react-icons/fi";
// import { Link } from 'react-router-dom';
import { Button } from "../../../globalStyles";
import StoriesCarousel from "./StoriesCarousel";
import {
  GridNavbar,
  NavTitle,
  NavSearch,
  NavForm,
  NavDescription,
  InputContainer,
  FormInput,
  FormBtn,
  StoriesContainer,
  SectionHeading,
  StoriesCard,
  StoriesCardInfo,
  StoriesHeader,
  StoriesCardTitle,
  StoriesCardAuthor,
  StoriesCardInformation,
  StoriesCardCategory,
  StoriesCardDescription,
} from "./StoriesLibrary.Elements";

export default class StoriesLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StoriesLibrary: [],
    };
  }

  getDataFromAPI() {
    fetch("https://localhost:7021/api/Story/getallstories")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ StoriesLibrary: data });
      });
  }

  componentDidMount() {
    this.getDataFromAPI();
  }

  render() {
    const { StoriesLibrary } = this.state;

    return (
      <>
        <GridNavbar>
            <NavTitle>Stories</NavTitle>
            <NavSearch>
              <NavForm>
                <InputContainer>
                  <FormInput type="text" placeholder="Search Stories.." />
                </InputContainer>
                <FormBtn>
                  <FiSearch />
                </FormBtn>
              </NavForm>
            </NavSearch>
          </GridNavbar>
          <NavDescription>
            A collection of stories from various author's and online sources
          </NavDescription>
          
          {/* CAROUSEL FOR RECENTLY ADDED STORIES.. */}
          <StoriesCarousel dataSource={StoriesLibrary} />

          <SectionHeading>All Stories</SectionHeading>
          <StoriesContainer>
            {StoriesLibrary.map((st, id) => {
              return (
                <StoriesCard key={id}>
                  <StoriesCardInfo>
                    <StoriesHeader>
                      <StoriesCardTitle>{st.storyTitle}</StoriesCardTitle>
                      <StoriesCardAuthor>{st.storyAuthor}</StoriesCardAuthor>
                    </StoriesHeader>
                    <StoriesCardInformation>
                      <StoriesCardCategory>
                        {st.storyCategory}
                      </StoriesCardCategory>
                      <StoriesCardDescription>
                        {st.storyDescription}
                      </StoriesCardDescription>
                    </StoriesCardInformation>
                    <a
                      href={st.storySourceURL}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button primary>Read story</Button>
                    </a>
                  </StoriesCardInfo>
                </StoriesCard>
              );
            })}
          </StoriesContainer>
      </>
    );
  }
}
