import React from 'react';
import MediaPlayer from '../../components/MediaPlayer/MediaPlayer';
import { VideoContainer,
        VideoH1 } from './Videos.Elements';

const Videos = () => {

    const MentalHealthPlaylist = [
      'https://www.youtube.com/watch?v=LQbr6wVeGcA',
      'https://www.youtube.com/watch?v=BfZ7VKhwpeI',
      'https://www.youtube.com/watch?v=RaC9Zz_2JHM',
      'https://www.youtube.com/watch?v=jXT0YtAl4YM',
      'https://www.youtube.com/watch?v=xH2E9I7vn28'
    ];
  
    const VariousExerciseVideos = 'https://www.youtube.com/watch?v=6cJHYTWwbGo&list=PLjVGrc73ZEhm_B_Pjhydj8JNABViyDtEa';
    const NHSKeepingActive = 'https://www.youtube.com/watch?v=XXYtfpqFo24&list=PL5E2CE6C6078B11E6';
    const AtHomeWorkoutChallenge = 'https://www.youtube.com/watch?v=o2_VXQc6zUo&list=PL2ov72VWpiOpFX2oTZPURRCm2AH1ZliFS';
    const YogaForMentalHealth = 'https://www.youtube.com/playlist?list=PLui6Eyny-UzwDdFPVSeYN3aTG_B1qtHtz';
    const MentalHealthHowTo = 'https://www.youtube.com/watch?v=xN-scouHRWE&list=PLLALQuK1NDri_bN-3LYJQmzS9P898wm4t';
    const TeenageMentalHealth = 'https://www.youtube.com/playlist?list=PLcvEcrsF_9zK9rkc96X7dW4ehp23eVLxR';
    
    
  return (
    <>
      <VideoContainer>
            <VideoH1>NHS Keeping Active</VideoH1>        
            <MediaPlayer mediaUrl={NHSKeepingActive} />
        </VideoContainer>
      <VideoContainer>
            <VideoH1>Mental Health Stories</VideoH1>        
            <MediaPlayer mediaUrl={MentalHealthPlaylist} />
        </VideoContainer>
      <VideoContainer>
            <VideoH1>Yoga for Mental Health</VideoH1>        
            <MediaPlayer mediaUrl={YogaForMentalHealth} />
        </VideoContainer>
      <VideoContainer>
            <VideoH1>Mental Health: How To</VideoH1>        
            <MediaPlayer mediaUrl={MentalHealthHowTo} />
        </VideoContainer>
      <VideoContainer>
            <VideoH1>BBC Teach</VideoH1>        
            <MediaPlayer mediaUrl={TeenageMentalHealth} />
        </VideoContainer>
      <VideoContainer>
            <VideoH1>Full Length Pilates Class</VideoH1>        
            <MediaPlayer mediaUrl={VariousExerciseVideos} />
        </VideoContainer>
    </>
  );
}

export default Videos;