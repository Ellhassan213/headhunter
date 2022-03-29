import React from 'react'
import CreateArtistForm from './CreateArtistForm'
import { ArtistContainer } from './styles'
import { initialFormInputs } from './ArtistDefaultData'

const CreateArtist = () => {
  return (
    <ArtistContainer>
      <CreateArtistForm initialFormInputs={initialFormInputs}/>
    </ArtistContainer>
  )
}

export default CreateArtist
