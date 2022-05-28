import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { MdOutlineOndemandVideo } from 'react-icons/md';

export const SideMenu = styled.div`
    top: 60px;
    position: fixed;
    width: 300px;
    background: dodgerblue;
    height: 100vh;
    padding: 30px 20px;

    @media screen and (max-width: 640px){
        width: 100vw;
        height: 40vh;
    }
`;

export const TopSection = styled.div`
    background: transparent;
    position: relative;
    top: -10px;
`;

export const MenuContainer = styled.div`
    background: dodgerblue;
    overflow: hidden;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 640px){
        justify-content: space-between;
        padding-right: 10px;
    }
`;

export const MenuTitle = styled.h3`
    font-size: 20px;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF;  

    @media screen and (max-width: 640px){
        font-size: 16px;
    }
`;

export const Logo = styled(MdOutlineOndemandVideo)`
    background: dodgerblue;
    font-size: 38px;
    color: #FFF;   

    @media screen and (max-width: 768px){
        font-size: 32px;
    }
`;

export const SearchController = styled.div`
    align-items: center;
    justify-content: center;
    background: transparent;
    position: relative;
`;

export const SearchBar = styled.input`
    border: 0;
    outline: none;
    height: 35px;
    background: #EEE;
    border-radius: 5px;
    display: block;
    width: 100%;
    padding: 10px;
    color: #000;
    margin: 10px 0;
`;

export const SearchButton = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
    cursor: pointer;
    background: transparent;
    outline: none;
    border: none;
`;

export const SearchIcon = styled(FaSearch)`
    background: transparent;
    color: #333;
`;

export const MenuDivider = styled.hr`
    width: 100%;
    height: 1px;
    border-radius: 1px;    
`;

export const MainMenu = styled.div`
    margin: 10px 0;
`;

export const MainMenuItem = styled.ul`
    list-style: none;

    @media screen and (max-width: 640px){
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`;

export const MenuLink = styled.li`
    background: dodgerblue;
    padding: 5px 0;
`;

export const LinkItem = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;
    background: dodgerblue;
    color: #333;
    font-size: 15px;
    font-weight: 600;
    padding: 3px;

    @media screen and (max-width: 640px){
        justify-content: center;
        border: 1px solid #333;
        border-radius: 5px;
        margin: 3px;

        &:hover {
            color: #FFF;
            border: 1px solid #FFF;
        }
    }
`;