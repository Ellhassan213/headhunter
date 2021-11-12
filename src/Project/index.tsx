import React from 'react'
import { Route, Switch } from 'react-router-dom'

import MainPage from './MainPage'
import CreateVenue from './Venue/CreateVenue'
import CreateArtist from './Artist/CreateArtist'
import Venues from './Venue'
import ShowVenue from './Venue/ShowVenue'
import Artists from './Artist'
import ShowArtist from './Artist/ShowArtist'
import NotFound from '../shared/components/NotFound'
import { VenueProvider } from './Venue/VenueContext'
import { ArtistProvider } from './Artist/ArtistContext'

const Project = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <ArtistProvider>
        <VenueProvider>
          <Switch>
            <Route exact path="/create-artist" component={CreateArtist} />
            <Route exact path="/artists" component={Artists} />
            <Route exact path="/artists/:artistId" component={ShowArtist} />
            <Route exact path="/create-venue" component={CreateVenue} />
            <Route exact path="/venues" component={Venues} />
            <Route exact path="/venues/:venueId" component={ShowVenue} />
            <Route component={NotFound} />
          </Switch>
        </VenueProvider>
        </ArtistProvider>
      </Switch>
    </>
  )
}

export default Project
