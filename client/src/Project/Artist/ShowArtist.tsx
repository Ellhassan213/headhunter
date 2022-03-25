import React, { useState } from 'react'
import Axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'
import { useArtists, useUpdateArtists } from './ArtistContext'
import { Artist } from './models/ArtistFormInputs'
import { ArtistContainer } from './styles'
import CreateArtistForm from './CreateArtistForm'
import { GiEarthAfricaEurope } from 'react-icons/gi'
import { BsTelephoneInboundFill, BsInstagram } from 'react-icons/bs'
import { FaLink, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import {
  PageALink,
  BasicDetail,
  ShowImage,
  Summary,
  SummaryTitle,
  SummarySubtitle,
  SummaryGenres,
  SummaryDescription,
  DeleteButton,
  EditButton,
  CRUDButtons,
  EditFormContainer
} from '../../shared/utils/BusinessSummaryStyles/styles'

type Id = { artistId: string }

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

const EditArtist = ({ artist }: Artist) => {
  return (
    <EditFormContainer>
      <CreateArtistForm initialFormInputs={artist} updateID={artist.id} />
    </EditFormContainer>
  )
}

const ShowArtist = () => {
  const history = useHistory()
  const { artistId } = useParams<Id>()
  const { isDataLoading, artistList } = useArtists()
  const setArtistList = useUpdateArtists()
  const artist = artistList?.filter(obj => obj.id?.toString() === artistId)[0]
  const [formView, setFormView] = useState(false)

  const toggleFormView = () => {
    setFormView(prev => !prev)
  }

  const deleteArtist = () => {
    Axios.delete(`/api/deleteArtist/${artist.id}`).then(() => {
      const list = [...artistList].filter(artst => artst.id !== artist.id)
      setArtistList(list)
      history.push('/artists')
    }).catch((e) => console.log(e))
  }

  return (
    <ArtistContainer>
    {!isDataLoading
      ? artist
        ? <>
          <CRUDButtons>
            <EditButton onClick={toggleFormView} />
            {!formView && <DeleteButton onClick={deleteArtist} />}
          </CRUDButtons>
          {formView ? <EditArtist artist={artist} /> : <ArtistSummary artist={artist} />}
        </>
        : <h3>{`Artist with ID ${artistId} not found`}</h3>
      : <h3>Fetcting data...</h3>
    }
    </ArtistContainer>
  )
}

export default ShowArtist
