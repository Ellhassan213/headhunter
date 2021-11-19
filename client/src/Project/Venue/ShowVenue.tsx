import React from 'react'
import { useParams } from 'react-router-dom'
import { useVenues } from './VenueContext'

type Id = { venueId: string }

const ShowVenue = () => {
  const { venueId } = useParams<Id>()
  const { isDataLoading, venueList } = useVenues()
  const venue = venueList?.filter(obj => obj.id.toString() === venueId)[0]

  return (
    <div className='standard-page'>
      {
        !isDataLoading
          ? venue
            ? <div className="basic-details-container">
                <div className="show-details">
                  <h1 className="monospace">{venue.name}</h1>
                  <p className="subtitle">ID: {venue.id}</p>
                  <p> <i className="ri-earth-line"></i> {venue.city}, {venue.county}</p>
                  <p><i className="ri-phone-fill"></i> {venue.phone}</p>
                  <p><i className="ri-home-heart-fill"></i> {venue.address}</p>
                  <div className="description">
                    <p className="description-lead">About us</p>
                    <div className="description-detail">
                      <i className="ri-double-quotes-l"></i> {venue.description} <i className="ri-double-quotes-r"></i>
                    </div>
                  </div>
                </div>
                <div className="show-img-container">
                  <img src={venue.imageLink} alt="Venue Image" />
                </div>
              </div>
            : <h3>{`Venue with ID ${venueId} not found`}</h3>
          : <h3>Fetcting data...</h3>
      }
    </div>
  )
}

export default ShowVenue
