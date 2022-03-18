import styled from 'styled-components'

export const FormWrapper = styled.form`
  max-width: 400px;
`

export const Input = styled.input`
  margin: 5px 0;
  width: 300px;
  height: 20px;
`

export const Textarea = styled.textarea`
  margin: 5px 0;
  width: 300px;
  height: 100px;
`

export const FormGroup = styled.div`
  width: 50%;
  margin: 15px 0;

  & small {
    color: var(--pink);
  }
`

export const FormSubmitButton = styled.input`
  background-color: var(--beige);
  background-image: linear-gradient(var(--beige), var(--pink));
  border-radius: 3px;
  border: none;
  color: white;
  height: 40px;
  width: 308px;

  &:hover {
    background-color: var(--blue);
    background-image: linear-gradient(var(--blue), var(--pink));
  }
`
