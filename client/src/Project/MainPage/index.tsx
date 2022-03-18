import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { mainPageImageData } from '../index'
import {
  MainPageContainer,
  TextArea,
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
      <TextArea>
        <h1>Head Hunter</h1>
        <h4>
          An all-in-one event platform optimised for connecting you to your audience
          and you to your service providers.
        </h4>
        <h4>One platform, endless potential.</h4>
        <p>
          Headhunter is a platform where events are born. It brings together venues, artists,
          decorators, photographers, caterers and others alike to facilate wedding ceremonies,
          private parties, professional workshops etc.
        </p>
        <p>
          On Headhunter, you can list or discover all the building blocks needed to create a
          banging atmosphere for your clients and personal events.
        </p>
      </TextArea>
      <SlideShow>
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
