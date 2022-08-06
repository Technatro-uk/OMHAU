import styled from 'styled-components';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { BiEditAlt } from 'react-icons/bi';
import { TiDeleteOutline } from 'react-icons/ti';

export const GridNavbar = styled.nav`
    width: 100%;
    min-height: 60px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;

    @media screen and (max-width: 640px){
        border-bottom: none;
        grid-template-columns: 1fr;
    }
`;

export const NavTitle = styled.h1`
    margin-left: 3rem;
    color: dodgerblue;
    font-size: 35px;

    @media screen and (max-width: 940px){
        font-size: 28px;
    }

    @media screen and (max-width: 640px){
        text-align: center;
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
    margin-top: 12px;
    padding: 6px 12px;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, dodgerblue 0px 0px 0px 3px;

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

export const NavDescription = styled.p`
    margin: 12px;
    color: #333;
    text-align: center;
    font-size: 1rem;
    padding: 0.5rem;
    border-top: 1px solid #eeeeee;
    border-bottom: 1px solid #eeeeee;

    @media screen and (max-width: 940px){
        font-size: 18px;
    }

    @media screen and (max-width: 640px){
        font-size: 14px;
    }
`;

export const TitleOptions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f7a83a;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.36) 0px 1px 4px;


    @media screen and (max-width: 940px){
        display: flex;
        justify-content: space-between;
    }
`;

export const SectionHeading = styled.h4`
  font-size: 26px;
  color: #fff;
  margin-left: 1.5rem;
`;

export const GridContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.6rem;
    padding: 0.4rem;

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
    padding: 0.3rem;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    @media screen and (max-width: 940px){
        margin: 0 auto;
    }

    @media screen and (max-width: 640px){
        margin: 0 auto;
        padding: 0.5rem;
    }

    @media screen and (max-width: 480px){
        margin: 0 auto;
        padding: 0.3rem;
    }
`;

export const AudioHeading = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 0.2rem;
`;

export const MediaCategory = styled.p`
    padding-top: 4px;
    font-size: 12px;
    font-weight: bold;
    color: #edab4e;
`;

export const MediaType = styled.p`
    padding-top: 4px;
    font-size: 12px;
    font-weight: bold;
    color: #bb76cf;
`;

export const AudioIcon = styled.img`
    height: 150px;
    width: 100%;
    text-align: center;
	padding: 0.2rem;
    object-fit: cover; 
`;

export const AudioMedia = styled.audio`
    width: 100%;
    height: 35px;
    justify-content: center;
    margin-top: 0.4rem;
`;

export const AudioInfo = styled.div`
    display: column;
    justify-content: center;
    text-align: center;
    padding-top: 0.5rem;
`;

export const AudioTitle = styled.h4`
    font-size: 12px;
    flex: 1;
`;

export const AudioSource = styled.p`
    font-size: 12px;
    color: #333;
`;

export const AdminOptions = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 0.2rem;
    font-size: 0.7rem;
`;

export const AdminAddIcon = styled(IoIosAddCircleOutline)`
    padding: 3px;

    &:hover {
        border-radius: 50%;
        border: 2px solid dodgerblue;
    }

`;

export const AdminEditIcon = styled(BiEditAlt)`
    padding: 3px;

    &:hover {
        cursor: pointer;
        border-radius: 20%;
        border: 2px solid dodgerblue;
        background-color: #7ca1f9;
        transform: scale(1.15);
    }
`;

export const AdminDeleteIcon = styled(TiDeleteOutline)`
    padding: 3px;

    &:hover {
        cursor: pointer;
        border-radius: 20%;
        border: 2px solid crimson;
        background-color: #f97c94;
        transform: scale(1.15);
    }
`;