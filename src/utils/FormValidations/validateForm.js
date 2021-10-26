const validateForm = (formInputsErrors) => {
  let errors = 0
  if (Object.keys(formInputsErrors).length === 0) {
    errors = 1
  } else {
    for (const item of Object.keys(formInputsErrors)) {
      if (formInputsErrors[item]?.length > 0) {
        errors += 1
      }
    }
  }
  return errors
}

export default validateForm
