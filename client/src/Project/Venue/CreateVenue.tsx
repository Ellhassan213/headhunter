import React from 'react'
import CreateVenueForm from './CreateVenueForm'
import { VenueContainer } from './styles'
import { initialFormInputs } from './VenueDefaultData'

const CreateVenue = () => {
  return (
    <VenueContainer>
      <CreateVenueForm initialFormInputs={initialFormInputs}/>
    </VenueContainer>
  )
}

export default CreateVenue
