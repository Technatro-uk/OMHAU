import styled from 'styled-components';

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

export const NavDescription = styled.p`
    margin: 12px;
    color: #333;
    text-align: center;
    font-size: 18px;
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
    margin-right: 15px;
    background: transparent;
    cursor: pointer;
`;

export const QuickEscapeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 2rem;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 468px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
  }
`;

export const SectionHeading = styled.h4`
  font-size: 26px;
  color: #333;
  margin-left: 3.5rem;
`;

export const QuickEscapeCard = styled.div`
  background: #fff;
  box-shadow: #333333 0px 3px 8px;
  border-radius: 14px;
  width: 280px;
  height: 100%;
  text-decoration: none;
  text-align: center;

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
    box-shadow: blue 0px 2px 8px 0px;
  }

  @media screen and (max-width: 960px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`;

export const QuickEscapeCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 450px;
  padding: 14px;
  justify-content: center;
  align-items: center;
  color: #333;
`;

export const QuickEscapeHeader = styled.div`
  height: 60px;
`;

export const QuickEscapeCardTitle = styled.h3`
  font-size: 14px;
  font-weight: bold;
`;

export const QuickEscapeCardAuthor = styled.h4`
  font-size: 12px;
  color: #7f7f7f;
`;

export const QuickEscapeIcon = styled.img`
    height: 150px;
    width: 100%;
	  padding: 0.5rem;
    border-radius: 10px;
    object-fit: center; 
`;

export const QuickEscapeCardInformation = styled.ul`
  margin: 4px;
  list-style: none;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #010606;
`;

export const QuickEscapeCardCategory = styled.li`
  margin-bottom: 10px;
  color: darkorange;
`;

export const QuickEscapeCardDescription = styled.div`
  height: 140px;
  overflow: hidden;
  margin-bottom: 10px;
`;