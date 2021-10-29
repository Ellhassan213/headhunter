import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Provider } from './Context'

const Wrapper = ({ children }) => {
  return (
    <Provider>
      <MemoryRouter>{children}</MemoryRouter>
    </Provider>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
}

const customRender = (ui, options) =>
  render(ui, { wrapper: Wrapper, ...options })

export * from '@testing-library/react'

export { customRender }
