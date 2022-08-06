import styled from "styled-components";
import { Button } from "../../globalStyles";
import { IoIosAddCircleOutline } from "react-icons/io";
import { BiEditAlt } from "react-icons/bi";
import { TiDeleteOutline } from "react-icons/ti";

export const GridNavbar = styled.nav`
  width: 100%;
  min-height: 60px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;

  @media screen and (max-width: 640px) {
    border-bottom: none;
    grid-template-columns: 1fr;
  }
`;

export const NavTitle = styled.h1`
  margin-left: 3rem;
  color: dodgerblue;
  font-size: 35px;

  @media screen and (max-width: 940px) {
    font-size: 28px;
  }

  @media screen and (max-width: 640px) {
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

  @media screen and (max-width: 940px) {
    font-size: 18px;
  }

  @media screen and (max-width: 640px) {
    font-size: 14px;
  }
`;

export const NavSearch = styled.div`
  justify-self: center;
  width: 100%;
  margin-right: 7.5rem;

  @media screen and (max-width: 940px) {
    margin-right: 3rem;
  }

  @media screen and (max-width: 640px) {
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

  @media screen and (max-width: 940px) {
    max-width: 750px;
  }

  @media screen and (max-width: 640px) {
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
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.6rem;
  padding: 0.4rem;

  @media screen and (max-width: 940px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const TitleOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // background: #f7a83a;
  // border-radius: 8px;
  // box-shadow: rgba(0, 0, 0, 0.36) 0px 1px 4px;

  @media screen and (max-width: 940px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const SectionHeading = styled.h4`
  font-size: 18px;
  color: #010606;
  margin-left: 1.5rem;
`;

export const QuickEscapeCard = styled.div`
  background: #fff;
  box-shadow: #333333 0px 3px 8px;
  border-radius: 14px;
  width: 300px;
  height: 100%;
  text-decoration: none;
  text-align: center;
  position: relative;

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
  // height: 450px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  color: #333;
`;

export const QuickEscapeHeader = styled.div`
  height: 50px;
`;

export const QuickEscapeCardTitle = styled.h3`
  font-size: 12px;
  font-weight: bold;
`;

export const QuickEscapeCardAuthor = styled.h4`
  font-size: 12px;
  font-style: italic;
  color: #7f7f7f;
`;

export const QuickEscapeIcon = styled.img`
  height: 130px;
  width: 100%;
  margin: 0.3rem;
  border-radius: 5px;
  object-fit: cover;
`;

export const QuickEscapeCardInformation = styled.ul`
  margin: 4px;
  list-style: none;
  font-size: 13px;
  flex-direction: column;
  color: #010606;
  padding: 0;
`;

export const QuickEscapeCardCategory = styled.li`
  margin-bottom: 0.3rem;
  color: purple;
`;

export const QuickEscapeCardDescription = styled.p`
  height: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0.3em;
`;

export const AdminOptions = styled.div`
  display: flex;
  height: 50px;
  justify-content: space-between;
  font-size: 0.7rem;
  padding: 0.5rem;
`;

export const CardButton = styled(Button)`
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 100px;
  padding: 3px 3px;
  bottom: 0.5rem;
`;

export const AdminAddIcon = styled(IoIosAddCircleOutline)`
  padding: 3px;

  &:hover {
    border-radius: 50%;
    border: 2px solid dodgerblue;
  }
`;

export const AdminEditIcon = styled(BiEditAlt)`
  // bottom: 0.5rem;
  // left: 0.5rem;
  // position: absolute;

  &:hover {
    cursor: pointer;
    border-radius: 20%;
    border: 2px solid dodgerblue;
    background-color: #7ca1f9;
    transform: scale(1.15);
  }
`;

export const AdminDeleteIcon = styled(TiDeleteOutline)`
  //   bottom: 0.5rem;
  //   right: 0.5rem;
  //   position: absolute;

  &:hover {
    cursor: pointer;
    border-radius: 20%;
    border: 2px solid crimson;
    background-color: #f97c94;
    transform: scale(1.15);
  }
`;
