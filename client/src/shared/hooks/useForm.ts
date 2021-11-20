import { ChangeEvent, FocusEvent, useState } from 'react'
import formValidations, { validateForm } from '../utils/FormValidations'

const useForm = () => {
  const [formInputsErrors, setFormInputsErrors] = useState({})

  const getFieldErrorMessage = (name: string, value: string) => {
    const validator = formValidations?.[name]
    const errorMessage = value === '' ? 'required' : validator?.(value)
    return errorMessage
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, callback: (name: string, value: string) => void) => {
    const { name, value } = event.target
    callback(name, value)
  }

  const handleBlur = (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    const errorMessage = getFieldErrorMessage(name, value)
    setFormInputsErrors({ ...formInputsErrors, [name]: errorMessage })
  }

  const handleSubmit = (formInputs: {}) => {
    const errors = validateForm(formInputs, formInputsErrors)
    return errors
  }
  return { formInputsErrors, handleChange, handleBlur, handleSubmit }
}

export default useForm
