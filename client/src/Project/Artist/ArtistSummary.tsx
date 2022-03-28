import React from 'react'
import { GiEarthAfricaEurope } from 'react-icons/gi'
import { BsTelephoneInboundFill, BsInstagram } from 'react-icons/bs'
import { FaLink, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import { Artist } from './models'
import {
  PageALink,
  BasicDetail,
  ShowImage,
  Summary,
  SummaryTitle,
  SummarySubtitle,
  SummaryGenres,
  SummaryDescription
} from '../../shared/utils/BusinessSummaryStyles/styles'

const ArtistSummary = ({ artist }: Artist) => {
  return (
    <BasicDetail>
      <Summary>
        <SummaryTitle>{artist.name}</SummaryTitle>
        <SummarySubtitle>ID: {artist.id}</SummarySubtitle>
        <SummaryGenres> {artist.genre} </SummaryGenres>
        <p><GiEarthAfricaEurope /> {artist.city}, {artist.county}</p>
        <p><BsTelephoneInboundFill /> {artist.phone}</p>
        <p><FaLink/> <PageALink href={artist.websiteLink} rel="noopener noreferrer" target="_blank">{artist.websiteLink}</PageALink></p>
        <p><BsInstagram /> <PageALink href={artist.instagramLink} rel="noopener noreferrer" target="_blank">{artist.instagramLink}</PageALink></p>
        <SummaryDescription>
          <p>About me</p>
          <FaQuoteLeft /> {artist.description} <FaQuoteRight />
        </SummaryDescription>
      </Summary>
      <ShowImage>
        <img src={artist.imageLink} alt="Artist Image" />
      </ShowImage>
    </BasicDetail>
  )
}

export default ArtistSummary
