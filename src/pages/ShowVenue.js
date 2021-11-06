import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../Context'
import NotFound from '../components/NotFound'

const ShowVenue = () => {
  const { venueId } = useParams()
  const { venueList } = useContext(Context)
  const isVenue = venueList.filter(obj => obj.id.toString() === venueId)
  return (
    <div>
      {isVenue.length > 0 ? <p>{venueId}</p> : <NotFound />}
    </div>
  )
}

export default ShowVenue
