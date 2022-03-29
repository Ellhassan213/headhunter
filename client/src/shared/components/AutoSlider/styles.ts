import styled from 'styled-components'
import { TravelI } from '.'

export const SliderHeader = styled.header`
  overflow: hidden;
`

export const SliderRow = styled.div`
  display: flex;
  overflow: hidden;
`

export const SliderImageGroup = styled.div < TravelI > `
  display: flex;
  animation: ${props => props.direction === 'right' ? 'travelRight' : 'travelLeft'} 60s ease-in-out infinite;

  & img {
    flex-shrink: 0;
    object-fit: cover;
    border-radius: 1rem;
    margin: 0.1rem;
    width: 350px;
    height: 200px;
  }

  @keyframes travelRight {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
    50% {
      transform: translate3d(-1250px, 0, 0);
    }
  }

  @keyframes travelLeft {
    0% {
      transform: translate3d(-1250px, 0, 0);
    }
    100% {
      transform: translate3d(-1250px, 0, 0);
    }
    50% {
      transform: translate3d(0, 0, 0);
    }
  }
`

export const SliderContainer = styled.div`
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 2px 2px var(--blue);
`
