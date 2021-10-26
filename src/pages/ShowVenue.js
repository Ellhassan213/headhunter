import React from 'react'
import { useParams } from 'react-router-dom'

const ShowVenue = () => {
  const { venueId } = useParams()
  return (
    <div>
      <p>{venueId}</p>
    </div>
  )
}

export default ShowVenue
