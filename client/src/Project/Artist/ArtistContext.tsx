import React, {
  useState,
  useEffect,
  useContext,
  createContext
} from 'react'
import Axios from 'axios'
import useMountedState from '../../shared/hooks/useMountedState'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import {
  ArtistsFormInputs,
  Artists,
  SetArtists,
  ContextProviderProps
} from './models'

let initialState: ArtistsFormInputs[]
const initialFormInputs: ArtistsFormInputs = {
  id: '',
  name: '',
  city: '',
  county: '',
  genre: '',
  phone: '',
  imageLink: '',
  websiteLink: '',
  instagramLink: '',
  description: ''
}

const ArtistStatesFunctionsContext = createContext<Artists | undefined>(undefined)
const ArtistDispatchContext = createContext<SetArtists | undefined>(undefined)

const ArtistProvider = ({ children }: ContextProviderProps) => {
  const history = useHistory()
  const isMounted = useMountedState()
  const [artistFormInputs, setArtistFormInputs] = useState(initialFormInputs)
  const [submitButtonText, setSubmitButtonText] = useState('Submit')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [artistList, setArtistList] = useState(initialState)
  const [error, setError] = useState(false)

  useEffect(() => {
    apiGetArtists()
  }, [isMounted])

  const apiGetArtists = () => {
    Axios.get('/api/getArtists').then((response) => {
      if (isMounted()) {
        setArtistList(response.data)
        setError(false)
      }
    }).catch(() => {
      setError(true)
    })
  }

  const apiCreateArtist = () => {
    setSubmitButtonText('Submitting...')
    setIsSubmitting(true)
    Axios.post('/api/insertArtist',
      artistFormInputs
    ).then((response) => {
      const insertID = response.data.insertId
      setArtistList([...artistList, { ...artistFormInputs, id: insertID }])
      setSubmitButtonText('Submit')
      setIsSubmitting(false)
      history.push('/artists')
      toast.success(`Successfully created ${artistFormInputs.name}!`)
    }).catch(() => toast.error(`We could'nt create ${artistFormInputs.name} unfortunately!`))
  }

  const apiUpdateArtist = (updateID: string | undefined) => {
    setSubmitButtonText('Submitting...')
    setIsSubmitting(true)
    Axios.put(`/api/updateArtist/${updateID}`, artistFormInputs).then(() => {
      const filteredArtistList = artistList.filter((artist) => artist.id !== updateID)
      const updatedArtistList = [...filteredArtistList, { ...artistFormInputs, id: updateID }]
      setArtistList(updatedArtistList)
      setSubmitButtonText('Submit')
      setIsSubmitting(false)
      history.push('/artists')
      toast.success(`Successfully updated ${artistFormInputs.name}!`)
    }).catch(() => toast.error(`We could'nt update ${artistFormInputs.name} unfortunately!`))
  }

  const apiDeleteArtist = (artist: ArtistsFormInputs) => {
    Axios.delete(`/api/deleteArtist/${artist.id}`).then(() => {
      const list = [...artistList].filter(artst => artst.id !== artist.id)
      setArtistList(list)
      history.push('/artists')
      toast.success(`Successfully deleted ${artist.name}!`)
    }).catch((e) => toast.error(`We could'nt delete ${artist.name} unfortunately!`, e))
  }

  return (
    <ArtistStatesFunctionsContext.Provider
      value={{
        artistList,
        error,
        artistFormInputs,
        submitButtonText,
        isSubmitting,
        apiDeleteArtist,
        setArtistFormInputs,
        apiCreateArtist,
        apiUpdateArtist
      }}>
      <ArtistDispatchContext.Provider value={setArtistList}>{children}</ArtistDispatchContext.Provider>
    </ArtistStatesFunctionsContext.Provider>
  )
}

const useArtists = () => {
  const context = useContext(ArtistStatesFunctionsContext)
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
