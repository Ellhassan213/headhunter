import React from 'react'
import { Link } from 'react-router-dom'
import { useArtists } from './ArtistContext'

const Artists = () => {
  const { isDataLoading, artistList } = useArtists()

  return (
    <div className="standard-page">
      {
        !isDataLoading
          ? artistList
            ? artistList.map((artist, index) =>
              <div key={`${artist.id}${index}`}>
                <i className="ri-footprint-line"></i>
                <Link to={`/artists/${artist.id}`} className="page-link">
                    <h4>{artist.name}</h4>
                </Link>
              </div>
            )
            : <h3>Seems like there are no artists listed on this site yet</h3>
          : <h3>Fetching data...</h3>
      }
    </div>
  )
}

export default Artists
