import React, { Component } from "react";
import { Modal, Form } from "react-bootstrap";
import { Snackbar, IconButton } from "@mui/material";
import {
  EditModalForm,
  SubmitGroup,
  FormButton,
  VideoIframe,
  InputImage,
} from "../../styles/FormModal.Elements";

export default class EditVideoModal extends Component {
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

    fetch(`https://localhost:7021/api/Video/edit/${this.props.videoid}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: this.props.videoid,
        videoSource: e.target.VideoSourceURL.value,
        videoTitle: e.target.VideoTitle.value,
        videoCategory: e.target.VideoCategory.value,
        videoAuthor: e.target.VideoAuthor.value,
        mediaAdded: e.target.MediaAdded.value,
        mediaDuration: e.target.MediaDuration.value,
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
              Edit (id: {this.props.videoid}, {this.props.videotitle})
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditModalForm onSubmit={this.handleSubmit}>
              <Form.Group controlId="VideoTitle">
                <Form.Label><small>Title</small></Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  className="text-center"
                  name="VideoTitle"
                  placeholder="Video Title"
                  defaultValue={this.props.videotitle}
                />
              </Form.Group>
              <Form.Group controlId="VideoAuthor">
                <Form.Label><small>Author</small></Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  className="text-center"
                  name="VideoAuthor"
                  placeholder="Video Author"
                  defaultValue={this.props.videoauthor}
                />
              </Form.Group>
              <Form.Group controlId="VideoCategory">
                <Form.Label><small>Category</small></Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  className="text-center"
                  name="VideoCategory"
                  placeholder="Video Category"
                  defaultValue={this.props.videocategory}
                />
              </Form.Group>
              <Form.Group controlId="MediaDuration">
                <Form.Label><small>Duration</small></Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  className="text-center"
                  name="MediaDuration"
                  placeholder="Duration"
                  defaultValue={this.props.videoduration}
                />
              </Form.Group>

              <Form.Group controlId="VideoSourceURL">
                <Form.Label><small>Video Source</small></Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  className="text-center"
                  name="VideoSourceURL"
                  placeholder="Video Source"
                  defaultValue={this.props.videosourceurl}
                />
              </Form.Group>
              <Form.Group controlId="MediaAdded">
                <Form.Label><small>Media Added</small></Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  className="text-center"
                  name="MediaAdded"
                  placeholder="Media Added"
                  defaultValue={this.props.videomediaadded}
                />
              </Form.Group>

              {this.props.videosourceurl ? (
                <Form.Group controlId="VideoPreview">
                  <VideoIframe src={this.props.videosourceurl}></VideoIframe>
                </Form.Group>
              ) : (
                <InputImage src="https://www.svgrepo.com/show/340721/no-image.svg" />
              )}
              <Form.Group>
                <SubmitGroup>
                  <FormButton type="submit">SUBMIT</FormButton>
                </SubmitGroup>
              </Form.Group>
            </EditModalForm>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
