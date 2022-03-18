import React from 'react'
import CreateArtistForm from './CreateArtistForm'
import { ArtistContainer } from './styles'

const CreateArtist = () => {
  return (
    <ArtistContainer>
      <h3>List a new artist</h3>
      <CreateArtistForm />
    </ArtistContainer>
  )
}

export default CreateArtist
