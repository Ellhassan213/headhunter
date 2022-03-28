import React from 'react'
import { useVenues } from './VenueContext'
import { VenueList, CityGroup } from './styles'
import SliderContent from '../../shared/components/AutoSlider/SliderContent'
import { PageLink } from '../../shared/utils/BusinessSummaryStyles/styles'
import { BsBuilding } from 'react-icons/bs'
import PageLoading from '../../shared/components/PageLoading'
import PageError from '../../shared/components/PageError'
import _ from 'lodash'

const Venues = () => {
  const { error, venueList } = useVenues()
  const list = _.chain(venueList)?.groupBy('city').value()

  if (error) return <PageError />
  if (!venueList) return <PageLoading />

  return (
    <VenueList>
      <div>
        <h1>List of venues by City</h1>
        <br />
        {Object.keys(list).map(city => {
          return (
            <div key={city}>
              <CityGroup> <h3>{city}</h3> </CityGroup>
              {list[city].map((venue) => {
                return (
                  <div key={venue.id}>
                    <BsBuilding />
                    <PageLink to={`/venues/${venue.id}`}>
                      <h5>{venue.name}</h5>
                    </PageLink>
                  </div>
                )
              })}
              <br />
            </div>
          )
        })}
      </div>
      <SliderContent />
    </VenueList>
  )
}

export default Venues
