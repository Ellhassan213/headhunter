import React from 'react'
import { useParams } from 'react-router-dom'
import { useVenues } from './VenueContext'

type Id = { venueId: string }

const ShowVenue = () => {
  const { venueId } = useParams<Id>()
  const { venueList } = useVenues()
  const isVenue = venueList.filter(obj => obj.id.toString() === venueId)
  return (
    <div>
      {isVenue.length > 0 ? <p>{venueId}</p> : <p>Not Found</p>}
    </div>
  )
}

export default ShowVenue
