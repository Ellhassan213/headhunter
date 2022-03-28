import React, {
  useState,
  useEffect,
  useContext,
  ReactNode,
  createContext
} from 'react'
import { ArtistsFormInputs } from './models/ArtistFormInputs'
import Axios from 'axios'
import useMountedState from '../../shared/hooks/useMountedState'

type Artists = { artistList: ArtistsFormInputs[], error: boolean }
type SetArtists = (setArtistList: ArtistsFormInputs[]) => void
type ContextProviderProps = { children: ReactNode }

const ArtistStateContext = createContext<Artists | undefined>(undefined)
const ArtistDispatchContext = createContext<SetArtists | undefined>(undefined)

let initialState: ArtistsFormInputs[]

const ArtistProvider = ({ children }: ContextProviderProps) => {
  const isMounted = useMountedState()
  const [artistList, setArtistList] = useState(initialState)
  const [error, setError] = useState(false)

  useEffect(() => {
    getArtists()
  }, [isMounted])

  const getArtists = () => {
    Axios.get('/api/getArtists').then((response) => {
      if (isMounted()) {
        setArtistList(response.data)
        setError(false)
      }
    }).catch((e) => {
      console.log(e)
      setError(true)
    })
  }

  return (
    <ArtistStateContext.Provider value={{ artistList, error }}>
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
