import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import useForm from '../hooks/useForm'
import { Context } from '../Context'
import { InputField, SubmitField, TextAreaField, Form } from './FormTemplate'

const CreateVenueForm = () => {
  const history = useHistory()
  const { formInputsErrors, handleChange, handleBlur, handleSubmit } = useForm()
  const [submitButtonText, setSubmitButtonText] = useState('Submit')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { venueList, setVenueList } = useContext(Context)
  const [venueFormInputs, setVenueFormInputs] = useState({
    name: '',
    city: '',
    county: '',
    address: '',
    phone: '',
    imageLink: '',
    description: ''
  })

  const setInput = (name, value) => {
    setVenueFormInputs({
      ...venueFormInputs,
      [name]: value
    })
  }

  const createVenue = (event) => {
    event.preventDefault()
    const errors = handleSubmit()
    if (errors === 0) {
      setSubmitButtonText('Submitting...')
      setIsSubmitting(true)
      setTimeout(() => {
        venueFormInputs.id = venueList.length + 1
        const arrCopy = venueList
        setVenueList(arrCopy.concat(venueFormInputs))
        setSubmitButtonText('Submit')
        setIsSubmitting(false)
        history.push('/venues')
      }, 2000)
    }
  }

  return (
    <>
    <Form onSubmit={createVenue}>
      <InputField
        nameTestId='name-input'
        nameErrorTestId='name-input-error'
        labelName='Name'
        name='name'
        value={venueFormInputs.name}
        errors={formInputsErrors}
        onChange={(event) => handleChange(event, setInput)}
        onBlur={handleBlur}
      />
      <InputField
        labelName='City'
        name='city'
        value={venueFormInputs.city}
        errors={formInputsErrors}
        onChange={(event) => handleChange(event, setInput)}
        onBlur={handleBlur}
      />
      <InputField
        labelName='County'
        name='county'
        value={venueFormInputs.county}
        errors={formInputsErrors}
        onChange={(event) => handleChange(event, setInput)}
        onBlur={handleBlur}
      />
      <InputField
        labelName='Address'
        name='address'
        value={venueFormInputs.address}
        errors={formInputsErrors}
        onChange={(event) => handleChange(event, setInput)}
        onBlur={handleBlur}
      />
      <InputField
        labelName='Phone'
        name='phone'
        value={venueFormInputs.phone}
        errors={formInputsErrors}
        onChange={(event) => handleChange(event, setInput)}
        onBlur={handleBlur}
      />
      <InputField
        labelName='Image Link'
        name='imageLink'
        value={venueFormInputs.imageLink}
        errors={formInputsErrors}
        onChange={(event) => handleChange(event, setInput)}
        onBlur={handleBlur}
      />
      <TextAreaField
        labelName='Description'
        name='description'
        value={venueFormInputs.description}
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

export default CreateVenueForm
