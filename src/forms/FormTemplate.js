import React from 'react'
import PropTypes from 'prop-types'

export const InputField = (props) => {
  const { labelName, name, value, errors, onChange, onBlur } = props
  return (
    <div className="form-group">
      <label>{labelName}</label>
      <input
        type='text'
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <small>{errors?.[name]}</small>
    </div>
  )
}

export const TextAreaField = (props) => {
  const { labelName, name, value, errors, onChange, onBlur } = props
  return (
    <div className="form-group">
      <label>{labelName}</label>
      <textarea
        type='text'
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <small>{errors?.[name]}</small>
    </div>
  )
}

export const SubmitField = (props) => {
  const { value, disabled } = props
  return (
    <div>
      <input
        className="form-submit-btn"
        type='submit'
        value={value}
        disabled={disabled}
      />
    </div>
  )
}

export const Form = (props) => {
  const { onSubmit, children } = props
  return (
    <form className="form-wrapper" onSubmit={onSubmit}>
      {children}
    </form>
  )
}

InputField.propTypes = {
  className: PropTypes.string,
  labelName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  errors: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired
}

TextAreaField.propTypes = {
  className: PropTypes.string,
  labelName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  errors: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired
}

SubmitField.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired
}

Form.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ])
}
