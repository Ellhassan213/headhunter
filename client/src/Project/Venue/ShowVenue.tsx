import React, { useState } from 'react'
import Axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'
import { useVenues, useUpdateVenues } from './VenueContext'
import { Venue } from './models/VenueFormInputs'
import { VenueContainer } from './styles'
import CreateVenueForm from './CreateVenueForm'
import { GiEarthAfricaEurope } from 'react-icons/gi'
import { BsTelephoneInboundFill, BsHouseFill } from 'react-icons/bs'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import {
  BasicDetail,
  ShowImage,
  Summary,
  SummaryTitle,
  SummarySubtitle,
  SummaryDescription,
  DeleteButton,
  EditButton,
  CRUDButtons,
  EditFormContainer
} from '../../shared/utils/BusinessSummaryStyles/styles'

type Id = { venueId: string }

const VenueSummary = ({ venue }: Venue) => {
  return (
    <BasicDetail>
      <Summary>
        <SummaryTitle>{venue.name}</SummaryTitle>
        <SummarySubtitle>ID: {venue.id}</SummarySubtitle>
        <p> <GiEarthAfricaEurope /> {venue.city}, {venue.county}</p>
        <p> <BsTelephoneInboundFill /> {venue.phone}</p>
        <p> <BsHouseFill /> {venue.address}</p>
        <SummaryDescription>
          <p>About us</p>
          <FaQuoteLeft/> {venue.description} <FaQuoteRight />
        </SummaryDescription>
      </Summary>
      <ShowImage>
        <img src={venue.imageLink} alt="Venue Image" />
      </ShowImage>
    </BasicDetail>
  )
}

const EditVenue = ({ venue }: Venue) => {
  return (
    <EditFormContainer>
      <CreateVenueForm initialFormInputs={venue} updateID={venue.id} />
    </EditFormContainer>
  )
}

const ShowVenue = () => {
  const history = useHistory()
  const { venueId } = useParams<Id>()
  const { isDataLoading, venueList } = useVenues()
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
    }).catch((e) => console.log(e))
  }

  return (
    <VenueContainer>
    {!isDataLoading
      ? venue
        ? <>
          <CRUDButtons>
            <EditButton onClick={toggleFormView} />
            {!formView && <DeleteButton onClick={deleteVenue} />}
          </CRUDButtons>
          {formView ? <EditVenue venue={venue} /> : <VenueSummary venue={venue} />}
        </>
        : <h3>{`Venue with ID ${venueId} not found`}</h3>
      : <h3>Fetcting data...</h3>
    }
    </VenueContainer>
  )
}

export default ShowVenue
