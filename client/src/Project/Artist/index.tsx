import React from 'react'
import { useArtists } from './ArtistContext'
import { ArtistList } from './styles'
import { PageLink } from '../../shared/utils/BusinessSummaryStyles/styles'
import { FcMusic } from 'react-icons/fc'
import SliderContent from '../../shared/components/AutoSlider/SliderContent'
import PageLoading from '../../shared/components/PageLoading'
import PageError from '../../shared/components/PageError'

const Artists = () => {
  const { error, artistList } = useArtists()

  if (error) return <PageError />
  if (!artistList) return <PageLoading />

  return (
    <ArtistList>
      <div>
        <h1>List of Artists</h1>
        {artistList.map((artist, index) =>
          <div key={`${artist.id}${index}`}>
            <FcMusic />
            <PageLink to={`/artists/${artist.id}`}>
              <h4>{artist.name}</h4>
            </PageLink>
          </div>
        )}
      </div>
      <SliderContent />
    </ArtistList>
  )
}

export default Artists
