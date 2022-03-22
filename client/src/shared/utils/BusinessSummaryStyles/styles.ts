import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { RiDeleteBin5Line, RiEdit2Line } from 'react-icons/ri'

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
  margin: 5rem 10rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  align-items: center;
  /* box-shadow: -8px 0 8px -8px var(--blue), 0 8px 8px -8px var(--blue); */

  @media screen and (max-width: 50em) {
    margin: 0;
  }
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

export const DeleteButton = styled(RiDeleteBin5Line)`
  font-size: 2rem;
  color: var(--red);
  margin: 2rem;

  &:hover {
    color: var(--black);
  }
`

export const EditButton = styled(RiEdit2Line)`
  font-size: 2rem;
  color: var(--blue);
  margin: 2rem;

  &:hover {
    color: var(--black);
  }
`

export const CRUDButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  @media screen and (max-width: 50em) {
    flex-direction: row;
  }
`
