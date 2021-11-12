import React from 'react'

import Routes from './Routes'
import { VenueProvider } from './Venue/VenueContext'
import { ArtistProvider } from './Artist/ArtistContext'

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
