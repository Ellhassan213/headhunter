import React from 'react'
import { Link } from 'react-router-dom'

// Note: I think i could create make an Image Link component
// Or perhaps turn this implementation into a Carousel

const venueImage = 'https://github.com/Ellhassan213/ImageMaster/blob/master/VenueImages/HollywoodBowl.jpg?raw=true'
const artistImage = 'https://github.com/Ellhassan213/ImageMaster/blob/master/ArtistImages/SideBar.jpg?raw=true'

const MainPage = () => {
  return (
    <div className="standard-page">
      <h1>Head Hunter</h1>
      <Link className="header-link" to="/create-venue">
        <div className="image-container">
          <img className="main-page-image" src={venueImage} />
          <div className="image-overlay">
            <div className="image-text">Create a venue</div>
          </div>
        </div>
      </Link>
      <Link className="header-link" to="/create-artist">
        <div className="image-container">
          <img className="main-page-image" src={artistImage}/>
          <div className="image-overlay">
             <div className="image-text">Create an artist</div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default MainPage
