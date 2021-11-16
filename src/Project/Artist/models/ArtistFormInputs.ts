export interface ArtistsFormInputs {
  id: string,
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
