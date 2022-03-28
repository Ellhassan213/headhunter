import React from 'react'
import { GiEarthAfricaEurope } from 'react-icons/gi'
import { BsTelephoneInboundFill, BsHouseFill } from 'react-icons/bs'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import { Venue } from './models'
import {
  BasicDetail,
  ShowImage,
  Summary,
  SummaryTitle,
  SummarySubtitle,
  SummaryDescription
} from '../../shared/utils/BusinessSummaryStyles/styles'

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

export default VenueSummary
