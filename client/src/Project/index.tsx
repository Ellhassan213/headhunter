import React from 'react'
import Routes from './Routes'
import { VenueProvider } from './Venue/VenueContext'
import { ArtistProvider } from './Artist/ArtistContext'

import createVenueImage from '../shared/assets/images/createVenue.png'
import createArtistImage from '../shared/assets/images/createArtist.png'
import seeArtistsImage from '../shared/assets/images/seeArtists.png'
import seeVenuesImage from '../shared/assets/images/seeVenues.png'

const mainPageImageData = {
  images: [
    {
      url: createVenueImage,
      id: '1',
      caption: 'Add Venue',
      pagePath: '/create-venue'
    },
    {
      url: createArtistImage,
      id: '2',
      caption: 'Add Artist',
      pagePath: '/create-artist'
    },
    {
      url: seeArtistsImage,
      id: '3',
      caption: 'Artists',
      pagePath: '/artists'
    },
    {
      url: seeVenuesImage,
      id: '4',
      caption: 'Venues',
      pagePath: '/venues'
    }
  ]
}

const Project = () => {
  return (
    <>
      <ArtistProvider>
      <VenueProvider>
        <Routes />
      </VenueProvider>
      </ArtistProvider>
    </>
  )
}

export default Project
export { mainPageImageData }
