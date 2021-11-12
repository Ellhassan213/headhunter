const emailValidation = (value: string) => {
  const re = /\S+@\S+\.\S+/
  const isEmailValid = re.test(value)
  if (!isEmailValid) {
    return 'Email not valid'
  } else {
    return ''
  }
}

export default emailValidation
