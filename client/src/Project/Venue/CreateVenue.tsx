import React from 'react'
import CreateVenueForm from './CreateVenueForm'
import { VenueContainer } from './styles'

const CreateVenue = () => {
  return (
    <VenueContainer>
      <h3>List a new venue</h3>
      <CreateVenueForm />
    </VenueContainer>
  )
}

export default CreateVenue
