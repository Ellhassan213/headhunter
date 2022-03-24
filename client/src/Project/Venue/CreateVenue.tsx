import React from 'react'
import CreateVenueForm from './CreateVenueForm'
import { VenueContainer } from './styles'

const CreateVenue = () => {
  const initialFormInputs = {
    id: '',
    name: '',
    city: '',
    county: '',
    address: '',
    phone: '',
    imageLink: '',
    description: ''
  }

  return (
    <VenueContainer>
      <CreateVenueForm initialFormInputs={initialFormInputs}/>
    </VenueContainer>
  )
}

export default CreateVenue
