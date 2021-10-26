import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import artistData from './data/artistData'
import venueData from './data/venueData'

const Context = React.createContext()

const Provider = ({ children }) => {
  const [venueList, setVenueList] = useState([])
  const [artistList, setArtistList] = useState([])

  useEffect(() => {
    setVenueList(venueData.venues)
    setArtistList(artistData.artists)
  }, [])

  return (
    <Context.Provider value={{
      venueList,
      setVenueList,
      artistList,
      setArtistList
    }}>
      {children}
    </Context.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.node.isRequired
}

export { Context, Provider }
