import React, { useContext } from 'react'
import { Context } from '../Context'
import groupBy from '../utils/DataHandling/groupBy' // NOTE: Generally good practice to add some unit testing to your utils
import DisplayGroupedList from '../components/DisplayGroupedList'

const Venues = () => {
  const { venueList } = useContext(Context)
  const groupByCity = groupBy('city')
  const groupedByCity = groupByCity(venueList)

  return (
    <div className="venues-page">
      <DisplayGroupedList groupedList={groupedByCity}/>
    </div>
  )
}

export default Venues
