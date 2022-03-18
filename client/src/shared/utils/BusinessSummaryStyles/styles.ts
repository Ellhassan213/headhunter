import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const PageLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  padding: 0 0.5rem;
  height: 0;
  color: var(--black);

  &:hover {
    color: var(--light-purple);
  }
`

export const PageALink = styled.a`
  text-decoration: none;
  display: inline-block;
  padding: 0 0.5rem;
  height: 0px;
  color: var(--black);

  &:hover {
    color: var(--light-purple);
  }
`

export const BasicDetail = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: auto;
`

export const ShowImage = styled.div`

  & img {
    width: 100%;
    border-radius: 10px;
  }
`

export const SummaryTitle = styled.h1`
  font-family: monospace;
  text-transform: uppercase;
`

export const SummarySubtitle = styled.p`
  opacity: 0.5;
`

export const SummaryGenres = styled.div`
  display: inline-block;
  color: var(--purple);
  font-size: 1rem;
  text-transform: uppercase;
  font-family: monospace;
  padding: 0.4rem 1rem;
  border-radius: 3px;
  border: solid 1px var(--purple);
`

export const SummaryDescription = styled.div`
  display: inline-block;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 5px;
  background: linear-gradient(var(--beige), var(--pink));
`
