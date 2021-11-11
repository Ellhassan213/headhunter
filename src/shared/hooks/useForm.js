import { useState } from 'react'
import formValidations, { validateForm } from '../utils/FormValidations'

const useForm = () => {
  const [formInputsErrors, setFormInputsErrors] = useState({})

  const getFieldErrorMessage = (name, value) => {
    const validator = formValidations?.[name]
    const errorMessage = value === '' ? 'required' : validator?.(value)
    return errorMessage
  }

  const handleChange = (event, callback) => {
    const { name, value } = event.target
    callback(name, value)
  }

  const handleBlur = (event) => {
    const { name, value } = event.target
    const errorMessage = getFieldErrorMessage(name, value)
    setFormInputsErrors({ ...formInputsErrors, [name]: errorMessage })
  }

  const handleSubmit = () => {
    const errors = validateForm(formInputsErrors)
    return errors
  }
  return { formInputsErrors, handleChange, handleBlur, handleSubmit }
}

export default useForm
