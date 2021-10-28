import React, { useState } from 'react'
import useForm from '../hooks/useForm'
import { InputField, SubmitField, TextAreaField, Form } from './FormTemplate'

const CreateDecoratorForm = () => {
  const { formInputsErrors, handleChange, handleBlur } = useForm()
  const [submitButtonText, setSubmitButtonText] = useState('Submit')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [decoratorFormInputs, setDecoratorFormInputs] = useState({
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
    setDecoratorFormInputs({
      ...decoratorFormInputs,
      [name]: value
    })
  }

  const createDecorator = (event) => {
    event.preventDefault()
    setIsSubmitting(false)
    setSubmitButtonText('Submit')
    console.log('Submitted')
  }

  return (
    <>
      <Form onSubmit={createDecorator}>
        <InputField
          labelName='Name'
          name='name'
          value={decoratorFormInputs.name}
          errors={formInputsErrors}
          onChange={(event) => handleChange(event, setInput)}
          onBlur={handleBlur}
        />
        <InputField
          labelName='City'
          name='city'
          value={decoratorFormInputs.city}
          errors={formInputsErrors}
          onChange={(event) => handleChange(event, setInput)}
          onBlur={handleBlur}
        />
        <TextAreaField
          labelName='Description'
          name='description'
          value={decoratorFormInputs.description}
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

export default CreateDecoratorForm
