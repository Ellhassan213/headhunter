import React from 'react'
import { useParams } from 'react-router-dom'
import { useArtists } from './ArtistContext'
import { ArtistContainer } from './styles'
import { GiEarthAfricaEurope } from 'react-icons/gi'
import { BsTelephoneInboundFill, BsInstagram } from 'react-icons/bs'
import { FaLink, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import {
  PageALink,
  BasicDetail,
  ShowImage,
  SummaryTitle,
  SummarySubtitle,
  SummaryGenres,
  SummaryDescription
} from '../../shared/utils/BusinessSummaryStyles/styles'

type Id = { artistId: string }

const ShowArtist = () => {
  const { artistId } = useParams<Id>()
  const { isDataLoading, artistList } = useArtists()
  const artist = artistList?.filter(obj => obj.id.toString() === artistId)[0]

  return (
    <ArtistContainer>
      {
        !isDataLoading
          ? artist
            ? <BasicDetail>
              <div>
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
              </div>
              <ShowImage>
                <img src={artist.imageLink} alt="Artist Image" />
              </ShowImage>
            </BasicDetail>
            : <h3>{`Artist with ID ${artistId} not found`}</h3>
          : <h3>Fetcting data...</h3>
      }
    </ArtistContainer>
  )
}

export default ShowArtist
