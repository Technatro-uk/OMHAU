import styled from 'styled-components';

export const GridNavbar = styled.nav`
    width: 100%;
    min-height: 80px;
    border-bottom: 1px solid #eeeeee;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;

    @media screen and (max-width: 640px){
        border-bottom: none;
        grid-template-columns: 1fr;
    }
`;

export const NavTitle = styled.h1`
    margin: 12px;
    color: dodgerblue;
    font-size: 30px;

    @media screen and (max-width: 940px){
        font-size: 28px;
    }

    @media screen and (max-width: 640px){
        text-align: center;
    }
`;

export const NavDescription = styled.p`
    margin: 12px;
    color: #333;
    text-align: center;
    font-size: 22px;
    padding: 0.5rem;

    @media screen and (max-width: 940px){
        font-size: 18px;
    }

    @media screen and (max-width: 640px){
        font-size: 14px;
    }
`;

export const NavSearch = styled.div`
    justify-self: center;
    width: 100%;
    margin-right: 7.5rem;

    @media screen and (max-width: 940px){
        margin-right: 3rem;
    }

    @media screen and (max-width: 640px){
        padding: 10px;
        grid-column: span 2;
        margin: 0;
    }
`;

export const NavForm = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 8px 12px;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    @media screen and (max-width: 940px){
        max-width: 750px;
    }

    @media screen and (max-width: 640px){
        max-width: 100%;
    }
`;

export const InputContainer = styled.div`
    width: 100%;
`;

export const FormInput = styled.input`
    background: transparent;
    border: none;
    font-size: 1rem;
    width: 100%;

    &:focus {
        outline: none;
    }
`;

export const FormBtn = styled.button`
    color: dodgerblue;
    font-size: 1rem;
    border: none;
    background: transparent;
    cursor: pointer;
`;

export const GridSortBar = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 1rem;
    border-top: 1px solid #eeeeee;
    border-bottom: 1px solid #eeeeee;
    color: #5E5E5E;
    text-align: center;
    margin: 0.5rem 1.5rem;

    @media screen and (max-width: 640px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        border: 1px solid #eeeeee;
    }
`;

export const GridSortItem = styled.button`
    border: none;

    &:hover {
        cursor: pointer;
        color: dodgerblue;
    }
`;

export const SortIcon = styled.div`
    font-size: 1.3rem;

    &:hover {
        color: dodgerblue;
    }

`;

export const SortName = styled.p`
    font-size: 14px;
`;

export const GridContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    padding: 1.5rem;

    @media screen and (max-width: 940px){
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 640px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 480px){
        grid-template-columns: 1fr;
    }
`;

export const AudioCard = styled.div`
    max-width: 300px;
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    @media screen and (max-width: 940px){
        margin: 0 auto;
    }

    @media screen and (max-width: 640px){
        margin: 0 auto;
        padding: 1rem;
    }

    @media screen and (max-width: 480px){
        margin: 0 auto;
        padding: 1rem;
    }
`;

export const AudioIcon = styled.img`
    width: 100%;
    height: 130px;
    text-align: center;
	padding: 0.2rem;
    border-radius: 5px 5px;
    color: dodgerblue;
    background: #eee;
    object-fit: center;

`;

export const AudioMedia = styled.audio`
    width: 100%;
    height: 35px;
    border-radius: 15px;
    justify-content: center;
`;

export const CardInfo = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const CardTitle = styled.h4`
    padding-top: 4px;
    font-size: 11px;
`;

export const CardSource = styled.p`
    padding-top: 4px;
    font-size: 11px;
    color: #333;
`;

export const MediaInfo = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const MediaDuration = styled.p`
    padding-top: 4px;
    font-size: 11px;
    color: #555;
`;

export const MediaAdded = styled.p`
    padding-top: 4px;
    font-size: 11px;
    color: #555;
`;