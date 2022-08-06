import React, { Component } from "react";
import { Accordion } from "react-bootstrap";
import { ButtonContainer } from "../styles/AdminCarousel.Elements";
import AddAudioModal from "../../Admin/Manage/Audio/AddAudioModal";
import EditAudioModal from "../../Admin/Manage/Audio/EditAudioModal";
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

export default class AudioTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AudioLibrary: [],
      addAudioModal: false,
      editAudioModal: false,
    };
  }

  componentDidMount() {
    this.refreshLibrary();
  }

  componentDidUpdate() {
    // this.refreshLibrary();
  }

  refreshLibrary() {
    fetch("https://localhost:7021/api/Audio/getallaudio")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ AudioLibrary: data });
      });
  }

  deleteFromLibrary(audioid, audiotitle, audioauthor) {
    if (
      window.confirm(
        `Are you sure you want to delete '${audiotitle}' by '${audioauthor}'?`
      )
    ) {
      fetch("https://localhost:7021/api/Audio/delete/" + audioid, {
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
      AudioLibrary,
      audioid,
      audiotitle,
      audioimage,
      audiourl,
      audiotype,
      audiodateadded,
      audioauthor,
      audiocategory,
    } = this.state;
    let addModalClose = () => this.setState({ addAudioModal: false });
    let editModalClose = () => this.setState({ editAudioModal: false });

    return (
      <>
        <AccordionContainer>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <TitleOptions>
                  <SectionHeading>Audio</SectionHeading>
                </TitleOptions>
              </Accordion.Header>
              <Accordion.Body>
                <AddToTableContainer>
                  <SectionHeading>Add New Audio</SectionHeading>
                  <ButtonContainer>
                    <AdminAddIcon
                      size={35}
                      style={{ color: "dodgerblue" }}
                      onClick={() => this.setState({ addAudioModal: true })}
                    />
                    <AddAudioModal
                      show={this.state.addAudioModal}
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
                      <TH>Category</TH>
                      <TH>Type</TH>
                      <TH>Media URL</TH>
                      <TH>Options</TH>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {AudioLibrary.map((aData, id) => {
                      return (
                        <TableRow key={id}>
                          <TD>{aData.id}</TD>
                          <RowImage src={aData.audioImage} />
                          <TD>{aData.audioTitle}</TD>
                          <TD>{aData.audioAuthor}</TD>
                          <TD>{aData.audioCategory}</TD>
                          <TD>{aData.audioType}</TD>
                          <TD>
                            <a
                              href={aData.audioURL}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {aData.audioURL}
                            </a>
                          </TD>
                          <TD>
                            <AdminEditIcon
                              size={20}
                              style={{ color: "dodgerblue" }}
                              onClick={() =>
                                this.setState({
                                  editAudioModal: true,
                                  audioid: aData.id,
                                  audiotitle: aData.audioTitle,
                                  audioimage: aData.audioImage,
                                  audioauthor: aData.audioAuthor,
                                  audiocategory: aData.audioCategory,
                                  audiotype: aData.audioType,
                                  audiodateadded: aData.mediaAdded,
                                  audiourl: aData.audioURL,
                                })
                              }
                            />
                            <EditAudioModal
                              show={this.state.editAudioModal}
                              onHide={editModalClose}
                              audioid={audioid}
                              audiotitle={audiotitle}
                              audioimage={audioimage}
                              audioauthor={audioauthor}
                              audiocategory={audiocategory}
                              audiotype={audiotype}
                              audiodateadded={audiodateadded}
                              audiourl={audiourl}
                            />
                            <AdminDeleteIcon
                              size={20}
                              style={{ color: "red" }}
                              onClick={() =>
                                this.deleteFromLibrary(
                                  aData.id,
                                  aData.audioTitle,
                                  aData.audioAuthor
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