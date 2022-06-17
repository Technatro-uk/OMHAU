import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
} from './AddAudio.Elements';

function AddAudio() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    audioTitle: '',
    audioAuthor: '',
    audioCategory: '',
    mediaDuration: '',
    audioSource: '',
  });
  const [imagestring, setImageString] = useState({ audioImage: '' });

  function HandleStateChange(e) {
    const newvalues = { ...values };
    newvalues[e.target.id] = e.target.value;
    setValues(newvalues);
    // console.log(newvalues)
  }

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

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

  const HandleFileChange = (e) => {
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
    };
  };

  function PostFormDataToAPI(e) {
    e.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({

	// replace values below with whatever data is to be posted

        audioTitle: values.audioTitle,
        audioAuthor: values.audioAuthor,
        audioCategory: values.audioCategory,
        mediaAdded: Date().toLocaleString(),
        mediaDuration: values.mediaDuration,
        audioImage: imagestring,
        audioSource: values.audioSource,
      }),
    };

    // replace URL below with Projects API URL

    fetch('https://localhost:7021/api/Audio/AddAudio', requestOptions) // THIS WORKS! :)
      .then((response) => response.json())
      .then(
        (result) => {

	  // Display result as an alert (confirmation)
          alert(result); // Confirmation of posted audio is working!

	  // Print result to console
          console.log(result); // Print confirmation result to console

	  // OPTIONAL: Redirect page on successfull form submission
          navigate('/getaudio'); // Redirect to 'audio' page
        },
        (error) => {
          alert('Error:' + error);
        }
      );
  }

  return (
    // REPEAT THIS PROCES FOR ALL REQUIRED PAGES (Audio, Escape, Podcast, Story & Video) then
    // implement GET & Update requests.
    <PageSection>
      <PageContainer>
        <PageHeading>Add Audio</PageHeading>

        <AddAudioForm onSubmit={(e) => PostFormDataToAPI(e)}>
          <FormGroup>
            <InputLabel>Audio Title:</InputLabel>
            <FormField
              placeholder='Audio Title'
              type='text'
              name='Audio Title'
              id='audioTitle'
              value={values.audioTitle}
              onChange={(e) => HandleStateChange(e)}
            />
          </FormGroup>
          <FormGroup>
            <InputLabel>Audio Author:</InputLabel>
            <FormField
              placeholder='Audio Author'
              type='text'
              name='AudioAuthor'
              id='audioAuthor'
              value={values.audioAuthor}
              onChange={(e) => HandleStateChange(e)}
            />
          </FormGroup>
          <FormGroup>
            <InputLabel>Audio Category:</InputLabel>
            <FormField
              placeholder='Audio Category'
              type='text'
              name='Category'
              id='audioCategory'
              value={values.audioCategory}
              onChange={(e) => HandleStateChange(e)}
            />
          </FormGroup>
          <FormGroup>
            <InputLabel>Audio Duration:</InputLabel>
            <FormField
              placeholder='Audio Duration'
              type='text'
              name='Duration'
              id='mediaDuration'
              value={values.mediaDuration}
              onChange={(e) => HandleStateChange(e)}
            />
          </FormGroup>
          <ImageSection>
            <InputLabel>Audio Image</InputLabel>
            <ImageUploadOptions>
              {selectedFile && <InputImage src={preview} />}
              <ImageFileUpload
                type='file'
                accept='image/*'
                onChange={HandleFileChange}
              />
            </ImageUploadOptions>
          </ImageSection>
          <FormGroup>
            <InputLabel>Audio Source (URL):</InputLabel>
            <FormField
              placeholder='Audio Source URL'
              type='text'
              name='AudioSourceURL'
              id='audioSource'
              value={values.audioSource}
              onChange={(e) => HandleStateChange(e)}
            />
          </FormGroup>
          <SubmitSection>
            <InputLabel>Add Audio to Database</InputLabel>
            <SubmitGroup>
              <FormButton type='submit'>SUBMIT</FormButton>
            </SubmitGroup>
          </SubmitSection>
        </AddAudioForm>
      </PageContainer>
    </PageSection>
  );
}

export default AddAudio;