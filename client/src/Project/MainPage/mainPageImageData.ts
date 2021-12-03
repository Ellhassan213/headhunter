import createVenueImage from '../../shared/assets/images/createVenue.png'
import createArtistImage from '../../shared/assets/images/createArtist.png'
import seeArtistsImage from '../../shared/assets/images/seeArtists.png'
import seeVenuesImage from '../../shared/assets/images/seeVenues.png'

const data = {
  images: [
    {
      url: createVenueImage,
      id: '1',
      caption: 'Add Venue',
      pagePath: '/create-venue'
    },
    {
      url: createArtistImage,
      id: '2',
      caption: 'Add Artist',
      pagePath: '/create-artist'
    },
    {
      url: seeArtistsImage,
      id: '3',
      caption: 'Artists',
      pagePath: '/artists'
    },
    {
      url: seeVenuesImage,
      id: '4',
      caption: 'Venues',
      pagePath: '/venues'
    }
  ]
}

export default data
