import React, { Component } from "react";
import { Accordion } from "react-bootstrap";
// import { ButtonContainer } from "../styles/AdminCarousel.Elements";
import { Link } from "react-router-dom";
// import { FaEdit } from 'react-icons/fa';
// import { MdDeleteForever } from 'react-icons/md';
import {
  AccordionContainer,
  TitleOptions,
  SectionHeading,
  // AdminAddIcon,
  AdminEditIcon,
  AdminDeleteIcon,
  // AddToTableContainer,
  CustomisedTable,
  TableHeader,
  TableBody,
  TableRow,
  TH,
  TD,
  RowImage,
} from "../styles/CustomTable.Elements";

export default class CategoryTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Categories: [],
    };
  }

  getDataFromAPI() {
    fetch("https://localhost:7021/api/Category/getallcategories")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ Categories: data });
      });
  }

  componentDidMount() {
    this.getDataFromAPI();
  }

  componentDidUpdate() {
    // this.getDataFromAPI();
  }

  render() {
    const { Categories } = this.state;

    return (
      <>
        <AccordionContainer>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <TitleOptions>
                  <SectionHeading>Categories</SectionHeading>
                </TitleOptions>
              </Accordion.Header>
              <Accordion.Body>
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
                    {Categories.map((data, index) => {
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
                            <AdminEditIcon
                              size={25}
                              style={{ color: "dodgerblue" }}
                              // onClick={() =>
                              //   this.setState({
                              //     editAudioModal: true,
                              //     audioid: aData.id,
                              //     audiotitle: aData.audioTitle,
                              //     audioimage: aData.audioImage,
                              //     audioauthor: aData.audioAuthor,
                              //     audiocategory: aData.audioCategory,
                              //     audiotype: aData.audioType,
                              //     audiodateadded: aData.mediaAdded,
                              //     audiourl: aData.audioURL,
                              //   })
                              // }
                            />
                            <AdminDeleteIcon
                              size={25}
                              style={{ color: "red" }}
                              // onClick={() =>
                              //   this.deleteFromLibrary(
                              //     aData.id,
                              //     aData.audioTitle,
                              //     aData.audioAuthor
                              //   )
                              // }
                            />
                          </TD>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </CustomisedTable>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </AccordionContainer>
      </>
    );
  }
}