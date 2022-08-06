import React, { Component } from "react";
import { FiSearch } from "react-icons/fi";
import VideoCarousel from "./VideoCarousel";
import {
  GridNavbar,
  NavTitle,
  NavDescription,
  NavSearch,
  NavForm,
  InputContainer,
  FormInput,
  FormBtn,
  GridContainer,
  SectionHeading,
  VideoCard,
  VideoMedia,
  CardInfo,
  CardTitle,
  CardSource,
} from "../../styles/VideoLibrary.Elements";

export default class GetVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      VideoLibrary: [],
    };
  }

  getDataFromAPI() {
    fetch("https://localhost:7021/api/Video/getallvideos")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ VideoLibrary: data });
      });
  }

  componentDidMount() {
    this.getDataFromAPI();
  }

  render() {
    const { VideoLibrary } = this.state;

    return (
      <>
        <GridNavbar>
          <NavTitle>Videos</NavTitle>
          <NavSearch>
            <NavForm>
              <InputContainer>
                <FormInput type="text" placeholder="Search Video.." />
              </InputContainer>
              <FormBtn>
                <FiSearch />
              </FormBtn>
            </NavForm>
          </NavSearch>
        </GridNavbar>
        <NavDescription>
          Below you will find how-to guides, educational videos, personal
          experiences and more.
        </NavDescription>

        {/* CAROUSEL FOR RECENTLY ADDED VIDEOS.. */}
        <VideoCarousel dataSource={VideoLibrary} />

        <SectionHeading>All Videos</SectionHeading>
        <GridContainer>
          {VideoLibrary.map((vData, id) => {
            return (
              <VideoCard key={id}>
                <VideoMedia src={vData.videoSource} controls={true} />
                <CardInfo>
                  <CardTitle>{vData.videoTitle}</CardTitle>
                  <CardSource>{vData.videoAuthor}</CardSource>
                </CardInfo>
              </VideoCard>
            );
          })}
        </GridContainer>
      </>
    );
  }
}