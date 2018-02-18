import * as actions from '../types'

export const updateSelectedCountry = country => {
  return {
    type: actions.SET_SELECTED_AUTOCOMPLETE_COUNTRY,
    country: country
  }
}