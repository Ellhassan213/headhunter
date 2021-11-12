const phoneValidation = (value: string) => {
  const re = /^[0-9]+$/
  const isEmailValid = re.test(value)
  if (!isEmailValid) {
    return 'Phone Number not valid'
  } else {
    return ''
  }
}

export default phoneValidation
