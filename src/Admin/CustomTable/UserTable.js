import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ActiveUsers } from "../../Data/Admin/UserData";
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import {
  CustomisedTable,
  TableHeader,
  TableBody,
  TableRow,
  TH,
  TD,
  RowImage
} from "./CustomTable.Elements";

export default class UserTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  getDataFromAPI() {
    fetch("https://localhost:7021/api/Users/getallusers")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ users: data });
      });
  }

  componentDidMount() {
    // this.getDataFromAPI();
  }

  componentDidUpdate() {
    // this.getDataFromAPI();
  }

  render() {
    const { users } = this.state;

  return (
    <>
      <CustomisedTable>
        <TableHeader>
          <TableRow>
            <TH>ID</TH>
            <TH>User Photo</TH>
            <TH>First Name</TH>
            <TH>Last Name</TH>
            <TH>Username</TH>
            <TH>Email</TH>
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
                <TD>{data.username}</TD>
                <TD>{data.email}</TD>
                <TD>{data.country}</TD>
                <TD>
                  <Link to={{ pathname: `/user/edit/${data.id}` }}>
                    <FaEdit size={17.5}/>
                  </Link>
                  <Link to={{ pathname: `/user/delete/${data.id}` }}>
                    <MdDeleteForever size={17.5}/>
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
}