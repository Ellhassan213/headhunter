import React from 'react'
import { customRender, screen, cleanup, fireEvent } from '../custom-render'
import CreateVenue from './CreateVenue'

afterEach(cleanup)

describe('<CreateVenue />', () => {
  it('Renders an input field with functionality correctly', () => {
    customRender(<CreateVenue />)
    expect(screen.getByText(/Name/i)).toBeInTheDocument()

    const nameInput = screen.getByTestId('name-input')
    expect(nameInput).toBeInTheDocument()
    expect(nameInput).toHaveAttribute('type', 'text')

    fireEvent.change(nameInput, { target: { value: 'Lawal' } })
    expect(nameInput.value).toBe('Lawal')
    expect(screen.queryByTestId('name-input-error')).not.toBeInTheDocument()

    fireEvent.change(nameInput, { target: { value: '' } })
    fireEvent.blur(nameInput)
    expect(screen.queryByTestId('name-input-error')).toBeInTheDocument()
    expect(screen.queryByTestId('name-input-error').textContent).toBe('required')
  })
})

// Note: I can do alot more tests
