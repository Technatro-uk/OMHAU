import styled from 'styled-components';

export const PageSection = styled.section`
    height: 100vh;
    padding-top: 5px;
`;

export const PageContainer = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding-left: 32px;
    padding-right: 32px;

    @media (min-width: 768px) {
        padding-left: 64px;
        padding-right: 64px;
    }
`;

export const PageHeading = styled.h3`
    color: #333;
    font-size: 26px;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 10px;
`;

export const AddAudioForm = styled.form`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 16px;
    background-color: #fff;
    padding: 12px;
    border-radius: 16px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr1;
    }
`;

export const FormGroup = styled.div`

`;

export const InputLabel = styled.label`
    display: block;
    margin-bottom: 5px;
    color: #333;
    font-size: 14px;
`;

export const FormField = styled.input`
    appearance: none;
    outline: none;
    border: none;
    display: block;
    width: 100%;
    border-radius: 8px;
    padding: 12px 12px;
    background-color: #f3f3f3;

    &:focus {
        box-shadow: #333 0px 4px 12px;
    }
`;

export const SubmitGroup = styled.div`
    grid-column: 1 / -1;
    text-align: right;
`;

export const FormButton = styled.button`
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: #eeeeee;
    width: 150px;
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

export const ImageSection = styled.div`
    height: 240px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 10px;
`;

export const ImageUploadOptions = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

export const InputImage = styled.img`
    width: 100px;
    height: 100px;
    display: block;
    margin: 0 auto;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const ImageUploadOptionButtons = styled.button`
    // text-transform: uppercase;
    outline: 0;
    background: #fefefe;
    height: 25px;
    width: 180px;
    border: 0;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    color: dodgerblue;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
    margin-top: 10px;
    margin-bottom: 10px;

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