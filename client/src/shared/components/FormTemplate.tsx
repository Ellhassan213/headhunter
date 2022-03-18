import React, { ChangeEvent, FocusEvent, ReactNode, FormEventHandler } from 'react'
import {
  FormWrapper,
  FormGroup,
  FormSubmitButton,
  Input,
  Textarea
} from '../utils/FormStyles/styles'

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

export const Form = (props: FormProps) => {
  const { onSubmit, children } = props
  return (
    <FormWrapper onSubmit={onSubmit}>
      {children}
    </FormWrapper>
  )
}

export const InputField = (props: FieldProps) => {
  const { fieldTestId, fieldErrorTestId, labelName, name, value, errors, onChange, onBlur } = props
  return (
    <FormGroup>
      <label>{labelName}</label>
      <Input
        data-testid={fieldTestId}
        type='text'
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {errors?.[name] && <small data-testid={fieldErrorTestId}>{errors?.[name]}</small>}
    </FormGroup>
  )
}

export const TextAreaField = (props: FieldProps) => {
  const { fieldTestId, fieldErrorTestId, labelName, name, value, errors, onChange, onBlur } = props
  return (
    <FormGroup>
      <label>{labelName}</label>
      <Textarea
        data-testid={fieldTestId}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {errors?.[name] && <small data-testid={fieldErrorTestId}>{errors?.[name]}</small>}
    </FormGroup>
  )
}

export const SubmitField = (props: SubmitProps) => {
  const { value, disabled } = props
  return (
    <div>
      <FormSubmitButton
        type='submit'
        value={value}
        disabled={disabled}
      />
    </div>
  )
}
