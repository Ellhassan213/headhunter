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
      <h1 className='monospace'>Head Hunter</h1>
      <div className='slider'>
        <div className='left'>
          <i className='ri-arrow-left-s-fill' onClick={goToPrevious}></i>
        </div>
        <div className='center'>
          {images.map((img, index) => {
            return (
              <div key={`${img.id}${index}`} className={index === currentImageIndex ? 'imageActive' : 'imageNotActive'}>
                {index === currentImageIndex && (
                    <>
                    <Link to={img.pagePath}>
                      <img className='image' src={img.url} alt='Current Image' />
                      <div className='image-text'>{img.caption}</div>
                    </Link>
                    </>
                )}
              </div>
            )
          })}
        </div>
        <div className='right'>
          <i className='ri-arrow-right-s-fill' onClick={goToNext}></i>
        </div>
      </div>
    </div>
  )
}

export default MainPage
