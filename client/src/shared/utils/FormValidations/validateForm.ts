import _ from 'lodash'

type ErrorTypes = {
  [key: string]: string
}

const validateForm = (formInputs: {}, formInputsErrors: ErrorTypes) => {
  const filteredFormInputs = _.omit(formInputs, ['id'])
  const isFormEmpty = _.values(filteredFormInputs).some(_.isEmpty)
  const isFormErrorsEmpty = _.values(formInputsErrors).every(_.isEmpty)
  const isFormValid = !isFormEmpty && isFormErrorsEmpty

  return isFormValid
}

export default validateForm
