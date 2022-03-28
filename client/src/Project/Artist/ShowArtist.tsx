import React, { useState } from 'react'
import Axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'
import { useArtists, useUpdateArtists } from './ArtistContext'
import { ArtistContainer } from './styles'
import { toast } from 'react-toastify'
import PageLoading from '../../shared/components/PageLoading'
import PageError from '../../shared/components/PageError'
import NotFound from '../../shared/components/NotFound'
import ArtistSummary from './ArtistSummary'
import EditArtist from './EditArtist'
import { DeleteButton, EditButton, CRUDButtons } from '../../shared/utils/BusinessSummaryStyles/styles'

type Id = { artistId: string }

const ShowArtist = () => {
  const history = useHistory()
  const { artistId } = useParams<Id>()
  const { error, artistList } = useArtists()
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
      toast.success(`Successfully deleted ${artist.name}!`)
    }).catch((e) => toast.error(`We could'nt delete ${artist.name} unfortunately!`, e))
  }

  if (error) return <PageError />
  if (!artistList) return <PageLoading />
  if (!artist) return <NotFound />

  return (
    <ArtistContainer>
      <CRUDButtons>
        <EditButton onClick={toggleFormView} />
        {!formView && <DeleteButton onClick={deleteArtist} />}
      </CRUDButtons>
      {formView ? <EditArtist artist={artist} /> : <ArtistSummary artist={artist} />}
    </ArtistContainer>
  )
}

export default ShowArtist
