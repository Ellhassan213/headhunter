import React from 'react'
import { useVenues } from './VenueContext'
import { VenueContainer } from './styles'
import { PageLink, GroupedListTitle } from '../../shared/utils/BusinessSummaryStyles/styles'
import { BsBuilding } from 'react-icons/bs'
import _ from 'lodash'

const Venues = () => {
  const { isDataLoading, venueList } = useVenues()
  const list = _.chain(venueList)?.groupBy('city').value()
  return (
    <VenueContainer>
      {
        !isDataLoading
          ? list
            ? Object.keys(list).map(city => {
              return (
                <div key={city}>
                  <GroupedListTitle>
                    <h3>{city}</h3>
                  </GroupedListTitle>
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
    </VenueContainer>
  )
}

export default Venues
