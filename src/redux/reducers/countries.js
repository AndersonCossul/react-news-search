import * as actions from '../actions/actions'

const initialState = {
  autocomplete_countries: [],
  selected_autocomplete_country: null,
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_AUTOCOMPLETE_COUNTRIES_SUCCESS:
      return fetchAutocompleteCountriesSuccess(state, action)
    case actions.FETCH_AUTOCOMPLETE_COUNTRIES_FAIL:
      return fetchAutocompleteCountriesFail(state, action)
    case actions.SET_SELECTED_AUTOCOMPLETE_COUNTRY:
      return setSelectedAutocompleteCountry(state, action)
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

const setSelectedAutocompleteCountry = (state, action) => {
  return {
    ...state,
    selected_autocomplete_country: action.country
  }
}

export default reducer