import React, { Component } from "react";
import { Modal, Form } from "react-bootstrap";
import { Snackbar, IconButton } from "@mui/material";
import {
  EditModalForm,
  FormTypeSelection,
  SubmitGroup,
  FormButton,
  ImageSection,
  InputImage,
  ImageUploadOptions,
  ImageFileUpload,
} from "../../styles/FormModal.Elements";

export default class EditAudioModal extends Component {
  constructor(props) {
    super(props);

    this.state = { imageString: "", snackbaropen: false, snackbarmsg: "" };
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
    fetch(`https://localhost:7021/api/Audio/edit/${e.target.id.value}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: e.target.id.value,
        audioTitle: e.target.audioTitle.value,
        audioImage: this.state.imageString ? this.state.imageString : this.props.audioimage,
        audioAuthor: e.target.audioAuthor.value,
        audioCategory: e.target.audioCategory.value,
        audioType: e.target.audioType.value,
        mediaAdded: e.target.dateAdded.value,
        audioURL: e.target.audioURL.value,
      }),
    })
      .then((res) => res.json())
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
              Edit (id: {this.props.audioid}, {this.props.audiotitle})
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
          <EditModalForm onSubmit={this.handleSubmit}>
                  <Form.Group controlId="audioTitle">
                    <Form.Label><small>Title</small></Form.Label>
                    <Form.Control
                  size="sm"
                      type="text"
                      className="text-center"
                      name="audioTitle"
                      required
                      defaultValue={this.props.audiotitle}
                      placeholder="audioTitle"
                    ></Form.Control>
                  </Form.Group>
              <Form.Group controlId="audioAuthor">
                <Form.Label><small>Author</small></Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  className="text-center"
                  name="audioAuthor"
                  required
                  defaultValue={this.props.audioauthor}
                  placeholder="audioAuthor"
                />
              </Form.Group>
              <Form.Group controlId="audioCategory">
                <Form.Label><small>Category</small></Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  className="text-center"
                  name="audioCategory"
                  defaultValue={this.props.audiocategory}
                  placeholder="audioCategory"
                />
              </Form.Group>
              <Form.Group controlId="audioType">
                <Form.Label><small>Type</small></Form.Label>
                <FormTypeSelection
                  size="sm"
                  type="text"
                  className="text-center"
                  name="audioType"
                  defaultValue={this.props.audiotype}
                >
                  <option value=""></option>
                  <option value="Music">Music</option>
                  <option value="Podcast">Podcast</option>
                  <option value="Audiobook">Audiobook</option>
                </FormTypeSelection>
              </Form.Group>
              <Form.Group controlId="audioURL">
                <Form.Label><small>URL</small></Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  className="text-center"
                  name="audioURL"
                  placeholder="Audio URL"
                  defaultValue={this.props.audiourl}
                />
              </Form.Group>
                  <Form.Group controlId="dateAdded">
                    <Form.Label><small>Date Added</small></Form.Label>
                    <Form.Control
                  size="sm"
                      type="text"
                      className="text-center"
                      name="dateAdded"
                      defaultValue={this.props.audiodateadded}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="audioImage">
                <ImageSection>
                  <InputImage
                    src={
                      this.props.audioimage
                        ? this.props.audioimage : this.state.imageString
                        || "https://www.svgrepo.com/show/340721/no-image.svg"
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
                </EditModalForm>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
