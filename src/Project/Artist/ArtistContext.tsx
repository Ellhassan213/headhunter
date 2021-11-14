import React, {
  useState,
  useEffect,
  useContext,
  ReactNode,
  createContext
} from 'react'
import artistData from '../../shared/data/artistData'

type ArtistsFormInputs = {
  id: string,
  name: string,
  city: string,
  county: string,
  genre: string,
  phone: string,
  imageLink: string,
  websiteLink: string,
  instagramLink: string,
  description: string
}

type Artists = { artistList: ArtistsFormInputs[] }
type SetArtists = (setArtistList: ArtistsFormInputs[]) => void
type ContextProviderProps = { children: ReactNode }

const ArtistStateContext = createContext<Artists | undefined>(undefined)
const ArtistDispatchContext = createContext<SetArtists | undefined>(undefined)

// let initialData: ArtistsFormInputs[]

const ArtistProvider = ({ children }: ContextProviderProps) => {
  const [artistList, setArtistList] = useState(artistData.artists)

  useEffect(() => {
    fetch('artistData.json')
      .then(response => response.json())
      .then((data:ArtistsFormInputs[]) => {
        setArtistList(data)
      })
  }, [])

  return (
    <ArtistStateContext.Provider value={{ artistList }}>
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
