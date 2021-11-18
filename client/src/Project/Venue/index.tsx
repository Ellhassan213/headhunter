import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useVenues, useUpdateVenues } from './VenueContext'
import _ from 'lodash'
import Axios from 'axios'

const Venues = () => {
  const { venueList } = useVenues()
  const setVenueList = useUpdateVenues()

  const groupedByCity = _.chain(venueList).groupBy('city').value()

  useEffect(() => {
    Axios.get('https://headhunter-deploy.herokuapp.com/api/getVenues').then((response) => {
      console.log('got venues')
      console.log(response.data)
      setVenueList(response.data)
    }).catch((e) => console.log(e))
  }, [])

  return (
    <div className="standard-page">
      {Object.keys(groupedByCity).map(city => {
        return (
          <div key={city}>
            <div className="grouped-list-heading">
              <h3>{city}</h3>
            </div>
            {groupedByCity[city].map((venue) => {
              return (
                <div key={venue.id}>
                  <i className="ri-building-2-line"></i>
                  <Link
                    className="page-link"
                    to={`/venues/${venue.id}`}
                  >
                    <h5>{venue.name}</h5>
                  </Link>
                </div>
              )
            })}
            <br />
          </div>
        )
      })}
    </div>
  )
}

export default Venues
