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
  VideoCard,
  VideoMedia,
  CardInfo,
  CardTitle,
  CardSource,
  MediaDuration,
  MediaAdded,
  MediaInfo
} from "./VideoLibrary.Elements";
import { MenuSortData } from '../../Data/MenuFilterData';
import { VideoData } from '../../Data/VideoData';

const VideoLibrary = () => {
  return (
    <>
      <GridNavbar>
        <NavTitle>Video Library</NavTitle>

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
          This is where you will find video related content like Tutorials, 
          Guides, Stories and more.
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
              VideoData.map((vData) => {
                  return (
                    <VideoCard>
                      <VideoMedia
                        src={vData.iframeSrc}
                        frameborder={vData.frameBorder}
                        allow={vData.iframeAllow}
                      />
                      <CardInfo>
                        <CardTitle>{vData.cardTitle}</CardTitle>
                        <CardSource>{vData.cardSource}</CardSource>
                      </CardInfo>
                        <MediaInfo>
                            <MediaAdded>{vData.mediaAdded}</MediaAdded>
                            <MediaDuration>{vData.mediaDuration}</MediaDuration>
                        </MediaInfo>
                    </VideoCard>
                  )
              })
          }
      </GridContainer>
    </>
  );
}

export {VideoLibrary};