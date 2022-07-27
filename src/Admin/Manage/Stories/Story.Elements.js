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

export const AddStoryForm = styled.form`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 16px;
    background-color: #fff;
    padding: 12px;
    border-radius: 16px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const FormGroup = styled.div`
    width: 100%;
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
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    border-radius: 8px;
    padding: 6px 12px;
    background-color: #f3f3f3;

    &:focus {
        box-shadow: #333 0px 4px 12px;
    }
`;

export const DescriptionField = styled.textarea`
    appearance: none;
    outline: none;
    border: none;
    display: block;
    margin-top: 5px;
    margin-bottom: 5px;
    width: 100%;
    height: 5rem;
    border-radius: 8px;
    padding: 6px 12px;
    background-color: #f3f3f3;

    &:focus {
        box-shadow: #333 0px 4px 12px;
    }
`;

export const StoryContentField = styled.textarea`
    appearance: none;
    outline: none;
    border: none;
    display: block;
    margin-top: 5px;
    margin-bottom: 5px;
    width: 100%;
    height: 5rem;
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
    background-color: #eee;

    &:focus {
        box-shadow: #333 0px 4px 12px;
    }
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

    @media (max-width: 480px) {
        font-size: 12px;
        padding: 5px;
        margin-top: 10px;
    }
`;

export const SubmitGroup = styled.div`
    grid-column: 1 / -1;
    text-align: right;
`;

export const SubmitSection = styled.div`
    height: 80px;
    margin-top: 20px;
    box-shadow: dodgerblue 0px 1px 4px;
    // border: 1px solid dodgerblue;
    border-radius: 5px;
    padding: 10px;
    grid-column: 2;

    @media (max-width: 768px) {
        grid-column: 1;
    }
`;