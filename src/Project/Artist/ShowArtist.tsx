import React from 'react'
import { useParams } from 'react-router-dom'
import { useArtists } from './ArtistContext'

type Id = { artistId: string }

const ShowArtist = () => {
  const { artistId } = useParams<Id>()
  const { artistList } = useArtists()
  const isArtist = artistList.filter(obj => obj.id.toString() === artistId)
  return (
    <div>
      {
      isArtist.length > 0
        ? <p>{artistId}</p>
        : <p>Not Found</p>
      }
    </div>
  )
}

export default ShowArtist
