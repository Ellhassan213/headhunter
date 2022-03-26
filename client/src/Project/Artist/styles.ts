import styled from 'styled-components'

export const ArtistContainer = styled.div`
  margin: 3rem 3rem;

  @media screen and (max-width: 50em) {
    margin: 1rem;
  }
`

export const ArtistList = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: auto;
  padding: 3rem;

  @media screen and (max-width: 50em) {
    margin: 0rem;
  }
`
