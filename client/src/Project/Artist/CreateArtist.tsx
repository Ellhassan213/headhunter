import React from 'react'
import CreateArtistForm from './CreateArtistForm'
import { CreateArtistContainer } from './styles'

const CreateArtist = () => {
  return (
    <CreateArtistContainer>
      <h3>List a new artist</h3>
      <CreateArtistForm />
    </CreateArtistContainer>
  )
}

export default CreateArtist
