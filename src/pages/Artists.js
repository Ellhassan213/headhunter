import React, { useContext } from 'react'
import { Context } from '../Context'
import { Link } from 'react-router-dom'

const Artists = () => {
  const { artistList } = useContext(Context)

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
