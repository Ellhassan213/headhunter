export interface VenuesFormInputs {
  id: string,
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
