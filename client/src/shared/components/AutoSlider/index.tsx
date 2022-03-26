import React, { ReactNode } from 'react'
import { SliderHeader, SliderImageGroup, SliderRow } from './styles'

export interface TravelI {
  direction: string;
  children: ReactNode
}

const AutoSlider = ({ direction, children }: TravelI) => {
  return (
    <SliderHeader>
      <SliderRow>
        <SliderImageGroup direction={direction}>
          {children}
        </SliderImageGroup>
      </SliderRow>
    </SliderHeader>
  )
}

export default AutoSlider
