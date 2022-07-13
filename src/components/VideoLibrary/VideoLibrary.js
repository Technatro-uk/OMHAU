import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { MdOndemandVideo } from "react-icons/md";
import { BsListStars } from "react-icons/bs";
import { GiHealthNormal } from "react-icons/gi";
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
  CardSource,
  MediaDuration,
  MediaAdded,
  MediaInfo
} from "./VideoLibrary.Elements";
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