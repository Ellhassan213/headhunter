import React from 'react'
import { Route, Switch } from 'react-router-dom'

import MainPage from './MainPage'
import CreateVenue from './Venue/CreateVenue'
import CreateArtist from './Artist/CreateArtist'
import Venues from './Venue'
import ShowVenue from './Venue/ShowVenue'
import Artists from './Artist'
import ShowArtist from './Artist/ShowArtist'
import ErrorBoundary from '../shared/components/ErrorBoundary'
import NotFound from '../shared/components/NotFound'

const Project = () => {
  return (
    <>
      <ErrorBoundary>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/create-venue" component={CreateVenue} />
          <Route exact path="/create-artist" component={CreateArtist} />
          <Route exact path="/venues" component={Venues} />
          <Route exact path="/venues/:venueId" component={ShowVenue} />
          <Route exact path="/artists" component={Artists} />
          <Route exact path="/artists/:artistId" component={ShowArtist} />
          <Route component={NotFound} />
        </Switch>
      </ErrorBoundary>
    </>
  )
}

export default Project
