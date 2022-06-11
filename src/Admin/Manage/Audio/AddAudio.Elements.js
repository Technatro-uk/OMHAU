import styled from 'styled-components';

export const NewAudioPage = styled.div`
    padding-top: 20px;
    height: 400px;
`;

export const PageHeading = styled.h3`
    font-size: 18px;
    padding: 15px;
    text-align: center;
`;

export const AddAudioForm = styled.form`
    background: #FFFFFF;
    max-width: 360px;
    margin: 0 auto 100px;
    padding: 15px;
    text-align: center;
    border-radius: 8px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
`;

export const FormField = styled.input`
    font-family: "Roboto", sans-serif;
    display: grid;
    outline: 0;
    background: #fdfdfd;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    font-size: 14px;

    &:focus {
        background: #FFFFFF;
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    }
`;

export const FormButton = styled.button`
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    background: #eeeeee;
    width: 100%;
    border: 0;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 10px;
    color: dodgerblue;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;

    &:hover {
        background: dodgerblue;
        color: #fff;
    }
    &:active {
        background: dodgerblue;
        color: #fff;
    }
    &:focus {
        background: dodgerblue;
        color: #fff;
    }
`;