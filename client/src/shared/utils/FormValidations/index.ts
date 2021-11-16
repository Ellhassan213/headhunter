import nameValidation from './nameValidation'
import phoneValidation from './phoneValidation'
import urlValidation from './urlValidation'
import basicValidation from './basicValidation'
import emailValidation from './emailValidation'
import validateForm from './validateForm'

type ValidationTypes = {
  [key: string]: (value: string) => string,
}

const formValidations: ValidationTypes = {
  name: nameValidation,
  city: nameValidation,
  county: nameValidation,
  genre: nameValidation,
  phone: phoneValidation,
  email: emailValidation,
  imageLink: urlValidation,
  websiteLink: urlValidation,
  instagramLink: urlValidation,
  address: basicValidation,
  description: basicValidation
}

export default formValidations
export { validateForm }

// Note: I can do better validations all round
