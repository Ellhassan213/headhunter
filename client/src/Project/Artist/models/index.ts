import { ReactNode } from 'react'

export interface ArtistsFormInputs {
  id: string | undefined,
  name: string,
  city: string,
  county: string,
  genre: string,
  phone: string,
  websiteLink: string,
  instagramLink: string,
  imageLink: string,
  description: string
}

export enum ArtistFormInputTestIds {
  Name = 'artist-name-input',
  City = 'artist-city-input',
  County = 'artist-county-input',
  Genre = 'artist-genre-input',
  Phone = 'artist-phone-input',
  WebsiteLink = 'artist-websiteLink-input',
  InstagramLink = 'artist-instagramLink-input',
  ImageLink = 'artist-imageLink-input',
  Description = 'artist-description-input'
}

export enum ArtistFormInputErrorTestIds {
  Name = 'artist-name-input-error',
  City = 'artist-city-input-error',
  County = 'artist-county-input-error',
  Genre = 'artist-genre-input-error',
  Phone = 'artist-phone-input-error',
  WebsiteLink = 'artist-websiteLink-input-error',
  InstagramLink = 'artist-instagramLink-input-error',
  ImageLink = 'artist-imageLink-input-error',
  Description = 'artist-description-input-error'
}

export interface CreateFormI {
  initialFormInputs: ArtistsFormInputs,
  updateID?: string
}

export interface Artist {
  artist: ArtistsFormInputs
}

export type BasicFunction = () => void
export type UpdateFunction = (updateID: string | undefined) => void
export type DeleteFunction = (artist: ArtistsFormInputs) => void
export type SetFormInputs = (setArtistFormInputs: ArtistsFormInputs) => void
export type SetArtists = (setArtistList: ArtistsFormInputs[]) => void
export type ContextProviderProps = { children: ReactNode }
export type Artists = {
  artistList: ArtistsFormInputs[],
  error: boolean,
  artistFormInputs: ArtistsFormInputs,
  submitButtonText: string,
  isSubmitting: boolean,
  apiCreateArtist: BasicFunction,
  apiDeleteArtist: DeleteFunction,
  apiUpdateArtist: UpdateFunction,
  setArtistFormInputs: SetFormInputs
}
