import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import Project from '../Project'
import NotFound from '../shared/components/NotFound'
import ErrorBoundary from '../shared/components/ErrorBoundary'

const App = () => {
  return (
    <>
      <Header />
      <ErrorBoundary>
        <Switch>
          <Route component={Project} />
          <Route component={NotFound} />
        </Switch>
      </ErrorBoundary>
    </>
  )
}

export default App
