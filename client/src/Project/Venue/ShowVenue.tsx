import React, { useState } from 'react'
import Axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'
import { useVenues, useUpdateVenues } from './VenueContext'
import { VenueContainer } from './styles'
import { toast } from 'react-toastify'
import PageLoading from '../../shared/components/PageLoading'
import PageError from '../../shared/components/PageError'
import NotFound from '../../shared/components/NotFound'
import VenueSummary from './VenueSummary'
import EditVenue from './EditVenue'
import { DeleteButton, EditButton, CRUDButtons } from '../../shared/utils/BusinessSummaryStyles/styles'

type Id = { venueId: string }

const ShowVenue = () => {
  const history = useHistory()
  const { venueId } = useParams<Id>()
  const { error, venueList } = useVenues()
  const setVenueList = useUpdateVenues()
  const venue = venueList?.filter(obj => obj.id?.toString() === venueId)[0]
  const [formView, setFormView] = useState(false)

  const toggleFormView = () => {
    setFormView(prev => !prev)
  }

  const deleteVenue = () => {
    Axios.delete(`/api/deleteVenue/${venue.id}`).then(() => {
      const list = [...venueList].filter(ven => ven.id !== venue.id)
      setVenueList(list)
      history.push('/venues')
      toast.success(`Successfully deleted ${venue.name}!`)
    }).catch((e) => toast.error(`We could'nt delete ${venue.name} unfortunately!`, e))
  }

  if (error) return <PageError />
  if (!venueList) return <PageLoading />
  if (!venue) return <NotFound />

  return (
    <VenueContainer>
      <CRUDButtons>
        <EditButton onClick={toggleFormView} />
        {!formView && <DeleteButton onClick={deleteVenue} />}
      </CRUDButtons>
      {formView ? <EditVenue venue={venue} /> : <VenueSummary venue={venue} />}
    </VenueContainer>
  )
}

export default ShowVenue
