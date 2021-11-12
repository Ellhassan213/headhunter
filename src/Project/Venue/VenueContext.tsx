import React, { useState } from 'react'
import venueData from '../../shared/data/venueData'

type VenuesFormInputs = {
  id: string,
  name: string,
  city: string,
  county: string,
  address: string,
  phone: string,
  imageLink: string,
  description: string
}
type Venues = { venueList: VenuesFormInputs[] }
type SetVenues = (setVenueList: VenuesFormInputs[]) => void
type ContextProviderProps = { children: React.ReactNode }

const VenueStateContext = React.createContext<Venues | undefined>(undefined)
const VenueDispatchContext = React.createContext<SetVenues | undefined>(undefined)

const VenueProvider = ({ children }: ContextProviderProps) => {
  const [venueList, setVenueList] = useState(venueData.venues)

  return (
    <VenueStateContext.Provider value={{ venueList }}>
      <VenueDispatchContext.Provider value={setVenueList}>{children}</VenueDispatchContext.Provider>
    </VenueStateContext.Provider>
  )
}

const useVenues = () => {
  const context = React.useContext(VenueStateContext)
  if (context === undefined) {
    throw new Error('useVenues must be used within a VenuesProvider')
  }
  return context
}

const useUpdateVenues = () => {
  const context = React.useContext(VenueDispatchContext)
  if (context === undefined) {
    throw new Error('useUpdateVenues must be used within a VenuesProvider')
  }
  return context
}

export { VenueProvider, useVenues, useUpdateVenues }
