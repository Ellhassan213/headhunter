import styled from 'styled-components'

export const FormWrapper = styled.form`
  max-width: 30em;
  margin: auto;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 5px 5px var(--blue);
`

export const Label = styled.label`
  padding: 0 0 0.3rem 0;
`

export const Input = styled.input`
  height: 1.5rem;
  font-size: 1rem;
`

export const Textarea = styled.textarea`
  height: 10rem;
  font-size: 1rem;
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;

  & small {
    color: var(--pink);
  }
`

export const FormSubmitButton = styled.input`
  background-color: var(--beige);
  background-image: linear-gradient(var(--beige), var(--pink));
  border-radius: 3px;
  border: none;
  color: var(--white);
  height: 3rem;

  &:hover {
    background-color: var(--blue);
    background-image: linear-gradient(var(--blue), var(--pink));
  }
`
