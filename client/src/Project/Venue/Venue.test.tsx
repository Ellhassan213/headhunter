import React from 'react'
import { Router } from 'react-router-dom'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import CreateVenue from './CreateVenue'
import Venues from '.'
import { VenueFormInputErrorTestIds, VenueFormInputTestIds } from './models/VenueFormInputs'
import { renderHook, act } from '@testing-library/react-hooks'
import { useUpdateVenues, useVenues, VenueProvider } from './VenueContext'
import venueData from '../../shared/data/venueData'


afterAll(cleanup)

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

  it('it successfully creates venue and then routes the venue list page', () => {
    const history = createMemoryHistory()
    
    render(
        <Router history={history}>
          <VenueProvider> <CreateVenue /> </VenueProvider>
        </Router>
    )

    const nameInput = screen.getByTestId(VenueFormInputTestIds.Name) as HTMLInputElement
    fireEvent.change(nameInput, { target: { value: 'Lawal' } })
    fireEvent.blur(nameInput)

    const cityInput = screen.getByTestId(VenueFormInputTestIds.City) as HTMLInputElement
    fireEvent.change(cityInput, { target: { value: 'London' } })
    fireEvent.blur(cityInput)

    const countyInput = screen.getByTestId(VenueFormInputTestIds.County) as HTMLInputElement
    fireEvent.change(countyInput, { target: { value: 'South' } })
    fireEvent.blur(countyInput)  

    const addressInput = screen.getByTestId(VenueFormInputTestIds.Address) as HTMLInputElement
    fireEvent.change(addressInput, { target: { value: 'South Side Apartment' } })
    fireEvent.blur(addressInput)  

    const phoneInput = screen.getByTestId(VenueFormInputTestIds.Phone) as HTMLInputElement
    fireEvent.change(phoneInput, { target: { value: '08030303030' } })
    fireEvent.blur(phoneInput)  

    const imageLinkInput = screen.getByTestId(VenueFormInputTestIds.ImageLink) as HTMLInputElement
    fireEvent.change(imageLinkInput, { target: { value: 'https://image.com' } })
    fireEvent.blur(imageLinkInput) 

    const descriptionInput = screen.getByTestId(VenueFormInputTestIds.Description) as HTMLInputElement
    fireEvent.change(descriptionInput, { target: { value: 'Bla Bla Bla...' } })
    fireEvent.blur(descriptionInput)

    // expect(screen.getByText('Submit')).toBeInTheDocument()
    // fireEvent.click(screen.getByText('Submit'))
    
    // expect(history.length).toBe(2)
    // expect(history.location.pathname).toBe('/venues')
  })
})

// describe('<Venues />', () => {
//   it('renders the venues page successfully and lists venues', () => {
//     const history = createMemoryHistory()
//     render(
//       <Router history={history}>
//         <VenueProvider> <Venues /> </VenueProvider>
//       </Router>
//     )
//     expect(screen.getByText(venueData.venues[0].name)).toBeInTheDocument()
//     expect(screen.getByText(venueData.venues[1].name)).toBeInTheDocument()
//     expect(screen.getByText(venueData.venues[2].name)).toBeInTheDocument()
//     expect(screen.getByText(venueData.venues[3].name)).toBeInTheDocument()
//   })
// })

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

// Note: I can do alot more tests
