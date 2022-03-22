import React from 'react'
import Axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'
import { useArtists, useUpdateArtists } from './ArtistContext'
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
  SummaryDescription,
  DeleteButton,
  // EditButton,
  CRUDButtons
} from '../../shared/utils/BusinessSummaryStyles/styles'

type Id = { artistId: string }

const ShowArtist = () => {
  const history = useHistory()
  const { artistId } = useParams<Id>()
  const { isDataLoading, artistList } = useArtists()
  const setArtistList = useUpdateArtists()
  const artist = artistList?.filter(obj => obj.id.toString() === artistId)[0]

  const deleteArtist = () => {
    Axios.delete(`/api/deleteArtist/${artist.id}`).then(res => {
      console.log('Deleted: ', res)
      const list = [...artistList].filter(artst => artst.id !== artist.id)
      setArtistList(list)
      history.push('/artists')
    }).catch((e) => console.log(e))
  }

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
              <CRUDButtons>
                {/* <EditButton onClick={editArtist} /> */}
                <DeleteButton onClick={deleteArtist}/>
              </CRUDButtons>
            </BasicDetail>
            : <h3>{`Artist with ID ${artistId} not found`}</h3>
          : <h3>Fetcting data...</h3>
      }
    </ArtistContainer>
  )
}

export default ShowArtist
