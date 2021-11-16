const basicValidation = (value: string) => {
  const isEmpty = value === ''
  if (isEmpty) {
    return 'required'
  } else {
    return ''
  }
}

export default basicValidation
