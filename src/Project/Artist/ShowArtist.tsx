import React from 'react'
import { useParams } from 'react-router-dom'
import { useArtists } from './ArtistContext'
import NotFound from '../../shared/components/NotFound'

type Id = { artistId: string }

const ShowArtist = () => {
  const { artistId } = useParams<Id>()
  const { artistList } = useArtists()
  const isArtist = artistList.filter(obj => obj.id.toString() === artistId)
  return (
    <div>
      {isArtist.length > 0 ? <p>{artistId}</p> : <NotFound />}
    </div>
  )
}

export default ShowArtist
