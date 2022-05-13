import styled from 'styled-components';

export const MediaSec = styled.div`
    color: #000;
    padding: 80px 0; 
    background: ${({lightBg}) => (lightBg ? '#FFF' : '#F3DAFF')};
`;

export const MediaRow = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')};
`;

export const MediaColumn = styled.div`
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;

    @media screen and (max-width: 768px){
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;

    @media screen and (max-width: 768px){
        padding-bottom: 65px;
    }
`;

export const TopLine = styled.div`
    color: ${({lightTopLine}) => (lightTopLine ? 'blue' : '#4B59F7')};
    font-size: 18px;
    line-height: 16px;
    // font-weight: 700;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1;
    color: ${({lightText}) => (lightText ? 'dodgerblue' : '#1C2237')};    
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 42px;
    color: ${({lightTextDesc}) => (lightTextDesc ? 'blue' : '#4B59F7')};
`;

export const MediaWrapper = styled.div`
    max-width: 555px;
    display: flex;
    justify-content: ${({start}) => (start ? 'flex-start' : 'flex-end')};
`;

export const MediaPlayer = styled.div`
    padding-right: 0;
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    max-height: 500px;
`;

export const MediaHeading3 = styled.h3`
    font-size: 26px;
    font-weight: 600;
`;