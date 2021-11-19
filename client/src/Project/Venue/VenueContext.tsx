import React, {
  useState,
  useEffect,
  useContext,
  ReactNode,
  createContext
} from 'react'
import { VenuesFormInputs } from './models/VenueFormInputs'
import Axios from 'axios'

type Venues = { venueList: VenuesFormInputs[], isDataLoading: boolean }
type SetVenues = (setVenueList: VenuesFormInputs[]) => void
type ContextProviderProps = { children: ReactNode }

const VenueStateContext = createContext<Venues | undefined>(undefined)
const VenueDispatchContext = createContext<SetVenues | undefined>(undefined)

let initialState: VenuesFormInputs[]

const VenueProvider = ({ children }: ContextProviderProps) => {
  const [venueList, setVenueList] = useState(initialState)
  const [isDataLoading, setIsDataLoading] = useState(true)

  useEffect(() => {
    Axios.get('/api/getVenues').then((response) => {
      setVenueList(response.data)
      setIsDataLoading(false)
    }).catch((e) => console.log(e))
  }, [])

  return (
    <VenueStateContext.Provider value={{ venueList, isDataLoading }}>
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
