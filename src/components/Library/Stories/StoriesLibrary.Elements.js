import styled from 'styled-components';

export const GridNavbar = styled.nav`
    width: 100%;
    min-height: 60px;
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
    padding: 4px 12px;
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
    padding: 1rem 0.5rem;
    border-top: 1px solid #eeeeee;
    border-bottom: 1px solid #eeeeee;
    color: #5E5E5E;
    text-align: center;
    margin: 0.5rem 3rem;

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

export const StoryWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-column: repeat(4, 1fr);
  align-items: center;
  justify-content: center;
  // text-align: center;
  padding: 20px;
  margin: 10px auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StoryContainer = styled.div`
  display: flex;
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

export const StoryCard = styled.div`
  background: #fff;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  border-radius: 8px;
  width: 300px;
  height: 100%;
  text-decoration: none;

  &:nth-child(2) {
    margin: 16px;
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`;

export const StoryCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 350px;
  padding: 24px;
  justify-content: center;
  align-items: center;
  color: #333;
`;

export const StoryCardTitle = styled.h3`
  height: 40px;
  font-size: 16px;
`;

export const StoryCardAuthor = styled.h4`
  font-size: 14px;
  color: #333;
`;

export const StoryCardDatePublished = styled.p`
  font-size: 12px;
  margin-bottom: 14px;
`;

export const StoryCardWordCount = styled.p`
  font-size: 14px;
  margin-bottom: 14px;
`;

export const StoryCardInformation = styled.ul`
  margin: 16px 0 12px;
  list-style: none;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
`;

export const StoryCardCategory = styled.li`
  margin-bottom: 10px;
`;

export const StoryCardDescription = styled.div`
  height: 7rem;
  margin-bottom: 10px;
`;