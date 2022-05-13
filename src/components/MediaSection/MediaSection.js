import React from 'react';
import { Container } from '../../globalStyles';
import MediaPlayer from '../MediaPlayer/MediaPlayer';
import { 
  MediaSec, 
  MediaRow, 
  MediaColumn, 
  TextWrapper, 
  Heading, 
  Subtitle, 
  MediaWrapper, 
  MediaHeading3 } from './MediaSection.Elements';

const MediaSection = ({ 
  lightBg, 
  imgStart,
  lightTextDesc, 
  label, 
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
                    <MediaHeading3>
                          {label}
                        </MediaHeading3>
              </TextWrapper>
            </MediaColumn>
            <MediaColumn>
              <MediaWrapper start={start}>
                <MediaPlayer mediaUrl={url} />
              </MediaWrapper>
            </MediaColumn>
          </MediaRow>
        </Container>
      </MediaSec>
    </>
  )
}

export default MediaSection;