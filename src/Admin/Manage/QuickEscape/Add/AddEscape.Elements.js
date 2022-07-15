import styled from 'styled-components';

export const PageContainer = styled.div`
    padding-top: 20px;
    max-width: 1280px;
    margin: 0 auto;
    padding-left: 64px;
    padding-right: 64px;

    @media (max-width: 768px) {
        padding-left: 32px;
        padding-right: 32px;
    }

    @media (max-width: 480px) {
        padding-left: 16px;
        padding-right: 16px;
    }
`;

export const PageHeading = styled.h3`
    color: #333;
    font-size: 26px;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 10px;
`;

export const AddQuickEscapeForm = styled.form`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 16px;
    background-color: #fff;
    padding: 15px;
    border-radius: 16px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const FormGroup = styled.div`
    width: 100%;
    padding: 20px;
    border-radius: 16px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const InputLabel = styled.label`
    display: block;
    margin-top: 5px;
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
    padding: 6px 12px;
    background-color: #f3f3f3;

    &:focus {
        box-shadow: #333 0px 4px 12px;
    }
`;

export const EscapeDescriptionInput = styled.textarea`
    appearance: none;
    outline: none;
    border: none;
    display: block;
    height: 55px;
    width: 100%;
    border-radius: 8px;
    padding: 6px 12px;
    background-color: #f3f3f3;

    &:focus {
        box-shadow: #333 0px 4px 12px;
    }
`;

export const FormTypeSelection = styled.select`
    appearance: none;
    outline: none;
    border: none;
    display: block;
    width: 100%;
    border-radius: 8px;
    padding: 6px 12px;
    background-color: #b0ceeb;

    &:focus {
        box-shadow: #333 0px 4px 12px;
    }
`;

export const QuickEscapeSection = styled.div`
    height: 100%;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 10px;
`;

export const InputQuickEscape = styled.input`
    width: 230px;
    height: 130px;
    object-fit: cover;
    display: block;
    margin: 0 auto;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const ImageSection = styled.div`
    height: 180px;
    padding: 5px;
`;

export const InputImage = styled.img`
    width: 75px;
    height: 75px;
    object-fit: cover;
    display: block;
    margin: 0 auto;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const QuickEscapeFileUpload = styled.input`
    height: 50px;
    width: 100%;
    color: dodgerblue;
    font-size: 14px;
    padding: 5px;
    align-items: center;
`;

export const ImageUploadOptions = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const ImageFileUpload = styled.input`
    height: 100%;
    width: 100%;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    color: dodgerblue;
    font-size: 14px;
    padding: 5px;
    align-items: center;
`;

export const InputDivider = styled.div`
    text-align: center;
    height: 0.7em;
    border-bottom: 3px solid dodgerblue;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    color: dodgerblue;

    &:first-line {
        background-color: white;
    }

    &:before {
        content: "__";
        color: white;
    }

    &:after {
        content: "__";
        color: white;
    }
`;

export const FormButton = styled.button`
    margin-top: 5px;
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: dodgerblue;
    width: 50%;
    border: 0;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 10px;
    color: #fff;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;

    &:hover, active, focus {
        background: #fff;
        color: dodgerblue;
        box-shadow: dodgerblue 0px 3px 8px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
        padding: 5px;
        margin-top: 10px;
    }
`;

export const SubmitGroup = styled.div`
    grid-column: 1 / -1;
    text-align: center;
`;

export const SubmitSection = styled.div`
    margin-top: 20px;
    height: 60px;
    padding: 5px;
`;