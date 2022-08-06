import React, { Component } from "react";
import { Modal, Form } from "react-bootstrap";
import { Snackbar, IconButton } from "@mui/material";
import {
    AddModalForm,
    FormTypeSelection,
    FormButton,
    InputImage,
    VideoIframe,
    SubmitGroup,
} from "../../styles/FormModal.Elements";

export default class AddAudio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      iframeURL: "",
      snackbaropen: false,
      snackbarmsg: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  snackbarClose = (e) => {
    this.setState({ snackbaropen: false });
  };

  handleChange(e) {
    // get the files
    let files = e.target.files;
    // Process each file
    for (var i = 0; i < files.length; i++) {
      let file = files[i];
      // Make new FileReader
      let reader = new FileReader();
      // Convert the file to base64 text
      reader.readAsDataURL(file);
      // on reader load, update state with base64 string
      reader.onload = () => {
        this.setState({ imageString: reader.result }, () =>
          console.log(this.state.imageString)
        );
      };
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    fetch("https://localhost:7021/api/QuickEscape/add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        escapeTitle: e.target.QuickEscapeTitle.value,
        escapeImage: this.state.imageString,
        escapeType: e.target.QuickEscapeType.value,
        escapeDescription: e.target.QuickEscapeDescription.value,
        escapeAuthor: e.target.QuickEscapeAuthor.value,
        escapeSourceURL: e.target.QuickEscapeSource.value,
      }),
    })
      .then((response) => response.json())
      .then(
        (result) => {
          // alert(result);
          this.setState({ snackbaropen: true, snackbarmsg: result });
          // Redirect to Admin Audio page
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
              Add Quick Escape
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddModalForm onSubmit={this.handleSubmit}>
              <Form.Group controlId="QuickEscapeTitle">
                <Form.Label><small>Title</small></Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  className="text-center"
                  name="EscapeTitle"
                  placeholder="Quick Escape Title"
                />
              </Form.Group>
              <Form.Group controlId="QuickEscapeAuthor">
                <Form.Label><small>Author</small></Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  className="text-center"
                  name="QuickEscapeAuthor"
                  placeholder="Quick Escape Author"
                />
              </Form.Group>
              <Form.Group controlId="QuickEscapeType">
                <Form.Label><small>Type</small></Form.Label>
                <FormTypeSelection
                  type="text"
                  name="QuickEscapeType"
                  className="text-center"
                  placeholder="Quick Escape Type"
                >
                  <option value=""></option>
                  <option value="Story">Story</option>
                  <option value="Game">Game</option>
                  <option value="Live Cam">Live Cam</option>
                  <option value="Puzzle">Puzzle</option>
                </FormTypeSelection>
              </Form.Group>
              <Form.Group controlId="QuickEscapeSource">
                <Form.Label><small>Source</small></Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  className="text-center"
                  name="QuickEscapeSource"
                  placeholder="Quick Escape Source"
                  onChange={(e) => this.setState({ iframeURL: e.target.value })}
                />
              </Form.Group>

              <Form.Group controlId="QuickEscapeDescription">
                <Form.Label><small>Description</small></Form.Label>
                <Form.Control
                  size="sm"
                  as="textarea"
                  rows={5}
                  name="QuickEscapeDescription"
                  placeholder="Quick Escape Description"
                />
              </Form.Group>

              {this.state.iframeURL ? (
                <Form.Group controlId="VideoPreview">
                  <Form.Label><small>Preview</small></Form.Label>
                  <VideoIframe src={this.state.iframeURL}></VideoIframe>
                </Form.Group>
              ) : (
                <InputImage src="https://www.svgrepo.com/show/340721/no-image.svg" />
              )}
              <Form.Group>
                <SubmitGroup>
                  <FormButton type="submit">SUBMIT</FormButton>
                </SubmitGroup>
              </Form.Group>
            </AddModalForm>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
