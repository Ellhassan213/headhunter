import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import useForm from '../hooks/useForm'
import { Context } from '../Context'

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
    <form className="form-wrapper" onSubmit={createArtist}>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={artistFormInputs.name}
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
          value={artistFormInputs.city}
          onChange={(event) => handleChange(event, setInput)}
          onBlur={handleBlur}
          placeholder="City"
        />
        <small>{formInputsErrors?.city}</small>
        <input
          type="text"
          name="county"
          value={artistFormInputs.county}
          onChange={(event) => handleChange(event, setInput)}
          onBlur={handleBlur}
          placeholder="County"
        />
        <small>{formInputsErrors?.county}</small>
      </div>
      <div className="form-group">
        <label>Genre</label>
        <input
          type="text"
          name="genre"
          value={artistFormInputs.genre}
          onChange={(event) => handleChange(event, setInput)}
          onBlur={handleBlur}
        />
        <small>{formInputsErrors?.genre}</small>
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input
          type="text"
          name="phone"
          value={artistFormInputs.phone}
          onChange={(event) => handleChange(event, setInput)}
          onBlur={handleBlur}
        />
        <small>{formInputsErrors?.phone}</small>
      </div>
      <div className="form-group">
        <label>Website Link</label>
        <input
          type="text"
          name="websiteLink"
          value={artistFormInputs.websiteLink}
          onChange={(event) => handleChange(event, setInput)}
          onBlur={handleBlur}
        />
        <small>{formInputsErrors?.websiteLink}</small>
      </div>
      <div className="form-group">
        <label>Instagram Link</label>
        <input
          type="text"
          name="instagramLink"
          value={artistFormInputs.instagramLink}
          onChange={(event) => handleChange(event, setInput)}
          onBlur={handleBlur}
        />
        <small>{formInputsErrors?.instagramLink}</small>
      </div>
      <div className="form-group">
        <label>Image Link</label>
        <input
          type="text"
          name="imageLink"
          value={artistFormInputs.imageLink}
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
          value={artistFormInputs.description}
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

export default CreateArtistForm
