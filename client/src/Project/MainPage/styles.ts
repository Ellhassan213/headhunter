import styled from 'styled-components'

export interface SlideI {
  displayFormat: string
}

export const MainPageContainer = styled.div`
  margin: 3rem;
`

export const SlideShow = styled.div`
  max-width: 500px;
  position: relative;
  margin: auto;
  font-family: monospace;
`

// eslint-disable-next-line
export const Slide = styled.div<SlideI>`
  display: ${props => props.displayFormat};
  color: var(--white);
  animation: fade ease 0.5s;

  @keyframes fade {
    from {opacity: .4}
    to {opacity: 1}
  }
`

export const SlideNumber = styled.div`
  color: var(--white);
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  bottom: 0;
`

export const SlideText = styled.div`
  color: var(--white);
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
`

export const SlideImage = styled.img`
  width: 100%;
  border-radius: 5px;
`

export const ArrowPrev = styled.div`
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: var(--white);
  font-weight: bold;
  font-size: 20px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;

  &:hover {
    background-color: rgba(0,0,0,0.8);
  }
`

export const ArrowNext = styled.div`
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: var(--white);
  font-weight: bold;
  font-size: 20px;
  transition: 0.6s ease;
  user-select: none;
  right: 0;
  border-radius: 3px 0 0 3px;
  
  &:hover {
    background-color: rgba(0,0,0,0.8);
  }
`
