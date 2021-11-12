import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import Project from '../Project'

const App = () => {
  return (
    <>
      <Header />
        <Switch>
          <Route component={Project} />
        </Switch>
    </>
  )
}

export default App
