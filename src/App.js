import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NotFound from './components/NotFound'

import Header from './components/Header'
import MainPage from './pages/MainPage'
import CreateVenue from './pages/CreateVenue'
import CreateArtist from './pages/CreateArtist'
import Venues from './pages/Venues'
import ShowVenue from './pages/ShowVenue'
import Artists from './pages/Artists'
import ShowArtist from './pages/ShowArtist'
import CreateDecorator from './pages/CreateDecorator'

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/create-venue">
          <CreateVenue />
        </Route>
        <Route exact path="/create-artist">
          <CreateArtist />
        </Route>
        <Route exact path="/venues">
          <Venues />
        </Route>
        <Route exact path="/venues/:venueId">
          <ShowVenue />
        </Route>
        <Route exact path="/artists">
          <Artists />
        </Route>
        <Route exact path="/artists/:artistId">
          <ShowArtist />
        </Route>
        <Route exact path="/create-decorator">
          <CreateDecorator />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  )
}

export default App
