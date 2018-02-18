import * as actions from '../actions'
import axios from 'axios'

export const fetchCountries = () => {
  return dispatch => {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then((response) => {
        const formattedList = response.data.map((country, index) => {
          return {
            id: index,
            name: country.name
          }
        })
        dispatch(fetchCountriesSuccess(formattedList))
      })
      .catch(error => {
        dispatch(fecthCountriesError(error))
      })
  }
}

export const fetchCountriesSuccess = autocomplete_countries => {
  return {
    type: actions.FETCH_COUNTRIES_SUCCESS,
    autocomplete_countries: autocomplete_countries
  }
}

export const fecthCountriesError = error => {
  return {
    type: actions.FETCH_COUNTRIES_FAIL,
    error: error
  }
}