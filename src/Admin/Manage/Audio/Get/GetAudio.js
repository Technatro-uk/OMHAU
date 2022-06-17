import React, { Component } from 'react';
import { BsListStars } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi'
import { GiHealthNormal } from 'react-icons/gi';
import { MdOndemandVideo } from 'react-icons/md';
import { RiMentalHealthFill } from 'react-icons/ri';
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
  AudioCard,
  AudioIcon,
  AudioMedia,
  CardInfo,
  CardTitle,
  CardSource,
  MediaDuration,
  MediaAdded,
  MediaInfo
} from '../../../../components/AudioGrid/AudioGrid.Elements';

export default class GetAudio extends Component {

    constructor(props){
        super(props);
        this.state = {
            audioLibrary:[]
        }
    }

    getDataFromAPI(){
        fetch('https://localhost:7021/api/Audio')
        .then(response=> response.json())
        .then(data => {
            this.setState({audioLibrary:data})
        })
    }

    componentDidMount(){
        this.getDataFromAPI();
    }

    componentDidUpdate(){
        this.getDataFromAPI();
    }

  render() {

    const {audioLibrary} = this.state;
    
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
          {audioLibrary.map((aData) => {
            return (
              <AudioCard>
                <AudioIcon src={aData.audioImage}></AudioIcon>
                <AudioMedia src={aData.audioSource} controls={true} />
                <CardInfo>
                  <CardTitle>{aData.audioTitle}</CardTitle>
                  <CardSource>{aData.audioAuthor}</CardSource>
                </CardInfo>
                <MediaInfo>
                  <MediaAdded>{aData.mediaAdded}</MediaAdded>
                  <MediaDuration>{aData.mediaDuration}</MediaDuration>
                </MediaInfo>
              </AudioCard>
            );
          })}
        </GridContainer>
      </>
    );
  }
}
