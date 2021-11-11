const basicValidation = (value) => {
  const isEmpty = value === ''
  if (isEmpty) {
    return 'required'
  } else {
    return ''
  }
}

export default basicValidation
