import styled from 'styled-components';

export const AudiobookContainer = styled.div`
    background: #F3DAFF;
    color: dodgerblue;
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100%;
    padding: 50px;

    @media screen and (max-width: 960px){
        display: row;
        width: 100vw;
    }
`;

export const AudiobookH1 = styled.h1`
    font-size: 24px;
    font-weight: 700;
`;