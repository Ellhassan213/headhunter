import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useArtists, useUpdateArtists } from './ArtistContext'
import Axios from 'axios'

const Artists = () => {
  const { artistList } = useArtists()
  const setArtistList = useUpdateArtists()

  useEffect(() => {
    Axios.get('https://headhunter-deploy.herokuapp.com/api/getArtists').then((response) => {
      setArtistList(response.data)
    }).catch((e) => console.log(e))
  }, [])

  return (
    <div className="standard-page">
      {artistList.map((artist, index) =>
        <div key={`${artist.id}${index}`}>
          <i className="ri-footprint-line"></i>
          <Link to={`/artists/${artist.id}`} className="page-link">
              <h4>{artist.name}</h4>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Artists
