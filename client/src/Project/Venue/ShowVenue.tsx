import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useVenues } from './VenueContext'
import { VenueContainer } from './styles'
import PageLoading from '../../shared/components/PageLoading'
import PageError from '../../shared/components/PageError'
import NotFound from '../../shared/components/NotFound'
import VenueSummary from './VenueSummary'
import EditVenue from './EditVenue'
import { DeleteButton, EditButton, CRUDButtons } from '../../shared/utils/BusinessSummaryStyles/styles'

type Id = { venueId: string }

const ShowVenue = () => {
  const { venueId } = useParams<Id>()
  const { error, venueList, apiDeleteVenue } = useVenues()
  const venue = venueList?.filter(obj => obj.id?.toString() === venueId)[0]
  const [formView, setFormView] = useState(false)

  const toggleFormView = () => {
    setFormView(prev => !prev)
  }

  if (error) return <PageError />
  if (!venueList) return <PageLoading />
  if (!venue) return <NotFound />

  return (
    <VenueContainer>
      <CRUDButtons>
        <EditButton onClick={toggleFormView} />
        {!formView && <DeleteButton onClick={() => apiDeleteVenue(venue)} />}
      </CRUDButtons>
      {formView ? <EditVenue venue={venue} /> : <VenueSummary venue={venue} />}
    </VenueContainer>
  )
}

export default ShowVenue
