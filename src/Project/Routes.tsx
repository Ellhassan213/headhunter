import React from 'react'
import { Route, Switch } from 'react-router-dom'

import MainPage from './MainPage'
import CreateArtist from './Artist/CreateArtist'
import Artists from './Artist'
import ShowArtist from './Artist/ShowArtist'
import CreateVenue from './Venue/CreateVenue'
import Venues from './Venue'
import ShowVenue from './Venue/ShowVenue'
import NotFound from '../shared/components/NotFound'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/create-artist" component={CreateArtist} />
      <Route exact path="/artists" component={Artists} />
      <Route exact path="/artists/:artistId" component={ShowArtist} />
      <Route exact path="/create-venue" component={CreateVenue} />
      <Route exact path="/venues" component={Venues} />
      <Route exact path="/venues/:venueId" component={ShowVenue} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default Routes
