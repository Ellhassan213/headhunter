import React from 'react'
import { Link } from 'react-router-dom'

// Note: I think i could create make an Image Link component
// Or perhaps turn this implementation into a Carousel

const MainPage = () => {
  return (
    <div className="main-page">
      <h1>Head Hunter</h1>
      <Link className="header-link" to="/create-venue">
        <div className="image-container">
          <i className="ri-landscape-fill"></i>
          <div className="image-overlay">
            <div className="image-text">Create a venue</div>
          </div>
        </div>
      </Link>
      <Link className="header-link" to="/create-artist">
        <div className="image-container">
          <i className="ri-landscape-line"></i>
          <div className="image-overlay">
             <div className="image-text">Create an artist</div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default MainPage
