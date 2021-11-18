import React, { SyntheticEvent, useState } from 'react'
// import { useHistory } from 'react-router-dom'
import useForm from '../../shared/hooks/useForm'
import { VenueFormInputTestIds, VenueFormInputErrorTestIds } from './models/VenueFormInputs'
import {
  InputField,
  SubmitField,
  TextAreaField,
  Form
} from '../../shared/components/FormTemplate'
import Axios from 'axios'

const CreateVenueForm = () => {
  // const history = useHistory()
  const { formInputsErrors, handleChange, handleBlur, handleSubmit } = useForm()
  const [submitButtonText, setSubmitButtonText] = useState('Submit')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [venueFormInputs, setVenueFormInputs] = useState({
    id: '',
    name: '',
    city: '',
    county: '',
    address: '',
    phone: '',
    imageLink: '',
    description: ''
  })

  const setInput = (name: string, value: string) => {
    setVenueFormInputs({
      ...venueFormInputs,
      [name]: value
    })
  }

  const createVenue = (event: SyntheticEvent) => {
    event.preventDefault()
    const errors = handleSubmit()
    if (errors === 0) {
      setSubmitButtonText('Submitting...')
      setIsSubmitting(false)
      Axios.post('https://headhunter-deploy.herokuapp.com/api/insertVenue', {
        name: venueFormInputs.name,
        city: venueFormInputs.city,
        county: venueFormInputs.county,
        address: venueFormInputs.address,
        phone: venueFormInputs.phone,
        imageLink: venueFormInputs.imageLink,
        description: venueFormInputs.description
      }).then(() => {
        setSubmitButtonText('Submit')
        setIsSubmitting(true)
        // history.push('/venues')
      }).catch((e) => console.log(e))
    }
  }

  return (
    <>
    <Form onSubmit={createVenue}>
      <InputField
        fieldTestId={VenueFormInputTestIds.Name}
        fieldErrorTestId={VenueFormInputErrorTestIds.Name}
        labelName='Name'
        name='name'
        value={venueFormInputs.name}
        errors={formInputsErrors}
        onChange={(event) => handleChange(event, setInput)}
        onBlur={handleBlur}
      />
      <InputField
        fieldTestId={VenueFormInputTestIds.City}
        fieldErrorTestId={VenueFormInputErrorTestIds.City}
        labelName='City'
        name='city'
        value={venueFormInputs.city}
        errors={formInputsErrors}
        onChange={(event) => handleChange(event, setInput)}
        onBlur={handleBlur}
      />
      <InputField
        fieldTestId={VenueFormInputTestIds.County}
        fieldErrorTestId={VenueFormInputErrorTestIds.County}
        labelName='County'
        name='county'
        value={venueFormInputs.county}
        errors={formInputsErrors}
        onChange={(event) => handleChange(event, setInput)}
        onBlur={handleBlur}
      />
      <InputField
        fieldTestId={VenueFormInputTestIds.Address}
        fieldErrorTestId={VenueFormInputErrorTestIds.Address}
        labelName='Address'
        name='address'
        value={venueFormInputs.address}
        errors={formInputsErrors}
        onChange={(event) => handleChange(event, setInput)}
        onBlur={handleBlur}
      />
      <InputField
        fieldTestId={VenueFormInputTestIds.Phone}
        fieldErrorTestId={VenueFormInputErrorTestIds.Phone}
        labelName='Phone'
        name='phone'
        value={venueFormInputs.phone}
        errors={formInputsErrors}
        onChange={(event) => handleChange(event, setInput)}
        onBlur={handleBlur}
      />
      <InputField
        fieldTestId={VenueFormInputTestIds.ImageLink}
        fieldErrorTestId={VenueFormInputErrorTestIds.ImageLink}
        labelName='Image Link'
        name='imageLink'
        value={venueFormInputs.imageLink}
        errors={formInputsErrors}
        onChange={(event) => handleChange(event, setInput)}
        onBlur={handleBlur}
      />
      <TextAreaField
        fieldTestId={VenueFormInputTestIds.Description}
        fieldErrorTestId={VenueFormInputErrorTestIds.Description}
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
