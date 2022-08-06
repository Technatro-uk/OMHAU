import React, { Component } from "react";
import { Modal, Form } from "react-bootstrap";
import { Snackbar, IconButton } from "@mui/material";
import {
  EditModalForm,
  FormTypeSelection,
  FormButton,
  ImageSection,
  ImageFileUpload,
  InputImage,
  ImageUploadOptions,
  SubmitGroup,
} from "../../styles/FormModal.Elements";

export default class EditQuickEscapeModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageString: "",
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

    fetch(`https://localhost:7021/api/QuickEscape/edit/${e.target.id.value}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: e.target.id.value,
        escapeTitle: e.target.QuickEscapeTitle.value,
        escapeImage: this.state.imageString
          ? this.state.imageString
          : this.props.quickescapeimage,
        escapeIframeURL: e.target.QuickEscapeIframe.value,
        escapeType: e.target.QuickEscapeType.value,
        escapeDescription: e.target.QuickEscapeDescription.value,
        escapeAuthor: e.target.QuickEscapeAuthor.value,
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
          animation={true}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Edit (id: {this.props.quickescapeid}, {this.props.quickescapetitle})
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditModalForm onSubmit={this.handleSubmit}>
              <Form.Group controlId="QuickEscapeTitle">
                <Form.Label>
                  <small>Title</small>
                </Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  className="text-center"
                  name="EscapeTitle"
                  placeholder="Escape Title"
                  required
                  defaultValue={this.props.quickescapetitle}
                />
              </Form.Group>
              <Form.Group controlId="QuickEscapeAuthor">
                <Form.Label>
                  <small>Author</small>
                </Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  className="text-center"
                  name="QuickEscapeAuthor"
                  placeholder="Quick Escape Author"
                  required
                  defaultValue={this.props.quickescapeauthor}
                />
              </Form.Group>
              <Form.Group controlId="QuickEscapeIframe">
                <Form.Label>
                  <small>iFrame</small>
                </Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  className="text-center"
                  name="QuickEscapeIframe"
                  placeholder="Iframe Source"
                  required
                  defaultValue={this.props.quickescapeurl}
                />
              </Form.Group>
              <Form.Group controlId="QuickEscapeType">
                <Form.Label>
                  <small>Type</small>
                </Form.Label>
                <FormTypeSelection
                  type="text"
                  className="text-center"
                  name="QuickEscapeType"
                  placeholder="Quick Escape Type"
                  required
                  defaultValue={this.props.quickescapetype}
                >
                  <option value=""></option>
                  <option value="Story">Story</option>
                  <option value="Game">Game</option>
                  <option value="Live Cam">Live Cam</option>
                  <option value="Puzzle">Puzzle</option>
                </FormTypeSelection>
              </Form.Group>
              <Form.Group controlId="QuickEscapeImage">
                <ImageSection>
                  <InputImage
                    src={
                      this.state.imageString
                        ? this.state.imageString
                        : this.props.quickescapeimage ||
                          "https://www.svgrepo.com/show/340721/no-image.svg"
                    }
                  />
                  <ImageUploadOptions>
                    <ImageFileUpload
                      type="file"
                      accept="image/*"
                      onChange={(e) => this.handleChange(e)}
                    />
                  </ImageUploadOptions>
                </ImageSection>
              </Form.Group>
              <Form.Group controlId="QuickEscapeDescription">
                <Form.Label>
                  <small>Description</small>
                </Form.Label>
                <Form.Control
                  size="sm"
                  as="textarea"
                  className="text-center"
                  rows={5}
                  name="QuickEscapeDescription"
                  placeholder="Quick Escape Description"
                  required
                  defaultValue={this.props.quickescapedescription}
                />
              </Form.Group>

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