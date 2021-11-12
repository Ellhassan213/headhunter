import React, { useState } from 'react'
import artistData from '../../shared/data/artistData'

type ContextProviderProps = { children: React.ReactNode }
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

const ArtistStateContext = React.createContext<Artists | undefined>(undefined)
const ArtistDispatchContext = React.createContext<SetArtists | undefined>(undefined)

const ArtistProvider = ({ children }: ContextProviderProps) => {
  const [artistList, setArtistList] = useState(artistData.artists)

  return (
    <ArtistStateContext.Provider value={{ artistList }}>
      <ArtistDispatchContext.Provider value={setArtistList}>{children}</ArtistDispatchContext.Provider>
    </ArtistStateContext.Provider>
  )
}

const useArtists = () => {
  const context = React.useContext(ArtistStateContext)
  if (context === undefined) {
    throw new Error('useArtists must be used within a ArtistProvider')
  }
  return context
}

const useUpdateArtists = () => {
  const context = React.useContext(ArtistDispatchContext)
  if (context === undefined) {
    throw new Error('useUpdateArtists must be used within a ArtistProvider')
  }
  return context
}

export { ArtistProvider, useArtists, useUpdateArtists }
