import React from 'react'
import { Router } from 'react-router-dom'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import CreateArtist from './CreateArtist'
import Artists from '.'
import { ArtistFormInputErrorTestIds, ArtistFormInputTestIds } from './models/ArtistFormInputs'
import { renderHook, act } from '@testing-library/react-hooks'
import { useUpdateArtists, useArtists, ArtistProvider } from './ArtistContext'
import artistData from '../../shared/data/artistData'


afterAll(cleanup)

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

  it('it successfully creates artist and then routes the artist list page', () => {
    const history = createMemoryHistory()
    
    render(
        <Router history={history}>
          <ArtistProvider> <CreateArtist /> </ArtistProvider>
        </Router>
    )

    const nameInput = screen.getByTestId(ArtistFormInputTestIds.Name) as HTMLInputElement
    fireEvent.change(nameInput, { target: { value: 'Lawal' } })
    fireEvent.blur(nameInput)

    const cityInput = screen.getByTestId(ArtistFormInputTestIds.City) as HTMLInputElement
    fireEvent.change(cityInput, { target: { value: 'London' } })
    fireEvent.blur(cityInput)

    const countyInput = screen.getByTestId(ArtistFormInputTestIds.County) as HTMLInputElement
    fireEvent.change(countyInput, { target: { value: 'South' } })
    fireEvent.blur(countyInput)
  
    const genreInput = screen.getByTestId(ArtistFormInputTestIds.Genre) as HTMLInputElement
    fireEvent.change(genreInput, { target: { value: 'Jazz' } })
    fireEvent.blur(genreInput)  

    const phoneInput = screen.getByTestId(ArtistFormInputTestIds.Phone) as HTMLInputElement
    fireEvent.change(phoneInput, { target: { value: '08030303030' } })
    fireEvent.blur(phoneInput)  

    const instagramInput = screen.getByTestId(ArtistFormInputTestIds.InstagramLink) as HTMLInputElement
    fireEvent.change(instagramInput, { target: { value: 'https://instagram.com' } })
    fireEvent.blur(instagramInput)  

    const imageLinkInput = screen.getByTestId(ArtistFormInputTestIds.ImageLink) as HTMLInputElement
    fireEvent.change(imageLinkInput, { target: { value: 'https://image.com' } })
    fireEvent.blur(imageLinkInput)

    const websiteLinkInput = screen.getByTestId(ArtistFormInputTestIds.WebsiteLink) as HTMLInputElement
    fireEvent.change(websiteLinkInput, { target: { value: 'https://website.com' } })
    fireEvent.blur(websiteLinkInput) 

    const descriptionInput = screen.getByTestId(ArtistFormInputTestIds.Description) as HTMLInputElement
    fireEvent.change(descriptionInput, { target: { value: 'Bla Bla Bla...' } })
    fireEvent.blur(descriptionInput)

    expect(screen.getByText('Submit')).toBeInTheDocument()
    fireEvent.click(screen.getByText('Submit'))
    
    expect(history.length).toBe(2)
    expect(history.location.pathname).toBe('/artists')
  })
})

describe('<Artists />', () => {
  it('renders the artists page successfully and lists artists', () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <ArtistProvider> <Artists /> </ArtistProvider>
      </Router>
    )
    expect(screen.getByText(artistData.artists[0].name)).toBeInTheDocument()
    expect(screen.getByText(artistData.artists[1].name)).toBeInTheDocument()
    expect(screen.getByText(artistData.artists[2].name)).toBeInTheDocument()
    expect(screen.getByText(artistData.artists[3].name)).toBeInTheDocument()
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

// Note: I can do alot more tests
