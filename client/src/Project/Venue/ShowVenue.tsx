import React from 'react'
import { useParams } from 'react-router-dom'
import { useVenues } from './VenueContext'

type Id = { venueId: string }

const ShowVenue = () => {
  const { venueId } = useParams<Id>()
  const { venueList } = useVenues()
  const isVenue = venueList.filter(obj => obj.id.toString() === venueId)
  const venue = venueList[parseInt(venueId) - 1]
  return (
    <div className='standard-page'>
      {
        isVenue.length > 0
          ? <div className="basic-details-container">
              <div className="show-details">
                <h1 className="monospace">{venue.name}</h1>
                <p className="subtitle">ID: {venue.id}</p>
                {/* <div className="genres"> <span className="genre">{venue.genre}</span> </div> */}
                <p> <i className="ri-earth-line"></i> {venue.city}, {venue.county}</p>
                <p><i className="ri-phone-fill"></i> {venue.phone}</p>
                <p><i className="ri-home-heart-fill"></i> {venue.address}</p>
                {/* <p><i className="ri-links-fill"></i> <a className="page-link" href={venue.websiteLink} rel="noopener noreferrer" target="_blank">{venue.websiteLink}</a></p>
                <p><i className="ri-instagram-line"></i> <a className="page-link" href={venue.instagramLink} rel="noopener noreferrer" target="_blank">{venue.instagramLink}</a></p> */}
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
          : <p>Not Found</p>
      }
    </div>
  )
}

export default ShowVenue
