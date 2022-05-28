import React from 'react';
import { Container } from '../../globalStyles';
import { 
  MediaSec, 
  MediaRow, 
  MediaColumn, 
  TextWrapper, 
  Heading, 
  Subtitle, 
  MediaWrapper } from './MediaSection.Elements';

const MediaSection = ({ 
  lightBg, 
  imgStart,
  lightTextDesc, 
  description, 
  headline, 
  lightText, 
  start,
  url }) => {
    
  return (
    <>
      <MediaSec lightBg={lightBg}>
        <Container>
          <MediaRow imgStart={imgStart}>
            <MediaColumn>
              <TextWrapper>
                  <Heading lightText={lightText}>{headline}</Heading>
                    <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
              </TextWrapper>
            </MediaColumn>
            <MediaColumn>
              <MediaWrapper start={start}>
                
              </MediaWrapper>
            </MediaColumn>
          </MediaRow>
        </Container>
      </MediaSec>
    </>
  )
}

export default MediaSection;