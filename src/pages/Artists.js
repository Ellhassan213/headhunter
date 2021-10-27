import React, { useContext } from 'react'
import { Context } from '../Context'
import { Link } from 'react-router-dom'

const Artists = () => {
  const { artistList } = useContext(Context)

  return (
    // It's still possible to get id/key collisions, good strategy to enforce uniqueness by concatenating with map index param i.e. `${artist.id}${index}`
    <div className="artists-page">
      {artistList.map(artist =>
        <div key={artist.id}>
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
