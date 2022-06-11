import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {
  NewAudioPage,
  PageHeading,
  AddAudioForm,
  FormField,
  FormButton,
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
    audioImage: "",
    audioSource: "",
  });

  function changeHandler(e) {
    const newvalues = {...values}
    newvalues[e.target.id] = e.target.value
    setValues(newvalues)
    // console.log(newvalues)
  }

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
            audioImage: values.audioImage,
            audioSource: values.audioSource
          }),
        };
        fetch("https://localhost:7021/api/Audio/AddAudio", requestOptions) // THIS WORKS! :)
          .then(async (response) => {
            const data = await response.json();
    
            /// check for error response
            if (!response.ok) {
              // get error message from body or default to response status
              const error = (data && data.message) || response.status;
              return Promise.reject(error);
            }
    
            setAudioFile(data); // Need to display confirmation on page when posted successfully
            this.props.history.push("/addaudio"); // doesnt seem to be working - needs replaced!
          })
          .catch((error) => {
            seterrorMessage(error.toString());
            console.log("There was an error: ", error);
          });
      }

  return (

    // Need to add Image preview to form (Image preview from URL: is possible)
    // Need to change form to display as grid/columns to stretch across the page

    // Once posted successfully, display confirmation (API Response) and reload page with reset form
    // OPTIONAL: Add progress animation to button to display onSubmit

    // REPEAT THIS PROCES FOR ALL REQUIRED PAGES (Audio, Escape, Podcast, Story & Video) then 
    // implement GET & Update requests.
    <>
      <NewAudioPage>
        <PageHeading>
          Add New Audio File with Fetch (React HTTP Post)
        </PageHeading>
        <AddAudioForm onSubmit={(e) => submit(e)}>
          <FormField
            placeholder="Audio Title"
            type="text"
            name="Audio Title"
            id="audioTitle"
            value={values.audioTitle}
            onChange={(e) => changeHandler(e)}
          />
          <FormField
            placeholder="Audio Author"
            type="text"
            name="AudioAuthor"
            id="audioAuthor"
            value={values.audioAuthor}
            onChange={(e) => changeHandler(e)}
          />
          <FormField
            placeholder="Audio Category"
            type="text"
            name="Category"
            id="audioCategory"
            value={values.audioCategory}
            onChange={(e) => changeHandler(e)}
          />
          <FormField
            placeholder="Audio Duration"
            type="text"
            name="Duration"
            id="mediaDuration"
            value={values.mediaDuration}
            onChange={(e) => changeHandler(e)}
          />
          <FormField
            placeholder="Audio Image"
            type="text"
            name="AudioImage"
            id="audioImage"
            value={values.audioImage}
            onChange={(e) => changeHandler(e)}
          />
          <FormField
            placeholder="Audio Source URL"
            type="text"
            name="AudioSourceURL"
            id="audioSource"
            value={values.audioSource}
            onChange={(e) => changeHandler(e)}
          />
          <FormButton>SUBMIT</FormButton>
        </AddAudioForm>
      </NewAudioPage>
    </>
  );
}

export default AddAudio;