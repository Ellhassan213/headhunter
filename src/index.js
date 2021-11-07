import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'

import { Provider } from './Context'

ReactDOM.render(
  <Provider>
    <Router>
      <StrictMode>
        <App />
      </StrictMode>
    </Router>
  </Provider>,
  document.getElementById('root')
)

// Note: May be I will refactor at some point with TypeScript
