import React from 'react'
import { useParams } from 'react-router-dom'

const ShowArtist = () => {
  const { artistId } = useParams()
  return (
    <div>
      <p>{artistId}</p>
    </div>
  )
}

export default ShowArtist
