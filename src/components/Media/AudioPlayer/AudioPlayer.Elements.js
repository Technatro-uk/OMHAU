import styled from 'styled-components';
import { FaPlay } from 'react-icons/fa';

export const AudioPlayerContainer = styled.container`
    --primary-button: #FFF;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
`;

export const AudioControls = styled.div`
    display: flex;
    align-items: center;
`;

export const AudioDisplayPanel = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ForwardBackward = styled.button`
    background-color: var(--primary-button);
    color: #FFF;
    border-radius: 50px;
    padding: 5px;
    height: 50px;
    width: 50px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: monospace;
    font-size: 16px;
    cursor: pointer;
    margin: 5px 5px;

    &:hover {
        color: #000;
        font-weight: bold;
        background-color: var(--primary-button);
    }
`;

export const PlayPause = styled.button`
    background: var(--primary-button);
    border: none;
    border-radius: 50%;
    width: 75px;
    height: 75px;
    font-size: 32px;
    color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const Play = styled(FaPlay)`
    position: relative;
    left: 3px;
`;

export const CurrentTime = styled.div`
    font-family: monospace;
    font-size: 16px;
    margin-left: 25px;
`;

export const Duration = styled.div`
    font-family: monospace;
    font-size: 16px;    
`;

export const ProgressBar = styled.input`
    --bar-bg: whitesmoke;
    --seek-before-width: 0;
    --seek-before-color: #ffcza1;
    --knobby: #3452a5;
    --selectedKnobby: #26c9c3;

    appearance: none;
    background: var(--bar-bg);
    border-radius: 10px;
    position: relative;
    width: 200px;
    height: 11px;
    outline: none;
    margin: 10px 10px;

    &:before {
        content: '';
        height: 11px;
        width: var(--seek-before-width);
        background-color: var(--seek-before-color);
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        cursor: pointer;
    }

    &::-moz-range-progress {
        background-color: var(--seek-before-color);
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        height: 11px;
    }

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 15px;
        width: 15px;
        border-radius: 50%;
        border: none;
        background-color: var(--knobby);
        cursor: pointer;
        position: relative;
        margin: -2px 0 0 0;
        z-index: 3;
        box-sizing: border-box;
    }

    &:active::-webkit-slider-thumb {
        transform: scale(1.2);
        background: var(--selectedKnobby);
    }

    &::-moz-range-thumb {
        height: 15px;
        width: 15px;
        border-radius: 50%;
        border: transparent;
        background-color: var(--knobby);
        cursor: pointer;
        position: relative;
        z-index: 3;
        box-sizing: border-box;
    }

    &:active::-moz-range-thumb {
        transform: scale(1.2);
        background: var(--selectedKnobby);
    }
`;