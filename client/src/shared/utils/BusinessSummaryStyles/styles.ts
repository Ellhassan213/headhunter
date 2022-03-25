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
  height: 0;
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
  margin: 0 10rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  align-items: center;
  animation: fade ease 3s;

  @keyframes fade {
    from {opacity: .3}
    to {opacity: 1}
  }

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

export const Summary = styled.div`
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 0 2px 2px var(--blue);
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
  z-index: 100;

  &:hover {
    color: var(--black);
  }
`

export const CRUDButtons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  margin: 0 10rem;

  @media screen and (max-width: 50em) {
    justify-content: center;
    margin: 0;
  }
`

export const EditFormContainer = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  animation: leftToRight ease 0.5s;

  @keyframes leftToRight {
  0% {
    margin-left: -50%;
  }
  100% {
    margin-left: 0%;
  }
`
