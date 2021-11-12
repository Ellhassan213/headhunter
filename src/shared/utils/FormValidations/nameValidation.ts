const nameValidation = (value: string) => {
  const re = /^[a-zA-Z ]*$/
  const isNameValid = re.test(value)
  if (!isNameValid) {
    return 'Numbers and special characters not allowed'
  } else {
    return ''
  }
}

export default nameValidation
