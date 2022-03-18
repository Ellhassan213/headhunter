import React from 'react'
import { useParams } from 'react-router-dom'
import { useVenues } from './VenueContext'
import { VenueContainer } from './styles'
import { GiEarthAfricaEurope } from 'react-icons/gi'
import { BsTelephoneInboundFill, BsHouseFill } from 'react-icons/bs'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import {
  BasicDetail,
  ShowDetail,
  ShowImage,
  SummaryTitle,
  SummarySubtitle,
  SummaryDescription
} from '../../shared/utils/BusinessSummaryStyles/styles'

type Id = { venueId: string }

const ShowVenue = () => {
  const { venueId } = useParams<Id>()
  const { isDataLoading, venueList } = useVenues()
  const venue = venueList?.filter(obj => obj.id.toString() === venueId)[0]

  return (
    <VenueContainer>
      {
        !isDataLoading
          ? venue
            ? <BasicDetail>
                <ShowDetail>
                  <SummaryTitle>{venue.name}</SummaryTitle>
                  <SummarySubtitle>ID: {venue.id}</SummarySubtitle>
                  <p> <GiEarthAfricaEurope /> {venue.city}, {venue.county}</p>
                  <p> <BsTelephoneInboundFill /> {venue.phone}</p>
                  <p> <BsHouseFill /> {venue.address}</p>
                  <SummaryDescription>
                    <p>About us</p>
                    <FaQuoteLeft/> {venue.description} <FaQuoteRight />
                  </SummaryDescription>
                </ShowDetail>
                <ShowImage>
                  <img src={venue.imageLink} alt="Venue Image" />
                </ShowImage>
              </BasicDetail>
            : <h3>{`Venue with ID ${venueId} not found`}</h3>
          : <h3>Fetcting data...</h3>
      }
    </VenueContainer>
  )
}

export default ShowVenue
