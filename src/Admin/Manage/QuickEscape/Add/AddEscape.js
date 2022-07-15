import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PageContainer,
  PageHeading,
  AddQuickEscapeForm,
  FormGroup,
  InputLabel,
  FormField,
  FormTypeSelection,
  FormButton,
  QuickEscapeSection,
  ImageSection,
  ImageFileUpload,
  InputImage,
  InputDivider,
  ImageUploadOptions,
  EscapeDescriptionInput,
  SubmitSection,
  SubmitGroup,
} from './AddEscape.Elements';

function AddQuickEscape() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    EscapeTitle: '',
    EscapeType: '',
    EscapeDescription: '',
    EscapeAuthor: '',
    EscapeSource: '',
  });

  function HandleStateChange(e) {
    const newvalues = { ...values };
    newvalues[e.target.id] = e.target.value;
    setValues(newvalues);
    // console.log(newvalues)
  }
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [imagestring, setImageString] = useState({ EscapeImage: '' });

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

      EscapeTitle: values.EscapeTitle,
      EscapeImage: imagestring,
      EscapeType: values.EscapeType,
      EscapeDescription: values.EscapeDescription,
      EscapeAuthor: values.EscapeAuthor,
      EscapeSource: values.EscapeSource,
      }),
    };

    // replace URL below with Projects API URL

    fetch('https://localhost:7021/api/QuickEscape/add', requestOptions) // THIS WORKS! :)
      .then((response) => response.json())
      .then(
        (result) => {

	        // Display result as an alert (confirmation)
          alert(result); // Confirmation of posted QuickEscape is working!

	        // Print result to console
          console.log(result); // Print confirmation result to console

	        // OPTIONAL: Redirect page on successfull form submission
          navigate('/quickescapes/get'); // Redirect to 'QuickEscape' page
        },
        (error) => {
          alert('Error:' + error);
        }
      );
  }

  return (
    // REPEAT THIS PROCES FOR ALL REQUIRED PAGES (QuickEscape, Escape, Podcast, Story & QuickEscape) then
    // implement GET & Update requests.
    <PageContainer>
        <PageHeading>Add Quick Escape</PageHeading>

        <AddQuickEscapeForm onSubmit={(e) => PostFormDataToAPI(e)}>
        <QuickEscapeSection>
        <ImageSection>
            <InputLabel>Image Preview</InputLabel>
            <ImageUploadOptions>
              {selectedFile && <InputImage src={preview} />}
              <ImageFileUpload
                type='file'
                accept='image/*'
                onChange={HandleFileChange}
              />
            </ImageUploadOptions>
          </ImageSection>
            <InputDivider></InputDivider>
            <InputLabel>Source:</InputLabel>
            <FormField
              placeholder='Source'
              type='text'
              name='EscapeSource'
              id='EscapeSource'
              value={values.EscapeSource}
              onChange={(e) => HandleStateChange(e)}
            />
          </QuickEscapeSection>
          <FormGroup>
            <InputLabel>Title:</InputLabel>
            <FormField
              placeholder='Title'
              type='text'
              name='EscapeTitle'
              id='EscapeTitle'
              value={values.EscapeTitle}
              onChange={(e) => HandleStateChange(e)}
            />
            <InputLabel>Author:</InputLabel>
            <FormField
              placeholder='Author'
              type='text'
              name='EscapeAuthor'
              id='EscapeAuthor'
              value={values.EscapeAuthor}
              onChange={(e) => HandleStateChange(e)}
            />
            <InputLabel>Description:</InputLabel>
            <EscapeDescriptionInput
              placeholder='Description'
              type='text'
              name='EscapeDescription'
              id='EscapeDescription'
              value={values.EscapeDescription}
              onChange={(e) => HandleStateChange(e)}
            />
            <InputLabel>Type:</InputLabel>
            <FormTypeSelection
              placeholder='QuickEscape Type'
              type='text'
              name='Type'
              id='EscapeType'
              value={values.EscapeType}
              onChange={(e) => HandleStateChange(e)}
            >
            <option value=""></option>
              <option value="Story">Story</option>
              <option value="Game">Game</option>
              <option value="Live Cam">Live Cam</option>
              <option value="Puzzle">Puzzle</option>
            </FormTypeSelection>
            <SubmitSection>
            <SubmitGroup>
              <FormButton type='submit'>SUBMIT</FormButton>
            </SubmitGroup>
          </SubmitSection>
          </FormGroup>             
        </AddQuickEscapeForm>
      </PageContainer>
  );
}

export default AddQuickEscape;