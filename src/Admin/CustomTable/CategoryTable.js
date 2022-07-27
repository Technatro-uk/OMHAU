import React, { Component } from "react";
import { Link } from "react-router-dom";
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

export default class CategoryTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  getDataFromAPI() {
    fetch("https://localhost:7021/api/Category/getallcategories")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ categories: data });
      });
  }

  componentDidMount() {
    this.getDataFromAPI();
  }

  componentDidUpdate() {
    // this.getDataFromAPI();
  }

  render() {
    const { categories } = this.state;

  return (
    <>
      <CustomisedTable>
        <TableHeader>
          <TableRow>
            <TH>ID</TH>
            <TH>Icon</TH>
            <TH>Category Name</TH>
            <TH>Page URL</TH>
            <TH>Description</TH>
            <TH># of Entries</TH>
            <TH>Last Modified</TH>
            <TH>Options</TH>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.map((data, index) => {
            return (
              <TableRow key={index}>
                <TD>{data.id}</TD>
                <RowImage src={data.icon} />
                <TD>{data.categoryName}</TD>
                <TD>
                  <Link to={data.pageURL}>{data.pageURL}</Link>
                </TD>
                <TD>{data.description}</TD>
                <TD>{data.numberOfEntries}</TD>
                <TD>{data.lastModified}</TD>
                <TD>
                  <Link to={{ pathname: `/category/edit/${data.id}` }}>
                    <FaEdit size={17.5}/>
                  </Link>
                  |
                  <Link to={{ pathname: `/category/delete/${data.id}` }}>
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
