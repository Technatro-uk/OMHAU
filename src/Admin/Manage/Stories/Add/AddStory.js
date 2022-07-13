import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PageContainer,
  PageHeading,
  AddStoryForm,
  FormGroup,
  InputLabel,
  FormField,
  DescriptionField,
  FormTypeSelection,
  SubmitGroup,
  FormButton,
  SubmitSection,
  StoryContentField,
} from './AddStory.Elements';

function AddStory() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    storyTitle: '',
    storyAuthor: '',
    storyCategory: '',
    storyDescription: '',
    wordCount: '',
    storyText: '',
    storySourceURL: '',
    datePublished: new Date().toDateString(),
  });

  function HandleStateChange(e) {
    const newvalues = { ...values };
    newvalues[e.target.id] = e.target.value;
    setValues(newvalues);
    // console.log(newvalues)
  }

  function PostFormDataToAPI(e) {
    e.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({

      // replace values below with whatever data is to be posted

      storyTitle: values.storyTitle,
      storyAuthor: values.storyAuthor,
      storyCategory: values.storyCategory,
      storyDescription: values.storyDescription,
      // wordCount: values.wordCount, // Need to implement automated word counter
      storyText: values.storyText,
      storySourceURL: values.storySourceURL,
      datePublished: values.datePublished,
      }),
    };

    // replace URL below with Projects API URL
    fetch('https://localhost:7021/api/Story/add', requestOptions) // THIS WORKS! :)
      .then((response) => response.json())
      .then(
        (result) => {

	        // Display result as an alert (confirmation)
          alert(result); // Confirmation of posted Story is working!

	        // Print result to console
          console.log(result); // Print confirmation result to console

	        // OPTIONAL: Redirect page on successfull form submission
          navigate('/stories'); // Redirect to 'Admins Story' page
        },
        (error) => {
          alert('Error:' + error);
        }
      );
  }

  return (
    // REPEAT THIS PROCES FOR ALL REQUIRED PAGES (Story, Escape, Podcast, Story & Video) then
    // implement GET & Update requests.
    <PageContainer>
        <PageHeading>Add Story</PageHeading>

        <AddStoryForm onSubmit={(e) => PostFormDataToAPI(e)}>
          <FormGroup>
            <InputLabel>Title:</InputLabel>
            <FormField
              placeholder='Story Title'
              type='text'
              name='storyTitle'
              id='storyTitle'
              value={values.storyTitle}
              onChange={(e) => HandleStateChange(e)}
            />
            <InputLabel>Author:</InputLabel>
            <FormField
              placeholder='Story Author'
              type='text'
              name='storyAuthor'
              id='storyAuthor'
              value={values.storyAuthor}
              onChange={(e) => HandleStateChange(e)}
            />
            <InputLabel>URL:</InputLabel>
            <FormField
              placeholder='Story URL'
              type='text'
              name='storySourceURL'
              id='storySourceURL'
              value={values.storySourceURL}
              onChange={(e) => HandleStateChange(e)}
            />
            <InputLabel>Date Published:</InputLabel>
            <FormField
              placeholder='Date Published'
              type='date'
              name='datePublished'
              id='datePublished'
              value={values.datePublished}
              onChange={(e) => HandleStateChange(e)}
            />
            <InputLabel>Category:</InputLabel>
            <FormTypeSelection
              placeholder='Story Category'
              type='text'
              name='storyCategory'
              id='storyCategory'
              value={values.storyCategory}
              onChange={(e) => HandleStateChange(e)}
            >
            <option value="">Choose an option..</option>
              <option value="Mental Health">Mental Health</option>
              <option value="Depression">Depression</option>
              <option value="Anxiety">Anxiety</option>
            </FormTypeSelection>
          </FormGroup>
          <FormGroup>
            <InputLabel>Description:</InputLabel>
            <DescriptionField
              placeholder='Story Description'
              type='text'
              name='storyDescription'
              id='storyDescription'
              value={values.storyDescription}
              onChange={(e) => HandleStateChange(e)}
            />
            <InputLabel>Content:</InputLabel>
            <StoryContentField
              placeholder='Story Content'
              type='text'
              name='storyText'
              id='storyText'
              value={values.storyText}
              onChange={(e) => HandleStateChange(e)}
            />
          <SubmitSection>
            <InputLabel>Add Story to Database</InputLabel>
            <SubmitGroup>
              <FormButton type='submit'>SUBMIT</FormButton>
            </SubmitGroup>
          </SubmitSection>
          </FormGroup>
        </AddStoryForm>
      </PageContainer>
  );
}

export default AddStory;