import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PageContainer,
  PageHeading,
  AddVideoForm,
  FormGroup,
  InputLabel,
  FormField,
  FormTypeSelection,
  SubmitGroup,
  FormButton,
  VideoSection,
  VideoUploadSection,
  InputVideo,
  VideoFileUpload,
  SubmitSection,
  InputDivider
} from './AddVideo.Elements';

function AddVideo() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    isIframe: true,
    videoSource: '',
    frameBorder: 0,
    iframeAllow: '',
    videoTitle: '',
    videoCategory: '',
    videoType: '',
    videoAuthor: '',
    mediaAdded: '',
    mediaDuration: '',
  });

  function HandleStateChange(e) {
    const newvalues = { ...values };
    newvalues[e.target.id] = e.target.value;
    setValues(newvalues);
    // console.log(newvalues)
  }
  const [videoSrc , setVideoSrc] = useState("");

  const HandleVideoChange = (e) => {
    
  }

  function PostFormDataToAPI(e) {
    e.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({

	  // replace values below with whatever data is to be posted

      isIframe: true,
      videoSource: values.videoSource,
      frameBorder: 0,
      // If 'isIframe' is false then frameBorder and iframeAllow are disabled
      iframeAllow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
      videoTitle: values.videoTitle,
      videoCategory: values.videoCategory,
      videoType: values.videoType,
      videoAuthor: values.videoAuthor,
      mediaAdded: new Date().toDateString(),
      mediaDuration: values.mediaDuration,
      }),
    };

    // replace URL below with Projects API URL

    fetch('https://localhost:7021/api/Video/AddVideo', requestOptions) // THIS WORKS! :)
      .then((response) => response.json())
      .then(
        (result) => {

	        // Display result as an alert (confirmation)
          alert(result); // Confirmation of posted Video is working!

	        // Print result to console
          console.log(result); // Print confirmation result to console

	        // OPTIONAL: Redirect page on successfull form submission
          navigate('/getVideo'); // Redirect to 'Video' page
        },
        (error) => {
          alert('Error:' + error);
        }
      );
  }

  return (
    // REPEAT THIS PROCES FOR ALL REQUIRED PAGES (Video, Escape, Podcast, Story & Video) then
    // implement GET & Update requests.
    <PageContainer>
        <PageHeading>Add Video</PageHeading>

        <AddVideoForm onSubmit={(e) => PostFormDataToAPI(e)}>
          <VideoSection>
            <InputLabel>Video Preview</InputLabel>
            <InputVideo src={videoSrc} />
            <InputLabel>Video Source:</InputLabel>
            <FormField
              placeholder='Video Source'
              type='text'
              name='VideoSource'
              id='VideoSource'
              value={values.videoSource}
              onChange={(e) => HandleStateChange(e)}
            />
            <InputDivider>OR</InputDivider>
            <InputLabel>Video Upload</InputLabel>
            <VideoFileUpload
                type='file'
                accept='video/*'
                onChange={HandleVideoChange}
              />
          </VideoSection>
          <FormGroup>
            <InputLabel>Video Title:</InputLabel>
            <FormField
              placeholder='Video Title'
              type='text'
              name='Video Title'
              id='VideoTitle'
              value={values.videoTitle}
              onChange={(e) => HandleStateChange(e)}
            />
            <InputLabel>Video Category:</InputLabel>
            <FormField
              placeholder='Video Category'
              type='text'
              name='Category'
              id='VideoCategory'
              value={values.videoCategory}
              onChange={(e) => HandleStateChange(e)}
            />
            <InputLabel>Video Author:</InputLabel>
            <FormField
              placeholder='Video Author'
              type='text'
              name='VideoAuthor'
              id='VideoAuthor'
              value={values.videoAuthor}
              onChange={(e) => HandleStateChange(e)}
            />
            <InputLabel>Media Duration:</InputLabel>
            <FormField
              placeholder='Media Duration'
              type='text'
              name='Duration'
              id='mediaDuration'
              value={values.mediaDuration}
              onChange={(e) => HandleStateChange(e)}
            />
            <InputLabel>Video Type:</InputLabel>
            <FormTypeSelection
              placeholder='Video Type'
              type='text'
              name='Type'
              id='VideoType'
              value={values.videoType}
              onChange={(e) => HandleStateChange(e)}
            >
            <option value=""></option>
              <option value="YouTube">YouTube Video</option>
              <option value="External">External URL</option>
              <option value="Upload">Upload Video</option>
            </FormTypeSelection>
            <SubmitSection>
            <SubmitGroup>
              <FormButton type='submit'>SUBMIT</FormButton>
            </SubmitGroup>
          </SubmitSection>
          </FormGroup>          
        </AddVideoForm>
      </PageContainer>
  );
}

export default AddVideo;