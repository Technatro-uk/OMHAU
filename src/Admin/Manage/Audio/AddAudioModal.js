import React, { Component } from "react";
import { Modal, Form } from "react-bootstrap";
import { Snackbar, IconButton } from "@mui/material";
import {
  AddModalForm,
  FormTypeSelection,
  SubmitGroup,
  FormButton,
  ImageSection,
  InputImage,
  ImageUploadOptions,
  ImageFileUpload,
} from "../../styles/FormModal.Elements";

export default class AddAudio extends Component {
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

    fetch("https://localhost:7021/api/Audio/Add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        audioTitle: e.target.AudioTitle.value,
        audioImage: this.state.imageString,
        audioAuthor: e.target.AudioAuthor.value,
        audioCategory: e.target.AudioCategory.value,
        audioType: e.target.AudioType.value,
        audioURL: e.target.AudioURL.value,
        mediaAdded: new Date().toDateString(),
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
              Add Audio
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddModalForm onSubmit={this.handleSubmit}>
              <Form.Group controlId="AudioTitle">
                <Form.Label>Audio Title:</Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  className="text-center"
                  name="AudioTitle"
                  placeholder="Audio Title"
                />
              </Form.Group>
              <Form.Group controlId="AudioAuthor">
                <Form.Label>Audio Author:</Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  className="text-center"
                  name="AudioAuthor"
                  placeholder="Audio Author"
                />
              </Form.Group>
              <Form.Group controlId="AudioCategory">
                <Form.Label>Audio Category:</Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  className="text-center"
                  name="AudioCategory"
                  placeholder="Audio Category"
                />
              </Form.Group>
              <Form.Group controlId="AudioType">
                <Form.Label>Audio Type:</Form.Label>
                <FormTypeSelection
                  size="sm"
                  type="text"
                  className="text-center"
                  name="AudioType"
                  placeholder="Audio Type"
                >
                  <option value=""></option>
                  <option value="Music">Music</option>
                  <option value="Podcast">Podcast</option>
                  <option value="Audiobook">Audiobook</option>
                </FormTypeSelection>
              </Form.Group>
              <Form.Group controlId="AudioURL">
                <Form.Label>Audio URL:</Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  className="text-center"
                  name="AudioURL"
                  placeholder="Audio URL"
                />
              </Form.Group>
              <Form.Group controlId="AudioImage">
                <ImageSection>
                  <InputImage
                    src={
                      this.state.imageString
                        ? this.state.imageString
                        : "https://www.svgrepo.com/show/340721/no-image.svg"
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
