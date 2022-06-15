import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  PageSection,
  PageContainer,
  PageHeading,
  AddAudioForm,
  FormGroup,
  InputLabel,
  FormField,
  SubmitGroup,
  FormButton,
  ImageSection,
  InputImage,
  ImageUploadOptions,
  ImageFileUpload,
  SubmitSection,
} from "./AddAudio.Elements";

function AddAudio() {
  const navigate = useNavigate();
  const [audioFile, setAudioFile] = useState(null);
  const [errorMessage, seterrorMessage] = useState(null);

  const [values, setValues] = useState({
    audioTitle: "",
    audioAuthor: "",
    audioCategory: "",
    mediaDuration: "",
    audioSource: "",
  });

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [imagestring, setImageString] = useState({
    audioImage: ""
  });

  function changeHandler(e) {
    const newvalues = { ...values };
    newvalues[e.target.id] = e.target.value;
    setValues(newvalues);
    // console.log(newvalues)
  }

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // Use uploaded image..
    const file = e.target.files[0];
    setSelectedFile(e.target.files[0]);

    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (e) => {
      setImageString(e.target.result);
    }
  };

  async function submit(e) {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        audioTitle: values.audioTitle,
        audioAuthor: values.audioAuthor,
        audioCategory: values.audioCategory,
        mediaAdded: Date().toLocaleString(),
        mediaDuration: values.mediaDuration,
        audioImage: imagestring,
        audioSource: values.audioSource,
      }),
    };
    fetch("https://localhost:7021/api/Audio/AddAudio", requestOptions) // THIS WORKS! :)
      .then(async (response) => {
        // All code below must be modifed to account for
        // all status codes and be error prrof before using on other pages

        const data = response;
        /// check for error response
        if (!response.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
        else if (response.ok) {
          // setAudioFile(data.message); // Need to display confirmation on page when posted successfully
          // Redirect to 'addaudio' page
          navigate('/addaudio');
        }

      })
      .catch((error) => {
        seterrorMessage(error.toString());
        console.log("There was an error: ", error);
      });
  }

  return (
    // Need to add Image preview to form (Image preview from URL: if possible)

    // Once posted successfully, display confirmation (API Response) and reload page with reset form
    // OPTIONAL: Add progress animation to button to display onSubmit

    // REPEAT THIS PROCES FOR ALL REQUIRED PAGES (Audio, Escape, Podcast, Story & Video) then
    // implement GET & Update requests.
    <PageSection>
      <PageContainer>
        <PageHeading>Add Audio</PageHeading>

        <AddAudioForm onSubmit={(e) => submit(e)}>
          <FormGroup>
            <InputLabel>Audio Title:</InputLabel>
            <FormField
              placeholder="Audio Title"
              type="text"
              name="Audio Title"
              id="audioTitle"
              value={values.audioTitle}
              onChange={(e) => changeHandler(e)}
            />
          </FormGroup>
          <FormGroup>
            <InputLabel>Audio Author:</InputLabel>
            <FormField
              placeholder="Audio Author"
              type="text"
              name="AudioAuthor"
              id="audioAuthor"
              value={values.audioAuthor}
              onChange={(e) => changeHandler(e)}
            />
          </FormGroup>
          <FormGroup>
            <InputLabel>Audio Category:</InputLabel>
            <FormField
              placeholder="Audio Category"
              type="text"
              name="Category"
              id="audioCategory"
              value={values.audioCategory}
              onChange={(e) => changeHandler(e)}
            />
          </FormGroup>
          <FormGroup>
            <InputLabel>Audio Duration:</InputLabel>
            <FormField
              placeholder="Audio Duration"
              type="text"
              name="Duration"
              id="mediaDuration"
              value={values.mediaDuration}
              onChange={(e) => changeHandler(e)}
            />
          </FormGroup>
          <ImageSection>
            <InputLabel>Audio Image</InputLabel>
            <ImageUploadOptions>
              {selectedFile && <InputImage src={preview} />}
              <ImageFileUpload
                type="file"
                accept="image/*"
                onChange={onSelectFile}
              />
            </ImageUploadOptions>
            <FormField
              placeholder="Upload from URL"
              type="text"
              name="AudioImage"
              id="audioImage"
              value={values.audioImage}
              onChange={(e) => changeHandler(e)}
            />
          </ImageSection>
          <FormGroup>
            <InputLabel>Audio Source (URL):</InputLabel>
            <FormField
              placeholder="Audio Source URL"
              type="text"
              name="AudioSourceURL"
              id="audioSource"
              value={values.audioSource}
              onChange={(e) => changeHandler(e)}
            />
          </FormGroup>
          <SubmitSection>
            <InputLabel>Add Audio to Database</InputLabel>
            <SubmitGroup>
              <FormButton type="submit">SUBMIT</FormButton>
            </SubmitGroup>
          </SubmitSection>
          {audioFile}
          {errorMessage}
        </AddAudioForm>
      </PageContainer>
    </PageSection>
  );
}

export default AddAudio;