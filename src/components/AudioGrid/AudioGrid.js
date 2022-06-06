import React from 'react';
import { FiSearch } from 'react-icons/fi'
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
} from "./AudioGrid.Elements";
import { MenuSortData } from '../../Data/MenuFilterData';
import { AudioData } from '../../Data/AudioData';

const AudioGrid = () => {
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
      { MenuSortData.map((vSortData) => {
              return (
                <GridSortItem>
                  <SortIcon>{vSortData.menuIcon}</SortIcon>

                  <SortName>{vSortData.menuTitle}</SortName>
                </GridSortItem>
              );
          })}
      </GridSortBar>

      <GridContainer>
          {
              AudioData.map((vData) => {
                  return (
                    <AudioCard>
                        <AudioIcon>
                        </AudioIcon>
                      <AudioMedia
                        src={vData.audioSrc}
                        controls={true}
                      />
                      <CardInfo>
                        <CardTitle>{vData.cardTitle}</CardTitle>
                        <CardSource>{vData.cardSource}</CardSource>
                      </CardInfo>
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

export {AudioGrid};