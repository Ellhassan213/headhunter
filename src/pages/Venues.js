import React, { useContext } from 'react'
import { Context } from '../Context'
import DisplayGroupedList from '../components/DisplayGroupedList'
import _ from 'lodash'

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
