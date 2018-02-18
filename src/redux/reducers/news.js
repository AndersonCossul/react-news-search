import * as actions from '../actions/types'

const initialState = {
  news: null,
  error: null,
  loading: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_NEWS_START:
      return fetchNewsStart(state)
    case actions.FETCH_NEWS_SUCCESS:
      return fetchNewSuccess(state, action)
    case actions.FETCH_NEWS_FAIL:
      return fetchNewsFail(state, action)
    default:
      return state
  }
}

const fetchNewsStart = state => {
  return {
    ...state,
    loading: true
  }
}

const fetchNewSuccess = (state, action) => {
  return {
    ...state,
    news: action.news,
    loading: false
  }
}

const fetchNewsFail = (state, action) => {
  return {
    ...state,
    error: action.error,
    loading: false
  }
}

export default reducer