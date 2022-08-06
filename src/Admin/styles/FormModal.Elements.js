import styled from 'styled-components';

export const AddModalForm = styled.form`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 8px;
    background-color: #fff;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const EditModalForm = styled.form`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 8px;
    background-color: #fff;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const FormTypeSelection = styled.select`
    appearance: none;
    outline: none;
    border: 1px solid dodgerblue;
    display: block;
    width: 100%;
    border-radius: 4px;
    text-align: center;
    padding: 2px;

    &:focus {
        box-shadow: #333 0px 4px 12px;
    }
`;


export const ImageSection = styled.div`
    display: grid;
    height: 100%;
    width: 100%;
`;

export const ImageUploadOptions = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;

export const VideoIframe = styled.iframe`
    width: 100%;
    height: 100%;
    border-radius: 5px;
`;

export const InputImage = styled.img`
    justify-self: center;
    width: 100px;
    height: 80px;
    object-fit: center;
    display: block;
    margin: 0 auto;
    border-radius: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const ImageFileUpload = styled.input`
    height: 100%;
    font-size: 14px;
    padding: 0.5rem;
    align-items: center;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const SubmitGroup = styled.div`
    display: flex;
    height: 100%;
`;
export const FormButton = styled.button`
    align-self: flex-end;
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: #eeeeee;
    width: 100%;
    border: 0;
    border-radius: 8px;
    box-shadow: dodgerblue 0px 3px 8px;
    padding: 5px;
    color: dodgerblue;
    font-size: 12px;
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

    @media (max-width: 480px) {
        font-size: 12px;
        padding: 5px;
        margin-top: 10px;
    }
`;