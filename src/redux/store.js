import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
import countriesReducer from './reducers/countries'
import newsReducer from './reducers/news'

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose

const rootStore = combineReducers({
  countries: countriesReducer,
  news: newsReducer
})

const store = createStore(
  rootStore,
  composeEnhancers(
    applyMiddleware(thunk, multi)
  )
)

export default store