import React, { Component } from "react";
import { Accordion } from "react-bootstrap";
import { ButtonContainer } from "../styles/AdminCarousel.Elements";
import { ActiveUsers } from "../../Data/Admin/UserData";
import {
  AccordionContainer,
  TitleOptions,
  SectionHeading,
  AdminAddIcon,
  AdminEditIcon,
  AdminDeleteIcon,
  AddToTableContainer,
  CustomisedTable,
  TableHeader,
  TableBody,
  TableRow,
  TH,
  TD,
  RowImage,
} from "../styles/CustomTable.Elements";

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
    // const { users } = this.state;

    return (
      <>
        <AccordionContainer>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <TitleOptions>
                  <SectionHeading>Users</SectionHeading>
                </TitleOptions>
              </Accordion.Header>
              <Accordion.Body>
                <AddToTableContainer>
                  <SectionHeading>Add New User</SectionHeading>
                  <ButtonContainer>
                    <AdminAddIcon
                      size={35}
                      style={{ color: "dodgerblue" }}
                      // onClick={() => this.setState({ addAudioModal: true })}
                    />
                    {/* <AddAudioModal
          show={this.state.addAudioModal}
          onHide={addModalClose}
        /> */}
                  </ButtonContainer>
                </AddToTableContainer>
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