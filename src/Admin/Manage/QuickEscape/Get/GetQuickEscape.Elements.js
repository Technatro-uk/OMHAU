import styled from 'styled-components';

export const QuickEscapeWrapper = styled.div`
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

export const QuickEscapeContainer = styled.div`
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

export const QuickEscapeCard = styled.div`
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

export const QuickEscapeCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 450px;
  padding: 24px;
  justify-content: center;
  align-items: center;
  color: #333;
`;

export const QuickEscapeCardTitle = styled.h3`
  font-size: 16px;
`;

export const QuickEscapeCardAuthor = styled.h4`
  font-size: 14px;
  color: #333;
`;

export const QuickEscapeIcon = styled.img`
    height: 150px;
    width: 100%;
    text-align: center;
	  padding: 0.5rem;
    border-radius: 10px;
    object-fit: center; 
`;

export const QuickEscapeCardInformation = styled.ul`
  margin: 4px;
  list-style: none;
  font-size: 16px;
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
  margin-bottom: 10px;
`;