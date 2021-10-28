import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import useForm from '../hooks/useForm'
import { Context } from '../Context'
import { InputField, SubmitField, TextAreaField, Form } from './FormTemplate'

// NOTE: Can both forms be refactored to use a schema mechanism?

const CreateArtistForm = () => {
  const history = useHistory()
  const { formInputsErrors, handleChange, handleBlur, handleSubmit } = useForm()
  const { artistList, setArtistList } = useContext(Context)
  const [submitButtonText, setSubmitButtonText] = useState('Submit')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [artistFormInputs, setArtistFormInputs] = useState({
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

  const setInput = (name, value) => {
    setArtistFormInputs({
      ...artistFormInputs,
      [name]: value
    })
  }

  const createArtist = (event) => {
    event.preventDefault()
    const errors = handleSubmit()
    if (errors === 0) {
      setSubmitButtonText('Submitting...')
      setIsSubmitting(true)
      // NOTE: Can abstract away this setTimeout to a separate module function e.g. handleSubmission that uses a flag to mock or invoke the actual creation
      setTimeout(() => {
        artistFormInputs.id = artistList.length + 1
        setArtistList(artistList.concat(artistFormInputs))
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
