import React, {
  useState,
  useEffect,
  useContext,
  ReactNode,
  createContext
} from 'react'
import { ArtistsFormInputs } from './models/ArtistFormInputs'
import Axios from 'axios'

type Artists = { artistList: ArtistsFormInputs[], isDataLoading: boolean }
type SetArtists = (setArtistList: ArtistsFormInputs[]) => void
type ContextProviderProps = { children: ReactNode }

const ArtistStateContext = createContext<Artists | undefined>(undefined)
const ArtistDispatchContext = createContext<SetArtists | undefined>(undefined)

let initialState: ArtistsFormInputs[]

const ArtistProvider = ({ children }: ContextProviderProps) => {
  const [artistList, setArtistList] = useState(initialState)
  const [isDataLoading, setIsDataLoading] = useState(true)

  useEffect(() => {
    Axios.get('/api/getArtists').then((response) => {
      setArtistList(response.data)
      setIsDataLoading(false)
    }).catch((e) => console.log(e))
  }, [])

  return (
    <ArtistStateContext.Provider value={{ artistList, isDataLoading }}>
      <ArtistDispatchContext.Provider value={setArtistList}>{children}</ArtistDispatchContext.Provider>
    </ArtistStateContext.Provider>
  )
}

const useArtists = () => {
  const context = useContext(ArtistStateContext)
  if (context === undefined) {
    throw new Error('useArtists must be used within a ArtistProvider')
  }
  return context
}

const useUpdateArtists = () => {
  const context = useContext(ArtistDispatchContext)
  if (context === undefined) {
    throw new Error('useUpdateArtists must be used within a ArtistProvider')
  }
  return context
}

export { ArtistProvider, useArtists, useUpdateArtists }
