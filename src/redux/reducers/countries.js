import * as actions from '../actions/actions'

const initialState = {
  autocomplete_countries: [],
  selected_autocomplete_country_name: null,
  selected_autocomplete_country_code: null,
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_AUTOCOMPLETE_COUNTRIES_SUCCESS:
      return fetchAutocompleteCountriesSuccess(state, action)
    case actions.FETCH_AUTOCOMPLETE_COUNTRIES_FAIL:
      return fetchAutocompleteCountriesFail(state, action)
    case actions.SET_SELECTED_AUTOCOMPLETE_COUNTRY_NAME:
      return setSelectedAutocompleteCountryName(state, action)
    default:
      return state
  }
}

const fetchAutocompleteCountriesSuccess = (state, action) => {
  return {
    ...state,
    autocomplete_countries: action.autocomplete_countries
  }
}

const fetchAutocompleteCountriesFail = (state, action) => {
  return {
    ...state,
    error: action.error
  }
}

const setSelectedAutocompleteCountryName = (state, action) => {
  return {
    ...state,
    selected_autocomplete_country_name: action.country
  }
}

export default reducer