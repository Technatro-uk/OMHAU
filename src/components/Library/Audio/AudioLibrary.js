import React, { Component } from 'react';
import { BsListStars } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { GiHealthNormal } from "react-icons/gi";
import {
  MdOndemandVideo,
  MdOutlinePersonOutline,
} from "react-icons/md";
import { RiMentalHealthFill } from "react-icons/ri";
import {
  GridNavbar,
  NavTitle,
  NavDescription,
  NavSearch,
  NavForm,
  InputContainer,
  FormInput,
  FormBtn,
  GridSortBar,
  GridSortItem,
  SortIcon,
  SortName,
  GridContainer,
  AudioHeading,
  AudioCard,
  AudioIcon,
  AudioMedia,
  AudioInfo,
  AudioTitle,
  AudioSource,
  MediaCategory,
  MediaType
} from './AudioLibrary.Elements';

export default class GetAudio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audioLibrary: [],
    };
  }

  getDataFromAPI() {
    fetch("https://localhost:7021/api/Audio/getallaudio")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ audioLibrary: data });
      });
  }

  componentDidMount() {
    this.getDataFromAPI();
  }

  componentDidUpdate() {
    // this.getDataFromAPI();
  }

  render() {
    const { audioLibrary } = this.state;

    return (
      <>
        <GridNavbar>
          <NavTitle>Audio Library</NavTitle>
          <NavSearch>
            <NavForm>
              <InputContainer>
                <FormInput type="text" placeholder="Search audio.." />
              </InputContainer>
              <FormBtn>
                <FiSearch />
              </FormBtn>
            </NavForm>
          </NavSearch>
        </GridNavbar>
        <NavDescription>
          This is where you will find audio related content like Audiobooks,
          Guides, How-To's and more.
        </NavDescription>
        <GridSortBar>
          <GridSortItem>
            <SortIcon>
              <MdOndemandVideo />
            </SortIcon>
            <SortName>Home</SortName>
          </GridSortItem>
          <GridSortItem>
            <SortIcon>
              <BsListStars />
            </SortIcon>
            <SortName>Featured</SortName>
          </GridSortItem>
          <GridSortItem>
            <SortIcon>
              <GiHealthNormal />
            </SortIcon>
            <SortName>Health & Wellbeing</SortName>
          </GridSortItem>
          <GridSortItem>
            <SortIcon>
              <RiMentalHealthFill />
            </SortIcon>
            <SortName>Mental Health</SortName>
          </GridSortItem>
        </GridSortBar>

        <GridContainer>
          {audioLibrary.map((aData, id) => {
            return (
              <AudioCard key={id}>
                <AudioHeading>
                  <MediaCategory>{aData.audioCategory}</MediaCategory>
                  <MediaType>{aData.audioType}</MediaType>
                </AudioHeading>
                <AudioIcon src={aData.audioImage} />

                <AudioMedia src={aData.audioURL} controls={true} />

                <AudioInfo>
                  <AudioTitle>{aData.audioTitle}</AudioTitle>
                  <AudioSource>
                    <MdOutlinePersonOutline size="1.3em" /> {aData.audioAuthor}
                  </AudioSource>
                </AudioInfo>
              </AudioCard>
            );
          })}
        </GridContainer>
      </>
    );
  }
}