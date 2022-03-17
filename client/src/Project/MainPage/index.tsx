import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { mainPageImageData } from '../index'
import {
  MainPageContainer,
  SlideShow,
  Slide,
  SlideNumber,
  SlideText,
  SlideImage,
  ArrowNext,
  ArrowPrev
} from './styles'

interface ImageData {
  id: string,
  url: string,
  caption: string,
  pagePath: string
}

const MainPage = () => {
  const images: ImageData[] = mainPageImageData.images
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
    <MainPageContainer>
      <SlideShow>
        <h1>Head Hunter</h1>
        {images.map((img, index) => {
          return (
            <Slide key={`${img.id}${index}`} displayFormat={index === currentImageIndex ? 'block' : 'none'}>
              <Link to={img.pagePath}>
                <SlideNumber>{img.id} / {images.length}</SlideNumber>
                <SlideImage className="slide-image" src={img.url} alt="Current Image"/>
                <SlideText>{img.caption}</SlideText>
              </Link>
            </Slide>
          )
        })}
        <ArrowPrev onClick={goToPrevious}> &#10094;</ArrowPrev>
        <ArrowNext onClick={goToNext}> &#10095;</ArrowNext>
      </SlideShow>
    </MainPageContainer>
  )
}

export default MainPage
