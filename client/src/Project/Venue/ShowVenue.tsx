import React, { useState } from 'react'
import Axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'
import { useVenues, useUpdateVenues } from './VenueContext'
import { VenueContainer } from './styles'
import CreateVenueForm from './CreateVenueForm'
import { GiEarthAfricaEurope } from 'react-icons/gi'
import { BsTelephoneInboundFill, BsHouseFill } from 'react-icons/bs'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import {
  BasicDetail,
  ShowImage,
  SummaryTitle,
  SummarySubtitle,
  SummaryDescription,
  DeleteButton,
  EditButton,
  CRUDButtons,
  EditFormContainer
} from '../../shared/utils/BusinessSummaryStyles/styles'

type Id = { venueId: string }

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
    Axios.delete(`/api/deleteVenue/${venue.id}`).then(res => {
      console.log('Deleted: ', res)
      const list = [...venueList].filter(ven => ven.id !== venue.id)
      setVenueList(list)
      history.push('/venues')
    }).catch((e) => console.log(e))
  }

  return (
    <VenueContainer>
      {
        !isDataLoading
          ? venue
            ? <BasicDetail>
                <div>
                  <SummaryTitle>{venue.name}</SummaryTitle>
                  <SummarySubtitle>ID: {venue.id}</SummarySubtitle>
                  <p> <GiEarthAfricaEurope /> {venue.city}, {venue.county}</p>
                  <p> <BsTelephoneInboundFill /> {venue.phone}</p>
                  <p> <BsHouseFill /> {venue.address}</p>
                  <SummaryDescription>
                    <p>About us</p>
                    <FaQuoteLeft/> {venue.description} <FaQuoteRight />
                  </SummaryDescription>
                </div>
                <ShowImage>
                  <img src={venue.imageLink} alt="Venue Image" />
                </ShowImage>
                <CRUDButtons>
                  <EditButton onClick={toggleFormView} />
                  {!formView && <DeleteButton onClick={deleteVenue} />}
                </CRUDButtons>
              </BasicDetail>
            : <h3>{`Venue with ID ${venueId} not found`}</h3>
          : <h3>Fetcting data...</h3>
      }
      {formView &&
        <EditFormContainer>
          <CreateVenueForm initialFormInputs={venue} updateID={venue.id} />
        </EditFormContainer>
      }
    </VenueContainer>
  )
}

export default ShowVenue
