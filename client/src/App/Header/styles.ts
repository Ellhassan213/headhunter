import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledHeader = styled.header`
  display: flex;
  justify-content: left;
  align-items: center;
  background-color: var(--blue);
  color: var(--light-blue);
  padding: 0 10px;
  width: 100%;
  box-shadow: 0px 2px 10px -5px var(--black);
`

export const StyledHeaderLink = styled(Link)`
  text-decoration: none;
  color: var(--light-blue);
  margin: 0px 30px 0px 0px;
`

export const StyledHeaderIcon = styled(Link)`
  text-decoration: none;
  color: var(--light-blue);
  margin: 5px 30px 0px 0px;
  font-size: 2rem;
`
