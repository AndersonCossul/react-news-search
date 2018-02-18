import * as actions from '../actions/types'

const initialState = {
  selectedAutocompleteCountry: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_SELECTED_AUTOCOMPLETE_COUNTRY:
      return setSelectedAutocompleteCountry(state, action)
    default:
      return state
  }
}

const setSelectedAutocompleteCountry = (state, action) => {
  return {
    ...state,
    selectedAutocompleteCountry: action.country
  }
}

export default reducer