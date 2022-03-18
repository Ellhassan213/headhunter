import React from 'react'
import { useArtists } from './ArtistContext'
import { ArtistContainer } from './styles'
import { PageLink } from '../../shared/utils/BusinessSummaryStyles/styles'
import { FcMusic } from 'react-icons/fc'

const Artists = () => {
  const { isDataLoading, artistList } = useArtists()

  return (
    <ArtistContainer>
      <h1>List of Artists</h1>
      {
        !isDataLoading
          ? artistList
            ? artistList.map((artist, index) =>
              <div key={`${artist.id}${index}`}>
                <FcMusic />
                <PageLink to={`/artists/${artist.id}`}>
                  <h4>{artist.name}</h4>
                </PageLink>
              </div>
            )
            : <h3>Seems like there are no artists listed on this site yet</h3>
          : <h3>Fetching data...</h3>
      }
    </ArtistContainer>
  )
}

export default Artists
