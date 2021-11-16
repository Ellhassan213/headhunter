import React, {
  useState,
  useEffect,
  useContext,
  ReactNode,
  createContext
} from 'react'
import venueData from '../../shared/data/venueData'
import { VenuesFormInputs } from './models/VenueFormInputs'

type Venues = { venueList: VenuesFormInputs[] }
type SetVenues = (setVenueList: VenuesFormInputs[]) => void
type ContextProviderProps = { children: ReactNode }

const VenueStateContext = createContext<Venues | undefined>(undefined)
const VenueDispatchContext = createContext<SetVenues | undefined>(undefined)

const VenueProvider = ({ children }: ContextProviderProps) => {
  const [venueList, setVenueList] = useState(venueData.venues)

  useEffect(() => {
    fetch('venueData.json')
      .then(response => response.json())
      .then(data => setVenueList(data))
  }, [])

  return (
    <VenueStateContext.Provider value={{ venueList }}>
      <VenueDispatchContext.Provider value={setVenueList}>{children}</VenueDispatchContext.Provider>
    </VenueStateContext.Provider>
  )
}

const useVenues = () => {
  const context = useContext(VenueStateContext)
  if (context === undefined) {
    throw new Error('useVenues must be used within a VenuesProvider')
  }
  return context
}

const useUpdateVenues = () => {
  const context = useContext(VenueDispatchContext)
  if (context === undefined) {
    throw new Error('useUpdateVenues must be used within a VenuesProvider')
  }
  return context
}

export { VenueProvider, useVenues, useUpdateVenues }
