import React, { Component } from 'react';
import { FiSearch } from "react-icons/fi";
import { MdOutlinePersonOutline } from "react-icons/md";
import AudioCarousel from './AudioCarousel';
import {
  GridNavbar,
  NavTitle,
  NavDescription,
  NavSearch,
  NavForm,
  InputContainer,
  FormInput,
  FormBtn,
  SectionHeading,
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
      AudioLibrary: [],
    };
  }

  getDataFromAPI() {
    fetch("https://localhost:7021/api/Audio/getallaudio")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ AudioLibrary: data });
      });
  }

  componentDidMount() {
    this.getDataFromAPI();
  }

  render() {
    const { AudioLibrary } = this.state;

    return (
      <>
        <GridNavbar>
          <NavTitle>Audio</NavTitle>
          <NavSearch>
            <NavForm>
              <InputContainer>
                <FormInput type="text" placeholder="Search Audio.." />
              </InputContainer>
              <FormBtn>
                <FiSearch />
              </FormBtn>
            </NavForm>
          </NavSearch>
        </GridNavbar>
        <NavDescription>
          This is where you will find audio related content like audiobooks,
          how-to guides and more.
        </NavDescription>

            {/* CAROUSEL FOR RECENTLY ADDED AUDIO.. */}
            <AudioCarousel dataSource={AudioLibrary} />

        <SectionHeading>All Audio</SectionHeading>
        <GridContainer>
          {AudioLibrary.map((aData, id) => {
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
                    {aData.audioAuthor}
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