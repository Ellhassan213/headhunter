import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const PageLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  /* margin: -15px 10px; */
  padding: 0 5px;
  height: 0px;
  color: var(--black);

  &:hover {
    color: var(--light-purple);
  }
`

export const PageALink = styled.a`
  text-decoration: none;
  display: inline-block;
  padding: 0 5px;
  height: 0px;
  color: var(--black);

  &:hover {
    color: var(--light-purple);
  }
`

export const BasicDetail = styled.div`
  height: 100%;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: auto;
  grid-auto-flow: dense;
  justify-content: center;
  align-content: center;
`

export const ShowDetail = styled.div`
  padding: 1px;
`

export const ShowImage = styled.div`
  padding: 1px;

  & img {
    width: 100%;
    border-radius: 15px;
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
  margin-bottom: 15px;

  & span {
    display: inline-block;
    font-family: monospace;
    padding: 4px 8px;
    background: var(--light-blue);
    margin: 0 5px 5px 0;
    border-radius: 3px;
    color: var(--purple);
    font-size: 0.9em;
    text-transform: uppercase;
    border: solid 1px var(--purple);
  }
`

export const SummaryDescription = styled.div`
  display: inline-block;
  padding: 20px 30px;
  margin-top: 30px;
  border-radius: 15px;
  font-weight: bold;
  background: linear-gradient(var(--beige), var(--pink));
`

export const GroupedListTitle = styled.div`
  margin: -10px 0;
  padding: 0;
`
