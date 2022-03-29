import React, { useState, useEffect, useContext, createContext } from 'react'
import Axios from 'axios'
import useMountedState from '../../shared/hooks/useMountedState'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { VenuesFormInputs, Venues, SetVenues, ContextProviderProps } from './models'
import { initialFormInputs, initialState } from './VenueDefaultData'

const VenueStatesFunctionsContext = createContext<Venues | undefined>(undefined)
const VenueDispatchContext = createContext<SetVenues | undefined>(undefined)

const VenueProvider = ({ children }: ContextProviderProps) => {
  const history = useHistory()
  const isMounted = useMountedState()
  const [venueFormInputs, setVenueFormInputs] = useState(initialFormInputs)
  const [submitButtonText, setSubmitButtonText] = useState('Submit')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [venueList, setVenueList] = useState(initialState)
  const [error, setError] = useState(false)

  useEffect(() => {
    apiGetVenues()
  }, [isMounted])

  const setInput = (name: string, value: string) => {
    setVenueFormInputs({
      ...venueFormInputs,
      [name]: value
    })
  }

  const apiGetVenues = () => {
    Axios.get('/api/getVenues').then((response) => {
      if (isMounted()) {
        setVenueList(response.data)
        setError(false)
      }
    }).catch(() => {
      setError(true)
    })
  }

  const apiCreateVenue = () => {
    setSubmitButtonText('Submitting...')
    setIsSubmitting(true)
    Axios.post('/api/insertVenue',
      venueFormInputs
    ).then((response) => {
      const insertID = response.data.insertId
      setVenueList([...venueList, { ...venueFormInputs, id: insertID }])
      setSubmitButtonText('Submit')
      setIsSubmitting(false)
      history.push('/venues')
      toast.success(`Successfully created ${venueFormInputs.name}!`)
    }).catch(() => toast.error(`We could'nt create ${venueFormInputs.name} unfortunately!`))
  }

  const apiUpdateVenue = (updateID: string | undefined) => {
    setSubmitButtonText('Submitting...')
    setIsSubmitting(true)
    Axios.put(`/api/updateVenue/${updateID}`, venueFormInputs).then(() => {
      const filteredVenueList = venueList.filter((venue) => venue.id !== updateID)
      const updatedVenueList = [...filteredVenueList, { ...venueFormInputs, id: updateID }]
      setVenueList(updatedVenueList)
      setSubmitButtonText('Submit')
      setIsSubmitting(false)
      history.push('/venues')
      toast.success(`Successfully updated ${venueFormInputs.name}!`)
    }).catch(() => toast.error(`We could'nt update ${venueFormInputs.name} unfortunately!`))
  }

  const apiDeleteVenue = (venue: VenuesFormInputs) => {
    Axios.delete(`/api/deleteVenue/${venue.id}`).then(() => {
      const list = [...venueList].filter(ven => ven.id !== venue.id)
      setVenueList(list)
      history.push('/venues')
      toast.success(`Successfully deleted ${venue.name}!`)
    }).catch(() => toast.error(`We could'nt delete ${venue.name} unfortunately!`))
  }

  return (
    <VenueStatesFunctionsContext.Provider
      value={{
        venueList,
        error,
        venueFormInputs,
        submitButtonText,
        isSubmitting,
        apiDeleteVenue,
        setVenueFormInputs,
        apiCreateVenue,
        apiUpdateVenue,
        setInput
      }}>
      <VenueDispatchContext.Provider value={setVenueList}>{children}</VenueDispatchContext.Provider>
    </VenueStatesFunctionsContext.Provider>
  )
}

const useVenues = () => {
  const context = useContext(VenueStatesFunctionsContext)
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
