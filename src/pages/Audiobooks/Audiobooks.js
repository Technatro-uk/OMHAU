import React from 'react';
import MediaPlayer from '../../components/MediaPlayer/MediaPlayer';
import { 
  AudiobookContainer,
  AudiobookH1 } from './Audiobooks.Elements';

const Audiobooks = () => {

  
    const AnxietyAndTheBrain = 'https://www.youtube.com/watch?v=ScsgIMw5AOA';
    const CognitiveBehaviouralTherapy = 'https://www.youtube.com/watch?v=01Vtmq526Qk';
    const TheHappyMindAudiobook = 'https://www.youtube.com/watch?v=TFZWtVVPBfg';
    const PersonalDevelopmentAndGrowth = 'https://www.youtube.com/watch?v=BhCbJODP0Zo';
    const HealingTrauma = 'https://www.youtube.com/watch?v=PEf9KI4SWM8';
    const MakingPeaceWithDepression = 'https://www.youtube.com/watch?v=Ev6orlcOlBk';
    const SelfDiscipline = 'https://www.youtube.com/watch?v=ldiaiDt1w9g';
    const ChangeyourMindset = 'https://www.youtube.com/watch?v=GihybX7JyG4';
    
    
  return (
    <>
      <AudiobookContainer>
            <AudiobookH1>Anxiety & The Brain</AudiobookH1>        
            <MediaPlayer mediaUrl={AnxietyAndTheBrain} />
        </AudiobookContainer>
      <AudiobookContainer>
            <AudiobookH1>CBT</AudiobookH1>        
            <MediaPlayer mediaUrl={CognitiveBehaviouralTherapy} />
        </AudiobookContainer>
      <AudiobookContainer>
            <AudiobookH1>The Happy Mind</AudiobookH1>        
            <MediaPlayer mediaUrl={TheHappyMindAudiobook} />
        </AudiobookContainer>
      <AudiobookContainer>
            <AudiobookH1>Personal Development & Growth</AudiobookH1>        
            <MediaPlayer mediaUrl={PersonalDevelopmentAndGrowth} />
        </AudiobookContainer>
      <AudiobookContainer>
            <AudiobookH1>Healing Trauma</AudiobookH1>        
            <MediaPlayer mediaUrl={HealingTrauma} />
        </AudiobookContainer>
      <AudiobookContainer>
            <AudiobookH1>Making Peace with Depression</AudiobookH1>        
            <MediaPlayer mediaUrl={MakingPeaceWithDepression} />
        </AudiobookContainer>
      <AudiobookContainer>
            <AudiobookH1>Self Discipline</AudiobookH1>        
            <MediaPlayer mediaUrl={SelfDiscipline} />
        </AudiobookContainer>
      <AudiobookContainer>
            <AudiobookH1>Change Your Mindset</AudiobookH1>        
            <MediaPlayer mediaUrl={ChangeyourMindset} />
        </AudiobookContainer>
    </>
  );
}

export default Audiobooks;