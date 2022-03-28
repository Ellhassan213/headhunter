import React from 'react'
import { Artist } from './models'
import CreateArtistForm from './CreateArtistForm'
import { EditFormContainer } from '../../shared/utils/BusinessSummaryStyles/styles'

const EditArtist = ({ artist }: Artist) => {
  return (
    <EditFormContainer>
      <CreateArtistForm initialFormInputs={artist} updateID={artist.id} />
    </EditFormContainer>
  )
}

export default EditArtist
