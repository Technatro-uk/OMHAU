import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Button } from "../../../globalStyles";
import { IconContext } from "react-icons/lib";
import { FiSearch } from 'react-icons/fi';
import { MdOndemandVideo } from "react-icons/md";
import { BsListStars } from "react-icons/bs";
import { GiHealthNormal } from "react-icons/gi";
import { RiMentalHealthFill } from "react-icons/ri";
import CustomCarousel from '../../Carousel/CustomCarousel/CustomCarousel';
import {
  GridNavbar,
  NavTitle,
  NavSearch,
  NavForm,
  InputContainer,
  FormInput,
  FormBtn,
  NavDescription,
  GridSortBar,
  GridSortItem,
  SortIcon,
  SortName,
  StoryWrapper,
  StoryContainer,
  SectionHeading,
  StoryCard,
  StoryCardInfo,
  StoryCardTitle,
  StoryCardAuthor,
  StoryCardDatePublished,
  StoryCardInformation,
  StoryCardCategory,
  StoryCardDescription,
} from '../Stories/StoriesLibrary.Elements';

export default class StoriesLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StoryLibrary: [],
    };
  }

  getDataFromAPI() {
    fetch("https://localhost:7021/api/Story/getallstories")
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
        <IconContext.Provider value={{ color: "dodgerblue", size: 26 }}>
          <StoryWrapper>
          <GridNavbar>
        <NavTitle>Story Library</NavTitle>
        <NavSearch>
          <NavForm>
            <InputContainer>
              <FormInput type="text" placeholder="Search videos.." />
            </InputContainer>
              <FormBtn>
                <FiSearch />
              </FormBtn>
          </NavForm>
        </NavSearch>
      </GridNavbar>
        <NavDescription>
          A collection of stories from various author's & online sources.
        </NavDescription>
        <GridSortBar>
          <GridSortItem onClick={() => {}}>
            <SortIcon>
              <MdOndemandVideo />
            </SortIcon>
            <SortName>Home</SortName>
          </GridSortItem>
          <GridSortItem onClick={() => {}}>
            <SortIcon>
              <BsListStars />
            </SortIcon>
            <SortName>Featured</SortName>
          </GridSortItem>
          <GridSortItem onClick={() => {}}>
            <SortIcon>
              <GiHealthNormal />
            </SortIcon>
            <SortName>Health & Wellbeing</SortName>
          </GridSortItem>
          <GridSortItem onClick={() => {}}>
            <SortIcon>
              <RiMentalHealthFill />
            </SortIcon>
            <SortName>Mental Health</SortName>
          </GridSortItem>
        </GridSortBar>

            {/* CAROUSEL FOR RECENTLY ADDED STORIES.. */}
            <CustomCarousel dataSource={StoryLibrary}/>

            <SectionHeading>
            All stories
          </SectionHeading>
            <StoryContainer>
              {StoryLibrary.map((st, id) => {
                return (
                  <StoryCard key={id}>
                    <StoryCardInfo>
                      <StoryCardTitle>{st.storyTitle}</StoryCardTitle>
                      <StoryCardAuthor>{st.storyAuthor}</StoryCardAuthor>
                      <StoryCardDatePublished>
                        ({st.datePublished ? st.datePublished : "Unknown"})
                      </StoryCardDatePublished>
                      <StoryCardInformation>
                        <StoryCardCategory>
                          {st.storyCategory}
                        </StoryCardCategory>
                        <StoryCardDescription>
                          {st.storyDescription}
                        </StoryCardDescription>
                      </StoryCardInformation>
                      <a
                        href={st.storySourceURL ? st.storySourceURL : ""}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button primary>Read story</Button>
                      </a>
                    </StoryCardInfo>
                  </StoryCard>
                );
              })}
            </StoryContainer>
          </StoryWrapper>
        </IconContext.Provider>
      </>
    );
  }
}
