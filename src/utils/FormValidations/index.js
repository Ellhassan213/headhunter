import nameValidation from './nameValidation'
import phoneValidation from './phoneValidation'
import urlValidation from './urlValidation'
import basicValidation from './basicValidation'
import emailValidation from './emailValidation'
import validateForm from './validateForm'

export default {
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

export { validateForm }
