import styled from "styled-components";
import { Row } from "../../globalStyles";
import { IoIosAddCircleOutline } from "react-icons/io";
import { BiEditAlt } from "react-icons/bi";
import { TiDeleteOutline } from "react-icons/ti";

export const AccordionContainer = styled.div`
  width: 100%;
  margin: 2rem 0;
`;

export const TitleOptions = styled.div`
  width: 100%;
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

export const ButtonContainer = styled(Row)`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & svg {
    margin: 1rem;
    cursor: pointer;
  }

  & svg:hover {
    border-radius: 50%;
    border: 2px solid dodgerblue;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }

  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const SectionHeading = styled.h4`
  font-size: 14px;
  font-weight: bold;
  color: #010606;
  margin-left: 1.5rem;
`;

export const AddToTableContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.36) 0px 1px 4px;
`;

export const CustomisedTable = styled.table`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  border-collapse: collapse;
  width: 100%;
  text-align: center;
  margin-top: 1.5rem;
  // padding: 6px 2px;
  // margin-bottom: 15px;
  // border-radius: 8px;
  // box-shadow: rgba(0, 0, 0, 0.36) 0px 1px 4px;
`;

export const TableHeader = styled.thead`
  display: contents;
  font-size: 0.7rem;
`;

export const TableBody = styled.tbody`
  display: contents;
  font-size: 0.8rem;
`;

export const TableRow = styled.tr`
  display: contents;
`;

export const TH = styled.th`
  padding: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const TD = styled.td`
  padding: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #101606;

  &:hover {
    background: #eee;
  }
`;

export const RowImage = styled.img`
  width: 40px;
  height: 40px;
  justify-self: center;
  border-radius: 3px;
  object-fit: center;

  &:hover {
    background: #eee;
  }
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