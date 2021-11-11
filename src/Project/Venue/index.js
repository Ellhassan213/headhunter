import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../Context'
import _ from 'lodash'

const DisplayGroupedList = (props) => {
  return (
    Object.keys(props.groupedList).map(city => {
      return (
        <div key={city}>
          <div className="grouped-list-heading">
            <h3>{city}</h3>
          </div>
          {props.groupedList[city].map((venue) => {
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
    })
  )
}

const Venues = () => {
  const { venueList } = useContext(Context)
  const groupedByCity = _.chain(venueList).groupBy('city').value()

  return (
    <div className="venues-page">
      <DisplayGroupedList groupedList={groupedByCity}/>
    </div>
  )
}

export default Venues
