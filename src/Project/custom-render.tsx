import React, { ReactElement, ReactNode } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import { VenueProvider } from './Venue/VenueContext'
import { ArtistProvider } from './Artist/ArtistContext'

type WrapperProps = {children?: ReactNode}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <ArtistProvider>
    <VenueProvider>
      <MemoryRouter>{children}</MemoryRouter>
    </VenueProvider>
    </ArtistProvider>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
}

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: Wrapper, ...options })

export * from '@testing-library/react'

export { customRender }
