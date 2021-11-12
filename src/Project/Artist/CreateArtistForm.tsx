import React, { SyntheticEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useArtists, useUpdateArtists } from './ArtistContext'
import useForm from '../../shared/hooks/useForm'
import {
  InputField,
  SubmitField,
  TextAreaField,
  Form
} from '../../shared/components/FormTemplate'

// NOTE: I can do schema here?

const CreateArtistForm = () => {
  const history = useHistory()
  const { formInputsErrors, handleChange, handleBlur, handleSubmit } = useForm()
  const { artistList } = useArtists()
  const setArtistList = useUpdateArtists()
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

  const setInput = (name: string, value: string) => {
    setArtistFormInputs({
      ...artistFormInputs,
      [name]: value
    })
  }

  const createArtist = (event: SyntheticEvent) => {
    event.preventDefault()
    const errors = handleSubmit()
    if (errors === 0) {
      setSubmitButtonText('Submitting...')
      setIsSubmitting(true)
      // NOTE: Can abstract away this setTimeout to a separate module function e.g. handleSubmission that uses a flag to mock or invoke the actual creation
      setTimeout(() => {
        artistFormInputs.id = (artistList.length + 1).toString() // NOTE: Crude, backend implementation with DB is ideal, I am doing this a temp
        setArtistList(artistList.slice().concat(artistFormInputs))
        console.log('Submitted!')
        setSubmitButtonText('Submit')
        setIsSubmitting(false)
        history.push('/artists')
      }, 2000)
    }
  }

  return (
    <>
      <Form onSubmit={createArtist}>
        <InputField
          labelName='Name'
          name='name'
          value={artistFormInputs.name}
          errors={formInputsErrors}
          onChange={(event) => handleChange(event, setInput)}
          onBlur={handleBlur}
        />
        <InputField
          labelName='City'
          name='city'
          value={artistFormInputs.city}
          errors={formInputsErrors}
          onChange={(event) => handleChange(event, setInput)}
          onBlur={handleBlur}
        />
        <InputField
          labelName='County'
          name='county'
          value={artistFormInputs.county}
          errors={formInputsErrors}
          onChange={(event) => handleChange(event, setInput)}
          onBlur={handleBlur}
        />
        <InputField
          labelName='Genre'
          name='genre'
          value={artistFormInputs.genre}
          errors={formInputsErrors}
          onChange={(event) => handleChange(event, setInput)}
          onBlur={handleBlur}
        />
        <InputField
          labelName='Phone Number'
          name='phone'
          value={artistFormInputs.phone}
          errors={formInputsErrors}
          onChange={(event) => handleChange(event, setInput)}
          onBlur={handleBlur}
        />
        <InputField
          labelName='Website Link'
          name='websiteLink'
          value={artistFormInputs.websiteLink}
          errors={formInputsErrors}
          onChange={(event) => handleChange(event, setInput)}
          onBlur={handleBlur}
        />
        <InputField
          labelName='Instagram Link'
          name='instagramLink'
          value={artistFormInputs.instagramLink}
          errors={formInputsErrors}
          onChange={(event) => handleChange(event, setInput)}
          onBlur={handleBlur}
        />
        <InputField
          labelName='Image Link'
          name='imageLink'
          value={artistFormInputs.imageLink}
          errors={formInputsErrors}
          onChange={(event) => handleChange(event, setInput)}
          onBlur={handleBlur}
        />
        <TextAreaField
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
