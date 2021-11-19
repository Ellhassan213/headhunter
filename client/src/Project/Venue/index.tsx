import React from 'react'
import { Link } from 'react-router-dom'
import { useVenues } from './VenueContext'
import _ from 'lodash'

const Venues = () => {
  const { isDataLoading, venueList } = useVenues()
  const list = _.chain(venueList)?.groupBy('city').value()
  return (
    <div className="standard-page">
      {
        !isDataLoading
          ? list
            ? Object.keys(list).map(city => {
              return (
                <div key={city}>
                  <div className="grouped-list-heading">
                    <h3>{city}</h3>
                  </div>
                  {list[city].map((venue) => {
                    return (
                      <div key={venue.id}>
                        <i className="ri-building-2-line"></i>
                        <Link className="page-link" to={`/venues/${venue.id}`}>
                          <h5>{venue.name}</h5>
                        </Link>
                      </div>
                    )
                  })}
                  <br />
                </div>
              )
            })
            : <h3>Seems like there are no venues listed on this site yet</h3>
          : <h3>Fetching data...</h3>
      }
    </div>
  )
}

export default Venues
