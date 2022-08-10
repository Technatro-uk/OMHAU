import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { BsListStars } from "react-icons/bs";

export const HealthContainer = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #FFF;

    @media screen and (max-width: 768px){
        height: 1400px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`;

export const HealthWrapper = styled.div`
    max-width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const HealthCard = styled(Link)`
    background: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    height: 330px;
    width: 250px;
    padding: 0.5rem;
    text-decoration: none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2 ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        box-shadow: 0 1px 3px dodgerblue;
    }
`;

export const HealthIcon = styled.img`
    height: 130px;
    width: 130px;
    margin: 1rem 0;
`;

export const HealthH2 = styled.h2`
    font-size: 1rem;
    font-weight: bold;
    color: dodgerblue;
    margin-bottom: 0.5rem;

    @media screen and (max-width: 960px){
        font-size: 0.8rem;
    }
`;

export const HealthP = styled.p`
    margin: 1rem 0;
    font-size: 0.75rem;
    text-align: center;
    color: #010606;

    @media screen and (max-width: 960px){
        margin: 0 1rem;
    }
`;

export const HealthButtonIcon = styled.img`
    margin-top: 15px;
    width: 100%;
    height: 100%;
    background: transparent;
`;

export const HealthLink = styled.div`
    color: #FFF;
    background: transparent;
    font-size: 14px;
    margin-top: 10px;
    vertical-align: middle;
`;