import React, { Component } from "react";
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
  VideoCard,
  VideoMedia,
  CardInfo,
  CardTitle,
  CardSource
} from "../../../../components/VideoLibrary/VideoLibrary.Elements";

export default class GetVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      VideoLibrary: [],
    };
  }

  getDataFromAPI() {
    fetch("https://localhost:7021/api/Video")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ VideoLibrary: data });
      });
  }

  componentDidMount() {
    this.getDataFromAPI();
  }

  componentDidUpdate() {
    // this.getDataFromAPI();
  }

  render() {
    const { VideoLibrary } = this.state;

    return (
      <>
        <GridNavbar>
          <NavTitle>Video Library</NavTitle>
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
        This is where you will find video related content like Tutorials, Guides, Stories and more.
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
          {VideoLibrary.map((vData, id) => {
            return (
              <VideoCard key={id}>
                <VideoMedia src={vData.videoSource} controls={true} />
                <CardInfo>
                  <CardTitle>{vData.videoTitle}</CardTitle>
                  <CardSource>
                    <MdOutlinePersonOutline size="1.3em" /> {vData.videoAuthor}
                  </CardSource>
                </CardInfo>
              </VideoCard>
            );
          })}
        </GridContainer>
      </>
    );
  }
}
