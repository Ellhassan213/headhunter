import React from 'react'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import CreateArtist from './CreateArtist'
import { ArtistFormInputErrorTestIds, ArtistFormInputTestIds } from './models/ArtistFormInputs'
import { renderHook, act } from '@testing-library/react-hooks'
import { useUpdateArtists, useArtists, ArtistProvider } from './ArtistContext'
import artistData from '../../shared/data/artistData'

import { rest } from 'msw'
import { setupServer } from 'msw/node'

const getArtistsHandler = rest.get('/api/getArtists', (req, res, ctx) => {
  return res(ctx.json(artistData.artists))
})

const postArtistHandler = rest.post('/api/insertArtist', (req, res, ctx) => {
  const artist = req.body
  return res(ctx.json(artist))
})


const handlers = [getArtistsHandler, postArtistHandler]

const server = setupServer(...handlers)

beforeAll(() => {
  server.listen()
})

afterEach(() => {
  server.resetHandlers(),
  cleanup
})

afterAll(() => {
  server.close(),
  cleanup
})

describe('<CreateArtist />', () => {  
  it('renders name field and its label', () => {
    render( <ArtistProvider> <CreateArtist /> </ArtistProvider>)

    expect(screen.getByText(/Name/i)).toBeInTheDocument()

    const input = screen.getByTestId(ArtistFormInputTestIds.Name) as HTMLInputElement
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'text')
  })

  it('shows correct name entered and does not display error message', () => {
    render( <ArtistProvider> <CreateArtist /> </ArtistProvider>)

    const input = screen.getByTestId(ArtistFormInputTestIds.Name) as HTMLInputElement
    fireEvent.change(input, { target: { value: 'Lawal' } })
    expect(input.value).toBe('Lawal')
    expect(screen.queryByTestId(ArtistFormInputErrorTestIds.Name)).not.toBeInTheDocument()
  })

  it('displays error message when nothing is entered in field', () => {
    render( <ArtistProvider> <CreateArtist /> </ArtistProvider>)

    const errorMessage = 'required'
    const input = screen.getByTestId(ArtistFormInputTestIds.Name) as HTMLInputElement
    fireEvent.change(input, { target: { value: '' } })
    fireEvent.blur(input)
    expect(screen.queryByTestId(ArtistFormInputErrorTestIds.Name)).toBeInTheDocument()
    expect(screen.queryByTestId(ArtistFormInputErrorTestIds.Name)?.textContent).toBe(errorMessage)
  })

  it('displays error message when special character is entered in name field', () => {
    render( <ArtistProvider> <CreateArtist /> </ArtistProvider>)

    const errorMessage = 'Numbers and special characters not allowed'
    const input = screen.getByTestId(ArtistFormInputTestIds.Name) as HTMLInputElement
    fireEvent.change(input, { target: { value: 'djd8327b' } })
    fireEvent.blur(input)
    expect(screen.queryByTestId(ArtistFormInputErrorTestIds.Name)).toBeInTheDocument()
    expect(screen.queryByTestId(ArtistFormInputErrorTestIds.Name)?.textContent).toBe(errorMessage)
  })
})

describe('<CreateArtist />', () => {  
  it('shows correct phone entered and does not display error message', () => {
    render( <ArtistProvider> <CreateArtist /> </ArtistProvider>)

    const input = screen.getByTestId(ArtistFormInputTestIds.Phone) as HTMLInputElement
    fireEvent.change(input, { target: { value: '08030303030' } })
    expect(input.value).toBe('08030303030')
    expect(screen.queryByTestId(ArtistFormInputErrorTestIds.Phone)).not.toBeInTheDocument()
  })

  it('displays error message when special character is entered in phone field', () => {
    render( <ArtistProvider> <CreateArtist /> </ArtistProvider>)

    const errorMessage = 'Phone Number not valid'
    const input = screen.getByTestId(ArtistFormInputTestIds.Phone) as HTMLInputElement
    fireEvent.change(input, { target: { value: 'djd8327b' } })
    fireEvent.blur(input)
    expect(screen.queryByTestId(ArtistFormInputErrorTestIds.Phone)).toBeInTheDocument()
    expect(screen.queryByTestId(ArtistFormInputErrorTestIds.Phone)?.textContent).toBe(errorMessage)
  })
})

describe('<CreateArtist />', () => {  
  it('shows correct image link entered and does not display error message', () => {
    render( <ArtistProvider> <CreateArtist /> </ArtistProvider>)

    const input = screen.getByTestId(ArtistFormInputTestIds.ImageLink) as HTMLInputElement
    fireEvent.change(input, { target: { value: 'https://image.com' } })
    expect(input.value).toBe('https://image.com')
    expect(screen.queryByTestId(ArtistFormInputErrorTestIds.ImageLink)).not.toBeInTheDocument()
  })

  it('displays error message when incorrect input is entered in image field', () => {
    render( <ArtistProvider> <CreateArtist /> </ArtistProvider>)

    const errorMessage = 'URL not valid'
    const input = screen.getByTestId(ArtistFormInputTestIds.ImageLink) as HTMLInputElement
    fireEvent.change(input, { target: { value: 'djd8327b' } })
    fireEvent.blur(input)
    expect(screen.queryByTestId(ArtistFormInputErrorTestIds.ImageLink)).toBeInTheDocument()
    expect(screen.queryByTestId(ArtistFormInputErrorTestIds.ImageLink)?.textContent).toBe(errorMessage)
  })
})

describe('useUpdateArtists', () => {
  it('calls the useUpdateArtists with the correct data', () => {
    const expectedList = [{
      id: '1',
      name: 'Side Bar',
      city: 'Lagos',
      county: 'South',
      genre: 'Country Music',
      phone: '08030303030',
      websiteLink: 'https://website.com',
      instagramLink: 'https://instagram.com',
      imageLink: 'https://imageLink.com',
      description: 'Bla Bla Bla...'
    }]

    const wrapper: React.FC = ({ children }) => <ArtistProvider>{children}</ArtistProvider>
    const { result } = renderHook (
      () => {
        const update = useUpdateArtists()
        const artistList = useArtists()
        return { ...artistList, update }
      },
      { wrapper }
    )

    act(() => result.current.update(expectedList))
    expect(result.current.artistList).toBe(expectedList)
  })
})

