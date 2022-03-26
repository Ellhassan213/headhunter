import React from 'react'
import { useVenues } from './VenueContext'
import { VenueList, CityGroup } from './styles'
import SliderContent from '../../shared/components/AutoSlider/SliderContent'
import { PageLink } from '../../shared/utils/BusinessSummaryStyles/styles'
import { BsBuilding } from 'react-icons/bs'
import _ from 'lodash'

const Venues = () => {
  const { isDataLoading, venueList } = useVenues()
  const list = _.chain(venueList)?.groupBy('city').value()
  return (
    <VenueList>
      <div>
      <h1>List of venues by City</h1>
      <br />
      {!isDataLoading
        ? list
          ? Object.keys(list).map(city => {
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
          })
          : <h3>Seems like there are no venues listed on this site yet</h3>
        : <h3>Fetching data...</h3>
      }
      </div>
      <SliderContent />
    </VenueList>
  )
}

export default Venues
