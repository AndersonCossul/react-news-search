import * as actions from '../actions/actions'

const initialState = {
  autocomplete_countries: [],
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_AUTOCOMPLETE_COUNTRIES_SUCCESS:
      return fetchAutocompleteCountriesSuccess(state, action)
    case actions.FETCH_AUTOCOMPLETE_COUNTRIES_FAIL:
    return fetchAutocompleteCountriesFail(state, action)
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

export default reducer