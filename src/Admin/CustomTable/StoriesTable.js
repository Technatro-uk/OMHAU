import React, { Component } from "react";
import { Accordion } from "react-bootstrap";
import { ButtonContainer } from "../styles/AdminCarousel.Elements";
import AddStoryModal from "../Manage/Stories/AddStoryModal";
import EditStoryModal from "../Manage/Stories/EditStoryModal";
import {
  AddToTableContainer,
  CustomisedTable,
  TableHeader,
  TableBody,
  TableRow,
  TH,
  TD,
  TitleOptions,
  SectionHeading,
  AdminAddIcon,
  AdminEditIcon,
  AdminDeleteIcon,
} from "../styles/CustomTable.Elements";

export default class StoryTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StoryLibrary: [],
      addStoryModal: false,
      editStoryModal: false,
    };
  }

  async componentDidMount() {
    this.refreshLibrary();
  }

  async componentDidUpdate() {
    this.refreshLibrary();
  }

  refreshLibrary() {
    fetch("https://localhost:7021/api/Story/getallstories")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ StoryLibrary: data });
      });
  }

  deleteFromLibrary(storyid, storytitle, storyauthor) {
    if (
      window.confirm(
        `Are you sure you want to delete '${storytitle}' by '${storyauthor}'?`
      )
    ) {
      fetch("https://localhost:7021/api/Story/delete/" + storyid, {
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
      StoryLibrary,
      storyid,
      storytitle,
      storyauthor,
      storycategory,
      storydescription,
      storywordcount,
      storytext,
      storysourceurl,
      storydatepublished,
    } = this.state;
    let addModalClose = () => this.setState({ addStoryModal: false });
    let editModalClose = () => this.setState({ editStoryModal: false });

    return (
      <>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <TitleOptions>
                <SectionHeading>Stories</SectionHeading>
              </TitleOptions>
            </Accordion.Header>
            <Accordion.Body>
              <AddToTableContainer>
                <SectionHeading>Add New Story</SectionHeading>
                <ButtonContainer>
                  <AdminAddIcon
                    size={35}
                    style={{ color: "dodgerblue" }}
                    onClick={() => this.setState({ addStoryModal: true })}
                  />
                  <AddStoryModal
                    show={this.state.addStoryModal}
                    onHide={addModalClose}
                  />
                </ButtonContainer>
              </AddToTableContainer>
              <CustomisedTable>
                <TableHeader>
                  <TableRow>
                    <TH>ID</TH>
                    <TH>Title</TH>
                    <TH>Author</TH>
                    <TH>Category</TH>
                    <TH>Word Count</TH>
                    <TH>Description</TH>
                    <TH>Source URL</TH>
                    <TH>Options</TH>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {StoryLibrary.map((sData, id) => {
                    return (
                      <TableRow key={id}>
                        <TD>{sData.id}</TD>
                        <TD>{sData.storyTitle}</TD>
                        <TD>{sData.storyAuthor}</TD>
                        <TD>{sData.storyCategory}</TD>
                        <TD>{sData.wordCount}</TD>
                        <TD>{sData.storyDescription}</TD>
                        <TD>
                          <a
                            href={sData.storySourceURL}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {sData.storySourceURL}
                          </a>
                        </TD>
                        <TD>
                          <AdminEditIcon
                            size={25}
                            style={{ color: "dodgerblue" }}
                            onClick={() =>
                              this.setState({
                                editStoryModal: true,
                                storyid: sData.id,
                                storytitle: sData.storyTitle,
                                storyauthor: sData.storyAuthor,
                                storycategory: sData.storyCategory,
                                storydescription: sData.storyDescription,
                                storywordcount: sData.wordCount,
                                storytext: sData.storyText,
                                storysourceurl: sData.storySourceURL,
                                storydatepublished: sData.datePublished,
                              })
                            }
                          />
                          <EditStoryModal
                            show={this.state.editStoryModal}
                            onHide={editModalClose}
                            storyid={storyid}
                            storytitle={storytitle}
                            storyauthor={storyauthor}
                            storycategory={storycategory}
                            storydescription={storydescription}
                            storywordcount={storywordcount}
                            storytext={storytext}
                            storysourceurl={storysourceurl}
                            storydatepublished={storydatepublished}
                          />
                          <AdminDeleteIcon
                            size={25}
                            style={{ color: "red" }}
                            onClick={() =>
                              this.deleteFromLibrary(
                                sData.id,
                                sData.storyTitle,
                                sData.storyAuthor
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
      </>
    );
  }
}