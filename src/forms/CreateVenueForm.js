import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import useForm from '../hooks/useForm'
import { Context } from '../Context'

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
    <form className="form-wrapper" onSubmit={createVenue}>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={venueFormInputs.name}
          onChange={(event) => handleChange(event, setInput)}
          onBlur={handleBlur}
        />
        <small>{formInputsErrors?.name}</small>
      </div>
      <div className="form-group">
        <label>{'City & County'}</label>
        <input
          type="text"
          name="city"
          value={venueFormInputs.city}
          onChange={(event) => handleChange(event, setInput)}
          onBlur={handleBlur}
          placeholder="City"
        />
        <small>{formInputsErrors?.city}</small>
        <input
          type="text"
          name="county"
          value={venueFormInputs.county}
          onChange={(event) => handleChange(event, setInput)}
          onBlur={handleBlur}
          placeholder="County"
        />
        <small>{formInputsErrors?.county}</small>
      </div>
      <div className="form-group">
        <label>Address</label>
        <input
          type="text"
          name="address"
          value={venueFormInputs.address}
          onChange={(event) => handleChange(event, setInput)}
          onBlur={handleBlur}
        />
        <small>{formInputsErrors?.address}</small>
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input
          type="text"
          name="phone"
          value={venueFormInputs.phone}
          onChange={(event) => handleChange(event, setInput)}
          onBlur={handleBlur}
        />
        <small>{formInputsErrors?.phone}</small>
      </div>
      <div className="form-group">
        <label>Image Link</label>
        <input
          type="text"
          name="imageLink"
          value={venueFormInputs.imageLink}
          onChange={(event) => handleChange(event, setInput)}
          onBlur={handleBlur}
        />
        <small>{formInputsErrors?.imageLink}</small>
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea
          type="text"
          name="description"
          value={venueFormInputs.description}
          onChange={(event) => handleChange(event, setInput)}
          onBlur={handleBlur}
        />
        <small>{formInputsErrors?.description}</small>
      </div>
      <input
        type="submit"
        className="form-submit-btn"
        value={submitButtonText}
        disabled={isSubmitting}
      />
    </form>
  )
}

export default CreateVenueForm
