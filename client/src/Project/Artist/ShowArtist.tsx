import React from 'react'
import { useParams } from 'react-router-dom'
import { useArtists } from './ArtistContext'

type Id = { artistId: string }

const ShowArtist = () => {
  const { artistId } = useParams<Id>()
  const { artistList } = useArtists()
  const isArtist = artistList.filter((obj) => obj.id.toString() === artistId)
  const artist = artistList[parseInt(artistId) - 1]
  return (
    <div className='standard-page'>
      {
        isArtist.length > 0
          ? <div className="basic-details-container">
              <div className="show-details">
                <h1 className="monospace">{artist.name}</h1>
                <p className="subtitle">ID: {artist.id}</p>
                <div className="genres"> <span className="genre">{artist.genre}</span> </div>
                <p> <i className="ri-earth-line"></i> {artist.city}, {artist.county}</p>
                <p><i className="ri-phone-fill"></i> {artist.phone}</p>
                <p><i className="ri-links-fill"></i> <a className="page-link" href={artist.websiteLink} rel="noopener noreferrer" target="_blank">{artist.websiteLink}</a></p>
                <p><i className="ri-instagram-line"></i> <a className="page-link" href={artist.instagramLink} rel="noopener noreferrer" target="_blank">{artist.instagramLink}</a></p>
                <div className="description">
                  <p className="description-lead">About me</p>
                  <div className="description-detail">
                    <i className="ri-double-quotes-l"></i> {artist.description} <i className="ri-double-quotes-r"></i>
                  </div>
                </div>
              </div>
              <div className="show-img-container">
                <img src={artist.imageLink} alt="Artist Image" />
              </div>
            </div>
          : <p>Not Found</p>
      }
    </div>
  )
}

export default ShowArtist
