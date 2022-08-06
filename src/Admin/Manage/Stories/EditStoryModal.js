import React, { Component } from "react";
import { Modal, Form } from "react-bootstrap";
import { Snackbar, IconButton } from "@mui/material";
import { EditModalForm, FormTypeSelection, FormButton } from "../../styles/FormModal.Elements";

export default class AddStoryModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      snackbaropen: false,
      snackbarmsg: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  snackbarClose = (e) => {
    this.setState({ snackbaropen: false });
  };

  handleSubmit(e) {
    e.preventDefault();

    fetch(`https://localhost:7021/api/Story/edit/${this.props.storyid}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: this.props.storyid,
        storyTitle: e.target.StoryTitle.value,
        storyAuthor: e.target.StoryAuthor.value,
        storyCategory: e.target.StoryCategory.value,
        storyDescription: e.target.StoryDescription.value,
        wordCount: e.target.StoryWordCount.value,
        storyText: e.target.StoryText.value,
        storySourceURL: e.target.StorySourceUrl.value,
        datePublished: e.target.StoryDatePublished.value,
      }),
    })
      .then((response) => response.json())
      .then(
        (result) => {
          // alert(result);
          this.setState({ snackbaropen: true, snackbarmsg: result });
        },
        (error) => {
          // alert(error);
          this.setState({ snackbaropen: true, snackbarmsg: error });
        }
      );
  }

  render() {
    return (
      <>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={this.state.snackbaropen}
          autoHideDuration={5000}
          onClose={this.snackbarClose}
          message={
            <span id="message-id">
              <div>{this.state.snackbarmsg}</div>
            </span>
          }
          action={[
            <IconButton
              key="close"
              arial-label="Close"
              color="inherit"
              onClick={this.snackbarClose}
            >
              X
            </IconButton>,
          ]}
        ></Snackbar>
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Edit (id: {this.props.storyid}, {this.props.storytitle})
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditModalForm onSubmit={this.handleSubmit}>
              <Form.Group controlId="StoryTitle">
                <Form.Label>
                  <small>Title</small>
                </Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  className="text-center"
                  name="StoryTitle"
                  placeholder="Title"
                  defaultValue={this.props.storytitle}
                />
              </Form.Group>
              <Form.Group controlId="StoryAuthor">
                <Form.Label>
                  <small>Author</small>
                </Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  className="text-center"
                  name="StoryAuthor"
                  placeholder="Author"
                  defaultValue={this.props.storyauthor}
                />
              </Form.Group>
              <Form.Group controlId="StoryCategory">
                <Form.Label>
                  <small>Category</small>
                </Form.Label>
                <FormTypeSelection type="text" name="StoryCategory"
                  defaultValue={this.props.storycategory}>
                  <option value=""></option>
                  <option value="Short Story">Short Story</option>
                  <option value="Personal Experience">
                    Personal Experience
                  </option>
                  <option value="Other">Other</option>
                </FormTypeSelection>
              </Form.Group>
              <Form.Group controlId="StoryWordCount">
                <Form.Label>
                  <small>Word Count</small>
                </Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  className="text-center"
                  name="StoryWordCount"
                  placeholder="Word Count"
                  defaultValue={this.props.storywordcount}
                />
              </Form.Group>
              <Form.Group controlId="StoryDescription">
                <Form.Label>
                  <small>Description</small>
                </Form.Label>
                <Form.Control
                  size="sm"
                  as="textarea"
                  className="text-center"
                  rows={5}
                  name="StoryDescription"
                  placeholder="Description"
                  defaultValue={this.props.storydescription}
                />
              </Form.Group>
              <Form.Group controlId="StoryText">
                <Form.Label>
                  <small>Text</small>
                </Form.Label>
                <Form.Control
                  size="sm"
                  as="textarea"
                  rows={5}
                  name="StoryText"
                  placeholder="Text"
                  defaultValue={this.props.storytext}
                />
              </Form.Group>
              <Form.Group controlId="StorySourceUrl">
                <Form.Label>
                  <small>Source URL</small>
                </Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  name="StorySourceUrl"
                  placeholder="Source URL"
                  defaultValue={this.props.storysourceurl}
                />
              </Form.Group>
              <Form.Group controlId="StoryDatePublished">
                <Form.Label>
                  <small>Date Pubished</small>
                </Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  className="text-center"
                  name="StoryDatePublished"
                  placeholder="Date Published"
                  defaultValue={this.props.storydatepublished}
                />
              </Form.Group>
              <Form.Group>
                <FormButton type="submit" onClick={this.props.onHide}>SUBMIT</FormButton>
              </Form.Group>
            </EditModalForm>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
