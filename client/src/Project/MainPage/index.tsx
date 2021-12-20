import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import imageData from './mainPageImageData'

interface ImageData {
  id: string,
  url: string,
  caption: string,
  pagePath: string
}

const MainPage = () => {
  const images: ImageData[] = imageData.images
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentImageIndex(prev => {
      return prev === 0 ? images.length - 1 : currentImageIndex - 1
    })
  }

  const goToNext = () => {
    setCurrentImageIndex(prev => {
      return prev === images.length - 1 ? 0 : currentImageIndex + 1
    })
  }

  return (
    <div className="standard-page">
      <div className="slideshow-container">
        <h1 className='monospace'>Head Hunter</h1>
        {images.map((img, index) => {
          return (
            <div key={`${img.id}${index}`} className={index === currentImageIndex ? 'slideActive fade' : 'slideNotActive fade'}>
              <Link to={img.pagePath}>
                <div className="slide-numbertext">{img.id} / {images.length}</div>
                <img className="slide-image" src={img.url} alt="Current Image"/>
                <div className="slide-text">{img.caption}</div>
              </Link>
            </div>
          )
        })}
        <a className="slide-prev" onClick={goToPrevious}> &#10094;</a>
        <a className="slide-next" onClick={goToNext}> &#10095;</a>
      </div>
    </div>
  )
}

export default MainPage
