import React, { SyntheticEvent, useEffect } from 'react'
import useForm from '../../shared/hooks/useForm'
import { VenueFormInputTestIds, VenueFormInputErrorTestIds, CreateFormI } from './models'
import { useVenues } from './VenueContext'
import { InputField, SubmitField, TextAreaField, Form } from '../../shared/components/FormTemplate'

const CreateVenueForm = ({ initialFormInputs, updateID }: CreateFormI) => {
  const { formInputsErrors, handleChange, handleBlur, handleSubmit } = useForm()
  const {
    venueFormInputs, submitButtonText, isSubmitting,
    setVenueFormInputs, apiCreateVenue, apiUpdateVenue
  } = useVenues()

  useEffect(() => {
    setVenueFormInputs(initialFormInputs)
  }, [])

  const setInput = (name: string, value: string) => {
    setVenueFormInputs({
      ...venueFormInputs,
      [name]: value
    })
  }

  const createVenue = (event: SyntheticEvent) => {
    event.preventDefault()
    const isFormValid = handleSubmit(venueFormInputs)
    if (isFormValid) apiCreateVenue()
  }

  const updateVenue = (event: SyntheticEvent) => {
    event.preventDefault()
    const isFormValid = handleSubmit(venueFormInputs)
    if (isFormValid) apiUpdateVenue(updateID)
  }

  return (
    <>
    <Form onSubmit={updateID ? updateVenue : createVenue}>
      <h3>Venue Form</h3>
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
