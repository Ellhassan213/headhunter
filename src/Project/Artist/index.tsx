import React from 'react'
import { Link } from 'react-router-dom'
import { useArtists } from './ArtistContext'

const Artists = () => {
  const { artistList } = useArtists()

  return (
    <div className="artists-page">
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
