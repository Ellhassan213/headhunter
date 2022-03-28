import React from 'react'
import { Venue } from './models/VenueFormInputs'
import CreateVenueForm from './CreateVenueForm'
import { EditFormContainer } from '../../shared/utils/BusinessSummaryStyles/styles'

const EditVenue = ({ venue }: Venue) => {
  return (
    <EditFormContainer>
      <CreateVenueForm initialFormInputs={venue} updateID={venue.id} />
    </EditFormContainer>
  )
}

export default EditVenue
