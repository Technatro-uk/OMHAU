import React, { useState, useRef, useEffect } from "react";
import {
  AudioPlayerContainer,
  AudioControls,
  AudioDisplayPanel,
  ForwardBackward,
  PlayPause,
  Play,
  CurrentTime,
  Duration,
  ProgressBar,
} from "./AudioPlayer.Elements";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { FaPause } from "react-icons/fa";

const AudioPlayer = () => {
  // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // references
  const audioPlayer = useRef(); // reference our audio component
  const progressBar = useRef(); // reference to our progress bar
  const animationRef = useRef(); // reference the animation

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readystate]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;

    setIsPlaying(!prevValue);

    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
      progressBar.current.value = audioPlayer.current.currentTime;
      changePlayerCurrentTime();
      animationRef.current = requestAnimationFrame(whilePlaying);
  }

  const changeRange = () => {
      audioPlayer.current.currentTime = progressBar.current.value;
      changePlayerCurrentTime();
  }

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`);
    setCurrentTime(progressBar.current.value);
  }

  const backThirty = () => {
      progressBar.current.value = Number(progressBar.current.value) - 30;
      changeRange();
  }
  
  const forwardThirty = () => {
    progressBar.current.value = Number(progressBar.current.value) + 30;
    changeRange();
}



  return (
    <AudioPlayerContainer>
      <audio
        ref={audioPlayer}
        src=''
        preload="metadata"
      ></audio>

      <AudioControls>
        
        <ForwardBackward onClick={backThirty}>
          <BsArrowLeftShort /> 30
        </ForwardBackward>

        <PlayPause onClick={togglePlayPause}>
          {isPlaying ? <FaPause /> : <Play />}
        </PlayPause>

        <ForwardBackward onClick={forwardThirty}>
          30 <BsArrowRightShort />
        </ForwardBackward>

      </AudioControls>

      <AudioDisplayPanel>
        {/* current time */}
        <CurrentTime>{calculateTime(currentTime)}</CurrentTime>

        {/* progress bar */}
        <div>
          <ProgressBar
            type="range"
            ref={progressBar}
            defaultValue="0"
            onChange={changeRange}
          />
        </div>

        {/* duration */}
        <Duration>
          {duration && !isNaN(duration) && calculateTime(duration)}
        </Duration>
      </AudioDisplayPanel>
    </AudioPlayerContainer>
  );
};

export { AudioPlayer };
