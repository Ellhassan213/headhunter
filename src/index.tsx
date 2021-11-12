import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import ErrorBoundary from './shared/components/ErrorBoundary'

ReactDOM.render(
  <StrictMode>
    <Router>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Router>
  </StrictMode>,
  document.getElementById('root')
)
