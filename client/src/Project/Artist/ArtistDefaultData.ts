import { ArtistsFormInputs } from './models'

export const initialFormInputs: ArtistsFormInputs = {
  id: '',
  name: '',
  city: '',
  county: '',
  genre: '',
  phone: '',
  imageLink: '',
  websiteLink: '',
  instagramLink: '',
  description: ''
}

export let initialState: ArtistsFormInputs[]
