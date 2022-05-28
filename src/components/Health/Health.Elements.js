import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HealthContainer = styled.div`
    height: 500px;
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
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
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

export const HealthCard = styled.div`
    background: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2 ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const HealthIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`;

export const HealthH1 = styled.h1`
    font-size: 2.5rem;
    color: dodgerblue;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`;

export const HealthH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`;

export const HealthP = styled.p`
    font-size: 0.8rem;
    text-align: center;
`;

export const HealthLink = styled(Link)`
    color: #FFF;
    background: transparent;
    font-size: 14px;
    margin-top: 10px;
    vertical-align: middle;
`;