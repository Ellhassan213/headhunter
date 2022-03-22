import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledHeader = styled.header`
  display: flex;
  justify-content: left;
  align-items: center;
  background-color: var(--blue);
  color: var(--light-blue);
  padding: 0 1rem;
  box-shadow: 0 2px 10px -5px var(--black);
`

export const StyledHeaderLink = styled(Link)`
  text-decoration: none;
  color: var(--light-blue);
  margin: 0 2rem 0 0;
`

export const StyledHeaderIcon = styled(Link)`
  text-decoration: none;
  color: var(--light-blue);
  margin: 1rem 2rem 0 0;
  font-size: 2rem;
`
