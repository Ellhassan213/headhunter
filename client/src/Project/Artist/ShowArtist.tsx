import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useArtists } from './ArtistContext'
import { ArtistContainer } from './styles'
import PageLoading from '../../shared/components/PageLoading'
import PageError from '../../shared/components/PageError'
import NotFound from '../../shared/components/NotFound'
import ArtistSummary from './ArtistSummary'
import EditArtist from './EditArtist'
import { DeleteButton, EditButton, CRUDButtons } from '../../shared/utils/BusinessSummaryStyles/styles'

type Id = { artistId: string }

const ShowArtist = () => {
  const { artistId } = useParams<Id>()
  const [formView, setFormView] = useState(false)
  const { error, artistList, apiDeleteArtist } = useArtists()
  const artist = artistList?.filter(obj => obj.id?.toString() === artistId)[0]

  const toggleFormView = () => {
    setFormView(prev => !prev)
  }

  if (error) return <PageError />
  if (!artistList) return <PageLoading />
  if (!artist) return <NotFound />

  return (
    <ArtistContainer>
      <CRUDButtons>
        <EditButton onClick={toggleFormView} />
        {!formView && <DeleteButton onClick={() => apiDeleteArtist(artist)} />}
      </CRUDButtons>
      {formView ? <EditArtist artist={artist} /> : <ArtistSummary artist={artist} />}
    </ArtistContainer>
  )
}

export default ShowArtist
