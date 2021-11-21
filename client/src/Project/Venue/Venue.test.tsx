import React from 'react'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import CreateVenue from './CreateVenue'
import { VenueFormInputErrorTestIds, VenueFormInputTestIds } from './models/VenueFormInputs'
import { renderHook, act } from '@testing-library/react-hooks'
import { useUpdateVenues, useVenues, VenueProvider } from './VenueContext'
import venueData from '../../shared/data/venueData'


import { rest } from 'msw'
import { setupServer } from 'msw/node'

const getVenueHandler = rest.get('/api/getVenues', (req, res, ctx) => {
  return res (
    ctx.json(venueData.venues)
  )
})

const postVenueHandler = rest.post('/api/insertVenue', (req, res, ctx) => {
  const venue = req.body
  return res(ctx.json(venue))
})

const handlers = [getVenueHandler, postVenueHandler]

const server = setupServer(...handlers)

beforeAll(() => {
  server.listen()
})

afterEach(() => server.resetHandlers())

afterAll(() => {
  server.close()
  cleanup
})


describe('<CreateVenue />', () => {  
  it('renders name field and its label', () => {
    render( <VenueProvider> <CreateVenue /> </VenueProvider>)

    expect(screen.getByText(/Name/i)).toBeInTheDocument()

    const input = screen.getByTestId(VenueFormInputTestIds.Name) as HTMLInputElement
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'text')
  })

  it('shows correct name entered and does not display error message', () => {
    render( <VenueProvider> <CreateVenue /> </VenueProvider>)

    const input = screen.getByTestId(VenueFormInputTestIds.Name) as HTMLInputElement
    fireEvent.change(input, { target: { value: 'Lawal' } })
    expect(input.value).toBe('Lawal')
    expect(screen.queryByTestId(VenueFormInputErrorTestIds.Name)).not.toBeInTheDocument()
  })

  it('displays error message when nothing is entered in field', () => {
    render( <VenueProvider> <CreateVenue /> </VenueProvider>)

    const errorMessage = 'required'
    const input = screen.getByTestId(VenueFormInputTestIds.Name) as HTMLInputElement
    fireEvent.change(input, { target: { value: '' } })
    fireEvent.blur(input)
    expect(screen.queryByTestId(VenueFormInputErrorTestIds.Name)).toBeInTheDocument()
    expect(screen.queryByTestId(VenueFormInputErrorTestIds.Name)?.textContent).toBe(errorMessage)
  })

  it('displays error message when special character is entered in name field', () => {
    render( <VenueProvider> <CreateVenue /> </VenueProvider>)

    const errorMessage = 'Numbers and special characters not allowed'
    const input = screen.getByTestId(VenueFormInputTestIds.Name) as HTMLInputElement
    fireEvent.change(input, { target: { value: 'djd8327b' } })
    fireEvent.blur(input)
    expect(screen.queryByTestId(VenueFormInputErrorTestIds.Name)).toBeInTheDocument()
    expect(screen.queryByTestId(VenueFormInputErrorTestIds.Name)?.textContent).toBe(errorMessage)
  })
})

describe('<CreateVenue />', () => {  
  it('shows correct phone entered and does not display error message', () => {
    render( <VenueProvider> <CreateVenue /> </VenueProvider>)

    const input = screen.getByTestId(VenueFormInputTestIds.Phone) as HTMLInputElement
    fireEvent.change(input, { target: { value: '08030303030' } })
    expect(input.value).toBe('08030303030')
    expect(screen.queryByTestId(VenueFormInputErrorTestIds.Phone)).not.toBeInTheDocument()
  })

  it('displays error message when special character is entered in phone field', () => {
    render( <VenueProvider> <CreateVenue /> </VenueProvider>)

    const errorMessage = 'Phone Number not valid'
    const input = screen.getByTestId(VenueFormInputTestIds.Phone) as HTMLInputElement
    fireEvent.change(input, { target: { value: 'djd8327b' } })
    fireEvent.blur(input)
    expect(screen.queryByTestId(VenueFormInputErrorTestIds.Phone)).toBeInTheDocument()
    expect(screen.queryByTestId(VenueFormInputErrorTestIds.Phone)?.textContent).toBe(errorMessage)
  })
})

describe('<CreateVenue />', () => {  
  it('shows correct image link entered and does not display error message', () => {
    render( <VenueProvider> <CreateVenue /> </VenueProvider>)

    const input = screen.getByTestId(VenueFormInputTestIds.ImageLink) as HTMLInputElement
    fireEvent.change(input, { target: { value: 'https://image.com' } })
    expect(input.value).toBe('https://image.com')
    expect(screen.queryByTestId(VenueFormInputErrorTestIds.ImageLink)).not.toBeInTheDocument()
  })

  it('displays error message when incorrect input is entered in image field', () => {
    render( <VenueProvider> <CreateVenue /> </VenueProvider>)

    const errorMessage = 'URL not valid'
    const input = screen.getByTestId(VenueFormInputTestIds.ImageLink) as HTMLInputElement
    fireEvent.change(input, { target: { value: 'djd8327b' } })
    fireEvent.blur(input)
    expect(screen.queryByTestId(VenueFormInputErrorTestIds.ImageLink)).toBeInTheDocument()
    expect(screen.queryByTestId(VenueFormInputErrorTestIds.ImageLink)?.textContent).toBe(errorMessage)
  })
})

describe('useUpdateVenues', () => {
  it('calls the useUpdateVenues with the correct data', () => {
    const expectedList = [{
      id: '1',
      name: 'EUS',
      city: 'Kaduna',
      county: 'North',
      address: 'No. 1 EUS',
      phone: '08030303030',
      imageLink: 'https://EUS.com',
      description: 'Bla Bla Bla...'
    }]

    const wrapper: React.FC = ({ children }) => <VenueProvider>{children}</VenueProvider>
    const { result } = renderHook (
      () => {
        const update = useUpdateVenues()
        const venueList = useVenues()
        return { ...venueList, update }
      },
      { wrapper }
    )

    act(() => result.current.update(expectedList))
    expect(result.current.venueList).toBe(expectedList)
  })
})

