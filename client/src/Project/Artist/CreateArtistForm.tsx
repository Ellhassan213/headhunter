import React, { SyntheticEvent, useEffect } from 'react'
import useForm from '../../shared/hooks/useForm'
import { ArtistFormInputTestIds, ArtistFormInputErrorTestIds, CreateFormI } from './models'
import { useArtists } from './ArtistContext'
import { InputField, SubmitField, TextAreaField, Form } from '../../shared/components/FormTemplate'

const CreateArtistForm = ({ initialFormInputs, updateID }: CreateFormI) => {
  const { formInputsErrors, handleChange, handleBlur, handleSubmit } = useForm()
  const {
    artistFormInputs, submitButtonText, isSubmitting,
    setArtistFormInputs, apiCreateArtist, apiUpdateArtist
  } = useArtists()

  useEffect(() => {
    setArtistFormInputs(initialFormInputs)
  }, [])

  const setInput = (name: string, value: string) => {
    setArtistFormInputs({
      ...artistFormInputs,
      [name]: value
    })
  }

  const createArtist = (event: SyntheticEvent) => {
    event.preventDefault()
    const isFormValid = handleSubmit(artistFormInputs)
    if (isFormValid) apiCreateArtist()
  }

  const updateArtist = (event: SyntheticEvent) => {
    event.preventDefault()
    const isFormValid = handleSubmit(artistFormInputs)
    if (isFormValid) apiUpdateArtist(updateID)
  }

  return (
    <>
      <Form onSubmit={updateID ? updateArtist : createArtist}>
        <h3>Artist Form</h3>
        <InputField
          fieldTestId={ArtistFormInputTestIds.Name}
          fieldErrorTestId={ArtistFormInputErrorTestIds.Name}
          labelName='Name'
          name='name'
          value={artistFormInputs.name}
          errors={formInputsErrors}
          onChange={(event) => handleChange(event, setInput)}
          onBlur={handleBlur}
        />
        <InputField
          fieldTestId={ArtistFormInputTestIds.City}
          fieldErrorTestId={ArtistFormInputErrorTestIds.City}
          labelName='City'
          name='city'
          value={artistFormInputs.city}
          errors={formInputsErrors}
          onChange={(event) => handleChange(event, setInput)}
          onBlur={handleBlur}
        />
        <InputField
          fieldTestId={ArtistFormInputTestIds.County}
          fieldErrorTestId={ArtistFormInputErrorTestIds.County}
          labelName='County'
          name='county'
          value={artistFormInputs.county}
          errors={formInputsErrors}
          onChange={(event) => handleChange(event, setInput)}
          onBlur={handleBlur}
        />
        <InputField
          fieldTestId={ArtistFormInputTestIds.Genre}
          fieldErrorTestId={ArtistFormInputErrorTestIds.Genre}
          labelName='Genre'
          name='genre'
          value={artistFormInputs.genre}
          errors={formInputsErrors}
          onChange={(event) => handleChange(event, setInput)}
          onBlur={handleBlur}
        />
        <InputField
          fieldTestId={ArtistFormInputTestIds.Phone}
          fieldErrorTestId={ArtistFormInputErrorTestIds.Phone}
          labelName='Phone Number'
          name='phone'
          value={artistFormInputs.phone}
          errors={formInputsErrors}
          onChange={(event) => handleChange(event, setInput)}
          onBlur={handleBlur}
        />
        <InputField
          fieldTestId={ArtistFormInputTestIds.WebsiteLink}
          fieldErrorTestId={ArtistFormInputErrorTestIds.WebsiteLink}
          labelName='Website Link'
          name='websiteLink'
          value={artistFormInputs.websiteLink}
          errors={formInputsErrors}
          onChange={(event) => handleChange(event, setInput)}
          onBlur={handleBlur}
        />
        <InputField
          fieldTestId={ArtistFormInputTestIds.InstagramLink}
          fieldErrorTestId={ArtistFormInputErrorTestIds.InstagramLink}
          labelName='Instagram Link'
          name='instagramLink'
          value={artistFormInputs.instagramLink}
          errors={formInputsErrors}
          onChange={(event) => handleChange(event, setInput)}
          onBlur={handleBlur}
        />
        <InputField
          fieldTestId={ArtistFormInputTestIds.ImageLink}
          fieldErrorTestId={ArtistFormInputErrorTestIds.ImageLink}
          labelName='Image Link'
          name='imageLink'
          value={artistFormInputs.imageLink}
          errors={formInputsErrors}
          onChange={(event) => handleChange(event, setInput)}
          onBlur={handleBlur}
        />
        <TextAreaField
          fieldTestId={ArtistFormInputTestIds.Description}
          fieldErrorTestId={ArtistFormInputErrorTestIds.Description}
          labelName='Description'
          name='description'
          value={artistFormInputs.description}
          errors={formInputsErrors}
          onChange={(event) => handleChange(event, setInput)}
          onBlur={handleBlur}
        />
        <SubmitField
          value={submitButtonText}
          disabled={isSubmitting}
        />
      </Form>
    </>
  )
}

export default CreateArtistForm
