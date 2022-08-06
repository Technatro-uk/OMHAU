import React, { Component } from "react";
import { Accordion } from "react-bootstrap";
import { ButtonContainer } from "../styles/AdminCarousel.Elements";
import AddVideoModal from "../../Admin/Manage/Video/AddVideoModal";
import EditVideoModal from "../../Admin/Manage/Video/EditVideoModal";
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
} from "../styles/CustomTable.Elements";

export default class VideoTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      VideoLibrary: [],
      addVideoModal: false,
      editVideoModal: false,
    };
  }

  componentDidMount() {
    this.refreshLibrary();
  }

  componentDidUpdate() {
    this.refreshLibrary();
  }

  refreshLibrary() {
    fetch("https://localhost:7021/api/Video/getallvideos")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ VideoLibrary: data });
      });
  }

  deleteFromLibrary(videoid, videotitle, videoauthor) {
    if (
      window.confirm(
        `Are you sure you want to delete '${videotitle}' by '${videoauthor}'?`
      )
    ) {
      fetch("https://localhost:7021/api/Video/delete/" + videoid, {
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
      VideoLibrary,
      videoid,
      videosourceurl,
      videotitle,
      videocategory,
      videoauthor,
      videomediaadded,
      videoduration,
    } = this.state;
    let addModalClose = () => this.setState({ addVideoModal: false });
    let editModalClose = () => this.setState({ editVideoModal: false });

    return (
      <>
        <AccordionContainer>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <TitleOptions>
                  <SectionHeading>Video</SectionHeading>
                </TitleOptions>
              </Accordion.Header>
              <Accordion.Body>
                <AddToTableContainer>
                  <SectionHeading>Add New Video</SectionHeading>
                  <ButtonContainer>
                    <AdminAddIcon
                      size={35}
                      style={{ color: "dodgerblue" }}
                      onClick={() => this.setState({ addVideoModal: true })}
                    />
                    <AddVideoModal
                      show={this.state.addVideoModal}
                      onHide={addModalClose}
                    />
                  </ButtonContainer>
                </AddToTableContainer>
                <CustomisedTable>
                  <TableHeader>
                    <TableRow>
                      <TH>ID</TH>
                      <TH>Title</TH>
                      <TH>Category</TH>
                      <TH>Author</TH>
                      <TH>Date Added</TH>
                      <TH>Duration</TH>
                      <TH>Video Source</TH>
                      <TH>Options</TH>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {VideoLibrary.map((vData, id) => {
                      return (
                        <TableRow key={id}>
                          <TD>{vData.id}</TD>
                          <TD>{vData.videoTitle}</TD>
                          <TD>{vData.videoCategory}</TD>
                          <TD>{vData.videoAuthor}</TD>
                          <TD>{vData.mediaAdded}</TD>
                          <TD>{vData.mediaDuration}</TD>
                          <TD>
                            <a
                              href={vData.videoSource}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {vData.videoSource}
                            </a>
                          </TD>
                          <TD>
                            <AdminEditIcon
                              size={20}
                              style={{ color: "dodgerblue" }}
                              onClick={() =>
                                this.setState({
                                  editVideoModal: true,
                                  videoid: vData.id,
                                  videosourceurl: vData.videoSource,
                                  videotitle: vData.videoTitle,
                                  videocategory: vData.videoCategory,
                                  videoauthor: vData.videoAuthor,
                                  videomediaadded: vData.mediaAdded,
                                  videoduration: vData.mediaDuration,
                                })
                              }
                            />
                            <EditVideoModal
                              show={this.state.editVideoModal}
                              onHide={editModalClose}
                              videoid={videoid}
                              videosourceurl={videosourceurl}
                              videotitle={videotitle}
                              videocategory={videocategory}
                              videoauthor={videoauthor}
                              videomediaadded={videomediaadded}
                              videoduration={videoduration}
                            />
                            <AdminDeleteIcon
                              size={20}
                              style={{ color: "red" }}
                              onClick={() =>
                                this.deleteFromLibrary(
                                  vData.id,
                                  vData.videoTitle,
                                  vData.videoAuthor
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