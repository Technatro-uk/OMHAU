import React from 'react';
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
  AudioInfo,
  AudioTitle,
  AudioSource,
  MediaDuration,
  MediaAdded,
  MediaInfo
} from "./AudioLibrary.Elements";
import { AudioData } from '../../Data/AudioData';

const AudioLibrary = () => {
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
          This is where you will find audio related content like Music, Audiobooks, 
          Guides and more.
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
          {
              AudioData.map((vData) => {
                  return (
                    <AudioCard>
                        <AudioIcon>
                        </AudioIcon>
                      <AudioMedia
                        src={vData.audioURL}
                        controls={true}
                      />
                      <AudioInfo>
                        <AudioTitle>{vData.audioTitle}</AudioTitle>
                        <AudioSource>{vData.audioAuthor}</AudioSource>
                      </AudioInfo>
                        <MediaInfo>
                            <MediaAdded>{vData.mediaAdded}</MediaAdded>
                            <MediaDuration>{vData.mediaDuration}</MediaDuration>
                        </MediaInfo>
                    </AudioCard>
                  )
              })
          }
      </GridContainer>
    </>
  );
}

export {AudioLibrary};