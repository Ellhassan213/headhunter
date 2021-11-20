import React, { SyntheticEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'
import useForm from '../../shared/hooks/useForm'
import { ArtistFormInputTestIds, ArtistFormInputErrorTestIds } from './models/ArtistFormInputs'
import {
  InputField,
  SubmitField,
  TextAreaField,
  Form
} from '../../shared/components/FormTemplate'
import Axios from 'axios'
import { useArtists, useUpdateArtists } from './ArtistContext'

const CreateArtistForm = () => {
  const history = useHistory()
  const { formInputsErrors, handleChange, handleBlur, handleSubmit } = useForm()
  const [submitButtonText, setSubmitButtonText] = useState('Submit')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [artistFormInputs, setArtistFormInputs] = useState({
    id: '',
    name: '',
    city: '',
    county: '',
    genre: '',
    phone: '',
    imageLink: '',
    websiteLink: '',
    instagramLink: '',
    description: ''
  })
  const { artistList } = useArtists()
  const setArtistList = useUpdateArtists()

  const setInput = (name: string, value: string) => {
    setArtistFormInputs({
      ...artistFormInputs,
      [name]: value
    })
  }

  const createArtist = (event: SyntheticEvent) => {
    event.preventDefault()
    const isFormValid = handleSubmit(artistFormInputs)
    if (isFormValid) {
      setSubmitButtonText('Submitting...')
      setIsSubmitting(false)
      Axios.post('/api/insertArtist', {
        name: artistFormInputs.name,
        city: artistFormInputs.city,
        county: artistFormInputs.county,
        genre: artistFormInputs.genre,
        phone: artistFormInputs.phone,
        websiteLink: artistFormInputs.websiteLink,
        instagramLink: artistFormInputs.instagramLink,
        imageLink: artistFormInputs.imageLink,
        description: artistFormInputs.description
      }).then((response) => {
        const insertID = response.data.insertId
        setArtistList([...artistList, { ...artistFormInputs, id: insertID }])
        setSubmitButtonText('Submit')
        setIsSubmitting(true)
        history.push('/artists')
      }).catch((e) => console.log(e))
    }
  }

  return (
    <>
      <Form onSubmit={createArtist}>
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
