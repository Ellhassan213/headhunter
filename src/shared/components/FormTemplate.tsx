import React, { ChangeEvent, FocusEvent, ReactNode, FormEventHandler } from 'react'

type ErrorTypes = {
  [key: string]: string
}

type FieldProps = {
  fieldTestId?: string,
  fieldErrorTestId?: string,
  labelName: string,
  name: string,
  value: string,
  errors?: ErrorTypes,
  disabled?: boolean,
  onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  onBlur?: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

type SubmitProps = {
  value: string,
  disabled: boolean
}

type FormProps = {
  children: ReactNode,
  onSubmit: FormEventHandler<HTMLFormElement>
}

export const InputField = (props: FieldProps) => {
  const { fieldTestId, fieldErrorTestId, labelName, name, value, errors, onChange, onBlur } = props
  return (
    <div className="form-group">
      <label>{labelName}</label>
      <input
        data-testid={fieldTestId}
        type='text'
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {errors?.[name] && <small data-testid={fieldErrorTestId}>{errors?.[name]}</small>}
    </div>
  )
}

export const TextAreaField = (props: FieldProps) => {
  const { fieldTestId, fieldErrorTestId, labelName, name, value, errors, onChange, onBlur } = props
  return (
    <div className="form-group">
      <label>{labelName}</label>
      <textarea
        data-testid={fieldTestId}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {errors?.[name] && <small data-testid={fieldErrorTestId}>{errors?.[name]}</small>}
    </div>
  )
}

export const SubmitField = (props: SubmitProps) => {
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

export const Form = (props: FormProps) => {
  const { onSubmit, children } = props
  return (
    <form className="form-wrapper" onSubmit={onSubmit}>
      {children}
    </form>
  )
}
