import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
    background-color: #FFF;
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FooterSubscription = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 24px;
    padding: 24px;
    color: #FFF;
`;

export const FooterSubHeading = styled.p`
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', Lucida Sans, Arial, sans-serif;
    margin-bottom: 24px;
    font-size: 24px;
`;

export const FooterSubtext = styled.p`
    margin-bottom: 24px;
    font-size: 20px;
`;

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 960px){
        flex-direction: column;
        width: 80%;
    }
`;

export const FooterLinksContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 960px) {
        padding-top: 32px;
    }
`;

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 960px){
        flex-direction: row;
    }
`;

export const FooterLinksItems = styled.div`
    display: grid;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;

    @media screen and (max-width: 420px){
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h2`
    color: dodgerblue;
    font-weight: bold;
    margin-bottom: 0.3rem;

    @media screen and (max-width: 960px){
        font-size: 0.7rem
    }
`;

export const FooterLink = styled(Link)`
    color: #101606;
    text-decoration: none;
    margin-bottom: 0.5rem;

    &:hover {
        color: #0467FB;
        transition: all 0.3s ease-out;
    }

    @media screen and (max-width: 960px){
        font-size: 0.7rem;
    }
`;

export const SocialMedia = styled.section`
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 960px){
        flex-direction: column;
    }
`;

export const SocialLogo = styled(Link)`
    color: dodgerblue;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
`;

export const DevelopedBy = styled.a`
    color: dodgerblue;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
`;

export const SocialIcon = styled.img`
    margin-right: 10px;
    height: 60px;
    height: 60px;
`;

export const WebsiteRights = styled.small`
    color: dodgerblue;
    margin-bottom: 16px;
    text-decoration: none;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100px;
`;

export const SocialIconLink = styled.a`
    color: dodgerblue;
    font-size: 30px;
`;