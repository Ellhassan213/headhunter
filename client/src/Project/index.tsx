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
      caption: 'Click to list a venue',
      pagePath: '/create-venue'
    },
    {
      url: createArtistImage,
      id: '2',
      caption: 'Click to list an Artist',
      pagePath: '/create-artist'
    },
    {
      url: seeArtistsImage,
      id: '3',
      caption: 'Click to see all Artists',
      pagePath: '/artists'
    },
    {
      url: seeVenuesImage,
      id: '4',
      caption: 'Click to see all Venues',
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
