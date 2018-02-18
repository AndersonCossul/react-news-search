import * as actions from '../action/actions'

const initialState = {
  news: null,
  hasError: false,
  isLoading: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer