import React from "react";
import { Link } from "react-router-dom";
import { ActiveUsers } from "../../Data/Admin/UserData";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import {
  CustomisedTable,
  TableHeader,
  TableBody,
  TableRow,
  TH,
  TD,
  RowImage,
} from "./CustomTable.Elements";

function CustomTable({ tableData }) {
  return (
    <>
      <CustomisedTable>
        <TableHeader>
          <TableRow>
            <TH>ID</TH>
            <TH>User Photo</TH>
            <TH>First name</TH>
            <TH>Last name</TH>
            <TH>Email</TH>
            <TH>Street</TH>
            <TH>Country</TH>
            <TH>Options</TH>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ActiveUsers.map((data, index) => {
            return (
              <TableRow key={index}>
                <TD>{data.id}</TD>
                <RowImage src={data.userPhoto} />
                <TD>{data.firstName}</TD>
                <TD>{data.lastName}</TD>
                <TD>{data.email}</TD>
                <TD>{data.street}</TD>
                <TD>{data.country}</TD>
                <TD>
                  <Link to={{ pathname: `/user/edit/${data.id}` }}>
                    <FaEdit />
                  </Link>
                  <Link to={{ pathname: `/user/delete/${data.id}` }}>
                    <MdDeleteForever />
                  </Link>
                </TD>
              </TableRow>
            );
          })}
        </TableBody>
      </CustomisedTable>
    </>
  );
}

export default CustomTable;