import styled from 'styled-components'

export interface SlideI {
  displayFormat: string
}

export const MainPageContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: auto;
  margin: 5rem 8rem;
  font-family: helvetica, times;;

  @media screen and (max-width: 40em) {
    margin: 2rem;
  }
`

export const TextArea = styled.div`
  line-height: 1.5;

  & h1 {
    font-size: 2.5rem;
  }
  & h4 {
    font-size: 1.5rem;
  }
`

export const SlideShow = styled.div`
  position: relative;
  margin: auto;
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
  position: absolute;
  color: var(--white);
  font-size: 1rem;
  padding: 0.5rem;
  bottom: 0;
`

export const SlideText = styled.div`
  position: absolute;
  color: var(--white);
  font-size: 1rem;
  padding: 0.5rem;
  bottom: 1rem;
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
  margin-top: -1rem;
  padding: 1rem;
  color: var(--white);
  font-weight: bold;
  font-size: 1.5rem;
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
  margin-top: -1rem;
  padding: 1rem;
  color: var(--white);
  font-weight: bold;
  font-size: 1.5rem;
  border-radius: 3px 0 0 3px;
  user-select: none;
  right: 0;
  
  &:hover {
    background-color: rgba(0,0,0,0.8);
  }
`
