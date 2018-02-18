import * as actions from '../types'
import axios from 'axios'

export const fetchAutocompleteCountries = () => {
  return dispatch => {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then((response) => {
        const formattedList = response.data.map((country, index) => {
          return {
            id: index,
            name: country.name,
            code: country.alpha2Code
          }
        })
        dispatch(fetchAutocompleteCountriesSuccess(formattedList))
      })
      .catch(error => {
        dispatch(fetchAutocompleteCountriesError(error))
      })
  }
}

export const fetchAutocompleteCountriesSuccess = autocomplete_countries => {
  return {
    type: actions.FETCH_AUTOCOMPLETE_COUNTRIES_SUCCESS,
    autocomplete_countries: autocomplete_countries
  }
}

export const fetchAutocompleteCountriesError = error => {
  return {
    type: actions.FETCH_AUTOCOMPLETE_COUNTRIES_FAIL,
    error: error
  }
}

export const setSelectedAutocompleteCountryName = country => {
  return {
    type: actions.SET_SELECTED_AUTOCOMPLETE_COUNTRY,
    country: country
  }
}