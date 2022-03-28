import { ReactNode } from 'react'

export interface VenuesFormInputs {
  id: string | undefined,
  name: string,
  city: string,
  county: string,
  address: string,
  phone: string,
  imageLink: string,
  description: string
}

export enum VenueFormInputTestIds {
  Name = 'venue-name-input',
  City = 'venue-city-input',
  County = 'venue-county-input',
  Address = 'venue-address-input',
  Phone = 'venue-phone-input',
  ImageLink = 'venue-imageLink-input',
  Description = 'venue-description-input'
}

export enum VenueFormInputErrorTestIds {
  Name = 'venue-name-input-error',
  City = 'venue-city-input-error',
  County = 'venue-county-input-error',
  Address = 'venue-address-input-error',
  Phone = 'venue-phone-input-error',
  ImageLink = 'venue-imageLink-input-error',
  Description = 'venue-description-input-error'
}

export interface CreateFormI {
  initialFormInputs: VenuesFormInputs,
  updateID?: string
}

export interface Venue {
  venue: VenuesFormInputs
}

export type BasicFunction = () => void
export type UpdateFunction = (updateID: string | undefined) => void
export type DeleteFunction = (venue: VenuesFormInputs) => void
export type SetFormInputs = (setVenueFormInputs: VenuesFormInputs) => void
export type SetVenues = (setVenueList: VenuesFormInputs[]) => void
export type ContextProviderProps = { children: ReactNode }
export type Venues = {
  venueList: VenuesFormInputs[],
  error: boolean,
  venueFormInputs: VenuesFormInputs,
  submitButtonText: string,
  isSubmitting: boolean,
  apiCreateVenue: BasicFunction,
  apiDeleteVenue: DeleteFunction,
  apiUpdateVenue: UpdateFunction,
  setVenueFormInputs: SetFormInputs
}
