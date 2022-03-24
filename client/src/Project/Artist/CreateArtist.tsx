import React from 'react'
import CreateArtistForm from './CreateArtistForm'
import { ArtistContainer } from './styles'

const CreateArtist = () => {
  const initialFormInputs = {
    id: '',
    name: '',
    city: '',
    county: '',
    genre: '',
    phone: '',
    imageLink: '',
    websiteLink: '',
    instagramLink: '',
    description: ''
  }

  return (
    <ArtistContainer>
      <CreateArtistForm initialFormInputs={initialFormInputs}/>
    </ArtistContainer>
  )
}

export default CreateArtist
