import React, { Component } from "react";
import { Accordion } from "react-bootstrap";
import { ButtonContainer } from "../styles/AdminCarousel.Elements";
import AddQuickEscapeModal from "../../Admin/Manage/QuickEscape/AddQuickEscapeModal";
import EditQuickEscapeModal from "../../Admin/Manage/QuickEscape/EditQuickEscapeModal";
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

export default class QuickEscapeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      QuickEscapeLibrary: [],
      addQuickEscapeModal: false,
      editQuickEscapeModal: false,
    };
  }

  componentDidMount() {
    this.refreshLibrary();
  }

  componentDidUpdate() {
    // this.refreshLibrary();
  }

  refreshLibrary() {
    fetch("https://localhost:7021/api/QuickEscape/getallquickescapes")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ QuickEscapeLibrary: data });
      });
  }

  deleteFromLibrary(escapeid, escapetitle, escapeauthor) {
    if (
      window.confirm(
        `Are you sure you want to delete '${escapetitle}' by '${escapeauthor}'?`
      )
    ) {
      fetch("https://localhost:7021/api/QuickEscape/delete/" + escapeid, {
        method: "DELETE",
        header: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
    }
  }

  render() {
    const {
      QuickEscapeLibrary,
      quickescapeid,
      quickescapetitle,
      quickescapeimage,
      quickescapeurl,
      quickescapetype,
      quickescapeauthor,
      quickescapedescription,
    } = this.state;
    let addModalClose = () => this.setState({ addQuickEscapeModal: false });
    let editModalClose = () => this.setState({ editQuickEscapeModal: false });

    return (
      <>
        <AccordionContainer>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <TitleOptions>
                  <SectionHeading>Quick Escapes</SectionHeading>
                </TitleOptions>
              </Accordion.Header>
              <Accordion.Body>
                <AddToTableContainer>
                  <SectionHeading>Add New Quick Escape</SectionHeading>
                  <ButtonContainer>
                    <AdminAddIcon
                      size={35}
                      style={{ color: "dodgerblue" }}
                      onClick={() =>
                        this.setState({ addQuickEscapeModal: true })
                      }
                    />
                    <AddQuickEscapeModal
                      show={this.state.addQuickEscapeModal}
                      onHide={addModalClose}
                    />
                  </ButtonContainer>
                </AddToTableContainer>
                <CustomisedTable>
                  <TableHeader>
                    <TableRow>
                      <TH>ID</TH>
                      <TH>Image</TH>
                      <TH>Title</TH>
                      <TH>Author</TH>
                      <TH>Type</TH>
                      <TH>Description</TH>
                      <TH>iFrame URL</TH>
                      <TH>Options</TH>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {QuickEscapeLibrary.map((qeData, id) => {
                      return (
                        <TableRow key={id}>
                          <TD>{qeData.id}</TD>
                          <RowImage src={qeData.escapeImage} />
                          <TD>{qeData.escapeTitle}</TD>
                          <TD>{qeData.escapeAuthor}</TD>
                          <TD>{qeData.escapeType}</TD>
                          <TD>{qeData.escapeDescription}</TD>
                          <TD>
                            <a
                              href={qeData.escapeIframeURL}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {qeData.escapeIframeURL}
                            </a>
                          </TD>
                          <TD>
                            <AdminEditIcon
                              size={20}
                              style={{ color: "dodgerblue" }}
                              onClick={() =>
                                this.setState({
                                  editQuickEscapeModal: true,
                                  quickescapeid: qeData.id,
                                  quickescapetitle: qeData.escapeTitle,
                                  quickescapeimage: qeData.escapeImage,
                                  quickescapeauthor: qeData.escapeAuthor,
                                  quickescapedescription:
                                    qeData.escapeDescription,
                                  quickescapetype: qeData.escapeType,
                                  quickescapeurl: qeData.escapeIframeURL,
                                })
                              }
                            />
                            <EditQuickEscapeModal
                              show={this.state.editQuickEscapeModal}
                              onHide={editModalClose}
                              quickescapeid={quickescapeid}
                              quickescapetitle={quickescapetitle}
                              quickescapeimage={quickescapeimage}
                              quickescapeauthor={quickescapeauthor}
                              quickescapedescription={quickescapedescription}
                              quickescapetype={quickescapetype}
                              quickescapeurl={quickescapeurl}
                            />
                            <AdminDeleteIcon
                              size={20}
                              style={{ color: "red" }}
                              onClick={() =>
                                this.deleteFromLibrary(
                                  qeData.id,
                                  qeData.escapeTitle,
                                  qeData.escapeAuthor
                                )
                              }
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